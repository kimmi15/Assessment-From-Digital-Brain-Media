import userModel from '../models/userModel.js'
import { validEmail, validName, validPassword } from '../validation/validations.js';
import jwt from 'jsonwebtoken'

export const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (Object.keys(req.body).length == 0) return res.status(400).send({ msg: 'please provide Data' });

        if (!name) return res.status(400).send({ msg: 'Please provide name' })
        if (!email) return res.status(400).send({ msg: 'Please provide email' })
        if (!password) return res.status(400).send({ msg: 'Please provide password' })

        if (!validName) return res.status(400).send({ msg: 'Please provide valid name' })
        if (!validEmail) return res.status(400).send({ msg: 'Please provide valid email' })
        if (!validPassword) return res.status(400).send({ msg: 'Please provide valid password' })

        const uniquqEmail = await userModel.findOne({ email });

        if (uniquqEmail) return res.status(400).send({ msg: 'Please provide unique email this email is already regester' });

        const data = await userModel.create(req.body);

        return res.status(201).send({ msg: 'user regester successfuly', data })

    } catch (error) { return res.status(500).send({ msg: error }) }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (Object.keys(req.body).length == 0) return res.status(400).send({ msg: 'please provide Data' });

        if (!email) return res.status(400).send({ msg: 'Please provide email' })
        if (!password) return res.status(400).send({ msg: 'Please provide password' })

        const user = await userModel.findOne({ email });

        if (!user) return res.status(400).send({ msg: 'user not regester' })

        if (user.password !== password) return res.status(400).send({ msg: 'invalid password' })

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRIT, { expiresIn: '24h' });

        return res.status(200).send({ msg: 'Login ', token });

    } catch (error) { return res.status(500).send({ msg: error }) }
}