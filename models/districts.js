module.exports = (sequelize, DataTypes) => {
      const districts = sequelize.define('districts', {
            division_id: {
                  type: DataTypes.INTEGER,
            },
            name: {
                  type: DataTypes.STRING,
            },
            bn_name: {
                  type: DataTypes.STRING,
            },
            lat: {
                  type: DataTypes.FLOAT,
            },
            lon: {
                  type: DataTypes.FLOAT,
            },
            url: {
                  type: DataTypes.STRING,
            },
      }, {
            timestamps: false
      });

      return districts;
};
