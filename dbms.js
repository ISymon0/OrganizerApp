const mongoose = require('mongoose');
const sbj = require('./subjects');

const uri = 'mongodb+srv://isymonDev:Simone1971@organizerdb.lzytieq.mongodb.net/?retryWrites=true&w=majority';
const collections = ['lun', 'tus', 'wed', 'thu', 'fri', 'sat'];


async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected!');
    }
    catch (error) {
        console.error(error);
    }
}

async function insData(qry, data) {
    let dataObj = {
        $push: { [qry]: data }
    }
    let day = qry.split('_')[1];
    for (let i = 0; i < collections.length; i++) {
        if (day == collections[i]) {
            await sbj[day].updateOne(dataObj).then(console.log('Saved!'));
        }
    }
}

async function findDoc(qry) {
    let day = qry.split('_')[1];
    for (let i = 0; i < collections.length; i++) {
        if (day == collections[i]) {
            let doc = await sbj[day].findOne();
            const vol = doc[qry];
            return vol;
        }
    }
}

async function deleteData(qry, data) {
    let dataObj = {
        $pull: { [qry]: data }
    }
    let day = qry.split('_')[1];
    for (let i = 0; i < collections.length; i++) {
        if (day == collections[i]) {
            await sbj[day].updateOne(dataObj).then(console.log('Saved!'));
        }
    }
}

exports.connect = connect;
exports.insData = insData;
exports.findDoc = findDoc;
exports.deleteData = deleteData;