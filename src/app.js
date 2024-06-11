import express from "express";
import conectarBancoDados from "./config/dbConnection.js";
import routes from "./router/index.js";

const conexao = await conectarBancoDados();

conexao.on("error",(erro)=>{
    console.error(`Conexão falhou: ${erro}`);
})

conexao.once("open", () => {
    console.log("Conectado com banco de dados!");
})

const app = express();
routes(app);


export default app;
