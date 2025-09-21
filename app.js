// 🔥 ULTRA CYBER ADMIN SELECTOR - MIND-BLOWING JAVASCRIPT 🔥

// ADMIN DATA MATRIX
const CYBER_ADMINS = [
    {
        id: 5518423575,
        tag: "roman",
        role: "Владелец",
        status: "active",
        avatar: "👑",
        rating: 5.0,
        efficiency: 95,
        dialogs: 156,
        resolved: 148,
        response_time: "2 мин",
        power_level: 9500,
        cyber_rank: "LEGEND"
    },
    {
        id: 123456789,
        tag: "мукра_адская",
        role: "Администратор", 
        status: "active",
        avatar: "🛡️",
        rating: 4.8,
        efficiency: 89,
        dialogs: 234,
        resolved: 198,
        response_time: "3 мин",
        power_level: 8200,
        cyber_rank: "ELITE"
    },
    {
        id: 987654321,
        tag: "support",
        role: "Техподдержка",
        status: "inactive",
        avatar: "🎧",
        rating: 4.2,
        efficiency: 76,
        dialogs: 89,
        resolved: 67,
        response_time: "8 мин",
        power_level: 6700,
        cyber_rank: "PRO"
    },
    {
        id: 555666777,
        tag: "moderator_1",
        role: "Модератор",
        status: "active",
        avatar: "⚖️",
        rating: 4.6,
        efficiency: 82,
        dialogs: 145,
        resolved: 119,
        response_time: "5 мин",
        power_level: 7400,
        cyber_rank: "EXPERT"
    },
    {
        id: 444333222,
        tag: "helper",
        role: "Помощник",
        status: "busy",
        avatar: "🤝",
        rating: 4.1,
        efficiency: 71,
        dialogs: 67,
        resolved: 48,
        response_time: "12 мин",
        power_level: 5300,
        cyber_rank: "ADVANCED"
    }
];

// ULTRA CYBER APPLICATION CLASS
class UltraCyberApp {
    constructor() {
        this.selectedAdmin = null;
        this.filteredAdmins = [...CYBER_ADMINS];
        this.isLoading = true;
        this.matrixRain = null;
        this.cursorTrail = [];
        this.particles = [];
        this.tg = null;

        this.init();
    }

    async init() {
        console.log("🚀 ИНИЦИАЛИЗАЦИЯ УЛЬТРА КИБЕР СИСТЕМЫ...");

        this.initCursor();
        this.initMatrixRain();
        this.initTelegram();
        this.showLoadingPortal();

        // EPIC LOADING SEQUENCE
        await this.sleep(5000);

        this.hideLoadingPortal();
        this.initApp();
        this.bindEvents();
        this.renderAdmins();

        console.log("✅ КИБЕР СИСТЕМА АКТИВНА!");
    }

    // === LOADING PORTAL ===
    showLoadingPortal() {
        const portal = document.getElementById('loadingPortal');
        if (portal) {
            portal.style.display = 'flex';
        }
    }

    hideLoadingPortal() {
        const portal = document.getElementById('loadingPortal');
        const app = document.getElementById('cyberApp');

        if (portal) {
            portal.classList.add('fade-out');
            setTimeout(() => {
                portal.style.display = 'none';
            }, 2000);
        }

        if (app) {
            setTimeout(() => {
                app.classList.add('active');
            }, 1000);
        }
    }

    // === MATRIX RAIN EFFECT ===
    initMatrixRain() {
        const canvas = document.getElementById('matrixCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const drops = [];
        const columns = Math.floor(canvas.width / 15);

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
        }

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = '12px monospace';

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];

                // Gradient effect
                const gradient = ctx.createLinearGradient(0, drops[i] - 50, 0, drops[i]);
                gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
                gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(0, 255, 255, 1)');

                ctx.fillStyle = gradient;
                ctx.fillText(char, i * 15, drops[i]);

                if (drops[i] > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 1;
            }

            requestAnimationFrame(drawMatrix);
        };

        drawMatrix();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // === CUSTOM CURSOR ===
    initCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.id = 'cursor';
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Add trail effect
            this.createCursorTrail(mouseX, mouseY);
        });

        // Smooth cursor follow
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animateCursor);
        };
        animateCursor();
    }

    createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0)';
        }, 50);

        setTimeout(() => trail.remove(), 500);
    }

    // === TELEGRAM INTEGRATION ===
    initTelegram() {
        if (window.Telegram && window.Telegram.WebApp) {
            this.tg = window.Telegram.WebApp;
            this.tg.ready();
            this.tg.expand();
            console.log("📱 Telegram WebApp подключен!");
        }
    }

    // === APP INITIALIZATION ===
    initApp() {
        this.isLoading = false;
        this.animateStatsCounters();
    }

    // === EVENT BINDING ===
    bindEvents() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            searchInput.addEventListener('focus', () => {
                this.createRippleEffect(searchInput);
            });
        }

        // Selection buttons
        const cancelBtn = document.getElementById('cancelBtn');
        const confirmBtn = document.getElementById('confirmBtn');

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.cancelSelection();
            });
        }

        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                this.confirmSelection();
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });

        // Stats orb interactions
        document.querySelectorAll('.stat-orb').forEach(orb => {
            orb.addEventListener('click', () => {
                this.createOrbExplosion(orb);
            });
        });
    }

    // === ADMIN RENDERING ===
    renderAdmins() {
        const container = document.getElementById('matrixGrid');
        if (!container) return;

        container.innerHTML = '';

        this.filteredAdmins.forEach((admin, index) => {
            const card = this.createAdminCard(admin, index);
            container.appendChild(card);

            // Staggered entrance animation
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 200);
        });
    }

    createAdminCard(admin, index) {
        const card = document.createElement('div');
        card.className = 'admin-card';
        card.dataset.adminId = admin.id;

        const statusClass = admin.status === 'active' ? 'active' : 
                           admin.status === 'busy' ? 'busy' : 'inactive';

        const statusText = admin.status === 'active' ? 'АКТИВЕН' :
                          admin.status === 'busy' ? 'ЗАНЯТ' : 'ОФФЛАЙН';

        card.innerHTML = `
            <div class="card-header">
                <div class="admin-avatar">${admin.avatar}</div>
                <div class="admin-info">
                    <div class="admin-tag">#${admin.tag}</div>
                    <div class="admin-role">${admin.role}</div>
                    <div class="admin-rank">${admin.cyber_rank}</div>
                </div>
            </div>

            <div class="power-meter">
                <div class="power-value">${admin.power_level.toLocaleString()}</div>
                <div class="power-label">УРОВЕНЬ МОЩНОСТИ</div>
            </div>

            <div class="status-display">
                <div class="status-dot ${statusClass}"></div>
                <div class="status-text">${statusText}</div>
            </div>

            <div class="performance-stats">
                <div class="stat-item">
                    <div class="stat-value">${admin.dialogs}</div>
                    <div class="stat-label">Диалогов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${admin.resolved}</div>
                    <div class="stat-label">Решено</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${admin.efficiency}%</div>
                    <div class="stat-label">Эффективность</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${admin.response_time}</div>
                    <div class="stat-label">Ответ</div>
                </div>
            </div>

            <div class="badges-container">
                <div class="badge">${admin.cyber_rank}</div>
                <div class="badge">⭐ ${admin.rating}</div>
            </div>
        `;

        // Click handler
        card.addEventListener('click', () => {
            this.selectAdmin(admin, card);
        });

        // Hover effects
        card.addEventListener('mouseenter', () => {
            this.createHoverEffect(card);
        });

        return card;
    }

    // === ADMIN SELECTION ===
    selectAdmin(admin, cardElement) {
        // Clear previous selection
        document.querySelectorAll('.admin-card.selected').forEach(card => {
            card.classList.remove('selected');
        });

        // Select new admin
        cardElement.classList.add('selected');
        this.selectedAdmin = admin;

        // Show selection vortex
        this.showSelectionVortex();

        // Epic effects
        this.createParticleExplosion(cardElement);
        this.createScreenShake();

        console.log(`⚡ АДМИНИСТРАТОР ${admin.tag.toUpperCase()} ВЫБРАН!`);
    }

    showSelectionVortex() {
        const vortex = document.getElementById('selectionVortex');
        if (!vortex || !this.selectedAdmin) return;

        vortex.classList.remove('hidden');

        // Update content
        const holo = document.getElementById('selectedHolo');
        const name = document.getElementById('selectedName');
        const rank = document.getElementById('selectedRank');
        const power = document.getElementById('selectedPower');

        if (holo) holo.textContent = this.selectedAdmin.avatar;
        if (name) name.textContent = `#${this.selectedAdmin.tag.toUpperCase()}`;
        if (rank) rank.textContent = this.selectedAdmin.cyber_rank;
        if (power) power.textContent = `POWER: ${this.selectedAdmin.power_level.toLocaleString()}`;
    }

    hideSelectionVortex() {
        const vortex = document.getElementById('selectionVortex');
        if (vortex) {
            vortex.classList.add('hidden');
        }
    }

    cancelSelection() {
        if (this.selectedAdmin) {
            const card = document.querySelector(`[data-admin-id="${this.selectedAdmin.id}"]`);
            if (card) card.classList.remove('selected');
        }

        this.selectedAdmin = null;
        this.hideSelectionVortex();

        console.log("❌ ВЫБОР ОТМЕНЕН");
    }

    confirmSelection() {
        if (!this.selectedAdmin) return;

        const admin = this.selectedAdmin;

        // Epic confirmation effects
        this.createMassiveExplosion();
        this.createScreenFlash();
        this.createConfirmationWave();

        console.log(`🎯 ПОДТВЕРЖДЕН ВЫБОР: ${admin.tag.toUpperCase()}`);

        // Send to Telegram
        if (this.tg) {
            const data = {
                type: 'ultra_admin_selected',
                admin: {
                    id: admin.id,
                    tag: admin.tag,
                    role: admin.role,
                    power_level: admin.power_level,
                    cyber_rank: admin.cyber_rank
                },
                timestamp: new Date().toISOString()
            };

            this.tg.sendData(JSON.stringify(data));

            setTimeout(() => {
                this.tg.close();
            }, 2000);
        }

        // Auto-hide after effect
        setTimeout(() => {
            this.hideSelectionVortex();
            this.selectedAdmin = null;
        }, 3000);
    }

    // === SEARCH FUNCTIONALITY ===
    handleSearch(query) {
        const lowerQuery = query.toLowerCase();

        this.filteredAdmins = CYBER_ADMINS.filter(admin => 
            admin.tag.toLowerCase().includes(lowerQuery) ||
            admin.role.toLowerCase().includes(lowerQuery) ||
            admin.cyber_rank.toLowerCase().includes(lowerQuery)
        );

        this.renderAdmins();
    }

    // === KEYBOARD HANDLERS ===
    handleKeyboard(e) {
        switch(e.key) {
            case 'Escape':
                this.cancelSelection();
                break;
            case 'Enter':
                if (this.selectedAdmin) {
                    this.confirmSelection();
                }
                break;
            case ' ':
                e.preventDefault();
                this.createRandomEffects();
                break;
        }
    }

    // === VISUAL EFFECTS ===
    createRippleEffect(element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');

        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            background: rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleExpand 0.8s ease-out;
            pointer-events: none;
            z-index: 100;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 800);
    }

    createParticleExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const colors = ['#00ffff', '#ff0080', '#00ff41', '#ffff00', '#8000ff'];

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                position: fixed;
                top: ${centerY}px;
                left: ${centerX}px;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${color};
            `;

            const angle = (i / 20) * Math.PI * 2;
            const velocity = 150 + Math.random() * 100;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;

            particle.style.setProperty('--dx', dx + 'px');
            particle.style.setProperty('--dy', dy + 'px');

            document.body.appendChild(particle);

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => particle.remove(), 1000);
        }
    }

    createHoverEffect(element) {
        const sparks = document.createElement('div');
        sparks.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            background: linear-gradient(45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%);
            animation: sparkSweep 0.5s ease-out;
        `;

        element.style.position = 'relative';
        element.appendChild(sparks);

        setTimeout(() => sparks.remove(), 500);
    }

    createOrbExplosion(orb) {
        const rect = orb.getBoundingClientRect();

        for (let i = 0; i < 10; i++) {
            const mini = document.createElement('div');
            mini.style.cssText = `
                position: fixed;
                top: ${rect.top + rect.height/2}px;
                left: ${rect.left + rect.width/2}px;
                width: 8px;
                height: 8px;
                background: #00ffff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 15px #00ffff;
            `;

            const angle = (i / 10) * Math.PI * 2;
            const dist = 100 + Math.random() * 50;
            const dx = Math.cos(angle) * dist;
            const dy = Math.sin(angle) * dist;

            document.body.appendChild(mini);

            mini.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            });

            setTimeout(() => mini.remove(), 800);
        }
    }

    createScreenShake() {
        document.body.animate([
            { transform: 'translate(0, 0)' },
            { transform: 'translate(-3px, 2px)' },
            { transform: 'translate(3px, -2px)' },
            { transform: 'translate(-2px, -3px)' },
            { transform: 'translate(2px, 3px)' },
            { transform: 'translate(0, 0)' }
        ], {
            duration: 300,
            easing: 'ease-in-out'
        });
    }

    createScreenFlash() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9998;
            opacity: 0;
        `;

        document.body.appendChild(flash);

        flash.animate([
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 200,
            easing: 'ease-in-out'
        });

        setTimeout(() => flash.remove(), 200);
    }

    createMassiveExplosion() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            const colors = ['#00ffff', '#ff0080', '#00ff41', '#ffff00', '#8000ff', '#ff4000'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                position: fixed;
                top: ${centerY}px;
                left: ${centerX}px;
                width: ${4 + Math.random() * 8}px;
                height: ${4 + Math.random() * 8}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 20px ${color};
            `;

            const angle = (i / 50) * Math.PI * 2;
            const velocity = 200 + Math.random() * 200;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;

            document.body.appendChild(particle);

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => particle.remove(), 1500);
        }
    }

    createConfirmationWave() {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            border: 3px solid #00ff41;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 30px #00ff41;
        `;

        document.body.appendChild(wave);

        wave.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(20)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        setTimeout(() => wave.remove(), 1000);
    }

    createRandomEffects() {
        // Random sparkles across screen
        for (let i = 0; i < 15; i++) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                top: ${Math.random() * window.innerHeight}px;
                left: ${Math.random() * window.innerWidth}px;
                width: 4px;
                height: 4px;
                background: #ffff00;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 15px #ffff00;
            `;

            document.body.appendChild(spark);

            spark.animate([
                { opacity: 0, transform: 'scale(0)' },
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 1000,
                easing: 'ease-in-out'
            });

            setTimeout(() => spark.remove(), 1000);
        }
    }

    // === STATS ANIMATION ===
    animateStatsCounters() {
        const totalPower = document.getElementById('totalPower');
        const cyberNodes = document.getElementById('cyberNodes');
        const successRate = document.getElementById('successRate');

        if (totalPower) this.animateCounter(totalPower, 37100, 'K');
        if (cyberNodes) this.animateCounter(cyberNodes, 5);
        if (successRate) this.animateCounter(successRate, 84.2, '%');
    }

    animateCounter(element, target, suffix = '') {
        let current = 0;
        const increment = target / 100;

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            if (suffix === 'K') {
                element.textContent = (current / 1000).toFixed(1) + 'K';
            } else if (suffix === '%') {
                element.textContent = current.toFixed(1) + '%';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    }

    // === UTILITY FUNCTIONS ===
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// === ADDITIONAL CSS ANIMATIONS ===
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        to {
            transform: translate(-50%, -50%) scale(50);
            opacity: 0;
        }
    }

    @keyframes sparkSweep {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// === INITIALIZE APP ===
let ultraApp;

document.addEventListener('DOMContentLoaded', () => {
    console.log("🌟 ЗАГРУЗКА УЛЬТРА КИБЕР СИСТЕМЫ...");
    ultraApp = new UltraCyberApp();
});

// === ERROR HANDLING ===
window.addEventListener('error', (e) => {
    console.error('💥 СИСТЕМНАЯ ОШИБКА:', e.error);
});

// === DEBUG ACCESS ===
if (typeof window !== 'undefined') {
    window.ultraDebug = {
        app: () => ultraApp,
        admins: CYBER_ADMINS,
        effects: {
            explosion: (el) => ultraApp?.createParticleExplosion(el || document.body),
            shake: () => ultraApp?.createScreenShake(),
            flash: () => ultraApp?.createScreenFlash(),
            random: () => ultraApp?.createRandomEffects()
        }
    };
}

console.log("🔥 УЛЬТРА КИБЕР СИСТЕМА ГОТОВА К ЗАПУСКУ!");