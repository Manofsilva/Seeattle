// create a member table
module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define('Members', {
        // member id
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Member;
};