import express from 'express';
import livros from './livroRouter.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.statu(200).send("Cruso de node"));
    app.use(express.json(), livros);

};

export default routes;