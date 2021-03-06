import {Schema,model}  from 'mongoose';
var ObjectId = require('mongodb').ObjectID;

//MODELAR LOS DATOS QUE TENDRA PRODUCTO
let productoSchema = new Schema(
    {
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    precioUni: { type: Number, required: [true, 'El precio únitario es necesario'] },
    descripcion: { type: String, required: false },
    disponible: { type: Boolean, required: true, default: true },
    categoria: {type: Schema.Types.ObjectId, ref: 'Categoria', required: true}
    }
);

//EXPORTAR EL MODELO PARA SER USADO EN TODO EL PROYECTO
export default model('Producto',productoSchema);