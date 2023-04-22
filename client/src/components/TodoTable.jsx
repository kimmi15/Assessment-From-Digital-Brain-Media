import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoTable = () => {

    const [data, setData] = useState([])


    const todoData = async () => {
        try {
            let res = await axios.get('http://localhost:8989/get-todo-data', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            setData(res.data.todo)
        } catch (error) {
            alert('Somthing Wrong!')
            console.log(error)
        }
    }

    const updateStatus = async (_id, status) => {
        try {
            let res = await axios.post(`http://localhost:8989/update-status?_id=${_id}`, { status }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            alert(res.data.msg)
            todoData();

        } catch (error) {
            alert('Somthing Wrong!')
            console.log(error)
        }
    }
    useEffect(() => {
        todoData()
    }, [])

    return (
        <div>
            {localStorage.getItem('token') ? <>

                <div className="container my-5">
                    {data.map(e => {
                        return (
                            <div className='my-3 mx-3'>
                                <details key={e._id} >
                                    <summary className='text-capitalize fs-5 fw-bold'>
                                        {e.task}
                                    </summary>
                                    <p className='text-capitalize ms-5 fs-6 fw-medium'>{e.discription} </p>
                                    <br />
                                    <div className='col-12 d-flex align-items-center'>
                                        <button type="button" class="btn btn-primary mx-3 my-3">Update</button>
                                        <button type="button" class="btn btn-secondary mx-3 my-3">Delete</button>
                                        <div className='col-2'>
                                            <select class="form-select" defaultValue={e.status || 'selet'} onChange={(event) => { updateStatus(e._id, event.target.value) }} aria-label="Default select example">
                                                <option value="pandding">pandding</option>
                                                <option value="Done">Done</option>
                                                <option value="Complet">Complet</option>
                                            </select>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        )
                    })}


                </div>
            </> : 'no data'}

        </div>
    )
}

export default TodoTable