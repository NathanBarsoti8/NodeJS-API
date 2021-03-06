module.exports = (sequelize, DataTypes) => {

    const CursoModel = sequelize.define('CursoModel', {
        CURSOCOD: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        CURSONOME: {
            type: DataTypes.STRING,
            required: true,
            max: 50,
            allowNull: false,
        },
        CURSOVALOR: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false,
        },
        STATUS: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        }
    },
        {
            tableName: 'curso',
            timestamps: false
        }
    )
    return CursoModel
}