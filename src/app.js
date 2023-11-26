const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');
const uploadsRouter = require('./routes/uploads');

dotEnv.config();

const app  = express();
const port = process.env.PORT || 8080
const moviesPath  = '/api/movies'
const actorsPath  = '/api/actors'
const uploadsPath = '/api/uploads'

// General Exceptions
process.on('uncaughtException', (err) => {
    console.log(`err: ${err.message}`);
})

// MiddleWares
app.use( express.json() );
app.use( cors());

//Fileupload
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true
}));

// Routers
app.use(moviesPath, moviesRouter);
app.use(actorsPath, actorsRouter);
app.use(uploadsPath, uploadsRouter);

// Server config
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})