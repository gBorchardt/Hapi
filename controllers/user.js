var User = require('../models/user');

function UserRoute(app) {

    app.route({
        method:'GET',
        path:'/',
        handler:function(request,h) {
    
            return 'Framework hapi.js - mongoose';
        }
    });

    
    app.route({
        method:'GET',
        path:'/user',
        handler:function(request,response) {
            
            const promise = new Promise((resolve, reject) => {
                User.find({})
                .then(function(results) {
                    resolve(results);
                }).catch(function(err) {
                    reject(err.message);
                });
            });
        
            return promise;

        }
    });

    app.route({
        method:'GET',
        path:'/user/{id}',
        handler:function(request,h) {
    
            const promise = new Promise((resolve, reject) => {
               
                const id = request.params.id;

                User.find({ _id: id })
                .then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    reject(err.message);
                });

            });
        
            return promise;

        }
    });
    
    app.route({
        method:'POST',
        path:'/user',
        handler:function(request,h) {

            const promise = new Promise((resolve, reject) => {
               
                var newUser = User(request.payload);
                newUser.save()
                .then(function() {
                    resolve(newUser);
                }).catch(function(err) {
                    reject(err.message);
                });
            
            });
        
        return promise;

        }
    });

    app.route({
        method:'PUT',
        path:'/user/{id}',
        handler:function(request,h) {

            const promise = new Promise((resolve, reject) => {
               
                const id = request.params.id
            
                User.findOneAndUpdate({ _id: id }, request.payload)
                .then(function() {
                    resolve("Ok");
                }).catch(function(err) {
                    reject(err.message);
                });

            });
            
            return promise;
        }
    });

    app.route({
        method:'DELETE',
        path:'/user/{id}',
        handler:function(request,h) {

            const promise = new Promise((resolve, reject) => {
               
                const id = request.params.id;

                User.deleteOne({ _id: id })
                .then(function() {
                    resolve("Ok");
                }).catch(function(err) {
                    reject(err.message);
                });

            });
                
            return promise;
        }
    });
}

module.exports = UserRoute;