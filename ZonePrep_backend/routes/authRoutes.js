const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');

const auth = require('../middleware/auth');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({}); 

const registerSchema = Joi.object({
    username : Joi.string().min(3).max(30).required(),
    password : Joi.string().min(8).max(30).required(),
    registration_no: Joi.string().length(8).pattern(/^[0-9]+$/).required(),
    mail : Joi.string().email().required(),
})

const loginSchema = Joi.object({
    registration_no: Joi.string().length(8).pattern(/^[0-9]+$/).required(),
    password : Joi.string().min(8).max(30).required()
})


router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister);
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin);

router.get('/test', auth, (req,res) =>{
    res.send("auth jwt works!")
});

module.exports = router; 