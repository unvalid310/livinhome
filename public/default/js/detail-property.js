jQuery(function ($) {
    jQuery('#check-in').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    /*----------------------------------------*/
    /*  Lightgallery Active
    /*----------------------------------------*/

    $(".popup-gallery").lightGallery({
        pager: false, // Enable/Disable pager
        thumbnail: false, // Enable thumbnails for the gallery
        fullScreen: true, // Enable/Disable fullscreen mode
        zoom: true, // Enable/Disable zoom option
        rotateLeft: true, // Enable/Disable Rotate Left
        rotateRight: true, // Enable/Disable Rotate Right
    });

    /*-- Single product with Thumbnail Horizental -- */
    var galleryThumbs = new Swiper('.single-product-thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        // loop: false,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 3,
            },
            // when window width is >= 767px
            767: {
                slidesPerView: 4,
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
            },
        }
    });

    var galleryTop = new Swiper('.single-product-img', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // loop: true,
        // loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    var orderSwiper = new Swiper('.order-slider', {
        loop: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: "#button-navigation",
        },
    });

    const title = [
        'Maksimalkan Fitur Survei',
        'Klik Tombol “Pesan Sekarang"',
        'Isi Data Diri',
        'Tunggu Konfirmasi dari Pemilik Propeti',
        'Lakukan Pembayaran',
        'Uang DP Tidak Bisa Dikembalikan',
        'Transaksi Berhasil, Persiapkan Diri Untuk Sewa Properti Kamu'
    ];
    var btnNavigation = $('#button-navigation'),
        modalTitle = $('.title h4');

    orderSwiper.on('slideChange', function () {
        modalTitle.text(title[this.activeIndex]);
        if (this.activeIndex === 6) {
            btnNavigation.text('Mengerti');
            btnNavigation.prop('disabled', false);
            btnNavigation.on('click', function () {
                window.location.href = "checkout"
            });
        } else {
            btnNavigation.text('Lanjutkan');
        }
    });

    const map = L.map('maps');

    const myLatlng = {
        lat: -5.100204604887386,
        lng: 105.29483481218922
    };

    map.setView(myLatlng, 15);
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 21,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: 'Map data &copy; Google Map',
        id: 'mapbox/streets-v11',
    }).addTo(map);
    marker = L.marker(myLatlng).addTo(map);
    placeholder = "<strong></strong> <br> Lihat pada Google Map <a href='https://www.google.com/maps/place/" + myLatlng.lat + "," + myLatlng.lng + "' target='_blank'>disini</a>";
    marker.bindPopup(placeholder).openPopup();
    map.setView(marker.getLatLng(), 18);
});