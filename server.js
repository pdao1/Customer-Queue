const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const mongoose = require('mongoose');
const CustomerQueue = require('./models/CustomerQueue');
const { MongoClient, ServerApiVersion } = require('mongodb');


// Render Html File
// Branch selection page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

mongoose.connect(`mongodb+srv://fhb:phung123@fhbdev.c3d6xha.mongodb.net/FHBDev`)

// Branch Routings

app.get('/locations/00177', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00177/index.html'))
})

app.get('/locations/00200', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00200/index.html'))
})

app.get('/locations/00300', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00300/index.html'))
})

app.get('/locations/00350', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00300/index.html'))
})

app.get('/locations/00400', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00400/index.html'))
})

app.get('/locations/00500', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00500/index.html'))
})

app.get('/locations/00700', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00700/index.html'))
})

app.get('/locations/00900', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/00900/index.html'))
})

app.get('/locations/01000', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/01000/index.html'))
})

app.get('/locations/01200', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/01200/index.html'))
})

app.get('/locations/01325', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/01325/index.html'))
})

app.get('/locations/01700', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/01700/index.html'))
})

app.get('/locations/02000', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02000/index.html'))
})

app.get('/locations/02050', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02050/index.html'))
})

app.get('/locations/02100', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02100/index.html'))
})

app.get('/locations/02200', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02200/index.html'))
})

app.get('/locations/02300', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02300/index.html'))
})

app.get('/locations/02400', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02400/index.html'))
})

app.get('/locations/02600', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02600/index.html'))
})

app.get('/locations/02700', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02700/index.html'))
})

app.get('/locations/02800', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/02800/index.html'))
})

app.get('/locations/03000', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03000/index.html'))
})

app.get('/locations/03100', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03100/index.html'))
})

app.get('/locations/03200', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03200/index.html'))
})

app.get('/locations/03500', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03500/index.html'))
})

app.get('/locations/03600', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03600/index.html'))
})

app.get('/locations/03800', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03800/index.html'))
})

app.get('/locations/03900', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/03900/index.html'))
})

app.get('/locations/04000', function(req,res) {
	res.sendFile(path.join(__dirname, 'templates/locations/04000/index.html'))
})
app.listen(port, () => {
  // Code.....
})


// Form Submission Route
app.post('/submit', async (req, res) => {

	var formData = req.body;
	var timestamp = new Date().toLocaleString()
	formData.timestamp = timestamp;
	formData.status = status;
	var fullname = req.body.FirstName + ' ' + req.body.LastName
	var serviceOptions = document.getElementsByName("services");
	var selected = [];

	for (var i = 0; i < serviceOptions.length; i++) {
  if (serviceOptions[i].checked) {
    selected.push(serviceOptions[i].value);
  }
}

console.log("Selected checkboxes: " + selected.join(", "));

	const AddToQueue = new CustomerQueue({
	location: formData.locationId,
	name: formData.fullname,
	services: formData.selected,
	time: formData.timestamp,
	});

	try {
		await AddToQueue.save();
		res.redirect('/confirmation');
	} catch (err) {
		res.status(400).send(err);
	}
});