import express from 'express';
import jwt from 'jsonwebtoken';
import * as AuthConfig from './auth.config';


export function verifyToken(_token, _res) {
    jwt.verify(_token, AuthConfig.authConfig.privateHashKey, (err, decoded) => {
        if(err && err.message === 'jwt expired') {
            _res.json({ err: err });
        }
    });
}
