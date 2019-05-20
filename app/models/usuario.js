module.exports = (sequelize, DataTypes) => {

    const UsuarioModel = sequelize.define('UsuarioModel', {
        USUARIOCOD: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        USUARIOLOGIN: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false,
        },
        USUARIOSENHA: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false,
        },
        USUARIOPERFIL: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        },
        STATUS: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        }
    },
        {
            tableName: 'usuario',
            timestamps: false
        }
    )
    return UsuarioModel
}