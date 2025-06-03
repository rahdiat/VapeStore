// script.js

// Data Produk (Contoh dengan tambahan spesifikasi dan isiPaket)
const allProducts = [
    { id: 1, name: 'VapeX Pro Kit', price: 'Rp 750.000', numericPrice: 750000, imageUrl: 'https://placehold.co/400x400/E2E8F0/AAAAAA?text=VapeX+Pro', category: 'Device', popular: true, newArrival: true, description: 'Device canggih dengan fitur lengkap.', spesifikasi: { baterai: '2000mAh', output: '80W', kapasitasTank: '5ml' }, isiPaket: ['VapeX Pro Mod', 'VapeX Tank', 'Coil Cadangan (2pcs)', 'Kabel USB-C', 'Buku Panduan'] },
    { id: 2, name: 'Liquid Berry Blast', price: 'Rp 150.000', numericPrice: 150000, imageUrl: 'https://placehold.co/400x400/FEE2E2/AAAAAA?text=Liquid+Berry', category: 'Liquid', popular: true, newArrival: false, description: 'Rasa berry segar yang nikmat.', spesifikasi: { ukuranBotol: '60ml', nicotine: '3mg/6mg' }, isiPaket: ['Liquid Berry Blast 60ml'] },
    { id: 3, name: 'Atomizer Supreme', price: 'Rp 350.000', numericPrice: 350000, imageUrl: 'https://placehold.co/400x400/D1FAE5/AAAAAA?text=Atomizer+Supreme', category: 'Atomizer', popular: false, newArrival: true, description: 'Atomizer kualitas tinggi untuk rasa maksimal.', spesifikasi: { tipe: 'RDA', diameter: '24mm' }, isiPaket: ['Atomizer Supreme', 'Obeng Mini', 'Kapas Organik', 'Pre-built Coils'] },
    { id: 4, name: 'Starter Kit Mini', price: 'Rp 400.000', numericPrice: 400000, imageUrl: 'https://placehold.co/400x400/DBEAFE/AAAAAA?text=Starter+Mini', category: 'Device', popular: true, newArrival: false, description: 'Cocok untuk pemula, mudah digunakan.', spesifikasi: { baterai: '1500mAh', output: '40W Max', kapasitasTank: '2ml' }, isiPaket: ['Mini Mod', 'Mini Tank', 'Coil Cadangan', 'Kabel USB', 'Buku Panduan'] },
    { id: 5, name: 'Liquid Mango Tango', price: 'Rp 160.000', numericPrice: 160000, imageUrl: 'https://placehold.co/400x400/FEF3C7/AAAAAA?text=Liquid+Mango', category: 'Liquid', popular: false, newArrival: true, description: 'Sensasi mangga tropis yang menyegarkan.', spesifikasi: { ukuranBotol: '60ml', nicotine: '3mg' }, isiPaket: ['Liquid Mango Tango 60ml'] },
    { id: 6, name: 'Coil Master Pack', price: 'Rp 100.000', numericPrice: 100000, imageUrl: 'https://placehold.co/400x400/E0E7FF/AAAAAA?text=Coil+Pack', category: 'Aksesoris', popular: true, newArrival: true, description: 'Pack coil berkualitas untuk berbagai device.', spesifikasi: { jenis: 'Kanthal A1', jumlah: '10 pcs' }, isiPaket: ['10x Pre-built Coils (berbagai resistensi)'] },
    { id: 7, name: 'Advanced Mod XT', price: 'Rp 950.000', numericPrice: 950000, imageUrl: 'https://placehold.co/400x400/DDD6FE/AAAAAA?text=Mod+XT', category: 'Device', popular: false, newArrival: true, description: 'Mod dengan power dan kustomisasi tinggi.', spesifikasi: { baterai: 'Dual 18650 (tidak termasuk)', output: '5-200W', chipset: 'Advanced XT Chip' }, isiPaket: ['Advanced Mod XT', 'Kabel USB-C', 'Adaptor Baterai', 'Buku Panduan'] },
    { id: 8, name: 'Liquid Classic Tobacco', price: 'Rp 140.000', numericPrice: 140000, imageUrl: 'https://placehold.co/400x400/F5E8DD/AAAAAA?text=Liquid+Tobacco', category: 'Liquid', popular: true, newArrival: false, description: 'Rasa tembakau klasik yang otentik.', spesifikasi: { ukuranBotol: '50ml', nicotine: '6mg/12mg' }, isiPaket: ['Liquid Classic Tobacco 50ml'] },
];

const promotions = [
    { id: 1, title: 'Diskon Akhir Pekan!', description: 'Dapatkan diskon 20% untuk semua device.', imageUrl: 'https://placehold.co/600x600/FECACA/FFFFFF?text=Diskon+20%25', link: '#' },
    { id: 2, title: 'Beli 1 Gratis 1 Liquid', description: 'Promo spesial untuk liquid rasa buah tertentu.', imageUrl: 'https://placehold.co/600x600/A5F3FC/FFFFFF?text=Beli+1+Gratis+1', link: '#' },
    { id: 3, title: 'Paket Bundling Hemat', description: 'Paket device + liquid dengan harga spesial.', imageUrl: 'https://placehold.co/600x600/D8B4FE/FFFFFF?text=Paket+Hemat', link: '#' },
];

const updates = [
    { id: 1, text: 'Stok baru VapeX Pro Kit sudah tersedia! Jangan sampai kehabisan.', imageUrl: 'https://placehold.co/100x100/E2E8F0/AAAAAA?text=VapeX+Pro', timestamp: '2 jam lalu' },
    { id: 2, text: 'Liquid Berry Blast jadi favorit minggu ini! Sudah coba?', timestamp: '1 hari lalu' },
    { id: 3, text: 'Pengumuman: Maintenance website akan dilakukan pada Sabtu malam pukul 23:00 WIB.', timestamp: '3 hari lalu' },
    { id: 4, text: 'Tips & Trik: Cara membersihkan atomizer agar rasa tetap maksimal. Baca selengkapnya di blog kami!', imageUrl: 'https://placehold.co/100x100/D1FAE5/AAAAAA?text=Tips', timestamp: '5 hari lalu' },
];

let cartItems = [];

function addToCartDemo(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.numericPrice,
                quantity: 1,
                imageUrl: product.imageUrl
            });
        }
        alert(`${product.name} telah ditambahkan ke keranjang! (Demo)`);
        console.log("Isi Keranjang (Demo):", cartItems);
        if (document.getElementById('keranjang-page') && !document.getElementById('keranjang-page').classList.contains('hidden')) {
            displayCartItems();
        }
    }
}

function createProductCard(product) {
    return `
        <div class="product-card flex flex-col">
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 sm:h-56 md:h-64 object-cover">
            <div class="p-4 md:p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 mb-1 truncate">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-1">${product.category}</p>
                <p class="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
                <p class="text-gray-500 text-xs mb-3 flex-grow">${product.description.substring(0,50)}...</p>
                <div class="mt-auto space-y-2">
                    <button onclick="window.showProductDetail(${product.id})" class="w-full bg-gray-800 hover:bg-black text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                        Lihat Detail
                    </button>
                    <button onclick="window.addToCartDemo(${product.id})" class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                        Tambah ke Keranjang (Demo)
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadProducts(productsToLoad, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }
    const products = limit ? productsToLoad.slice(0, limit) : productsToLoad;
    const noResultsMessage = document.getElementById('no-results-message');
    if (products.length === 0 && containerId === 'all-products-container') {
        if (noResultsMessage) {
            noResultsMessage.classList.remove('hidden');
        }
        container.innerHTML = '';
        return;
    } else if (containerId === 'all-products-container' && noResultsMessage) {
        noResultsMessage.classList.add('hidden');
    } else if (products.length === 0 && (containerId === 'popular-products-container' || containerId === 'featured-products-container')) {
        container.innerHTML = `<p class="text-center text-gray-500 col-span-full">Tidak ada produk untuk ditampilkan saat ini.</p>`;
        return;
    }
    const allCardsHtml = products.map(product => createProductCard(product)).join('');
    container.innerHTML = allCardsHtml;
}

window.showProductDetail = function(productId) {
    const product = allProducts.find(p => p.id === productId);
    const detailContainer = document.getElementById('product-detail-content');
    if (product && detailContainer) {
        let spesifikasiHtml = '';
        if (product.spesifikasi && Object.keys(product.spesifikasi).length > 0) {
            spesifikasiHtml = `
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">Spesifikasi Teknis:</h2>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        ${product.spesifikasi.baterai ? `<li>Baterai: ${product.spesifikasi.baterai}</li>` : ''}
                        ${product.spesifikasi.output ? `<li>Output Power: ${product.spesifikasi.output}</li>` : ''}
                        ${product.spesifikasi.kapasitasTank ? `<li>Kapasitas Tank: ${product.spesifikasi.kapasitasTank}</li>` : ''}
                        ${product.spesifikasi.ukuranBotol ? `<li>Ukuran Botol: ${product.spesifikasi.ukuranBotol}</li>` : ''}
                        ${product.spesifikasi.nicotine ? `<li>Nikotin: ${product.spesifikasi.nicotine}</li>` : ''}
                        ${product.spesifikasi.tipe ? `<li>Tipe: ${product.spesifikasi.tipe}</li>` : ''}
                        ${product.spesifikasi.diameter ? `<li>Diameter: ${product.spesifikasi.diameter}</li>` : ''}
                        ${product.spesifikasi.jenis ? `<li>Jenis Coil: ${product.spesifikasi.jenis}</li>` : ''}
                        ${product.spesifikasi.jumlah ? `<li>Jumlah Coil: ${product.spesifikasi.jumlah}</li>` : ''}
                        ${product.spesifikasi.chipset ? `<li>Chipset: ${product.spesifikasi.chipset}</li>` : ''}
                    </ul>
                </div>
            `;
        }
        let isiPaketHtml = '';
        if (product.isiPaket && product.isiPaket.length > 0) {
            isiPaketHtml = `
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">Isi Dalam Paket:</h2>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        ${product.isiPaket.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        detailContainer.innerHTML = `
            <div class="md:flex">
                <div class="md:w-1/2">
                    <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-auto max-h-[500px] object-contain md:rounded-l-lg p-4">
                </div>
                <div class="md:w-1/2 p-6 md:p-8">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">${product.name}</h1>
                    <p class="text-gray-500 text-sm mb-3">Kategori: ${product.category}</p>
                    <p class="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
                    <div class="mb-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-2">Deskripsi Produk:</h2>
                        <p class="text-gray-600 leading-relaxed">${product.description}</p>
                    </div>
                    ${spesifikasiHtml}
                    ${isiPaketHtml}
                    ${product.popular ? '<span class="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2">Populer</span>' : ''}
                    ${product.newArrival ? '<span class="inline-block bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2">Pendatang Baru</span>' : ''}
                    <div class="mt-8">
                        <button onclick="window.addToCartDemo(${product.id})" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
                            <i class="fas fa-cart-plus mr-2"></i> Tambah ke Keranjang (Demo)
                        </button>
                    </div>
                </div>
            </div>
        `;
        window.navigateTo('detail-produk-page');
    } else {
        if (detailContainer) {
            detailContainer.innerHTML = '<p class="p-8 text-center text-red-500">Detail produk tidak ditemukan.</p>';
        }
        console.error('Produk tidak ditemukan atau kontainer detail tidak ada.');
        window.navigateTo('produk-page');
    }
};

function createPromotionCard(promo) {
    return `
        <div class="promo-card-insta group">
            <img src="${promo.imageUrl}" alt="${promo.title}" class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${promo.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${promo.description}</p>
                <a href="${promo.link}" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                    Lihat Promo
                </a>
            </div>
        </div>
    `;
}

function loadPromotions() {
    const container = document.getElementById('promotions-container');
    if (!container) {
        return;
    }
    if (!promotions || promotions.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500 col-span-full">Tidak ada promosi saat ini.</p>';
        return;
    }
    const allPromoCardsHtml = promotions.map(promo => createPromotionCard(promo)).join('');
    container.innerHTML = allPromoCardsHtml;
}

function createUpdateCard(update) {
    return `
        <div class="update-card-twitter">
            <div class="flex items-start space-x-3">
                ${update.imageUrl ? `<img src="${update.imageUrl}" alt="Update image" class="w-12 h-12 rounded-md object-cover">` : '<div class="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-400"><i class="fas fa-newspaper"></i></div>'}
                <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed">${update.text}</p>
                    <p class="text-xs text-gray-400 mt-2">${update.timestamp}</p>
                </div>
            </div>
        </div>
    `;
}

function loadUpdates() {
    const container = document.getElementById('updates-container');
    if (!container) {
        return;
    }
     if (!updates || updates.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500">Tidak ada update terbaru.</p>';
        return;
    }
    const allUpdateCardsHtml = updates.map(update => createUpdateCard(update)).join('');
    container.innerHTML = allUpdateCardsHtml;
}

const pages = document.querySelectorAll('.page-content');
const navLinksDesktop = document.querySelectorAll('#main-header nav.hidden a.nav-link');
// navLinksMobile akan diambil nanti atau di dalam fungsi updateActiveLink untuk fleksibilitas

function updateActiveLink(pageId) {
    const basePageName = pageId.replace('-page', '');
    navLinksDesktop.forEach(link => {
        link.classList.remove('nav-link-active');
        const linkTarget = link.id.replace('nav-', '');
        if (linkTarget === basePageName || (basePageName === 'detail-produk' && linkTarget === 'produk')) {
            link.classList.add('nav-link-active');
        }
    });

    // Untuk menu mobile baru (yang digeser dari kiri), kita tidak lagi menandai link aktif
    // dengan 'bg-gray-200', 'text-black', 'font-semibold' karena desainnya 
    // lebih mengandalkan efek hover. Jika Anda ingin ada indikasi link aktif yang berbeda
    // pada menu mobile, Anda bisa menambahkan logika di sini untuk menerapkan kelas khusus.
    const currentNavLinksMobile = document.querySelectorAll('#mobile-menu nav a');
    currentNavLinksMobile.forEach(link => {
        // Hapus kelas aktif sebelumnya jika ada
        // link.classList.remove('your-mobile-active-class'); // ganti 'your-mobile-active-class'

        // const linkPageTargetAttr = link.getAttribute('onclick');
        // let targetAttrPageId = '';
        // if (linkPageTargetAttr) {
        //     const linkPageTargetMatch = linkPageTargetAttr.match(/navigateTo\('([^']+)'\)/);
        //     if (linkPageTargetMatch && linkPageTargetMatch[1]) {
        //          targetAttrPageId = linkPageTargetMatch[1];
        //     }
        // }
        // if (targetAttrPageId === pageId || (pageId === 'detail-produk-page' && targetAttrPageId === 'produk-page')) {
        //    link.classList.add('your-mobile-active-class'); // Tambahkan kelas aktif Anda
        // }
    });
}

window.navigateTo = function(pageId) {
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    } else {
        console.error(`Target page dengan ID '${pageId}' tidak ditemukan. Mengalihkan ke Home.`);
        document.getElementById('home-page').classList.remove('hidden');
        pageId = 'home-page';
    }

    if (pageId === 'home-page') {
        loadProducts(allProducts.filter(p => p.popular), 'popular-products-container', 4);
        loadProducts(allProducts.filter(p => p.newArrival), 'featured-products-container', 8);
        if(document.getElementById('all-products-container')) document.getElementById('all-products-container').innerHTML = '';
        if(document.getElementById('promotions-container')) document.getElementById('promotions-container').innerHTML = '';
        if(document.getElementById('updates-container')) document.getElementById('updates-container').innerHTML = '';
    } else if (pageId === 'produk-page') {
        currentFilter = 'all';
        updateFilterButtonsUI();
        loadProducts(allProducts, 'all-products-container');
        if(document.getElementById('popular-products-container')) document.getElementById('popular-products-container').innerHTML = '';
        if(document.getElementById('featured-products-container')) document.getElementById('featured-products-container').innerHTML = '';
    } else if (pageId === 'promosi-page') {
        loadPromotions();
        if(document.getElementById('popular-products-container')) document.getElementById('popular-products-container').innerHTML = '';
        if(document.getElementById('featured-products-container')) document.getElementById('featured-products-container').innerHTML = '';
        if(document.getElementById('all-products-container')) document.getElementById('all-products-container').innerHTML = '';
    } else if (pageId === 'update-page') {
        loadUpdates();
        if(document.getElementById('popular-products-container')) document.getElementById('popular-products-container').innerHTML = '';
        if(document.getElementById('featured-products-container')) document.getElementById('featured-products-container').innerHTML = '';
        if(document.getElementById('all-products-container')) document.getElementById('all-products-container').innerHTML = '';
    } else if (pageId === 'keranjang-page') {
        displayCartItems();
    }
    updateActiveLink(pageId);
    window.scrollTo(0, 0);
    // Panggil closeMobileMenu jika fungsi tersebut sudah didefinisikan (untuk menu baru)
    if (typeof window.closeMobileMenu === 'function') { 
        window.closeMobileMenu();
    }
};

const searchInput = document.getElementById('product-search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const produkPage = document.getElementById('produk-page');
        if (produkPage && !produkPage.classList.contains('hidden')) {
            const filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            loadProducts(filteredProducts, 'all-products-container');
        }
    });
}

let currentFilter = 'all';
const filterButtons = document.querySelectorAll('.filter-button');

function updateFilterButtonsUI() {
    filterButtons.forEach(button => {
        const buttonCategoryAttr = button.getAttribute('onclick');
        let buttonCategoryInAttr = '';
        if (buttonCategoryAttr) {
            const match = buttonCategoryAttr.match(/filterProducts\('([^']+)'\)/);
            if (match && match[1]) {
                buttonCategoryInAttr = match[1].toLowerCase();
            }
        }
        if (buttonCategoryInAttr === currentFilter) {
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            button.classList.remove('active', 'bg-blue-600', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-700');
        }
    });
}

window.filterProducts = function(category) {
    currentFilter = category.toLowerCase();
    updateFilterButtonsUI();
    const produkPage = document.getElementById('produk-page');
    if (produkPage && !produkPage.classList.contains('hidden')) {
        if (currentFilter === 'all') {
            loadProducts(allProducts, 'all-products-container');
        } else {
            const filtered = allProducts.filter(product => product.category.toLowerCase() === currentFilter);
            loadProducts(filtered, 'all-products-container');
        }
    }
};

// --- AWAL BAGIAN LOGIKA MENU MOBILE YANG DIPERBARUI ---
// Variabel-variabel ini dideklarasikan di scope global agar bisa diakses oleh DOMContentLoaded juga
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay'); 
const mobileMenuYearEl = document.getElementById('mobile-menu-year'); 

if (mobileMenuButton && mobileMenu && mobileMenuCloseButton && mobileMenuOverlay) {
    mobileMenuButton.addEventListener('click', () => {
        // Tampilkan menu (geser dari kiri ke posisi normal)
        mobileMenu.classList.remove('-translate-x-full'); // Hapus kelas yang menyembunyikan ke kiri
        mobileMenu.classList.add('translate-x-0');       // Tambah kelas untuk posisi normal
        
        // Tampilkan overlay
        mobileMenuOverlay.classList.remove('hidden');    // Hapus kelas 'hidden'
        setTimeout(() => { // Beri sedikit delay agar transisi opacity berjalan setelah 'display: block'
            mobileMenuOverlay.classList.remove('opacity-0'); // Hapus kelas opacity 0
            mobileMenuOverlay.classList.add('opacity-100');  // Tambah kelas opacity 100
        }, 10); // 10 milidetik sudah cukup

        document.body.classList.add('overflow-hidden'); // Mencegah scroll body di belakang menu
    });

    // Fungsi terpusat untuk menutup menu
    const closeMenuFunction = () => {
        // Sembunyikan menu (geser kembali ke kiri)
        mobileMenu.classList.remove('translate-x-0');       // Hapus kelas posisi normal
        mobileMenu.classList.add('-translate-x-full');      // Tambah kelas untuk sembunyi ke kiri

        // Sembunyikan overlay
        mobileMenuOverlay.classList.remove('opacity-100');  // Hapus kelas opacity 100
        mobileMenuOverlay.classList.add('opacity-0');       // Tambah kelas opacity 0
        setTimeout(() => { // Tunggu transisi opacity selesai sebelum menyembunyikan elemen
            mobileMenuOverlay.classList.add('hidden');      // Tambah kelas 'hidden'
        }, 300); // Sesuaikan dengan durasi transisi opacity (0.3s)

        document.body.classList.remove('overflow-hidden'); // Izinkan scroll body kembali
    };

    mobileMenuCloseButton.addEventListener('click', closeMenuFunction);
    
    // Listener untuk overlay (jika ada elemennya dan ingin menutup menu saat overlay diklik)
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenuFunction);
    }
    
    // Definisikan window.closeMobileMenu agar bisa dipanggil dari HTML (onclick pada link menu)
    window.closeMobileMenu = function() {
        // Cek apakah menu benar-benar ada dan sedang terbuka (memiliki kelas translate-x-0)
        if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) { 
            closeMenuFunction();
        }
    };

} else {
    // Fallback atau pesan error jika elemen menu tidak ditemukan
    // Ini penting agar `window.closeMobileMenu` tetap terdefinisi dan tidak menyebabkan error
    // jika dipanggil dari `MapsTo` meskipun elemen menu tidak ada.
    console.warn("Satu atau lebih elemen penting untuk menu mobile (tombol buka/tutup, menu utama, atau overlay) tidak ditemukan. Fungsi menu mobile mungkin tidak bekerja dengan benar.");
    window.closeMobileMenu = function() {
        // Implementasi fallback minimal jika elemen tidak lengkap
        if (mobileMenu) { 
             mobileMenu.classList.remove('translate-x-0');
             mobileMenu.classList.add('-translate-x-full'); // Coba sembunyikan menu jika ada
        }
         if (mobileMenuOverlay) { // Coba sembunyikan overlay juga
            mobileMenuOverlay.classList.add('opacity-0', 'hidden');
        }
        document.body.classList.remove('overflow-hidden'); // Selalu coba hapus ini
    };
}
// --- AKHIR BAGIAN LOGIKA MENU MOBILE YANG DIPERBARUI ---

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSummaryContainer = document.getElementById('cart-summary-container');
    if (!cartItemsContainer) {
        return;
    }
    // Tampilkan tombol checkout statis jika ada item di keranjang
    const checkoutButtonStatic = document.getElementById('checkout-wa-button');


    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-600 text-center py-8">Keranjang Anda saat ini kosong.</p>';
        if (cartSummaryContainer) {
            cartSummaryContainer.innerHTML = '';
        }
        if (checkoutButtonStatic) { // Sembunyikan tombol checkout statis jika keranjang kosong
            checkoutButtonStatic.style.display = 'none';
        }
        return;
    }

    if (checkoutButtonStatic) { // Tampilkan tombol checkout statis jika ada item
        checkoutButtonStatic.style.display = 'inline-flex'; // Atau 'block', sesuai layout Anda
    }

    let content = '<h2 class="text-2xl font-semibold mb-6 text-gray-800">Isi Keranjang Anda:</h2>';
    content += '<div class="space-y-4">';
    let totalAmount = 0;
    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        totalAmount += subtotal;
        content += `
            <div class="cart-item flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div class="flex items-center space-x-3 sm:space-x-4">
                    <img src="${item.imageUrl}" alt="${item.name}" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md">
                    <div>
                        <h3 class="text-md sm:text-lg font-medium text-gray-800">${item.name}</h3>
                        <p class="text-xs sm:text-sm text-gray-500">Kuantitas: ${item.quantity}</p>
                        <p class="text-xs sm:text-sm text-gray-500">Harga: Rp ${item.price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-md sm:text-lg font-semibold text-blue-600">Rp ${subtotal.toLocaleString('id-ID')}</p>
                    <button onclick="window.removeFromCartDemo(${item.id})" class="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium mt-1 hover:underline">Hapus</button>
                </div>
            </div>
        `;
    });
    content += '</div>';
    cartItemsContainer.innerHTML = content;

    if (cartSummaryContainer) {
        cartSummaryContainer.innerHTML = `
            <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex justify-between items-center mb-6">
                    <p class="text-lg sm:text-xl font-semibold text-gray-800">Total Keseluruhan:</p>
                    <p class="text-xl sm:text-2xl font-bold text-blue-600">Rp ${totalAmount.toLocaleString('id-ID')}</p>
                </div>
                </div>
        `;
    }
}

window.removeFromCartDemo = function(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    displayCartItems();
    console.log("Item dihapus (Demo). Isi Keranjang:", cartItems);
};

const NOMOR_WHATSAPP_TOKO = '6285155344733';

function getCartItemsDetailsForWhatsApp() {
    if (!cartItems || cartItems.length === 0) {
        return [];
    }
    return cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
    }));
}

window.sendWhatsAppOrder = function() {
    const itemsForMessage = getCartItemsDetailsForWhatsApp();
    if (itemsForMessage.length === 0) {
        alert('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
        if (typeof window.navigateTo === 'function') {
            window.navigateTo('produk-page');
        }
        return;
    }
    let messageText = "Halo VapeStore,\n\nSaya ingin memesan item berikut dari keranjang saya:\n\n";
    let estimatedTotal = 0;
    itemsForMessage.forEach(item => {
        const itemName = item.name || 'Nama Produk Tidak Diketahui';
        const itemQuantity = item.quantity || 1;
        const itemPrice = item.price || 0;
        const itemSubtotal = itemQuantity * itemPrice;
        messageText += `- ${itemName}\n`;
        messageText += `  Kuantitas: ${itemQuantity}\n`;
        if (itemPrice > 0) {
            messageText += `  Harga Satuan: Rp ${itemPrice.toLocaleString('id-ID')}\n`;
            messageText += `  Subtotal: Rp ${itemSubtotal.toLocaleString('id-ID')}\n\n`;
            estimatedTotal += itemSubtotal;
        } else {
            messageText += `\n`;
        }
    });
    if (estimatedTotal > 0) {
        messageText += `Perkiraan Total Pesanan: Rp ${estimatedTotal.toLocaleString('id-ID')}\n\n`;
    }
    messageText += "Mohon informasinya lebih lanjut mengenai ketersediaan stok dan detail pembayaran.\n\nTerima kasih!";
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/${NOMOR_WHATSAPP_TOKO}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
};

document.addEventListener('DOMContentLoaded', () => {
    allProducts.forEach(p => {
        if (p.price && typeof p.price === 'string') {
            p.numericPrice = parseInt(p.price.replace(/[^0-9]/g, ''));
        } else if (typeof p.price === 'number') {
            p.numericPrice = p.price;
        } else {
            p.numericPrice = 0;
        }
        if (!p.spesifikasi) p.spesifikasi = {};
        if (!p.isiPaket) p.isiPaket = [];
    });

    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // --- Update tahun di footer menu mobile ---
    // mobileMenuYearEl sudah dideklarasikan di scope global jadi bisa diakses di sini
    if (mobileMenuYearEl) { 
        mobileMenuYearEl.textContent = new Date().getFullYear();
    }
    // --- Akhir Update tahun ---

    updateFilterButtonsUI();
    window.navigateTo('home-page');
    window.addToCartDemo = addToCartDemo; // Pastikan ini ada jika addToCartDemo tidak di window scope
});
