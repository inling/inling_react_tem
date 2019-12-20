const Router = require('koa-router');
const user_controller = require('../controllers/user_controller');

const router = new Router();

router.post('/login', user_controller.login);
router.post('/register', user_controller.register);

module.exports = router;
