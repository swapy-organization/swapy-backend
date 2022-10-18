'use strict';

const { signup, signin, valid, userInfo } = require('../controllers/user.controller');
const bearerAuth = require('../middlewares/bearerAuth');
const { basicAuth } = require('../middlewares/basicAuth');
const { uploadAvatar } = require('../uploadAvatar/uploadAvatar');

const router = require('express').Router();


router.post('/signup', uploadAvatar.single('avatar'), basicAuth, signup);
router.post('/signin', signin);
router.get('/userInfo', bearerAuth, userInfo);

module.exports = router;                                                                                                            