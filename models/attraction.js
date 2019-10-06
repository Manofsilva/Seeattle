// create an attraction table
module.exports = function(sequelize, DataTypes) {
    var Attraction = sequelize.define('Attraction', {
        // create an attraction log
        // attractionId: {
        //         type: DataTypes.INTEGER,
        //         autoIncrement: true,
        //         primaryKey: true
        // },
        attractionSite: {
                type: DataTypes.STRING,
                allowNull: false
        }

    });

    return Attraction;
}