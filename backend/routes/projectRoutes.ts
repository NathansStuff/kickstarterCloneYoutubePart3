import express from 'express'
const router = express.Router();

const {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
} = require('../controllers/projectController');

router.route('/').get(getProjectsHandler).post(createProjectHandler);
router
    .route('/:id')
    .get(getProjectHandler)
    .put(updateProjectHandler)
    .delete(deleteProjectHandler);

module.exports = router;
