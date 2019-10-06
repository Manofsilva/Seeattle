// create a member table
module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define('Reviews', {
        // member id
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        // }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Review;
};