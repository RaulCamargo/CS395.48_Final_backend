const pgtools = require('pgtools');
const { dbName, dbUser, dbPwd} = require('./configDB');

const config = {
    user: dbUser,
    host: 'localhost',
    port: 5432,
    password: dbPwd
};

// Create db if none exists otherwise connect to existing one.
const createDB = async () =>
{
    try
    {
        await pgtools.createdb(config, dbName);
        console.log(`Created database ${dbName}.`);
    }
    catch (err)
    {
        if (err.name === 'duplicate_database')
        {
            console.log(`Database ${dbName} already exists.`);
            return;
        }
        else
        {
            console.log('createDB error: ', err);
            process.exit(1);
        }
    }
}