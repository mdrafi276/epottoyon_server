module.exports = (sequelize, DataTypes) => {
    const user_infos = sequelize.define(
        "user_infos",
        {
            user_id: {
                type: DataTypes.INTEGER,
            },
            name_en: {
                type: DataTypes.TEXT,
            },
            name_bn: {
                type: DataTypes.TEXT,
            },
            father_or_husband_en: {
                type: DataTypes.TEXT,
            },
            father_or_husband_bn: {
                type: DataTypes.TEXT,
            },
            mother_en: {
                type: DataTypes.TEXT,
            },
            mother_bn: {
                type: DataTypes.TEXT,
            },
            e_mail: {
                type: DataTypes.TEXT,
            },
            mobile: {
                type: DataTypes.TEXT,
            },
            voter_birth_id: {
                type: DataTypes.TEXT,
            },
            voter_birth_photo: {
                type: DataTypes.TEXT,
            },
            birth_date: {
                type: DataTypes.TEXT,
            },
            gender: {
                type: DataTypes.TEXT,
            },
            blood_group: {
                type: DataTypes.TEXT,
            },
            photo: {
                type: DataTypes.TEXT,
            },
            password: {
                type: DataTypes.STRING(255),
            },
            present_village_en: {
                type: DataTypes.TEXT,
            },
            present_village_bn: {
                type: DataTypes.TEXT,
            },
            present_holding_no_en: {
                type: DataTypes.TEXT,
            },
            present_holding_no_bn: {
                type: DataTypes.TEXT,
            },
            present_road_en: {
                type: DataTypes.TEXT,
            },
            present_road_bn: {
                type: DataTypes.TEXT,
            },
            present_address_type: {
                type: DataTypes.TEXT,
            },
            present_division: {
                type: DataTypes.TEXT,
            },
            present_district: {
                type: DataTypes.TEXT,
            },
            present_thana: {
                type: DataTypes.TEXT,
            },
            present_post_office: {
                type: DataTypes.TEXT,
            },
            present_union: {
                type: DataTypes.TEXT,
            },
            present_owner_type: {
                type: DataTypes.TEXT,
            },
            present_ward_no: {
                type: DataTypes.TEXT,
            },
            permanent_village_en: {
                type: DataTypes.TEXT,
            },
            permanent_village_bn: {
                type: DataTypes.TEXT,
            },
            permanent_holding_no_en: {
                type: DataTypes.TEXT,
            },
            permanent_holding_no_bn: {
                type: DataTypes.TEXT,
            },
            permanent_road_en: {
                type: DataTypes.TEXT,
            },
            permanent_road_bn: {
                type: DataTypes.TEXT,
            },
            permanent_address_type: {
                type: DataTypes.TEXT,
            },
            permanent_division: {
                type: DataTypes.TEXT,
            },
            permanent_district: {
                type: DataTypes.TEXT,
            },
            permanent_thana: {
                type: DataTypes.TEXT,
            },
            permanent_post_office: {
                type: DataTypes.TEXT,
            },
            permanent_union: {
                type: DataTypes.TEXT,
            },
            permanent_owner_type: {
                type: DataTypes.TEXT,
            },
            permanent_ward_no: {
                type: DataTypes.TEXT,
            },
            certificate_type: {
                type: DataTypes.TEXT,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return user_infos;
};
