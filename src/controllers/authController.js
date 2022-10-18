const userCtrl = {};
const { User } = require('../database/models/index');
const data = require('../database/models/index');
/* const { compare } = require('../helpers/handleBcrypt'); */
const { createToken } = require('../helpers/tokenFunctions');
const ROLES = require('../config/constants')

userCtrl.signin = async (req, res) => {
    try {
        const { email, password: textPlainPass } = req.body;
        //console.log("entra");
        const userFind = await User.findOne({
            attributes: ['id', 'name', 'lastname', 'email', 'password'],
            where: {
                email: email.toLowerCase()
            },
        })
        if (userFind) {
            const { password, id, name, lastname } = userFind;
            if (password === textPlainPass) {
                const token = await createToken({ id });

                res.status(201).send({ id, name, lastname, token, email });
            } else {
                res.status(203).send("Error email o password");
            }
        } else {
            res.status(203).send("Error email o password");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno");
    }
};

userCtrl.signup = async (req, res) => {
    try {
        const { email, password, name, lastname } = req.body
        if (email && password && name && lastname) {
            const finduser = await User.findOne({where:{
                email
            }})
            if(!finduser){
                const user = await User.create({
                    email, password, name, lastname
                })
                res.status(201).send(user);
            }
            else{
                res.status(304).send("Correo ya fue registrado");
            }
        }
        else {
            res.status(303).send("Error en los datos enviados");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

userCtrl.getAuth = async (req, res) => {
    try {
        /* const { datatoken } = req;
        const auth = await Person.findOne({
            attributes: ['id', 'name', 'lastname', 'email', 'phone', 'ci'],
            where: {
                id: datatoken.id
            },
            include: {
                model: Administrator,
                include: {
                    model: Rol,

                },
            },
        });
        const { id, name, lastname, email, phone, ci, Administrator: Admin } = auth
        const { id: adminId, Rol: rolAdmin, RolId } = Admin
        const { name: nameRol, description: descriptionRol } = rolAdmin
        const permits = global.rolsGlobal.get(RolId) */
        res.status(200).send();
    } catch (err) {
        console.error(err)
        res.status(500).send(err);
    }
};

module.exports = userCtrl;

