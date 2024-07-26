const indexHome = (req, res) => {
    var data = {
        rekomendasi: [{
            pemilik: 'Kontrakan Pak Ade',
            lokasi: 'Dipatiukur',
            image: 'default/img/slider/slide1.png',
            price: 60000000,
            rating: 5.0,
            penilaian: 2,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 3,
                kamar_tidur: 5,
                luas_tanah: 120,
            },
        }, {
            pemilik: 'Kontrakan Bu Sri',
            lokasi: 'Setiabudi',
            image: 'default/img/slider/slide2.png',
            price: 55000000,
            rating: 4.5,
            penilaian: 2,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 3,
                kamar_tidur: 3,
                luas_tanah: 90,
            },
        }, {
            pemilik: 'Kontrakan Pak Broto',
            lokasi: 'Kiara Condong',
            image: 'default/img/slider/slide3.png',
            price: 40000000,
            rating: 4.5,
            penilaian: 9,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 2,
                kamar_tidur: 4,
                luas_tanah: 94,
            },
        }, {
            pemilik: 'Kontrakan Pak Broto',
            lokasi: 'Cibiru',
            image: 'default/img/slider/slide4.png',
            price: 53000000,
            rating: 4.5,
            penilaian: 9,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 2,
                kamar_tidur: 4,
                luas_tanah: 94,
            },
        }, {
            pemilik: 'Kontrakan Pak Broto',
            lokasi: 'Ciumbuleuit',
            image: 'default/img/slider/slide5.png',
            price: 63000000,
            rating: 4.5,
            penilaian: 9,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 2,
                kamar_tidur: 4,
                luas_tanah: 94,
            },
        }, {
            pemilik: 'Kontrakan Pak Broto',
            lokasi: 'Ciumbuleuit',
            image: 'default/img/slider/slide6.png',
            price: 63000000,
            rating: 0.0,
            penilaian: 0,
            detail: {
                waktu: 'Tahun',
                kamar_mandi: 2,
                kamar_tidur: 4,
                luas_tanah: 94,
            },
        }]
    };

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    res.render(
        'default/pages/home/home-page', {
            modal: null,
            pageTitle: 'Livinhome - Beranda ',
            layout: 'default/default-layout',
            data: data,
            formatNumber: formatter,
            extractScripts: true,
            extractStyles: true,
        });
}

module.exports = {
    indexHome,
};