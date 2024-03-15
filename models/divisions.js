module.exports = (sequelize, DataTypes) => {
      const divisions = sequelize.define('divisions', {
            name: {
                  type: DataTypes.STRING,
            },
            bn_name: {
                  type: DataTypes.STRING,
            },
            url: {
                  type: DataTypes.STRING,
            },
      }, {
            timestamps: false
      });

      return divisions
};