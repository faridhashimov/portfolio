import Project from '../models/ProjectModel.js'

//Add new project
export const addProject = async (req, res) => {
    const project = new Project(req.body)
    try {
        const newProject = await project.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(404).json(error)
    }
}

//Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(201).json(projects)
    } catch (error) {
        res.status(404).json(error)
    }
}

//Get single project
export const getSingleProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        res.status(201).json(project)
    } catch (error) {
        res.status(404).json(error)
    }
}

//Get single project
export const updatedProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        res.status(201).json(updatedProject)
    } catch (error) {
        res.status(404).json(error)
    }
}

//Delete project
export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.status(201).json('Project has been deleted')
    } catch (error) {
        res.status(404).json(error)
    }
}
