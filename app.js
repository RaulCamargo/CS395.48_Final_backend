// Database setup util
const createDB = require('./database/utils/createDB');

// Database instance
const db = require('./database');

// Sync database
const syncDatabase = async () =>
    {
        try
        {
            await db.sync();
            console.log('-----SYNCED to DB-----');
        }
        catch (err)
        {
            console.error('sync error: ', err);
        }

    }

// Import express library and create server.
const express = require('express');

const app = express();

// Import routes
const apiRouter = require('./routes');

// Init express server
const cors = require('cors');

const configureApp = async () => 
    {
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        //ignore favicon requests
        app.get('/favicon.ico', (req, res) => res.status(204));

        // Maybe get rid of?
        app.get('/', (req, res) => res.send('Hello there.'));

        // Mount apiRouter
        app.use('/api', apiRouter);
        
        // Page not found handler
        app.use((err, res, next) =>
        {
            const error = new Error('Not found. Check URL.');
            error.status = 404;
            next(error);
        });

        // Error handling middleware
        app.use((err, req, res, next) =>
        {
            console.error(err);
            console.log(req.originalUrl);
            res.status(err.status || 500).send(err.message || 'Internal server error.');
        });
    };

const bootApp = async () => 
    {
        // Create db if it does not exist
        await createDB();

        // Create tables
        await syncDatabase();

        // Define routes & middleware
        await configureApp();
    };

// PROGRAM STARTS

bootApp();

const PORT = 5001;

app.listen(PORT, console.log(`Server started port ${PORT}`));