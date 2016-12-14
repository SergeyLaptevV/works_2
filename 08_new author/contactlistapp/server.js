var express = require('express');
var app =express();
var mongojs = require('mongojs');
var db = mongojs('contactauthor', ['contactauthor']);
var bodyParser = require("body-parser");


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/contactauthor', function (req, res){
    console.log("I received a GET request");

    db.contactauthor.find(function(err, docs){
        console.log(docs);
        res.json(docs);


    });


    app.post("/contactauthor", function (req, res){
        console.log(req.body);
        db.contactauthor.insert(req.body, function(err,doc){
            res.json(doc);
        })
    });

    app.delete("/contactauthor/:id", function (req,res){
        var id = req.params.id;
        console.log(id);
        db.contactauthor.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
            res.json(doc);
        })
    });

    app.get("/contactauthor/:id", function(req,res){
        var id = req.params.id;
        console.log(id);
        db.contactauthor.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
           res.json(doc);
        });
    });

    app.put("/contactauthor/:id", function(req,res){
        var id = req.params.id;
        console.log(req.body.name);
        db.contactauthor.findAndModify({query: {_id: mongojs.ObjectId(id)},
            update: {$set: {name: req.body.name, sname: req.body.sname, tname: req.body.tname, date: req.body.date,
                book: req.body.book, genre: req.body.genre, pages: req.body.pages,bookN: req.body.bookN, genreN: req.body.genreN, pagesN: req.body.pagesN}},
            new: true},function(err, doc){
                res.json(doc);
        })
    });

});

    app.listen(3000);
    console.log("Server running on port 3000");

