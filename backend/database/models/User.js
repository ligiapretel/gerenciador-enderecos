module.exports = (sequelize, dataTypes)=>{

    const User = sequelize.define(
        'User',
        {
            id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name:{
                type: dataTypes.STRING(150),
                allowNull: false,
            },
            email:{
                type: dataTypes.STRING(150),
                allowNull: false,
                unique: true,
            },
        },
        {
            tableName: "users",
            timestamps: false,
        }
    );

    User.associate = (models)=>{
        User.hasMany(
            models.Address,
            {
                as: "addresses",
                foreignKey: "user_id",
            }
        )
    };

    return User;

}