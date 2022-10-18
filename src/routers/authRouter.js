const { Router } = require('express');
const router = Router();
const { signin, signup } = require('../controllers/authController');

router.route('/')
    .post(signin)
    
router.route('/signup')
    .post(signup)

module.exports = router;