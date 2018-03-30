'use strict';
import 'sequelize';
import Models from './../db/models';

export default class User {
    constructor() {}

    findByNameSecret(_name, _secret) {
        return Models.Users.findOne({
            where: {
                name: _name,
                secret: _secret
            }
        });
    }
}