
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

class Person extends Model {}

Person.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize, modelName: 'person' });

module.exports = Person;
