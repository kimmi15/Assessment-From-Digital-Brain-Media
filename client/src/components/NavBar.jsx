import React, { useState } from 'react'
import axios from 'axios'

const NavBar = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginFun = async () => {
        try {
            const res = await axios.post(`http://localhost:8989/login`, { email, password },)
            if (res.status == 200) alert(res.data.msg);
            localStorage.setItem('token', res.data.token)
            setPassword('')
            setEmail('')

        } catch (error) {
            alert('Something Wrong!')
            console.log(error)
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-link " onClick={() => { localStorage.clear(); window.history.back() }}>Logout</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* model */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { loginFun() }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar