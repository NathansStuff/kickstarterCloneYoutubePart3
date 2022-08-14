import { Response, Request } from 'express';
const asyncHandler = require('express-async-handler');
import {
    createProject,
    deleteProject,
    getProjectById,
    getProjects,
    updateProject,
} from '../services/projectService';

//@desc Get all projects
//@route GET /api/projects
//@access Public
const getProjectsHandler = asyncHandler(async (req: Request, res: Response) => {
    const projects = await getProjects();

    res.status(200).json(projects);
});

//@desc Create a new project
//@route POST /api/projects
//@access Private
const createProjectHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const createdProject = await createProject(req.body);

        res.status(201).json(createdProject);
    }
);

//@desc Get a project by id
//@route GET /api/projects/:id
//@access Public
const getProjectHandler = asyncHandler(async (req: Request, res: Response) => {
    const project = await getProjectById(req.params.id);

    res.status(200).json(project);
});

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private
const deleteProjectHandler = asyncHandler(
    async (req: Request, res: Response) => {
        await deleteProject(req.params.id);

        res.status(200).json({
            message: `Project ${req.params.id} deleted`,
        });
    }
);

//@desc Update a project by id
//@route PUT /api/projects/:id
//@access Private
const updateProjectHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const project = await updateProject(req.params.id, req.body);

        res.json(project);
    }
);

module.exports = {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
};
