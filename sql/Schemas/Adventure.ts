import { DataTypes } from 'sequelize'
import { Sequelize } from 'sequelize'

export default function setAdventureModel(db: Sequelize) {
    return db.define('adventure', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    force: {
        type: DataTypes.TEXT,
        defaultValue: '10'
    },
    health: {
        type: DataTypes.TEXT,
        defaultValue: '100'
    },
    points: {
        type: DataTypes.TEXT,
        defaultValue: '0'
    }
})
}
