const {
    ucwords,
    formatCurrency,
} = require('../../helpers/general_helpers');

const indexProperty = (req, res) => {
    var page = req.query.page;
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

    if (page == 'kost' || page == 'kontrakan' || page == 'apartemen') {
        return res.render(
            'default/pages/properti/property-page', {
                modal: null,
                pageTitle: 'Livinhome - Daftar ' + ucwords(page),
                page: page,
                data: data,
                helper: {
                    formatCurrency: formatCurrency,
                    ucwords: ucwords,
                },
                layout: 'default/default-layout',
                extractScripts: true,
                extractStyles: true,
            });
    }

    return res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        layout: '404'
    });
}

const detailProperty = (req, res) => {
    var idProperty = req.query.idProperty;
    var data = {
        properti: 'Kontrakan Pak Ade',
        nama_pemilik: 'Pak Ade Malik',
        alamat: 'Jl. Dipatiukur No. 5, Sekeloa, Kota Bandung',
        image: [
            'default/img/product/product-1.png',
            'default/img/product/product-2.png',
            'default/img/product/product-3.png',
            'default/img/product/product-4.png',
            'default/img/product/product-5.png',
        ],
        price: 60000000,
        rating: 5.0,
        penilaian: 2,
        detail: {
            waktu: 'Tahun',
            kamar_mandi: 3,
            kamar_tidur: 5,
            luas_tanah: 120,
        },
    };
    var orderSlider = [{
            image: 'default/img/slider/order-slide-1.png',
            deskripsi: 'Kami menyarankan untuk memakai fitur survei untuk mengetahui kondisi secara langsung properti yang ingin kamu sewa.'
        },
        {
            image: 'default/img/slider/order-slide-2.png',
            deskripsi: 'Jika kamu sudah merasa cocok dengan pilihan kontrakan kamu, maka klik tombol pesan sekarang untuk memulai proses sewa.'
        },
        {
            image: 'default/img/slider/order-slide-3.png',
            deskripsi: 'Isi data diri kamu dan penyewa lainnya serta pastikan semua sesuai dengan kartu identitasnya agar pemilik kontrakan lebih mengenalmu.'
        },
        {
            image: 'default/img/slider/order-slide-4.png',
            deskripsi: 'Setelah mengisi data diri, tunggu konfirmasi dari pemilik properti agar kamu tahu apakah kamu bisa melakukan sewa di propertinya atau tidak.'
        },
        {
            image: 'default/img/slider/order-slide-5.png',
            deskripsi: 'Jika sudah dikonfirmasi oleh pemilik properti, segera lakukan pembayaran.'
        },
        {
            image: 'default/img/slider/order-slide-6.png',
            deskripsi: 'Untuk bukti keseriusan, uang dp yang sudah dibayarkan tidak bisa dikembalikan.'
        },
        {
            image: 'default/img/slider/order-slide-7.png',
            deskripsi: 'Setelah pembayaran berhasil diterima, kamu sudah bisa menempati tempat sewamu sesuai dengan tanggal yang ditentukan.'
        },
    ];

    if (idProperty != '' || idProperty != null) {
        return res.render(
            'default/pages/properti/detail-property-page', {
                modal: null,
                pageTitle: 'Livinhome - ' + ucwords(data.properti),
                data: data,
                orderSlider: orderSlider,
                helper: {
                    formatCurrency: formatCurrency,
                    ucwords: ucwords,
                },
                layout: 'default/default-layout',
                extractScripts: true,
                extractStyles: true,
            });
    }

    return res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        layout: '404'
    });
}

const checkoutProperty = (req, res) => {
    var idProperty = req.query.idProperty;
    var data = {
        properti: 'Kontrakan Pak Ade',
        nama_pemilik: 'Pak Ade Malik',
        alamat: 'Jl. Dipatiukur No. 5, Sekeloa, Kota Bandung',
        image: [
            'default/img/product/product-1.png',
            'default/img/product/product-2.png',
            'default/img/product/product-3.png',
            'default/img/product/product-4.png',
            'default/img/product/product-5.png',
        ],
        price: 60000000,
        rating: 5.0,
        penilaian: 2,
        detail: {
            waktu: 'Tahun',
            kamar_mandi: 3,
            kamar_tidur: 5,
            luas_tanah: 120,
        },
    };

    if (idProperty != '' || idProperty != null) {
        return res.render(
            'default/pages/transaksi/checkout-page', {
                modal: null,
                pageTitle: 'Livinhome - ' + ucwords(data.properti),
                data: data,
                helper: {
                    formatCurrency: formatCurrency,
                    ucwords: ucwords,
                },
                layout: 'default/default-layout',
                extractScripts: true,
                extractStyles: true,
            });
    }

    return res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        layout: '404'
    });
}

module.exports = {
    indexProperty,
    detailProperty,
    checkoutProperty,
};