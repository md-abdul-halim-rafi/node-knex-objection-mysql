module.exports = {
    [process.env.NODE_ENV]: {
        client: "mysql",
        connection: {
            host: "localhost",
            user: "root", // replace with your mysql username
            password: "123456", // replace with your mysql password
            database: "objection_crud",
        },
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds/test",
        },
    }
};
