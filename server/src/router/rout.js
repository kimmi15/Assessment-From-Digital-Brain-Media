import express from 'express';
import { login, registration } from '../controllers/user.js';

const router = express.Router();


router.post('/registration', registration);
router.post('/login', login);


router.get('/', (_, res) => res.send({ msg: 'Working' }))


export default router;