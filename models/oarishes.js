module.exports = (sequelize, DataTypes) => {
    const oarishes = sequelize.define(
        "oarishes",
        {
            application_id: {
                type: DataTypes.INTEGER,
            },
            sanad_id: {
                type: DataTypes.INTEGER,
            },
            chairman_name: {
                type: DataTypes.STRING,
            },
            dead_person_name: {
                type: DataTypes.STRING,
            },
            dead_person_father_husband_name: {
                type: DataTypes.STRING,
            },
            dead_person_mother_name: {
                type: DataTypes.STRING,
            },
            dead_person_village: {
                type: DataTypes.STRING,
            },
            dead_person_union: {
                type: DataTypes.STRING,
            },
            dead_person_upazilla: {
                type: DataTypes.STRING,
            },
            dead_person_zilla: {
                type: DataTypes.STRING,
            },
            no: {
                type: DataTypes.STRING,
            },
            o_name: {
                type: DataTypes.STRING,
            },
            o_relation: {
                type: DataTypes.STRING,
            },
            rnid: {
                type: DataTypes.STRING,
            },
            rbirth: {
                type: DataTypes.STRING,
            },
            rcom: {
                type: DataTypes.STRING,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return oarishes;
};
