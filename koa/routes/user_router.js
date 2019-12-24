const Router = require('koa-router');
const user_controller = require('../controllers/user_controller');
const router = new Router();

router.post('/login', user_controller.login);
router.post('/register', user_controller.register);
router.get('/nickname',user_controller.nickname);

module.exports = router;

/**v1.0.0 */
