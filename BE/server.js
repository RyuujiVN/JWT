import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { corsOption } from './src/config/cors.js';
import route from './src/api/v1/routes/index.js';


const app = express();
const port = 3000;

// cors
app.use(cors(corsOption));

// cookie
app.use(cookieParser());


// parse application/json
app.use(bodyParser.json());

// route user
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})