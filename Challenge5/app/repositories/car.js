const { Car, User } = require("./../models");

exports.getListCars = ()=>{
    return Car.findAll({
        attributes: {exclude: ['createdBy', 'updatedBy','deletedBy']},
    });
}

exports.getListCarsByType = (type)=>{
    return Car.findAll({ where: { type } });
}

exports.createCar = (payload, userId) => {
    return Car.create({...payload, createdBy: userId});
}

exports.findByPk = (id) => {
    return Car.findByPk(id, {
        include: [{
            model: User,
            as: 'created'
        },
        {
            model: User,
            as: 'updated'
        
        },
        {
            model: User,
            as: 'deleted'
        }],
        attributes: { exclude: ['createdBy','updatedBy','deletedBy']}
    });
}

exports.update = async (id, payload, userId) => {
    return Car.update({...payload, updatedBy: userId}, {
        where: { id },
        returning: true,
        paranoid: false
    });
}

exports.destory = (id) => {
    return Car.destroy({ where: { id } });
}