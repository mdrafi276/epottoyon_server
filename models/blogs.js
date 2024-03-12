module.exports = (sequelize, Datatypes) => {
      const blogs = sequelize.define('blogs', {
            banner: {
                  type: Datatypes.STRING,
                  // allowNull: false,
            },
            banner_text: {
                  type: Datatypes.STRING,
                  // allowNull: false,
            },
            image: {
                  type: Datatypes.STRING,
                  // allowNull: false,
            },
            is_active: {
                  type: Datatypes.BOOLEAN,
                  allowNull: false,
            },
            description: {
                  type: Datatypes.STRING,
                  allowNull: false,
            }

      }, {
            createdAt: "created_at",
            updatedAt: "updated_at"
      })

      return blogs;
}