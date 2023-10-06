const tasksModel = require('../models/tasksModel');

const getAll = async (req,res) => {
    const alunos = await tasksModel.getAll();
    return res.status(200).json(alunos);
};

const createAluno = async(req,res) => {

    const createdAluno = await tasksModel.createAluno(req.body);
    return res.status(201).json(createdAluno);

}

const deleteAluno = async (req,res) => {

    const {id} = req.params;

    await tasksModel.deleteAluno(id);
    return res.status(204).json();
};

const updateAluno = async (req,res) => {

    const {id} = req.params;

    await tasksModel.updateAluno(id, req.body);
    return res.status(204).json();
};


module.exports = {
    getAll,
    createAluno,
    deleteAluno,
    updateAluno,
};