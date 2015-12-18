var express = require('express');
var mongojs = require('mongojs');
var bodyparser = require('body-parser');

var app = express();
var db = mongojs('mesajdb',['mesajdb']);


app.use(express.static(__dirname+ '/public'));
app.use(bodyparser.json());

//ekleme işlemi burada yapılıyor
app.post('/ekleme',function(req,res){
	//console.log(req.body);
	db.mesajdb.insert(req.body,function(err,doc){
		res.json(doc);	
	})

});

//listemele işlemi 
app.get('/ekleme',function(req,res){
	console.log('ekleme');
	db.mesajdb.find(function(err,docs){
		res.json(doc);
	});
});



app.listen(1313);
console.log('Running 1313 port'); 