//No arquivo aluno.js definimos qual é o modelo de conexão que o sequelize deve seguir. Deve ser implementado de acordo com o esquema do banco de dados. Como estamos exportando o objeto db para a aplicação e definimos duas variáveis com instâncias do sequelize, além de associar o modelo ao objeto, não precisamos importar nada neste arquivo. Apenas necessário exportando o modelo pois ele será acessado por outros arquivos dentro da aplicação. O DataTypes é referente ao tipo do dado que o atributo do modelo vai ter.
module.exports = (sequelize, DataTypes) => {
    //A constante AlunoModel é responsável por armazenar a definição do modelo utilizando o sequelize.
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