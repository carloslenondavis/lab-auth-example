import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from './../../entities/user';
import UserToken from './../../entities/userToken';
import { authConfig } from './../../security/auth.config';

const authRoutes = express();

authRoutes.post('/lab/auth/signin', (req, res, next) => {
    let userEnt = new User();

    let name = req.body.name;
    let secret = req.body.secret;

    userEnt.findByNameSecret(name, secret).then((user) => {        
        if(user) {            
            let token = jwt.sign({ uuid: user.uuid }, authConfig.privateHashKey, {
                expiresIn: 60
            });

            let userTokenEnt = new UserToken();

            userTokenEnt.addAccessToken(user.uuid, token).then((newToken) => {
                res.status(200).json({
                    user: user,
                    token: newToken.token
                });
            }, (err) => {
                res.status(401).json({error: "An Error Occur"});                
            })            
        } else {
            res.status(404).json({error: "User not registered"});    
        }        
    }, (err) => {
        res.status(401).json({error: "An Error Occur"});
    });    
})

export default authRoutes;