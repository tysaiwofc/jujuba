import { DataTypes } from 'sequelize'
import { Sequelize } from 'sequelize'


export default function setUserModel(db: Sequelize) {
    return db.define('users', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    premium: {
        type: DataTypes.TEXT,
        defaultValue: '{"type": 0, "createdAt": 0, "expiration": 0}'
    },
    blacklist: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    transactions: {
        type: DataTypes.TEXT,
        defaultValue: "[]"
    },
    reputations: {
        type: DataTypes.TEXT,
        defaultValue: "[]"
    },
    achieviments: {
        type: DataTypes.TEXT,
        defaultValue: '[]'
    },
    money: {
        type: DataTypes.TEXT,
        defaultValue: "0"
    },
    partner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    commands: {
        type: DataTypes.TEXT,
        defaultValue: "0"
    },
    flags: {
        type: DataTypes.TEXT,
        defaultValue: '["common"]'
    },
    profileLayout: {
        type: DataTypes.TEXT,
        defaultValue: 'default'
    },
    profileAboutMe: {
        type: DataTypes.TEXT,
        defaultValue: 'Olá, altere seu sobremim utilizando o comando /perfil sobremim'
    }
})
}
