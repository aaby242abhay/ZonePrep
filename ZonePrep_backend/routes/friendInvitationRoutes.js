const express = require('express');
const router = express.Router();
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers');
const auth = require('../middleware/auth');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({}); 

const postInvitationSchema = Joi.object({
    targetRegistration_no : Joi.string().length(8).pattern(/^[0-9]+$/),
})

router.post('/invite',auth,validator.body(postInvitationSchema), friendInvitationControllers.controllers.postInvite);

module.exports = router;