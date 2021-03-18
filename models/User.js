const { Model } = require("objection");
const knex = require("../db/knex");

Model.knex(knex);

class User extends Model {
    static get tableName() {
        return "users";
    }
}

module.exports = User;
