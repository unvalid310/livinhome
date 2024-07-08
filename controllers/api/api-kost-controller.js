const getAllKost = (req, res) => {
    var draw = req.query.draw;

    var start = req.query.start;

    var length = req.query.length;

    var order_data = req.query.order;

    var data = [{
        "id": 1,
        "no": 1,
        "nama_property": "Jaya Perkasa",
        "tahun_dibangun": "2020",
        "disewakan_untuk": "Campur",
        "deskripsi_property": "farhan Utomo",
        "aturan_property": [{
                "icon": "",
                "label": "Akses 24 jam",
            },
            {
                "icon": "",
                "label": "Dilarang berisik",
            },
            {
                "icon": "",
                "label": "Lawan jenis dilaran menginap",
            },
            {
                "icon": "",
                "label": "Dialaran membawa anak",
            },
            {
                "icon": "",
                "label": "MLainnyamal 2 orang per kamar",
            }
        ],
        "alamat_property": "Jl. Tarumanegara RT 5 RW 4, Rendangasih, Kota Bandung, Jawa Barat",
        "livinmates": "Tersedia",
        "fasilitas_property": "Farhan Utomo",
        "luas_tanah": 120,
        "luas_rumah": 200,
        "daya_listrik": 100,
        "sumber_air": "PDAM",
        "kamar_tidur": 4,
        "kamar_mandi": 3,
        "minimum_waktu_sewa": "pertahun",
        "harga_sewa_pertahun": "52000000",
        "pemilik": "Adi Wijaya",
        "no_hp_pemilik": "082666628321748",
        "email_pemilik": "adiwijayachindo@gmail.com",
        "bank": "BCA",
        "no_rekening": "44302221723",
        "dokumen": "KTP",
        "foto_rumah": [
            "/upload/foto_rumah.jpg"
        ],
        "foto_kamar_tidur": [
            "/upload/foto_kamar1.jpg",
            "/upload/foto_kamar2.jpg",
            "/upload/foto_kamar3.jpg",
        ],
        "foto_balkon": [
            "/upload/foto_balkon.jpg",
        ],
        "foto_ruang_keluarga": [
            "/upload/foto_ruang_keluarga1.jpg",
            "/upload/foto_ruang_keluarga2.jpg",
            "/upload/foto_ruang_keluarga3.jpg",
        ],
        "foto_ruang_tamu": [
            "/upload/foto_ruang_tamu.jpg",
        ],
    }, {
        "id": 2,
        "no": 2,
        "nama_property": "Rumah ABC",
        "tahun_dibangun": "2020",
        "disewakan_untuk": "Campur",
        "deskripsi_property": "farhan Utomo",
        "aturan_property": [{
                "icon": "",
                "label": "Akses 24 jam",
            },
            {
                "icon": "",
                "label": "Dilarang berisik",
            },
            {
                "icon": "",
                "label": "Lawan jenis dilaran menginap",
            },
            {
                "icon": "",
                "label": "Dialaran membawa anak",
            },
            {
                "icon": "",
                "label": "MLainnyamal 2 orang per kamar",
            }
        ],
        "alamat_property": "Perumahan Citra Abdi",
        "livinmates": "Tersedia",
        "fasilitas_property": "Farhan Utomo",
        "luas_tanah": 120,
        "luas_rumah": 200,
        "daya_listrik": 100,
        "sumber_air": "PDAM",
        "kamar_tidur": 3,
        "kamar_mandi": 3,
        "minimum_waktu_sewa": "pertahun",
        "harga_sewa_pertahun": "52000000",
        "pemilik": "Eka Wiguna",
        "no_hp_pemilik": "082666628321748",
        "email_pemilik": "ekawiguna@gmail.com",
        "bank": "BCA",
        "no_rekening": "44302221723",
        "dokumen": "KTP",
        "foto_rumah": [
            "/upload/foto_rumah.jpg"
        ],
        "foto_kamar_tidur": [
            "/upload/foto_kamar1.jpg",
            "/upload/foto_kamar2.jpg",
            "/upload/foto_kamar3.jpg",
        ],
        "foto_balkon": [
            "/upload/foto_balkon.jpg",
        ],
        "foto_ruang_keluarga": [
            "/upload/foto_ruang_keluarga1.jpg",
            "/upload/foto_ruang_keluarga2.jpg",
            "/upload/foto_ruang_keluarga3.jpg",
        ],
        "foto_ruang_tamu": [
            "/upload/foto_ruang_tamu.jpg",
        ],
    }, {
        "id": 3,
        "no": 3,
        "nama_property": "Orange House",
        "tahun_dibangun": "2020",
        "disewakan_untuk": "Campur",
        "deskripsi_property": "farhan Utomo",
        "aturan_property": [{
                "icon": "",
                "label": "Akses 24 jam",
            },
            {
                "icon": "",
                "label": "Dilarang berisik",
            },
            {
                "icon": "",
                "label": "Lawan jenis dilaran menginap",
            },
            {
                "icon": "",
                "label": "Dialaran membawa anak",
            },
            {
                "icon": "",
                "label": "MLainnyamal 2 orang per kamar",
            }
        ],
        "alamat_property": "Perumahan Citra Abdi",
        "livinmates": "Tersedia",
        "fasilitas_property": "Farhan Utomo",
        "luas_tanah": 120,
        "luas_rumah": 200,
        "daya_listrik": 100,
        "sumber_air": "PDAM",
        "kamar_tidur": 4,
        "kamar_mandi": 3,
        "minimum_waktu_sewa": "pertahun",
        "harga_sewa_pertahun": "52000000",
        "pemilik": "Riyan",
        "no_hp_pemilik": "082666628321748",
        "email_pemilik": "riyan@gmail.com",
        "bank": "BCA",
        "no_rekening": "44302221723",
        "dokumen": "KTP",
        "foto_rumah": [
            "/upload/foto_rumah.jpg"
        ],
        "foto_kamar_tidur": [
            "/upload/foto_kamar1.jpg",
            "/upload/foto_kamar2.jpg",
            "/upload/foto_kamar3.jpg",
        ],
        "foto_balkon": [
            "/upload/foto_balkon.jpg",
        ],
        "foto_ruang_keluarga": [
            "/upload/foto_ruang_keluarga1.jpg",
            "/upload/foto_ruang_keluarga2.jpg",
            "/upload/foto_ruang_keluarga3.jpg",
        ],
        "foto_ruang_tamu": [
            "/upload/foto_ruang_tamu.jpg",
        ],
    }]

    var output = {
        'draw': draw,
        'recordsTotal': 3,
        'recordsFiltered': 6,
        'data': data
    };


    res.json(output);
}

module.exports = {
    getAllKost,
};