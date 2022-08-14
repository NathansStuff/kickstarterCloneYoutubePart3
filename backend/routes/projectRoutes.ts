const express = require('express');
const router = express.Router();

const {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
} = require('../controllers/projectControllers');

router.route('/').get(getProjectsHandler).post(createProjectHandler);
router
    .route('/:id')
    .get(getProjectHandler)
    .put(updateProjectHandler)
    .delete(deleteProjectHandler);

module.exports = router;
