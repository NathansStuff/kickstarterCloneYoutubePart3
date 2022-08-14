import { checkIsValidObjectId } from '../database/db';
import ProjectModel from '../models/projectModel';
import { sanitizeProject } from '../sanitizers/projectSanitizer';
import { IProjectSchema } from '../schema/projectSchema';
import { ProjectType } from '../types/projectTypes';

export async function getProjects(): Promise<ProjectType[]> {
    try {
        const projects = await ProjectModel.find();
        if (!projects) throw new Error('Projects not found');

        return projects;
    } catch (err) {
        throw new Error(`Failed to get projects: ${err.message}`);
    }
}

export async function createProject(
    project: ProjectType
): Promise<ProjectType> {
    const sanitizedProject = sanitizeProject(project);

    try {
        const newProject = await ProjectModel.create(sanitizedProject);
        if (!newProject) throw new Error('Project not created');

        return newProject;
    } catch (err) {
        throw new Error(`Error creating project: ${err.message}`);
    }
}

export async function getProjectById(
    projectId: string
): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);
    try {
        const project = await ProjectModel.findById(projectId);
        if (!project) throw new Error('Project not found');

        return project;
    } catch (err) {
        throw new Error(`Error getting project: ${err.message}`);
    }
}

export async function updateProject(
    projectId: string,
    project: ProjectType
): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);

    const sanitizedProject = sanitizeProject(project);

    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(
            projectId,
            sanitizedProject,
            { new: true }
        );
        if (!updatedProject) throw new Error('Project not found');

        return updatedProject;
    } catch (err) {
        throw new Error(`Error updating project: ${err.message}`);
    }
}

export async function deleteProject(projectId: string): Promise<void> {
    checkIsValidObjectId(projectId);

    try {
        const project = await ProjectModel.findByIdAndDelete(projectId);
        if (!project) throw new Error('Project not found');

        return;
    } catch (err) {
        throw new Error(`Error deleting project: ${err.message}`);
    }
}
