module.exports = {
    test: {
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
    },
    development: {
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
            directory: __dirname + "/db/seeds/development",
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds/production",
        },
    },
};
