const { ObjectId } = require('mongodb');
const mongoose = require ('mongoose');

const usersSchema = new mongoose.Schema({

    idusuario: { type: String, required: true, unique: true },
    username: { type: String, required: true, default: null },
    vip: { type: Boolean, requiered: true, default: false },
    nivel: { type: Number, required: true, default: 0 },
    exp: { type: Number, required: true, default: 0 },
    marry: { type: String, required: true, default: 'Soltero(a)' },
    rep: { type: Number, required: true, default: 0 },
    pat: { type: Number, required: true, default: 0 },
    hug: { type: Number, required: true, default: 0 },
    sape: { type: Number, required: true, default: 0 },
    color: { type: String, required: true, default: '#607D8B' },
    frase: { type: String, required: true, default: 'No hay frase agregada' },
    foto: { type: String, required: true, default: 'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif' },
    dinero: { type: Number, required: true, default: 0 },
    banco: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true, default: 0 },
    work: { type: Date, required: true, default: Date.now },
    crime: { type: Date, required: true, default: Date.now },
    rob: { type: Date, required: true, default: Date.now },
    daily: { type: Date, required: true, default: Date.now },
    crep: { type: Date, required: true, default: Date.now },
    ck: { type: Number, required: true, default: 0 },

})

const model = mongoose.model('Usuarios', usersSchema);

module.exports = model;

//type: string, number, boolean, buffer, date, array, Schema.Types.ObjectId
//default: fv
