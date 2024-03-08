module.exports = (sequelize, DataTypes) => {
      const users = sequelize.define('users', {
            name: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            phone: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true,
            },
            email: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true,
            },
            password: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            type: {
                  type: DataTypes.ENUM('admin', 'user'),
                  allowNull: false,
            },
            register_for: {
                  type: DataTypes.ENUM(
                        'অ্যাডমিন',
                        'সচিব',
                        'উদ্যোক্তা',
                        'হিসাব সহকারী',
                        'গ্রাম-পুলিশ',
                        'নাগরিক'
                  ),
                  allowNull: false,
            },
      }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
      });

      return users;
};
