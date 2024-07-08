const getAllPesanan = (req, res) => {
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
        "jk": 'Pria',
        "ktp": "",
        "tanggal_transaksi": '30 Agustus 2024',
        "tanggal_masuk": '31 Agustus 2024',
        "tanggal_berkhir": '31 Agustus 2025',
        "durasi": 1,
        "properti": 'Jaya Perkasa',
        "layanan": "Lynclean",
        "status": "Lunas",
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
        "jk": 'Pria',
        "ktp": "",
        "tanggal_transaksi": null,
        "tanggal_masuk": '31 Agustus 2024',
        "tanggal_berkhir": '31 Agustus 2025',
        "durasi": 1,
        "properti": 'Orange House',
        "layanan": "Lynclean",
        "status": "Belum Lunas",
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
        "jk": 'Pria',
        "ktp": "",
        "tanggal_transaksi": null,
        "tanggal_masuk": '31 Agustus 2024',
        "tanggal_berkhir": '31 Agustus 2025',
        "durasi": 1,
        "properti": 'Rumah ABC',
        "layanan": "Lynclean",
        "status": "Belum Lunas",
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
        "jk": 'Pria',
        "ktp": "",
        "tanggal_transaksi": '15 September 2024',
        "tanggal_masuk": '16 September 2024',
        "tanggal_berkhir": '16 September 2025',
        "durasi": 1,
        "properti": 'Kontrakan Berjaya',
        "layanan": "Lynclean",
        "status": "Lunas",
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
    getAllPesanan,
};