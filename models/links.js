module.exports = (sequelize, DataTypes) => {
      const links = sequelize.define("links", {
            description: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            important_link: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            created_at: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            updated_at: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },

      }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
      });

      return links;
};
