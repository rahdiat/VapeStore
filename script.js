// script.js

// Data Produk (Contoh)
const allProducts = [
    { id: 1, name: 'VapeX Pro Kit', price: 'Rp 750.000', numericPrice: 750000, imageUrl: 'https://placehold.co/400x400/E2E8F0/AAAAAA?text=VapeX+Pro', category: 'Device', popular: true, newArrival: true, description: 'Device canggih dengan fitur lengkap.' },
    { id: 2, name: 'Liquid Berry Blast', price: 'Rp 150.000', numericPrice: 150000, imageUrl: 'https://placehold.co/400x400/FEE2E2/AAAAAA?text=Liquid+Berry', category: 'Liquid', popular: true, newArrival: false, description: 'Rasa berry segar yang nikmat.' },
    { id: 3, name: 'Atomizer Supreme', price: 'Rp 350.000', numericPrice: 350000, imageUrl: 'https://placehold.co/400x400/D1FAE5/AAAAAA?text=Atomizer+Supreme', category: 'Atomizer', popular: false, newArrival: true, description: 'Atomizer kualitas tinggi untuk rasa maksimal.' },
    { id: 4, name: 'Starter Kit Mini', price: 'Rp 400.000', numericPrice: 400000, imageUrl: 'https://placehold.co/400x400/DBEAFE/AAAAAA?text=Starter+Mini', category: 'Device', popular: true, newArrival: false, description: 'Cocok untuk pemula, mudah digunakan.' },
    { id: 5, name: 'Liquid Mango Tango', price: 'Rp 160.000', numericPrice: 160000, imageUrl: 'https://placehold.co/400x400/FEF3C7/AAAAAA?text=Liquid+Mango', category: 'Liquid', popular: false, newArrival: true, description: 'Sensasi mangga tropis yang menyegarkan.' },
    { id: 6, name: 'Coil Master Pack', price: 'Rp 100.000', numericPrice: 100000, imageUrl: 'https://placehold.co/400x400/E0E7FF/AAAAAA?text=Coil+Pack', category: 'Aksesoris', popular: true, newArrival: true, description: 'Pack coil berkualitas untuk berbagai device.' },
    { id: 7, name: 'Advanced Mod XT', price: 'Rp 950.000', numericPrice: 950000, imageUrl: 'https://placehold.co/400x400/DDD6FE/AAAAAA?text=Mod+XT', category: 'Device', popular: false, newArrival: true, description: 'Mod dengan power dan kustomisasi tinggi.' },
    { id: 8, name: 'Liquid Classic Tobacco', price: 'Rp 140.000', numericPrice: 140000, imageUrl: 'https://placehold.co/400x400/F5E8DD/AAAAAA?text=Liquid+Tobacco', category: 'Liquid', popular: true, newArrival: false, description: 'Rasa tembakau klasik yang otentik.' },
];

// Data Promosi (Contoh)
const promotions = [
    { id: 1, title: 'Diskon Akhir Pekan!', description: 'Dapatkan diskon 20% untuk semua device.', imageUrl: 'https://placehold.co/600x600/FECACA/FFFFFF?text=Diskon+20%25', link: '#' },
    { id: 2, title: 'Beli 1 Gratis 1 Liquid', description: 'Promo spesial untuk liquid rasa buah tertentu.', imageUrl: 'https://placehold.co/600x600/A5F3FC/FFFFFF?text=Beli+1+Gratis+1', link: '#' },
    { id: 3, title: 'Paket Bundling Hemat', description: 'Paket device + liquid dengan harga spesial.', imageUrl: 'https://placehold.co/600x600/D8B4FE/FFFFFF?text=Paket+Hemat', link: '#' },
];

// Data Update (Contoh)
const updates = [
    { id: 1, text: 'Stok baru VapeX Pro Kit sudah tersedia! Jangan sampai kehabisan.', imageUrl: 'https://placehold.co/100x100/E2E8F0/AAAAAA?text=VapeX+Pro', timestamp: '2 jam lalu' },
    { id: 2, text: 'Liquid Berry Blast jadi favorit minggu ini! Sudah coba?', timestamp: '1 hari lalu' },
    { id: 3, text: 'Pengumuman: Maintenance website akan dilakukan pada Sabtu malam pukul 23:00 WIB.', timestamp: '3 hari lalu' },
    { id: 4, text: 'Tips & Trik: Cara membersihkan atomizer agar rasa tetap maksimal. Baca selengkapnya di blog kami!', imageUrl: 'https://placehold.co/100x100/D1FAE5/AAAAAA?text=Tips', timestamp: '5 hari lalu' },
];

// --- BAGIAN KERANJANG BELANJA (Contoh Inisialisasi) ---
// Saat ini, keranjang belanja belum memiliki fungsionalitas penuh (tambah/hapus item).
// `cartItems` ini adalah placeholder yang akan digunakan oleh fungsi WhatsApp.
// Idealnya, ini akan dikelola oleh fungsi add-to-cart, remove-from-cart, dll.
let cartItems = [];

// Contoh fungsi untuk menambahkan item ke keranjang (untuk demonstrasi)
// Anda perlu tombol "Tambah ke Keranjang" pada kartu produk untuk memanggil fungsi seperti ini.
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
                price: product.numericPrice, // Menggunakan numericPrice
                quantity: 1,
                imageUrl: product.imageUrl
            });
        }
        alert(`${product.name} telah ditambahkan ke keranjang! (Demo)`);
        console.log("Isi Keranjang (Demo):", cartItems);
        // Anda mungkin ingin memperbarui tampilan keranjang di sini jika sudah ada UI-nya
    }
}
// Anda bisa memodifikasi createProductCard untuk menambahkan tombol yang memanggil addToCartDemo(product.id)

// --- AKHIR BAGIAN KERANJANG BELANJA (Contoh) ---

function createProductCard(product) {
    // Tambahkan tombol "Tambah ke Keranjang" di sini jika diinginkan
    // Contoh: <button onclick="window.addToCartDemo(${product.id})" ... >Tambah ke Keranjang</button>
    return `
        <div class="product-card flex flex-col">
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 sm:h-56 md:h-64 object-cover">
            <div class="p-4 md:p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 mb-1 truncate">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-1">${product.category}</p>
                <p class="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
                <p class="text-gray-500 text-xs mb-3 flex-grow">${product.description.substring(0,50)}...</p>
                <div class="mt-auto space-y-2">
                    <button class="w-full bg-gray-800 hover:bg-black text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
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
    if (!container) return;
    container.innerHTML = '';
    const products = limit ? productsToLoad.slice(0, limit) : productsToLoad;

    const noResultsMessage = document.getElementById('no-results-message');
    if (products.length === 0 && containerId === 'all-products-container' && noResultsMessage) {
        noResultsMessage.classList.remove('hidden');
    } else if (containerId === 'all-products-container' && noResultsMessage) {
        noResultsMessage.classList.add('hidden');
    }

    products.forEach(product => {
        container.innerHTML += createProductCard(product);
    });
}

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
    if (!container) return;
    container.innerHTML = '';
    promotions.forEach(promo => {
        container.innerHTML += createPromotionCard(promo);
    });
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
    if (!container) return;
    container.innerHTML = '';
    updates.forEach(update => {
        container.innerHTML += createUpdateCard(update);
    });
}

const pages = document.querySelectorAll('.page-content');
const navLinksDesktop = document.querySelectorAll('#main-header nav.hidden a.nav-link');
const navLinksMobile = document.querySelectorAll('#mobile-menu nav a');

function updateActiveLink(pageId) {
    const basePageName = pageId.split('-')[0];

    navLinksDesktop.forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.id === `nav-${basePageName}`) {
            link.classList.add('nav-link-active');
        }
    });

    navLinksMobile.forEach(link => {
        const linkPageTargetAttr = link.getAttribute('onclick');
        if (linkPageTargetAttr) {
            const linkPageTargetMatch = linkPageTargetAttr.match(/navigateTo\('([^']+)'\)/);
            if (linkPageTargetMatch && linkPageTargetMatch[1] === pageId) {
                link.classList.add('bg-gray-200', 'text-black', 'font-semibold');
            } else {
                link.classList.remove('bg-gray-200', 'text-black', 'font-semibold');
            }
        }
    });

    if (pageId === 'home-page') {
        navLinksDesktop.forEach(link => link.classList.remove('nav-link-active'));
    }
}

window.navigateTo = function(pageId) {
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // Jika pindah ke halaman keranjang, perbarui tampilan item keranjang
    if (pageId === 'keranjang-page') {
        displayCartItems();
    }

    updateActiveLink(pageId);
    window.scrollTo(0, 0);
};

const searchInput = document.getElementById('product-search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        loadProducts(filteredProducts, 'all-products-container');
    });
}

let currentFilter = 'all';
const filterButtons = document.querySelectorAll('.filter-button');

window.filterProducts = function(category) {
    currentFilter = category.toLowerCase();

    filterButtons.forEach(button => {
        const buttonCategoryAttr = button.getAttribute('onclick');
        let buttonCategory = '';
        if (buttonCategoryAttr) {
            const match = buttonCategoryAttr.match(/filterProducts\('([^']+)'\)/);
            if (match) {
                buttonCategory = match[1].toLowerCase();
            }
        }

        if (buttonCategory === currentFilter) {
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            button.classList.remove('active', 'bg-blue-600', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-700');
        }
    });

    if (currentFilter === 'all') {
        loadProducts(allProducts, 'all-products-container');
    } else {
        const filtered = allProducts.filter(product => product.category.toLowerCase() === currentFilter);
        loadProducts(filtered, 'all-products-container');
    }
};

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu && mobileMenuCloseButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });
    mobileMenuCloseButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
}

window.closeMobileMenu = function() {
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
    }
};


// --- FUNGSI UNTUK MENAMPILKAN ITEM KERANJANG DI HALAMAN KERANJANG ---
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container'); // Pastikan ID ini ada di HTML keranjang Anda
    if (!cartItemsContainer) return;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-600 text-center">Keranjang Anda saat ini kosong.</p>';
        return;
    }

    let content = '<h2 class="text-2xl font-semibold mb-6 text-gray-800">Isi Keranjang Anda:</h2>';
    content += '<div class="space-y-4">';
    let totalAmount = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        totalAmount += subtotal;
        content += `
            <div class="cart-item flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="${item.imageUrl}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                    <div>
                        <h3 class="text-lg font-medium text-gray-800">${item.name}</h3>
                        <p class="text-sm text-gray-500">Kuantitas: ${item.quantity}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-lg font-semibold text-blue-600">Rp ${subtotal.toLocaleString('id-ID')}</p>
                    <button onclick="window.removeFromCartDemo(${item.id})" class="text-red-500 hover:text-red-700 text-sm font-medium mt-1">Hapus</button>
                </div>
            </div>
        `;
    });

    content += '</div>';
    content += `
        <div class="mt-8 pt-6 border-t border-gray-200">
            <div class="flex justify-between items-center">
                <p class="text-xl font-semibold text-gray-800">Total Keseluruhan:</p>
                <p class="text-2xl font-bold text-blue-600">Rp ${totalAmount.toLocaleString('id-ID')}</p>
            </div>
        </div>
    `;
    cartItemsContainer.innerHTML = content;
}

// Contoh fungsi untuk menghapus item dari keranjang (untuk demonstrasi)
window.removeFromCartDemo = function(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    displayCartItems(); // Perbarui tampilan keranjang
    console.log("Item dihapus (Demo). Isi Keranjang:", cartItems);
    if (cartItems.length === 0) {
         // Jika keranjang jadi kosong setelah menghapus, pastikan pesan "keranjang kosong" muncul
        const cartItemsContainer = document.getElementById('cart-items-container');
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '<p class="text-gray-600 text-center">Keranjang Anda saat ini kosong.</p>';
        }
    }
};


// --- FUNGSI-FUNGSI UNTUK WHATSAPP CHECKOUT ---

// PENTING: Ganti dengan nomor WhatsApp toko Anda yang sebenarnya
// (gunakan kode negara di awal tanpa tanda '+' atau '00', contoh: 6281234567890)
const NOMOR_WHATSAPP_TOKO = '6285155344733'; // <<< GANTI DENGAN NOMOR ANDA

// Fungsi untuk mengambil detail item dari variabel global `cartItems`
// Ini akan digunakan oleh `sendWhatsAppOrder`
function getCartItemsDetailsForWhatsApp() {
    // Kita akan menggunakan variabel global `cartItems` yang sudah ada
    if (!cartItems || cartItems.length === 0) {
        return []; // Kembalikan array kosong jika tidak ada item
    }
    // Pastikan formatnya sesuai dengan yang diharapkan oleh sendWhatsAppOrder
    // (name, quantity, price)
    return cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price // `item.price` sudah numerik dari `addToCartDemo`
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

    let messageText = "Halo VapeStore Elegan,\n\nSaya ingin memesan item berikut dari keranjang saya:\n\n";
    let estimatedTotal = 0;

    itemsForMessage.forEach(item => {
        const itemName = item.name || 'Nama Produk Tidak Diketahui';
        const itemQuantity = item.quantity || 1;
        const itemPrice = item.price || 0; // Harga sudah numerik
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

// --- AKHIR FUNGSI-FUNGSI WHATSAPP CHECKOUT ---


document.addEventListener('DOMContentLoaded', () => {
    // Memastikan ada property numericPrice pada allProducts untuk kalkulasi
    allProducts.forEach(p => {
        if (p.price && typeof p.price === 'string') {
            p.numericPrice = parseInt(p.price.replace(/[^0-9]/g, ''));
        } else if (typeof p.price === 'number') {
            p.numericPrice = p.price; // Jika sudah numerik
        } else {
            p.numericPrice = 0; // Default jika format harga tidak dikenali
        }
    });

    loadProducts(allProducts.filter(p => p.popular), 'popular-products-container', 4);
    loadProducts(allProducts.filter(p => p.newArrival), 'featured-products-container', 8);
    loadProducts(allProducts, 'all-products-container');
    loadPromotions();
    loadUpdates();

    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    window.navigateTo('home-page');

    filterButtons.forEach(button => {
        const buttonCategoryAttr = button.getAttribute('onclick');
        let buttonCategory = '';
        if (buttonCategoryAttr) {
            const match = buttonCategoryAttr.match(/filterProducts\('([^']+)'\)/);
            if (match) {
                buttonCategory = match[1].toLowerCase();
            }
        }

        if (buttonCategory === 'all') {
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            button.classList.remove('active', 'bg-blue-600', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-700');
        }
    });

    // Memastikan semua fungsi yang dipanggil dari HTML ada di scope global (window)
    window.addToCartDemo = addToCartDemo;
});