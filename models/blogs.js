module.exports = (sequelize, Datatypes) => {
    const blogs = sequelize.define(
        "blogs",
        {
            banner: {
                type: Datatypes.STRING,
            },
            banner_text: {
                type: Datatypes.STRING,
            },
            image: {
                type: Datatypes.STRING,
            },
            is_active: {
                type: Datatypes.BOOLEAN,
            },
            description: {
                type: Datatypes.STRING,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return blogs;
};
