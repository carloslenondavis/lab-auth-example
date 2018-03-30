import express from 'express';
import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import * as AuthInterceptor from './auth.interceptor';
import UserToken from './../entities/userToken';

const middleware = express();

passport.use(new BearerStrategy((token, done) => {
    let userTokenEnt = new UserToken();
    userTokenEnt.findByToken(token).then((userToken) => {
        if(userToken) {            
            let user = { token: userToken.token };
            return done(null, user, { scope: 'all' });
        } else {
            return done(null, false);
        }
    }, (err) => {
        return done(err);
    })
}));

middleware.use(passport.initialize());

middleware.use('/lab/api/*', passport.authenticate('bearer', { 
    authInfo: true, 
    session: false
 }),
 (req, res, next) => {        
    AuthInterceptor.verifyToken(req.user.token, res);
    next();       
});

export default middleware;