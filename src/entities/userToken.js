'use strict';
import 'sequelize';
import Models from './../db/models';

export default class UserToken {
    constructor() {}

    findByToken(_token) {
        return Models.UserToken.findOne({
            where: {
                token: _token
            }
        });
    }

    addAccessToken(_userUuid, _token) {
        return Models.UserToken.build({            
            userUuid: _userUuid,
            token: _token
        }).save().then((newToken) => {
            return Models.UserToken.findById(newToken.uuid);
        })
    }
}