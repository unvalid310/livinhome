const getAllPenywaProperti = (req, res) => {
    var draw = req.query.draw;

    var start = req.query.start;

    var length = req.query.length;

    var order_data = req.query.order;

    var data = [{
        "id": 1,
        "no": 1,
        "nama": "Gogon Santoso",
        "no_hp": "082186753684",
        "email": "gogonableh@gmail.com",
        "tanggal_lahir": "12 April 2002",
        "asal_kota": "Ciamis",
        "pekerjaan": "Mahasiswa",
        "status": "Belum Kawin",
        "pendidikan_terakhir": 'S1',
        "kontak_darurat": '082186753684',
        "properti": 'Jaya Perkasa',
        "tanggal_masuk": '23 Februari 2024',
        "jk": 'Pria',
        "ktp": "",
    }, {
        "id": 2,
        "no": 2,
        "nama": "Ari Lesmana",
        "no_hp": "082186753684",
        "email": "arilesmana@gmail.com",
        "tanggal_lahir": "12 April 2002",
        "asal_kota": "Ciamis",
        "pekerjaan": "Mahasiswa",
        "status": "Belum Kawin",
        "pendidikan_terakhir": 'S1',
        "kontak_darurat": '082186753684',
        "properti": 'Orange House',
        "tanggal_masuk": '23 Februari 2024',
        "jk": 'Pria',
        "ktp": "",
    }, {
        "id": 3,
        "no": 3,
        "nama": "Adit Sopo",
        "no_hp": "082186753684",
        "email": "adits@gmail.com",
        "tanggal_lahir": "12 April 2002",
        "asal_kota": "Ciamis",
        "pekerjaan": "Mahasiswa",
        "status": "Belum Kawin",
        "pendidikan_terakhir": 'S1',
        "kontak_darurat": '082186753684',
        "properti": 'Rumah ABC',
        "tanggal_masuk": '23 Februari 2024',
        "jk": 'Pria',
        "ktp": "",
    }, {
        "id": 4,
        "no": 4,
        "nama": "Kim Umbrella",
        "no_hp": "082186753684",
        "email": "kim@gmail.com",
        "tanggal_lahir": "12 April 2002",
        "asal_kota": "Ciamis",
        "pekerjaan": "Mahasiswa",
        "status": "Belum Kawin",
        "pendidikan_terakhir": 'S1',
        "kontak_darurat": '082186753684',
        "properti": 'Kontrakan Berjaya',
        "tanggal_masuk": '23 Februari 2024',
        "jk": 'Pria',
        "ktp": "",
    }, ]

    var output = {
        'draw': draw,
        'recordsTotal': 3,
        'recordsFiltered': 6,
        'data': data
    };


    res.json(output);
}

module.exports = {
    getAllPenywaProperti,
};