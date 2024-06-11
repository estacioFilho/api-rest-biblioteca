import mongoose from "mongoose";

 async function conectarBancoDados(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection
}

export default conectarBancoDados;