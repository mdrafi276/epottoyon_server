module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        "users",
        {
            type: {
                type: DataTypes.ENUM("admin", "user"),
            },
            name: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.BOOLEAN,
            },
            phone: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            union_id: {
                type: DataTypes.INTEGER,
            },
            register_for: {
                type: DataTypes.ENUM(
                    "সচিব",
                    "চেয়ারম্যান",
                    "উদ্যোক্তা",
                    "হিসাব সহকারী",
                    "গ্রাম-পুলিশ",
                    "নাগরিক"
                ),
            },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return users;
};
