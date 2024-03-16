module.exports = (sequelize, DataTypes) => {
    const union_infos = sequelize.define(
        "union_infos",
        {
            division_id: {
                type: DataTypes.INTEGER,
            },
            district_id: {
                type: DataTypes.INTEGER,
            },
            upazilla_id: {
                type: DataTypes.INTEGER,
            },
            union_id: {
                type: DataTypes.INTEGER,
            },
            user_id: {
                type: DataTypes.INTEGER,
            },
            chairman: {
                type: DataTypes.STRING,
            },
            union_no: {
                type: DataTypes.STRING,
            },
            logo: {
                type: DataTypes.STRING,
            },
            vie: {
                type: DataTypes.STRING,
            },
            zee: {
                type: DataTypes.STRING,
            },
            upe: {
                type: DataTypes.STRING,
            },
            une: {
                type: DataTypes.STRING,
            },
            che: {
                type: DataTypes.STRING,
            },
            noe: {
                type: DataTypes.STRING,
            },
            city_corporation: {
                type: DataTypes.STRING,
            },
            city_corporation_no: {
                type: DataTypes.STRING,
            },
            city_corporation_no_en: {
                type: DataTypes.STRING,
            },
            pouro_sova: {
                type: DataTypes.INTEGER,
            },
            pourosova_no: {
                type: DataTypes.INTEGER,
            },
            pourosova_no_en: {
                type: DataTypes.INTEGER,
            },
            che_mobile: {
                type: DataTypes.STRING,
            },
            secretary_name_bn: {
                type: DataTypes.STRING,
            },
            secretary_name_en: {
                type: DataTypes.STRING,
            },
            secretary_mobile: {
                type: DataTypes.STRING,
            },
            accountent_name_bn: {
                type: DataTypes.STRING,
            },
            accountent_name_en: {
                type: DataTypes.STRING,
            },
            accountent_mobile: {
                type: DataTypes.STRING,
            },
            ekseba_id_of_entre: {
                type: DataTypes.STRING,
            },
            nid_no: {
                type: DataTypes.STRING,
            },
            entre_pic: {
                type: DataTypes.STRING,
            },
            entre_nid_pic_front: {
                type: DataTypes.STRING,
            },
            entre_nid_pic_back: {
                type: DataTypes.STRING,
            },
            fb_page: {
                type: DataTypes.STRING,
            },
            pouro_sova_en: {
                type: DataTypes.STRING,
            },
            city_corporation_en: {
                type: DataTypes.STRING,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return union_infos;
};
