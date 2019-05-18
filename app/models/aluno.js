//No arquivo aluno.js definimos qual é o modelo de conexão que o sequelize deve seguir. Deve ser implementado de acordo com o esquema do banco de dados. Como estamos exportando o objeto db para a aplicação e definimos duas variáveis com instâncias do sequelize, além de associar o modelo ao objeto, não precisamos importar nada neste arquivo. Apenas necessário exportando o modelo pois ele será acessado por outros arquivos dentro da aplicação. O DataTypes é referente ao tipo do dado que o atributo do modelo vai ter.
module.exports = (sequelize, DataTypes) => {
    //A constante AlunoModel é responsável por armazenar a definição do modelo utilizando o sequelize.
    const AlunoModel = sequelize.define('AlunoModel', {
        ALUNOCOD: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ALUNONOME: {
            type: DataTypes.STRING,
            required: true,
            max: 60,
            allowNull: false,
        },
        ALUNOCPF: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false,
        },
        ALUNORG: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false,
        },
        ALUNODATANASCIMENTO: {
            type: DataTypes.DATEONLY,
            required: true,
            max: 8,
            allowNull: false
        },
        ALUNODATACADASTRO: {
            type: DataTypes.DATEONLY,
            timestamps: true
        },
        ALUNOESTADOCIVIL: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOPROFISSAO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOENDERECO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNONUMERO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOBAIRRO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOCOMPLEMENTO: {
            type: DataTypes.STRING,
            max: 20
        },
        ALUNOCEP: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOCIDADE: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOESTADO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOTELFIXO: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOCELULAR: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        ALUNOEMAIL: {
            type: DataTypes.STRING,
            required: true,
            max: 20,
            allowNull: false
        },
        CURSOCOD: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
            references: 'CURSO',
            referencesKey: 'CURSOCOD'
        },
        STATUS: {
            type: DataTypes.TINYINT,
            max: 1,
            allowNull: false,
            defaultValue: 1,
        }
    },
        {
            tableName: 'aluno',
            timestamps: false
        }
    )
    return AlunoModel
}