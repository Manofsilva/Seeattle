// create a member table
module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define('Review', {
       
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // creating a relationship between two tables
    Review.associate = function(models){
        Review.belongsTo(models.Attraction, {
            foreignKey: {
                name: 'attractionSite'
                // allowNull: false
            }
        });
    };

    return Review;
};