const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');

const app = express();

mongoose.connect('mongodb+srv://pedro:1234@cluster0-6147r.mongodb.net/devmaps', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parametros

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: requset.params (Identificar um reculso na akteração ou remoção)
// Body: request.body (conteudo inteiro em forma de JSON no qual será enviado ou alterado)

// MongoDB (Não-Relacional)


app.listen(3333);
