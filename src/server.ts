import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { body } from "express-validator";
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';
import { handleInputErrors } from './modules/middleware';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//
app.get('/', (req, res) => {
    res.json({message: 'hello'});
});

// API Routes
app.use('/api', protect, router);

// Sign-Up Sign-In
app.post('/user',
    body('username').exists().isString(),
    body('password').exists().isString(),
    handleInputErrors,
    createNewUser);

app.post('/signin',
    body('username').exists().isString(),
    body('password').exists().isString(),
    handleInputErrors,
    signin);

// User Error Handler
app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({message: "Not authorized"});
    } else {
        res.status(500).json({message: "Server Error"});
    };
})

export default app;
