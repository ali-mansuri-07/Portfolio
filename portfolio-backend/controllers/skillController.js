// controllers/skillController.js
const Skill = require('../models/Skills');

// Controller to get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching skills', error: err.message });
    }
};

// Controller to add a new skill
const addSkill = async (req, res) => {
    const { name, imageUrl } = req.body;

    const newSkill = new Skill({
        name,
        imageUrl,
    });

    try {
        const savedSkill = await newSkill.save();
        res.status(201).json(savedSkill);
    } catch (err) {
        res.status(400).json({ message: 'Error adding skill', error: err.message });
    }
};

// Controller to delete a skill by ID
const deleteSkill = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json({ message: 'Skill deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting skill', error: err.message });
    }
};

module.exports = {
    getAllSkills,
    addSkill,
    deleteSkill,
};
