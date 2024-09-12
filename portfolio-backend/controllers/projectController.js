// controllers/projectController.js

const Project = require('../models/Project');

// Controller to get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to add a new project
const addProject = async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        link: req.body.link
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to update a project by ID
const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        project.name = req.body.name || project.name;
        project.description = req.body.description || project.description;
        project.imageUrl = req.body.imageUrl || project.imageUrl;
        project.link = req.body.link || project.link;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a skill by ID
const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting project', error: err.message });
    }
};

module.exports = {
    getAllProjects,
    addProject,
    updateProject,
    deleteProject
};
