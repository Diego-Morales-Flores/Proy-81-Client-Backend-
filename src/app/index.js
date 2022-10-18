const express = require('express');
const app = express();
const { sequelize } = require('../database/models/index');
/* const { updateRolGlobal } = require('../helpers/rolesGlobal') */
const cors = require('cors')
// Setting
const PORT = process.env.SERVER_PORT || 4000;

// Middleware
// Para poder rellenar el req.body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));// averiguar

// Rutas
app.use('/api', require('../routers'));

// Variables locales

/* global.rolsGlobal= new Map(); */

// Arrancamos el servidor
app.listen(PORT, function () {
    sequelize.sync(/* { alter: true } */ /* { force: true } */ ).then(() => {
    //sequelize.authenticate().then(() => {
        console.log('\x1b[36m%s\x1b[0m',"Conexión con la DB correctamente!");
        console.log("\x1b[32m",`El servidor arrancó correctamente en http://localhost:${PORT}`)
        console.log("\x1b[0m","...")
        /* updateRolGlobal().then(()=>{
            console.log("\x1b[0m","...")
        }) */
        
    })
});