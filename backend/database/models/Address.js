module.exports = (sequelize, dataTypes)=>{

    const Address = sequelize.define(
        'Address',
        {
            id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            postal_code:{
                type: dataTypes.STRING(10),
                allowNull: false,
            },
            street:{
                type: dataTypes.STRING(150),
                allowNull: false,
            },
            house_number:{
                type: dataTypes.STRING(10),
                allowNull: false,
            },
            city:{
                type: dataTypes.STRING(150),
                allowNull: false,
            },
            user_id:{
                type: dataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "addresses",
            timestamps: false,
        }
    );

    Address.associate = (models)=>{
        Address.belongsTo(
            models.User,
            {
                as: "users",
                foreignKey: "user_id",
            }
        )
    };

    return Address;

};