import express from 'express';
import router from './router';
import morgan from 'morgan';

const app = express();

// Morgan middleware - req logs - global for the app
// every request for this app will use this middleware
// before going to corresponding path handler
app.use(morgan('dev'));

// Express json middleware
// allows client to say json
app.use(express.json());

// Express urlencoded middleware
// helps decode query strings in urls
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log("hello from express");
    res.status(200);
        // 200 = ok
        // 400 - user errors
        // 500 - server errors
    res.json({message: 'hello'});
})

app.use('/api', router);

export default app;
