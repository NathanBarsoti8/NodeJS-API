module.exports = (sequelize, DataTypes) => {
    
    const FuncionarioModel = sequelize.define('FuncionarioModel', {
        FUNCCOD: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        FUNCNOME: {
            type: DataTypes.STRING,
            required: true,
            max: 60,
            allowNull: false
        },
        FUNCFUNCAO: {
            type: DataTypes.STRING,
            required: true,
            max: 30,
            allowNull: false
        },
        FUNCDATANASCIMENTO: {
            type: DataTypes.DATEONLY,
            required: true,
            max: 8,
            allowNull: false
        },
        FUNCESTADOCIVIL: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCCPF: {
            type: DataTypes.STRING,
            required: true,
            max: 18,
            allowNull: false
        },
        FUNCRG: {
            type: DataTypes.STRING,
            required: true,
            max: 15,
            allowNull: false
        },
        FUNCCTPS: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCTELEFONE: {
            type: DataTypes.STRING,
            max: 20
        },
        FUNCCELULAR: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCCEP: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCENDERECO: {
            type: DataTypes.STRING,
            required: true,
            max: 100,
            allowNull: false
        },
        FUNCNUMERO: {
            type: DataTypes.STRING,
            required: true,
            max: 4,
            allowNull: false
        },
        FUNCCOMPLEMENTO: {
            type: DataTypes.STRING,
            max: 20
        },
        FUNCBAIRRO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCCIDADE: {
            type: DataTypes.STRING,
            required: true,
            max: 30,
            allowNull: false
        },
        FUNCESTADO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCEMAIL: {
            type: DataTypes.STRING,
            required: true,
            max: 100,
            allowNull: false
        },
        FUNCSALARIO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        FUNCDATACADASTRO: {
            type: DataTypes.DATEONLY,
            timestamps: true
        },
        STATUS: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        }
    },
        {
            tableName: 'FUNCIONARIO',
            timestamps: false
        }
    )
    return FuncionarioModel
}