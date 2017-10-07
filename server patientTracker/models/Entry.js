const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    doctorId: {
        type: String,
        required: [true, 'DoctorId is required']
    },
    patientName: {
        type: String,
        required: [true, 'DoctorId is required']
    },
    diseases: {
        type: String,
        required: [true, 'Diseases info is required']
    },
    medicationProvided: {
        type: String,
        required: [true, 'Medication Details are required']
    },
    cost: {
        type: String,
        required: [true, 'Cost is required']
    }
}, {timestamps: true});

const Entry = mongoose.model('entry', EntrySchema);

module.exports = Entry;