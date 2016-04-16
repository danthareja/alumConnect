var fieldRouter = require('express').Router();
var fieldController = require('../controllers/fieldController');

fieldRouter.route('/')
  .get(fieldController.fetchFields)
  .post(fieldController.createField);

fieldRouter.route('/field/:id')
  .post(fieldController.modifyField)
  .delete(fieldController.deleteField);

module.exports = fieldRouter;