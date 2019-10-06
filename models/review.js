// create a member table
module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define('Reviews', {
       
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    // creating a relationship between two tables
    Review.associate = function(models){
        Review.belongsTo(models.Attraction, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Review;
};