const validateFieldTitle = (req, res, next) => {

    const {body} = req;

    if (body.email == undefined) {
        return res.status(400).json({message: 'O email é requerido'});
    }

    if (body.email == '') {
        return res.status(400).json({message: 'O email não pode ser vazio'});
    }

    next();
};

const validateFieldStatus = (req, res, next) => {

    const {body} = req;

    if (body.nome == undefined) {
        return res.status(400).json({message: 'O nome é requerido'});
    }

    if (body.nome == '') {
        return res.status(400).json({message: 'O campo nome não pode ser vazio'});
    }

    next();
};


module.exports = {
    validateFieldTitle,
    validateFieldStatus,
}