const http = require('http');
const express = require("express");
const mongoose = require('mongoose');
const sbj = require('./subjects');
const path = require('path');
const ejs = require('ejs');
const db = require('./dbms');
const { query } = require('express');
const router = express.Router();
const app = express();
const port = 8000;

db.connect();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/public', express.static('public'));
app.use(express.static('public'));

app.get('/modal/:id', (req, res) => {
    let qry = req.params.id;
    let promArray = db.findDoc(qry);
    promArray.then(function (result) {
        tmpArray = result;
        const keys = Object.keys(result);
        const arrayVol = [];
        keys.forEach((key, index) => {
            arrayVol.push(result[key]);
        })
        const volObj = {
            vol: arrayVol,
            queryString: qry
        }
        res.render('modal.ejs', { volObj });
    });
});

app.post('/modal/:id/:data', (req, res) => {
    let data = req.params.data;
    let qry = req.params.id;
    //let qry = data0.split('?')[0];
    //let data = data0.split('?')[1];
    db.insData(qry, data).then(() => {
        let promArray = db.findDoc(qry);
        promArray.then(function (result) {
            tmpArray = result;
            const keys = Object.keys(result);
            const arrayVol = [];
            keys.forEach((key, index) => {
                arrayVol.push(result[key]);
            })
            const volObj = {
                vol: arrayVol,
                queryString: qry
            }
            console.log(volObj.queryString);
            res.render('modal.ejs', { volObj });
        });
    })
});

app.post('/delete/:id/:data', (req, res) => {
    let qry = req.params.id;
    let data = req.params.data;;
    db.deleteData(qry, data).then(() => {
        let promArray = db.findDoc(qry);
        promArray.then(function (result) {
            tmpArray = result;
            const keys = Object.keys(result);
            const arrayVol = [];
            keys.forEach((key, index) => {
                arrayVol.push(result[key]);
            })
            const volObj = {
                vol: arrayVol,
                queryString: qry
            }
            console.log(data);
            res.render('modal.ejs', { volObj });
        })
    })
});

const server = http.createServer(app);

server.listen(port, () => console.log("The server had started on the port " + port));
