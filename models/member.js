// create a member table
module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define('Member', {
        // member id
        id: {
            type: DataTypes.INT,
            autoIncrement: true,
            primaryKey: true,
        }
    });

    return Member;
};