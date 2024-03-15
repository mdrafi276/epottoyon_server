module.exports = (sequelize, Datatypes) => {
      const upzillas = sequelize.define('upzillas', {
            district_id: {
                  type: Datatypes.INTEGER,
            },
            name: {
                  type: Datatypes.STRING,
            },
            bn_name: {
                  type: Datatypes.STRING,
            },
            url: {
                  type: Datatypes.STRING,
            },
      }, {
            timestamps: false,
      })

      return upzillas;
}