// create an attraction table
module.exports = function(sequelize, DataTypes) {
    var Attraction = sequelize.define('Attraction', {
        // create an attraction log
      
        attractionSite: {
                type: DataTypes.STRING,
                allowNull: false
        }

    });

    // creating the relationship before joining the two tables
    Attraction.asssociate = function(models){
        Attraction.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return Attraction;
};