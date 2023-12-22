const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

// Define your routes here
router.get('/', apiController.getAllApis);
router.get('/:id', apiController.getApi);
router.post('/', apiController.createApi);
router.put('/:id', apiController.updateApi);
router.delete('/:id', apiController.deleteApi);

module.exports = router;
