import express from 'express';
import { protect } from '../models/authMiddleware';
const router = express.Router();

const {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
} = require('../controllers/projectController');

router.route('/').get(getProjectsHandler).post(protect, createProjectHandler);
router
    .route('/:id')
    .get(getProjectHandler)
    .put(protect, updateProjectHandler)
    .delete(protect, deleteProjectHandler);

module.exports = router;
