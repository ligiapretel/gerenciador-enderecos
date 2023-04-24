const express = require("express");
const app = express();
const port = 3333;
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',router);

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});