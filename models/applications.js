module.exports = (sequelize, DataTypes) => {
    const applications = sequelize.define(
        "applications",
        {
            union_id: {
                type: DataTypes.STRING,
            },
            applied_union_no: {
                type: DataTypes.STRING,
            },
            photo: {
                type: DataTypes.STRING,
            },
            union_logo: {
                type: DataTypes.STRING,
            },
            applied_upazilla_name: {
                type: DataTypes.STRING,
            },
            applied_zilla_name: {
                type: DataTypes.STRING,
            },
            applied_chairman_name: {
                type: DataTypes.STRING,
            },
            user_id: {
                type: DataTypes.INTEGER,
            },
            user_info_id: {
                type: DataTypes.INTEGER,
            },
            tracking_no: {
                type: DataTypes.STRING,
            },
            transaction_no: {
                type: DataTypes.STRING,
            },
            transaction_phone: {
                type: DataTypes.STRING,
            },
            amount: {
                type: DataTypes.STRING,
            },
            payment_method: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.STRING,
            },
            language: {
                type: DataTypes.ENUM("bn", "en"),
            },
            sanad_file: {
                type: DataTypes.STRING,
            },
            sanad_id: {
                type: DataTypes.STRING,
            },
            applicant: {
                type: DataTypes.STRING,
            },
            form_serial: {
                type: DataTypes.STRING,
            },
            form_date: {
                type: DataTypes.STRING,
            },
            nid_birth: {
                type: DataTypes.STRING,
            },
            nid: {
                type: DataTypes.STRING,
            },
            father_husband_name: {
                type: DataTypes.STRING,
            },
            husband: {
                type: DataTypes.STRING,
            },
            mother_name: {
                type: DataTypes.STRING,
            },
            village_name: {
                type: DataTypes.STRING,
            },
            union_name: {
                type: DataTypes.STRING,
            },
            upazilla_name: {
                type: DataTypes.STRING,
            },
            zilla_name: {
                type: DataTypes.STRING,
            },
            ward_no: {
                type: DataTypes.STRING,
            },
            qr_code: {
                type: DataTypes.STRING,
            },
            death_date: {
                type: DataTypes.STRING,
            },
            death_cause: {
                type: DataTypes.STRING,
            },
            dead_age: {
                type: DataTypes.STRING,
            },
            death_reg_no: {
                type: DataTypes.STRING,
            },
            battalion_name: {
                type: DataTypes.STRING,
            },
            relation: {
                type: DataTypes.STRING,
            },
            relation2: {
                type: DataTypes.STRING,
            },
            gajet_no: {
                type: DataTypes.STRING,
            },
            obodan: {
                type: DataTypes.STRING,
            },
            gurdian_profession: {
                type: DataTypes.STRING,
            },
            gurdian_yearly_earn: {
                type: DataTypes.STRING,
            },
            gurdian_yearly_earn_description: {
                type: DataTypes.STRING,
            },
            gurdian_monthly_earn: {
                type: DataTypes.STRING,
            },
            gurdian_monthly_earn_description: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            other_table_id: {
                type: DataTypes.STRING,
            },
            first_heading: {
                type: DataTypes.STRING,
            },
            second_heading: {
                type: DataTypes.STRING,
            },
            third_heading: {
                type: DataTypes.STRING,
            },
            subject: {
                type: DataTypes.STRING,
            },
            law: {
                type: DataTypes.STRING,
            },
            other_app_date: {
                type: DataTypes.STRING,
            },
            first_body: {
                type: DataTypes.STRING,
            },
            second_body: {
                type: DataTypes.STRING,
            },
            third_body: {
                type: DataTypes.STRING,
            },
            noe: {
                type: DataTypes.STRING,
            },
            zeara: {
                type: DataTypes.STRING,
            },
            che: {
                type: DataTypes.STRING,
            },
            upe: {
                type: DataTypes.STRING,
            },
            une: {
                type: DataTypes.STRING,
            },
            eng: {
                type: DataTypes.STRING,
            },
            lal: {
                type: DataTypes.STRING,
            },
            geg: {
                type: DataTypes.STRING,
            },
            mrgram: {
                type: DataTypes.STRING,
            },
            mrdak: {
                type: DataTypes.STRING,
            },
            mrword: {
                type: DataTypes.STRING,
            },
            present_zila: {
                type: DataTypes.STRING,
            },
            present_upazila: {
                type: DataTypes.STRING,
            },
            present_village: {
                type: DataTypes.STRING,
            },
            transfer_village: {
                type: DataTypes.STRING,
            },
            transfer_basha: {
                type: DataTypes.STRING,
            },
            transfer_upazila: {
                type: DataTypes.STRING,
            },
            transfer_zila: {
                type: DataTypes.STRING,
            },
            pname: {
                type: DataTypes.STRING,
            },
            lname: {
                type: DataTypes.STRING,
            },
            thikhana: {
                type: DataTypes.STRING,
            },
            btype: {
                type: DataTypes.STRING,
            },
            bstan: {
                type: DataTypes.STRING,
            },
            rr1: {
                type: DataTypes.STRING,
            },
            rr2: {
                type: DataTypes.STRING,
            },
            rn1: {
                type: DataTypes.STRING,
            },
            rn2: {
                type: DataTypes.STRING,
            },
            rdt1: {
                type: DataTypes.STRING,
            },
            rdt2: {
                type: DataTypes.STRING,
            },
            rtt1: {
                type: DataTypes.STRING,
            },
            rtt2: {
                type: DataTypes.STRING,
            },
            rtt3: {
                type: DataTypes.STRING,
            },
            rtt4: {
                type: DataTypes.STRING,
            },
            celer: {
                type: DataTypes.STRING,
            },
            bahinir: {
                type: DataTypes.STRING,
            },
            date: {
                type: DataTypes.STRING,
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return applications;
};
