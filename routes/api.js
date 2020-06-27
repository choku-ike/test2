var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* API of controling employees \\d+ → 1桁以上の数字 */
router.get('/employees/', controllers.api_employee_controller.index);
router.get('/employees/:id(\\d+)', controllers.api_employee_controller.show);
router.post('/employees/', controllers.api_employee_controller.create);
router.put('/employees/:id(\\d+)', controllers.api_employee_controller.update);
router.delete('/employees/:id(\\d+)', controllers.api_employee_controller.destroy);

module.exports = router;