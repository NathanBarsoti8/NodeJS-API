module.exports = (sequelize, DataTypes) => {

    const PagamentoModel = sequelize.define('PagamentoModel', {
        PGTOCOD: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        PGTOVALOR: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        PGTODATA: {
            type: DataTypes.DATEONLY,
            required: true,
            max: 8,
            allowNull: false
        },
        ALUNOCOD_PGTO: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
            references: 'ALUNO',
            referencesKey: 'ALUNOCOD'
        },
        STATUS: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        }
    },
        {
            tableName: 'pagamento',
            timestamps: false
        }
    )
    return PagamentoModel
}