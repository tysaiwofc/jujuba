import { DataTypes } from 'sequelize'
import { Sequelize } from 'sequelize'


export default function setGuildModel(db: Sequelize) {
    return db.define('guilds', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },

    language: {
        type: DataTypes.TEXT,
        defaultValue: "pt-BR"
    }
    
})
}
