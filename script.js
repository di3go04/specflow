// 1. INICIALIZACIÓN SUPABASE (FIX SINTAXIS)
const _supabaseUrl = 'https://dgldvmceeqjlygojpqzx.supabase.co';
const _supabaseKey = 'sb_publishable_hZyM1KCgrJac8HVtrsROQg_yB_6V0BC';
const supabaseClient = window.supabase.createClient(_supabaseUrl, _supabaseKey);

// 2. BASE DE DATOS MAESTRA (24 PRODUCTOS CON SPECS)
const products = [
    // --- HARDWARE ---
    { id: 'h1', nombre: 'NVIDIA GeForce RTX 5070 Ti', precio: 4850000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773617071/81-U0K9a7mL._AC_SX466__aii7od.jpg', cat: 'hardware', specs: { vram: '16GB GDDR7', arquitectura: 'Blackwell', watts: '285W' } },
    { id: 'h2', nombre: 'NVIDIA GeForce GT 730', precio: 350000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773617065/71zKqU8xrML._AC_UY218__mhwbeu.jpg', cat: 'hardware', specs: { vram: '2GB DDR3', arquitectura: 'Kepler', watts: '38W' } },
    { id: 'h3', nombre: 'Fanxiang 64GB RAM DDR5', precio: 1250000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773617061/71qMNPhYlCL._AC_SY300_SX300_QL70_FMwebp__w6thgu.webp', cat: 'hardware', specs: { capacidad: '64GB (2x32)', velocidad: '6000 MT/s', formato: 'DDR5' } },
    { id: 'h4', nombre: 'Radeon RX 9060 Graphics', precio: 3150000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773616926/71L08TQedJL._AC_SY300_SX300_QL70_FMwebp__chkqqx.webp', cat: 'hardware', specs: { vram: '12GB GDDR6', arquitectura: 'RDNA 4', watts: '225W' } },
    { id: 'h5', nombre: 'AMD Ryzen 7 Processor', precio: 1850000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773616920/71aHvYUgX1L._AC_UY218__s5mrg6.jpg', cat: 'hardware', specs: { nucleos: '8 Cores', arquitectura: 'Zen 4', watts: '105W' } },
    { id: 'h6', nombre: 'G.Skill Trident Z RGB RAM', precio: 750000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773616918/61l4EStxhnL._AC_UY218__pgruby.jpg', cat: 'hardware', specs: { capacidad: '32GB (2x16)', velocidad: '6400 MT/s', formato: 'DDR5' } },
    { id: 'h7', nombre: 'Intel Core i7 Processor', precio: 1650000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773616915/51gf0NAUHkL._AC_UY218__aifutv.jpg', cat: 'hardware', specs: { nucleos: '20 Cores', arquitectura: 'Raptor Lake', watts: '125W' } },
    { id: 'h8', nombre: 'Gigastone Desktop RAM', precio: 420000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773616911/510V6PbPGrL._AC_UY218__mw6cbz.jpg', cat: 'hardware', specs: { capacidad: '16GB', velocidad: '3200 MHz', formato: 'DDR4' } },

    // --- MÓVILES ---
    { id: 'm1', nombre: 'Samsung Galaxy S24 Ultra', precio: 5400000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624699/descarga_uookmj.jpg', cat: 'moviles', specs: { pantalla: '6.8" AMOLED 120Hz', chip: 'Snapdragon 8 Gen 3', camara: '200MP + 50MP + 12MP' } },
    { id: 'm2', nombre: 'iPhone 15 Pro Max', precio: 5200000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624696/descarga_7_xemgdc.jpg', cat: 'moviles', specs: { pantalla: '6.7" Super Retina XDR', chip: 'A17 Pro Bionic', camara: '48MP + 12MP + 12MP' } },
    { id: 'm3', nombre: 'Motorola Edge 50 Pro', precio: 2900000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624695/descarga_6_sygzsl.jpg', cat: 'moviles', specs: { pantalla: '6.7" pOLED 144Hz', chip: 'Snapdragon 7 Gen 3', camara: '50MP + 13MP + 10MP' } },
    { id: 'm4', nombre: 'Asus ROG Phone 8', precio: 4500000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624691/descarga_4_jiyvqw.jpg', cat: 'moviles', specs: { pantalla: '6.78" LTPO 165Hz', chip: 'Snapdragon 8 Gen 3', camara: '50MP + 32MP + 13MP' } },
    { id: 'm5', nombre: 'Xiaomi 14 Ultra', precio: 4800000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624687/descarga_2_q6ovv0.jpg', cat: 'moviles', specs: { pantalla: '6.73" LTPO AMOLED', chip: 'Snapdragon 8 Gen 3', camara: '50MP Quad Leica' } },

    // --- PC Y PERIFÉRICOS ---
    { id: 'p1', nombre: 'PC Gamer Ultimate Setup', precio: 8500000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624652/descarga_1_f8b7c1.jpg', cat: 'perifericos', specs: { cpu: 'Intel i9-14900KF', gpu: 'NVIDIA RTX 4090', ram: '128GB DDR5' } },
    { id: 'p2', nombre: 'Asus ROG Strix Desktop', precio: 7900000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624652/descarga_14_wozrvq.jpg', cat: 'perifericos', specs: { cpu: 'AMD Ryzen 9 7950X', gpu: 'NVIDIA RTX 4080', ram: '64GB DDR5' } },
    { id: 'p3', nombre: 'PC Gamer MSI Aegis', precio: 9200000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624653/descarga_2_w8qegt.jpg', cat: 'perifericos', specs: { cpu: 'Intel i7-14700K', gpu: 'NVIDIA RTX 4070 Ti', ram: '32GB DDR5' } },
    { id: 'p4', nombre: 'Micrófono Shure MV7', precio: 1050000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624653/descarga_3_naqmhu.jpg', cat: 'perifericos', specs: {} },
    { id: 'p5', nombre: 'Audífonos HyperX Cloud II', precio: 650000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624659/descarga_5_kdy3bx.jpg', cat: 'perifericos', specs: {} },
    { id: 'p6', nombre: 'Mouse Logitech G502 Hero', precio: 450000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624661/descarga_6_dvizcg.jpg', cat: 'perifericos', specs: {} },
    { id: 'p7', nombre: 'Teclado Razer BlackWidow V4', precio: 3200000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624661/descarga_7_yl2ey6.jpg', cat: 'perifericos', specs: {} },
    { id: 'p8', nombre: 'Monitor Samsung Odyssey G7', precio: 1800000, img: 'https://res.cloudinary.com/dkctv9kqz/image/upload/v1773624662/descarga_g0hlmb.jpg', cat: 'perifericos', specs: {} }
];

// 3. ESTADO GLOBAL
let cart = JSON.parse(localStorage.getItem('sf_cart_master_final')) || [];
let comparisonList = JSON.parse(localStorage.getItem('sf_comparison_list')) || [];

// 4. LÓGICA DE REGISTRO
async function ejecutarRegistro() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (!email || !password) return showToast("Campos vacíos.");

    const { error } = await supabaseClient.auth.signUp({ 
        email, password, options: { emailRedirectTo: null } 
    });

    if (error) {
        showToast("Denegado: " + error.message);
    } else {
        document.getElementById('modal-verification').style.display = 'flex';
    }
}

// 5. FUNCIÓN DE LOGIN
async function ejecutarLogin() {
    const email = document.getElementById('log-email').value;
    const password = document.getElementById('log-password').value;

    // --- ADMIN BYPASS LOGIC (PRIORIDAD ABSOLUTA) ---
    if (email === 'admin@gmail.com' && password === 'admin') {
        localStorage.setItem('sf_admin_session', 'true');
        showToast("ACCESO MAESTRO DETECTADO");
        unlockApp();
        return; // Fin de ejecución para admin
    }

    // Validación de Bloqueo (Solo usuarios estándar)
    const { data: userProfile } = await supabaseClient.from('users').select('is_blocked').eq('email', email).single();
    if (userProfile && userProfile.is_blocked) {
        showToast("CUENTA BLOQUEADA: ACCESO REVOCADO");
        return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    
    if (error) {
        showToast("Fallo de Acceso: " + error.message);
        return;
    }

    // Validación de Verificación (Solo usuarios estándar)
    if (data.user && !data.user.email_confirmed_at) {
        await supabaseClient.auth.signOut();
        document.getElementById('modal-verification').style.display = 'flex';
        return;
    }
}

// 6. CONTROLADORES UI / SPA
function lockApp() {
    document.getElementById('modal-auth').style.display = 'flex';
    document.getElementById('app-content').style.display = 'none';
}

function unlockApp() {
    document.getElementById('modal-auth').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    
    // Verificar sesión admin local
    const isAdmin = localStorage.getItem('sf_admin_session') === 'true';
    const adminBtn = document.getElementById('btn-admin-panel');
    if (adminBtn) adminBtn.style.display = isAdmin ? 'inline-block' : 'none';

    navigateTo('hero');
    renderAllCatalogs();
    updateCartVisuals();
}

function toggleAuth(type) {
    const isReg = type === 'register';
    const title = document.getElementById('auth-main-title');
    const subtitle = document.getElementById('auth-toggle-subtitle');
    
    document.getElementById('register-panel').style.display = isReg ? 'block' : 'none';
    document.getElementById('login-panel').style.display = isReg ? 'none' : 'block';
    
    if (isReg) {
        title.innerText = "REGISTRARSE";
        subtitle.innerText = "YA TENGO CUENTA";
        subtitle.onclick = () => toggleAuth('login');
    } else {
        title.innerText = "INICIAR SESIÓN";
        subtitle.innerText = "REGISTRARSE";
        subtitle.onclick = () => toggleAuth('register');
    }
}

function navigateTo(id) {
    // Escondemos todas las secciones principales
    document.querySelectorAll('main section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none'; // Aseguramos limpieza total
    });
    
    const target = document.getElementById(`${id}-section`);
    const hero = document.getElementById('hero-section');
    const isHero = id === 'hero';

    if (target) {
        target.classList.add('active');
        target.style.display = isHero ? 'flex' : 'block';
    }

    // El Hero solo se muestra en el Home
    if (hero) {
        hero.style.display = isHero ? 'flex' : 'none';
        if (isHero) hero.classList.add('active');
    }

    // Manejo de padding para impacto 100vh o contenido denso
    const appContent = document.getElementById('app-content');
    if (isHero) {
        appContent.style.paddingTop = '0';
    } else {
        appContent.style.paddingTop = '100px';
    }

    if (id === 'comparator') renderComparisonSection();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAllCatalogs() {
    ['hardware', 'moviles', 'perifericos'].forEach(cat => {
        const grid = document.getElementById(`${cat}-grid`);
        if (!grid) return;
        const items = products.filter(p => p.cat === cat);
        grid.innerHTML = items.map(p => {
            let specHtml = '';
            
            // LÓGICA DE VISUALIZACIÓN POR CATEGORÍA
            if (cat === 'moviles') {
                specHtml = `
                    <div class="mobile-specs">
                        <div class="spec-item"><span class="spec-label">PANTALLA:</span> ${p.specs.pantalla}</div>
                        <div class="spec-item"><span class="spec-label">CHIP:</span> ${p.specs.chip}</div>
                        <div class="spec-item"><span class="spec-label">CÁMARA:</span> ${p.specs.camara}</div>
                    </div>
                `;
            } else if (cat === 'hardware') {
                specHtml = `
                    <div class="mobile-specs">
                        <div class="spec-item"><span class="spec-label">VRAM / CAPACIDAD:</span> ${p.specs.vram || p.specs.capacidad}</div>
                        <div class="spec-item"><span class="spec-label">ARQUITECTURA / VELOCIDAD:</span> ${p.specs.arquitectura || p.specs.velocidad}</div>
                        <div class="spec-item"><span class="spec-label">WATTS / FORMATO:</span> ${p.specs.watts || p.specs.formato}</div>
                    </div>
                `;
            } else if (cat === 'perifericos' && (p.id === 'p1' || p.id === 'p2' || p.id === 'p3')) {
                specHtml = `
                    <div class="mobile-specs">
                        <div class="spec-item"><span class="spec-label">PROCESADOR:</span> ${p.specs.cpu}</div>
                        <div class="spec-item"><span class="spec-label">GRÁFICA:</span> ${p.specs.gpu}</div>
                        <div class="spec-item"><span class="spec-label">RAM:</span> ${p.specs.ram}</div>
                    </div>
                `;
            }

            return `
                <div class="product-card">
                    <div class="img-container">
                        <img src="${p.img}" alt="${p.nombre}">
                    </div>
                    <h3>${p.nombre}</h3>
                    ${specHtml}
                    <div class="price">$${p.precio.toLocaleString()}</div>
                    <div class="card-actions" style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn-cyber" style="padding: 0.8rem; font-size: 0.75rem; flex: 1;" onclick="addToCompare('${p.id}')">COMPARAR</button>
                        <button class="btn-cyber" style="padding: 0.8rem; font-size: 0.75rem; flex: 1; background: var(--neon-aqua); color: #000;" onclick="addToCart('${p.id}')">COMPRAR</button>
                    </div>
                </div>
            `;
        }).join('');
    });
    renderComparisonSection(); 
}

function renderComparisonSection() {
    const section = document.getElementById('comparator-section');
    if (!section) return;

    for (let i = 0; i < 2; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if (!slot) continue;

        const p = comparisonList[i];
        if (p) {
            slot.innerHTML = `
                <div class="slot-info">
                    <button class="remove-btn" title="Quitar producto" onclick="removeFromCompare(${i})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <img src="${p.img}" alt="${p.nombre}">
                    <h4>${p.nombre}</h4>
                </div>
            `;
            slot.classList.add('has-product');
        } else {
            slot.innerHTML = `
                <div class="slot-placeholder">
                    <div class="scan-line"></div>
                    <i class="fas fa-plus pulse-icon"></i>
                </div>
            `;
            slot.classList.remove('has-product');
        }
    }
}

function addToCompare(pid) {
    if (comparisonList.length >= 2) {
        return showToast("Solo puedes comparar 2 productos. Elimina uno para continuar.");
    }

    if (comparisonList.some(item => item.id === pid)) {
        return showToast("Este producto ya está en el centro de análisis.");
    }

    const p = products.find(x => x.id === pid);
    comparisonList.push(p);
    localStorage.setItem('sf_comparison_list', JSON.stringify(comparisonList));
    
    renderComparisonSection();
    navigateTo('comparator');
    showToast(`Elemento añadido al análisis: ${p.nombre}`);
}

function removeFromCompare(index) {
    comparisonList.splice(index, 1);
    localStorage.setItem('sf_comparison_list', JSON.stringify(comparisonList));
    renderComparisonSection();
}


function startAnalysis() {
    if (comparisonList.length < 2) return showToast("Por favor selecciona 2 productos.");
    
    const p1 = comparisonList[0];
    const p2 = comparisonList[1];
    const container = document.getElementById('analysis-table-container');
    
    // Puntuaciones ficticias basadas en el precio/tipo
    const score1 = Math.floor(82 + (p1.precio / 1000000) * 2.5);
    const score2 = Math.floor(82 + (p2.precio / 1000000) * 2.5);

    // Mapeo inteligente de specs técnicas
    const getSpec = (p, keys) => {
        for (let k of keys) {
            if (p.specs[k]) return p.specs[k];
        }
        return "N/A / Ver detalles";
    };

    container.innerHTML = `
        <table class="analysis-table">
            <thead>
                <tr>
                    <th>ATRIBUTO TÉCNICO</th>
                    <td><img src="${p1.img}"><br><strong style="color: var(--neon-aqua);">${p1.nombre}</strong></td>
                    <td><img src="${p2.img}"><br><strong style="color: var(--neon-aqua);">${p2.nombre}</strong></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>PROCESAMIENTO / CORE</th>
                    <td>${getSpec(p1, ['cpu', 'chip', 'nucleos'])}</td>
                    <td>${getSpec(p2, ['cpu', 'chip', 'nucleos'])}</td>
                </tr>
                <tr>
                    <th>MEMORIA / VOLUMEN</th>
                    <td>${getSpec(p1, ['ram', 'memoria', 'capacidad'])}</td>
                    <td>${getSpec(p2, ['ram', 'memoria', 'capacidad'])}</td>
                </tr>
                <tr>
                    <th>INTERFAZ / VISUAL</th>
                    <td>${getSpec(p1, ['gpu', 'pantalla', 'panel', 'camara'])}</td>
                    <td>${getSpec(p2, ['gpu', 'pantalla', 'panel', 'camara'])}</td>
                </tr>
                <tr>
                    <th>ENERGÍA / CONSUMO</th>
                    <td>${getSpec(p1, ['consumo', 'bateria', 'tdp', 'carga'])}</td>
                    <td>${getSpec(p2, ['consumo', 'bateria', 'tdp', 'carga'])}</td>
                </tr>
                <tr>
                    <th>INVERSIÓN (COP)</th>
                    <td style="font-weight: 900; font-size: 1.1rem;">${formatCurrency(p1.precio)}</td>
                    <td style="font-weight: 900; font-size: 1.1rem;">${formatCurrency(p2.precio)}</td>
                </tr>
                <tr>
                    <th>SCORE DE RENDIMIENTO</th>
                    <td><div class="score-tag">${score1 > 100 ? 100 : score1}%</div></td>
                    <td><div class="score-tag">${score2 > 100 ? 100 : score2}%</div></td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById('analysis-modal').style.display = 'flex';
}

// 8. DETALLES MODAL
function showDetails(pid) {
    const p = products.find(x => x.id === pid);
    const content = document.getElementById('details-content');
    content.innerHTML = `
        <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
                <img src="${p.img}" style="width: 100%; border-radius: 10px; background: #000; padding: 2rem;">
            </div>
            <div style="flex: 1.5; min-width: 300px;">
                <h2 style="color: var(--neon-aqua); margin-bottom: 1rem;">${p.nombre}</h2>
                <div class="price" style="font-size: 2rem;">${formatCurrency(p.precio)}</div>
                <h3 style="margin: 2rem 0 1rem; font-size: 0.8rem; letter-spacing: 2px; color: #444;">DATA SHEET</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    ${Object.entries(p.specs).map(([k, v]) => `
                        <div style="border-bottom: 1px solid #1a1a1a; padding: 0.5rem 0;">
                            <span style="display: block; font-size: 0.6rem; color: #555; text-transform: uppercase;">${k}</span>
                            <span style="font-size: 0.9rem; font-weight: bold;">${v}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.getElementById('details-modal').style.display = 'flex';
}

function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// 9. CARRITO Y EXTRAS
function addToCart(pid) {
    const p = products.find(x => x.id === pid);
    cart.push(p);
    localStorage.setItem('sf_cart_master_final', JSON.stringify(cart));
    updateCartVisuals();
    showToast(`Producto añadido al análisis: ${p.nombre}`);
}

function updateCartVisuals() {
    const counter = document.getElementById('cart-count');
    if (counter) counter.innerText = cart.length;
}

function openCart() {
    if (cart.length === 0) return showToast("Bolsa vacía.");
    renderCartSummary();
    document.getElementById('cart-modal').style.display = 'flex';
}

function renderCartSummary() {
    const content = document.getElementById('cart-summary-content');
    const totalLabel = document.getElementById('cart-total-value');
    
    let total = 0;
    content.innerHTML = cart.map((item, index) => {
        total += item.precio;
        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.nombre}">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>${item.cat.toUpperCase()} | 1 Unidad</p>
                </div>
                <div class="cart-item-price" style="display: flex; align-items: center; gap: 1rem;">
                    <span>${formatCurrency(item.precio)}</span>
                    <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #ff3e3e; cursor: pointer; font-size: 1rem;" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');
    
    totalLabel.innerText = formatCurrency(total);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('sf_cart_master_final', JSON.stringify(cart));
    updateCartVisuals();
    renderCartSummary();
    if (cart.length === 0) closeModal('cart-modal');
}

function proceedToCheckout() {
    closeModal('cart-modal');
    document.getElementById('checkout-modal').style.display = 'flex';
}

function finishOrder(method) {
    showToast(`Enlazando con pasarela ${method}...`);
    setTimeout(() => {
        showToast("¡ADQUISICIÓN CONFIRMADA!");
        cart = [];
        localStorage.removeItem('sf_cart_master_final');
        updateCartVisuals();
        closeModal('checkout-modal');
    }, 1500);
}

// 10. SYSTEMA TOAST
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function logoutUser() { 
    localStorage.removeItem('sf_admin_session');
    supabaseClient.auth.signOut().then(() => location.reload()); 
}

// 12. LÓGICA DE ADMINISTRADOR (NÚCLEO)
function openAdminModal() {
    renderAdminPanel();
    fetchAdminUsers(); // Cargar identidades
    const modal = document.getElementById('admin-modal');
    if (modal) modal.style.display = 'flex';
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(`admin-tab-${tabName}`).classList.add('active');
    
    if (tabName === 'identities') fetchAdminUsers();
}

async function fetchAdminUsers() {
    const { data, error } = await supabaseClient.from('users').select('*').order('created_at', { ascending: false });
    if (error) return console.error(error);

    const counter = document.getElementById('admin-user-count');
    if (counter) counter.innerText = data.length;

    const container = document.getElementById('admin-users-content');
    if (!container) return;

    let html = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Identidad / Email</th>
                    <th>Vinculación</th>
                    <th>Estado</th>
                    <th>Seguridad</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.forEach(user => {
        const statusClass = user.is_blocked ? 'blocked' : 'active';
        const statusText = user.is_blocked ? 'REVOCADO' : 'ACTIVO';
        const actionText = user.is_blocked ? 'HIBILITAR' : 'REVOCAR ACCESO';
        const actionClass = user.is_blocked ? 'activate' : 'revoke';

        html += `
            <tr>
                <td>
                    <div style="font-weight: bold; color: #eee;">${user.email}</div>
                    <div style="font-size: 0.6rem; color: #444;">ID: ${user.id}</div>
                </td>
                <td><span style="font-family: monospace; color: #666;">${new Date(user.created_at).toLocaleDateString()}</span></td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    <button class="btn-admin-action ${actionClass}" onclick="toggleUserBlock('${user.id}', ${user.is_blocked})">
                        ${actionText}
                    </button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

async function toggleUserBlock(userId, currentStatus) {
    const { error } = await supabaseClient.from('users').update({ is_blocked: !currentStatus }).eq('id', userId);
    if (!error) {
        showToast(currentStatus ? "Acceso Restablecido" : "Identidad Revocada");
        fetchAdminUsers();
    }
}


function renderAdminPanel() {
    const container = document.getElementById('admin-panel-content');
    if (!container) return;

    let html = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Ref</th>
                    <th>Producto</th>
                    <th>Cat</th>
                    <th>Precio (COP)</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    products.forEach((p, index) => {
        html += `
            <tr id="admin-row-${p.id}">
                <td style="color: #444; font-family: monospace;">${p.id}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <img src="${p.img}" class="admin-img-mini">
                        <span>${p.nombre}</span>
                    </div>
                </td>
                <td><span style="font-size: 0.6rem; color: #666; text-transform: uppercase;">${p.cat}</span></td>
                <td>
                    <div class="price-editor">
                        <input type="number" class="price-input" id="price-input-${p.id}" value="${p.precio}" onchange="updateProductPrice('${p.id}', this.value)">
                    </div>
                </td>
                <td>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn-admin-action delete" onclick="deleteMasterProduct('${p.id}', ${index})">Eliminar</button>
                    </div>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function updateProductPrice(id, newPrice) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.precio = parseInt(newPrice);
        showToast(`Precio actualizado: ${product.nombre}`);
        renderAllCatalogs();
    }
}

function deleteMasterProduct(id, index) {
    if (confirm(`¿Eliminar definitivamente ${products[index].nombre}?`)) {
        products.splice(index, 1);
        showToast("Unidad eliminada del catálogo maestro");
        renderAdminPanel();
        renderAllCatalogs();
    }
}
function formatCurrency(v) { return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(v); }

// 11. VISIBILIDAD DE CONTRASEÑA
function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// 10. INICIALIZACIÓN FINAL
document.addEventListener('DOMContentLoaded', () => {
    const bR = document.getElementById('btn-ejecutar-registro');
    if (bR) bR.onclick = ejecutarRegistro;
    const bL = document.getElementById('btn-login');
    if (bL) bL.onclick = ejecutarLogin;



    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (session) {
            unlockApp();
            renderComparisonSection();
        } else {
            lockApp();
        }
    });

    supabaseClient.auth.getSession().then(({ data: { session } }) => {
        if (session) {
            unlockApp();
            renderComparisonSection();
        }
    });
});
