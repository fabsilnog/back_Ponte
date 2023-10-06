const connection = require('./connection');

const getAll = async (req,res) => {
    const [alunos] = await connection.execute('SELECT * FROM usuario' );
    return alunos;
};

const createAluno = async(task) => {

    const{ email, nome, instituicao, polo, curso, ano_de_ingresso, calouro_ou_veterano, bio, link_foto_perfil } = task;

    const query = 'INSERT INTO usuario(email, nome, instituicao, polo, curso, ano_de_ingresso, calouro_ou_veterano, bio, link_foto_perfil) VALUES (?,?,?,?,?,?,?,?,?)';
    const createdAluno = await connection.execute(query, [email, nome, instituicao, polo, curso, ano_de_ingresso, calouro_ou_veterano, bio, link_foto_perfil]); //(query, [title,'Pendente',dateUTC]);
    return {insertId: createdAluno.insertId};

};

const deleteAluno = async (Alunoid) => {
    const removedAluno = await connection.execute('DELETE FROM usuario WHERE Alunoid = ?', [Alunoid]);
    return removedAluno;
};

const updateAluno = async (id, task) => {
    const{ email, nome, instituicao, polo, curso, ano_de_ingresso, calouro_ou_veterano, bio, link_foto_perfil } = task;
    
    const query = 'UPDATE usuario SET email = ?, nome = ?, instituicao = ?, polo = ?, curso = ?, ano_de_ingresso = ?, calouro_ou_veterano = ?, bio = ?, link_foto_perfil = ? WHERE Alunoid = ?';

    const [updatedAluno] = await connection.execute(query, [email, nome, instituicao, polo, curso, ano_de_ingresso, calouro_ou_veterano, bio, link_foto_perfil, id]);
    return updatedAluno;

};


module.exports = {
    getAll,
    createAluno,
    deleteAluno,
    updateAluno,

};