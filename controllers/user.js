var User = require('../models/user');

function UserRoute(app) {

    app.route({
        method:'GET',
        path:'/',
        handler:function(request,h) {
    
            return'Framework hapi.js - mongoose';
        }
    });

    app.route({
        method:'GET',
        path:'/user',
        handler:function(request,h) {
            
            // User.find({})
            // .then(function(results) {
            //     res.send(results);
            // }).catch(function(err) {
            //     res.status(400).send(err.message);
            // });
        }
    });

    app.route({
        method:'GET',
        path:'/user/:id',
        handler:function(request,h) {
    
            // const id = req.params.id;

            // User.find({ _id: id })
            // .then(function(result) {
            //     res.send(result);
            // }).catch(function(err) {
            //     res.status(400).send(err.message);
            // });
        }
    });
    
    app.route({
        method:'POST',
        path:'/user',
        handler:function(request,h) {

            // var newUser = User(req.body);
            // newUser.save()
            // .then(function() {
            //     res.status(201).send(newUser);
            // }).catch(function(err) {
            //     res.status(422).send(err.message);
            // });
        }
    });

    app.route({
        method:'PUT',
        path:'/user/:id',
        handler:function(request,h) {

            // const id = req.params.id
        
            // User.findOneAndUpdate({ _id: id }, req.body)
            // .then(function() {
            //     res.sendStatus(200);
            // }).catch(function(err) {
            //     res.status(422).send(err.message);
            // });
        }
    });

    app.route({
        method:'DELETE',
        path:'/user/:id',
        handler:function(request,h) {

            // const id = req.params.id;

            // User.deleteOne({ _id: id })
            // .then(function() {
            //     res.sendStatus(204);
            // }).catch(function(err) {
            //     res.status(400).send(err.message);
            // });
        }
    });
}

module.exports = UserRoute;