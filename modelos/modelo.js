import mongoose from 'mongoose'

//definir el esquema de persona
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre: {
        type: String,
        required: "Ingrese nombre"
    },
    
    generos: {
        type: String,
        required: "Ingrese genero"
    },
    
    estudio: {
        type: String
    },
    episodios:{
        type: String,
        required: "Ingrese numero de episodios"
    }

})

export default PersonaSchema