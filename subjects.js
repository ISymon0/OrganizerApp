const mongoose = require('mongoose');

const mondaySchema = new mongoose.Schema({
    ita_lun: Array,
    sci_lun: Array,
    start_lun: Array,
    fis_lun: Array
});

const monday = mongoose.model('monday', mondaySchema);

const tuesdaySchema = new mongoose.Schema({
    mat_tus: Array,
    sci_tus: Array,
    start_tus: Array,
    fis_tus: Array,
    ing_tus: Array
});

const tuesday = mongoose.model('tueday', tuesdaySchema);

const wednesdaySchema = new mongoose.Schema({
    irc_wed: Array,
    sci_wed: Array,
    inf_wed: Array,
    stfil_wed: Array,
    ing_wed: Array
});

const wednesday = mongoose.model('wednesday', wednesdaySchema);

const thursdaySchema = new mongoose.Schema({
    fis_thu: Array,
    mat_thu: Array,
    inf_thu: Array,
    stfil_thu: Array,
    ing_thu: Array
});

const thursday = mongoose.model('thurday', thursdaySchema);

const fridaySchema = new mongoose.Schema({
    smot_fri: Array,
    sci_fri: Array,
    mat_fri: Array,
    ita_fri: Array
});

const friday = mongoose.model('friday', fridaySchema);

const saturdaySchema = new mongoose.Schema({
    ita_sat: Array,
    sci_sat: Array,
    stfil_sat: Array,
    smot_sat: Array
});

const saturday = mongoose.model('saturday', saturdaySchema);

module.exports.lun = monday;
module.exports.tus = tuesday;
module.exports.wed = wednesday;
module.exports.thu = thursday;
module.exports.fri = friday;
module.exports.sat = saturday;