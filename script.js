// Lunch Roulette Web App - JavaScript

// Multi-language Support
const translations = {
    en: {
        'app-title': 'Lunch Roulette',
        'spin-wheel': 'SPIN THE WHEEL!',
        'todays-options': "Today's Options:",
        'total-spins': 'Total Spins',
        'today': 'Today',
        'top-choice': 'Top Choice',
        'dietary-preferences': 'Dietary Preferences',
        'smart-features': 'Smart Features',
        'avoid-repeats': 'Avoid recent choices',
        'consider-weather': 'Consider weather',
        'apply': 'Apply',
        'reset': 'Reset',
        'settings': 'Settings',
        'history': 'History',
        'vegetarian': 'Vegetarian',
        'vegan': 'Vegan',
        'gluten-free': 'Gluten Free',
        'halal': 'Halal',
        'your-lunch-choice': 'Your Lunch Choice!',
        'popular-options': 'Popular Options:',
        'find-nearby': 'Find Nearby',
        'spin-again': 'Spin Again',
        'settings-applied': 'Settings applied successfully!',
        'settings-reset': 'Settings reset to default',
        'reset-confirmation': 'Reset all settings to default?',
        'your-lunch-history': 'Your Lunch History',
        'all-time': 'All Time',
        'this-week': 'This Week',
        'this-month': 'This Month',
        'no-lunch-decisions': 'No lunch decisions yet!',
        'spin-to-start': 'Spin the wheel to start building your history',
        'budget': 'Budget ($8-15)',
        'medium': 'Medium ($12-22)',
        'premium': 'Premium ($20-35)',
        'sydney': 'Sydney',
        'melbourne': 'Melbourne',
        'brisbane': 'Brisbane'
    },
    zh: {
        'app-title': '午餐轮盘',
        'spin-wheel': '转动轮盘！',
        'todays-options': '今日选择：',
        'total-spins': '总转数',
        'today': '今天',
        'top-choice': '热门选择',
        'dietary-preferences': '饮食偏好',
        'smart-features': '智能功能',
        'avoid-repeats': '避免重复选择',
        'consider-weather': '考虑天气',
        'apply': '应用',
        'reset': '重置',
        'settings': '设置',
        'history': '历史',
        'vegetarian': '素食',
        'vegan': '纯素',
        'gluten-free': '无麸质',
        'halal': '清真',
        'your-lunch-choice': '您的午餐选择！',
        'popular-options': '热门选项：',
        'find-nearby': '查找附近',
        'spin-again': '再转一次',
        'settings-applied': '设置已应用！',
        'settings-reset': '设置已重置为默认',
        'reset-confirmation': '将所有设置重置为默认？',
        'your-lunch-history': '您的午餐历史',
        'all-time': '全部',
        'this-week': '本周',
        'this-month': '本月',
        'no-lunch-decisions': '尚无午餐决定！',
        'spin-to-start': '转动轮盘开始建立您的历史记录',
        'budget': '经济型 ($8-15)',
        'medium': '中等 ($12-22)',
        'premium': '高端 ($20-35)',
        'sydney': '悉尼',
        'melbourne': '墨尔本',
        'brisbane': '布里斯班'
    },
    es: {
        'app-title': 'Ruleta de Almuerzo',
        'spin-wheel': '¡GIRAR LA RULETA!',
        'todays-options': 'Opciones de Hoy:',
        'total-spins': 'Giros Totales',
        'today': 'Hoy',
        'top-choice': 'Favorito',
        'dietary-preferences': 'Preferencias Dietéticas',
        'smart-features': 'Funciones Inteligentes',
        'avoid-repeats': 'Evitar elecciones recientes',
        'consider-weather': 'Considerar clima',
        'apply': 'Aplicar',
        'reset': 'Reiniciar',
        'settings': 'Configuración',
        'history': 'Historial',
        'vegetarian': 'Vegetariano',
        'vegan': 'Vegano',
        'gluten-free': 'Sin Gluten',
        'halal': 'Halal',
        'your-lunch-choice': '¡Tu Elección de Almuerzo!',
        'popular-options': 'Opciones Populares:',
        'find-nearby': 'Buscar Cerca',
        'spin-again': 'Girar de Nuevo',
        'settings-applied': '¡Configuración aplicada!',
        'settings-reset': 'Configuración restablecida',
        'reset-confirmation': '¿Restablecer toda la configuración?',
        'your-lunch-history': 'Tu Historial de Almuerzo',
        'all-time': 'Todo el Tiempo',
        'this-week': 'Esta Semana',
        'this-month': 'Este Mes',
        'no-lunch-decisions': '¡Aún no hay decisiones de almuerzo!',
        'spin-to-start': 'Gira la ruleta para comenzar tu historial',
        'budget': 'Económico ($8-15)',
        'medium': 'Medio ($12-22)',
        'premium': 'Premium ($20-35)',
        'sydney': 'Sídney',
        'melbourne': 'Melbourne',
        'brisbane': 'Brisbane'
    },
    fr: {
        'app-title': 'Roulette Déjeuner',
        'spin-wheel': 'TOURNER LA ROUE!',
        'todays-options': "Options d'Aujourd'hui:",
        'total-spins': 'Tours Totaux',
        'today': "Aujourd'hui",
        'top-choice': 'Choix Top',
        'dietary-preferences': 'Préférences Alimentaires',
        'smart-features': 'Fonctions Intelligentes',
        'avoid-repeats': 'Éviter les choix récents',
        'consider-weather': 'Considérer météo',
        'apply': 'Appliquer',
        'reset': 'Réinitialiser',
        'settings': 'Paramètres',
        'history': 'Historique',
        'vegetarian': 'Végétarien',
        'vegan': 'Végétalien',
        'gluten-free': 'Sans Gluten',
        'halal': 'Halal',
        'your-lunch-choice': 'Votre Choix Déjeuner!',
        'popular-options': 'Options Populaires:',
        'find-nearby': 'Trouver Proche',
        'spin-again': 'Tourner Encore',
        'settings-applied': 'Paramètres appliqués!',
        'settings-reset': 'Paramètres remis à zéro',
        'reset-confirmation': 'Réinitialiser tous les paramètres?',
        'your-lunch-history': 'Votre Historique Déjeuner',
        'all-time': 'Tout le Temps',
        'this-week': 'Cette Semaine',
        'this-month': 'Ce Mois',
        'no-lunch-decisions': 'Aucune décision déjeuner encore!',
        'spin-to-start': 'Tournez la roue pour commencer',
        'budget': 'Budget ($8-15)',
        'medium': 'Moyen ($12-22)',
        'premium': 'Premium ($20-35)',
        'sydney': 'Sydney',
        'melbourne': 'Melbourne',
        'brisbane': 'Brisbane'
    },
    de: {
        'app-title': 'Mittagessen Roulette',
        'spin-wheel': 'RAD DREHEN!',
        'todays-options': 'Heutige Optionen:',
        'total-spins': 'Gesamte Drehungen',
        'today': 'Heute',
        'top-choice': 'Top Wahl',
        'dietary-preferences': 'Ernährungsvorlieben',
        'smart-features': 'Intelligente Funktionen',
        'avoid-repeats': 'Neuere Auswahl vermeiden',
        'consider-weather': 'Wetter berücksichtigen',
        'apply': 'Anwenden',
        'reset': 'Zurücksetzen',
        'settings': 'Einstellungen',
        'history': 'Verlauf',
        'vegetarian': 'Vegetarisch',
        'vegan': 'Vegan',
        'gluten-free': 'Glutenfrei',
        'halal': 'Halal',
        'your-lunch-choice': 'Ihre Mittagswahl!',
        'popular-options': 'Beliebte Optionen:',
        'find-nearby': 'In der Nähe Finden',
        'spin-again': 'Nochmal Drehen',
        'settings-applied': 'Einstellungen angewendet!',
        'settings-reset': 'Einstellungen zurückgesetzt',
        'reset-confirmation': 'Alle Einstellungen zurücksetzen?',
        'your-lunch-history': 'Ihr Mittagessen-Verlauf',
        'all-time': 'Alle Zeit',
        'this-week': 'Diese Woche',
        'this-month': 'Dieser Monat',
        'no-lunch-decisions': 'Noch keine Mittagsentscheidungen!',
        'spin-to-start': 'Drehen Sie das Rad, um zu beginnen',
        'budget': 'Budget ($8-15)',
        'medium': 'Mittel ($12-22)',
        'premium': 'Premium ($20-35)',
        'sydney': 'Sydney',
        'melbourne': 'Melbourne',
        'brisbane': 'Brisbane'
    },
    ja: {
        'app-title': 'ランチルーレット',
        'spin-wheel': 'ルーレットを回そう！',
        'todays-options': '今日の選択肢：',
        'total-spins': '総回転数',
        'today': '今日',
        'top-choice': '人気の選択',
        'dietary-preferences': '食事の好み',
        'smart-features': 'スマート機能',
        'avoid-repeats': '最近の選択を避ける',
        'consider-weather': '天気を考慮',
        'apply': '適用',
        'reset': 'リセット',
        'settings': '設定',
        'history': '履歴',
        'vegetarian': 'ベジタリアン',
        'vegan': 'ヴィーガン',
        'gluten-free': 'グルテンフリー',
        'halal': 'ハラル',
        'your-lunch-choice': 'あなたのランチ選択！',
        'popular-options': '人気のオプション：',
        'find-nearby': '近くを探す',
        'spin-again': 'もう一度回す',
        'settings-applied': '設定が適用されました！',
        'settings-reset': '設定がリセットされました',
        'reset-confirmation': 'すべての設定をリセットしますか？',
        'your-lunch-history': 'あなたのランチ履歴',
        'all-time': 'すべての期間',
        'this-week': '今週',
        'this-month': '今月',
        'no-lunch-decisions': 'まだランチの決定がありません！',
        'spin-to-start': 'ルーレットを回して履歴を始めましょう',
        'budget': '予算 ($8-15)',
        'medium': '中程度 ($12-22)',
        'premium': 'プレミアム ($20-35)',
        'sydney': 'シドニー',
        'melbourne': 'メルボルン',
        'brisbane': 'ブリスベン'
    }
};

// Data Models
const lunchOptions = {
    sydney: [
        {
            id: 1,
            category: "Asian Fusion",
            icon: "🥢",
            name: "Asian Cuisine",
            description: "Chinese, Japanese, Thai, Vietnamese flavors",
            priceRange: "$12-18",
            color: "#FF6B6B",
            popularDishes: ["Ramen", "Pho", "Dumplings", "Pad Thai", "Sushi"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 2,
            category: "Cafe & Light",
            icon: "🥪",
            name: "Cafe Food", 
            description: "Fresh sandwiches, wraps, salads & coffee",
            priceRange: "$10-16",
            color: "#4ECDC4",
            popularDishes: ["Club Sandwich", "Caesar Salad", "Avocado Toast", "Wrap"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 3,
            category: "Italian",
            icon: "🍝",
            name: "Italian Classics",
            description: "Pizza, pasta, and authentic Italian",
            priceRange: "$15-22",
            color: "#FFE66D",
            popularDishes: ["Margherita Pizza", "Carbonara", "Risotto", "Bruschetta"],
            dietaryOptions: ["vegetarian"]
        },
        {
            id: 4,
            category: "Healthy Bowl",
            icon: "🥗",
            name: "Health Bowls",
            description: "Poke, acai, quinoa & fresh ingredients", 
            priceRange: "$14-20",
            color: "#95E1D3",
            popularDishes: ["Poke Bowl", "Quinoa Salad", "Smoothie Bowl", "Buddha Bowl"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 5,
            category: "Aussie Local",
            icon: "🥧",
            name: "Aussie Favorites",
            description: "Meat pies, BBQ, fish & chips",
            priceRange: "$12-25",
            color: "#F38BA8",
            popularDishes: ["Meat Pie", "Fish & Chips", "BBQ Burger", "Lamington"],
            dietaryOptions: ["halal"]
        }
    ],
    melbourne: [
        {
            id: 6,
            category: "Coffee & Brunch",
            icon: "☕",
            name: "Melbourne Coffee",
            description: "World-class coffee culture & brunch",
            priceRange: "$12-20",
            color: "#8B4513",
            popularDishes: ["Flat White", "Smashed Avo", "Big Breakfast", "French Toast"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 7,
            category: "Lane Way Gems", 
            icon: "🏪",
            name: "Hidden Lanes",
            description: "Unique finds in Melbourne's famous lanes",
            priceRange: "$15-25",
            color: "#9B59B6",
            popularDishes: ["Gourmet Burgers", "Artisan Pizza", "Craft Sandwiches"],
            dietaryOptions: ["vegetarian", "vegan"]
        },
        {
            id: 8,
            category: "European Deli",
            icon: "🧀",
            name: "European Style",
            description: "Greek, Italian, German influences",
            priceRange: "$14-22", 
            color: "#3498DB",
            popularDishes: ["Souvlaki", "Schnitzel", "Antipasto", "Gelato"],
            dietaryOptions: ["vegetarian", "halal"]
        },
        {
            id: 9,
            category: "Asian Street Food",
            icon: "🍜",
            name: "Street Food",
            description: "Authentic Asian street food experience",
            priceRange: "$10-16",
            color: "#E74C3C",
            popularDishes: ["Laksa", "Banh Mi", "Dim Sum", "Korean BBQ"],
            dietaryOptions: ["vegetarian", "vegan", "halal"]
        },
        {
            id: 10,
            category: "Modern Australian",
            icon: "🦘",
            name: "Mod Oz",
            description: "Contemporary Australian cuisine",
            priceRange: "$18-28",
            color: "#27AE60",
            popularDishes: ["Kangaroo Steak", "Barramundi", "Native Herbs", "Pavlova"],
            dietaryOptions: ["glutenFree"]
        }
    ],
    brisbane: [
        {
            id: 11,
            category: "Subtropical Fresh",
            icon: "🥭",
            name: "Tropical Fresh",
            description: "Fresh tropical fruits, smoothies & light meals",
            priceRange: "$10-18",
            color: "#FF9F40",
            popularDishes: ["Mango Smoothie Bowl", "Tropical Salad", "Coconut Rice", "Fresh Spring Rolls"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 12,
            category: "River City BBQ",
            icon: "🍖",
            name: "Brisbane BBQ",
            description: "Queensland-style barbecue & grilled specialties",
            priceRange: "$15-25",
            color: "#8B4513",
            popularDishes: ["Beef Brisket", "Pulled Pork", "Grilled Barramundi", "BBQ Prawns"],
            dietaryOptions: ["glutenFree"]
        },
        {
            id: 13,
            category: "Multi-Cultural",
            icon: "🌏",
            name: "World Flavors",
            description: "Diverse cultural cuisines from Brisbane's communities",
            priceRange: "$12-20",
            color: "#20B2AA",
            popularDishes: ["Indian Curry", "Greek Gyros", "Vietnamese Pho", "Lebanese Wrap"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree", "halal"]
        },
        {
            id: 14,
            category: "River Café",
            icon: "🛥️",
            name: "Riverside Dining",
            description: "Casual riverside cafés with city views",
            priceRange: "$14-22",
            color: "#4682B4",
            popularDishes: ["Fish & Chips", "River Prawns", "Beef Burger", "Caesar Salad"],
            dietaryOptions: ["vegetarian", "glutenFree"]
        },
        {
            id: 15,
            category: "Market Fresh",
            icon: "🥬",
            name: "Farmers Market",
            description: "Fresh local produce & artisan foods",
            priceRange: "$8-16",
            color: "#32CD32",
            popularDishes: ["Organic Salads", "Fresh Juice", "Artisan Bread", "Local Cheese"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        }
    ]
};

// App State
let currentState = {
    selectedCity: 'sydney',
    priceRange: 'medium',
    dietaryRestrictions: JSON.parse(localStorage.getItem('dietaryRestrictions') || '[]'),
    history: JSON.parse(localStorage.getItem('lunchHistory') || '[]'),
    settings: JSON.parse(localStorage.getItem('lunchSettings') || '{"avoidRepeats": true, "considerWeather": true}'),
    currentLanguage: localStorage.getItem('appLanguage') || 'en',
    isSpinning: false
};

// DOM Elements
const elements = {
    citySelect: document.getElementById('citySelect'),
    priceSelect: document.getElementById('priceRange'),
    spinButton: document.getElementById('spinButton'),
    rouletteWheel: document.getElementById('rouletteWheel'),
    optionsGrid: document.getElementById('optionsGrid'),
    resultModal: document.getElementById('resultModal'),
    settingsModal: document.getElementById('settingsModal'),
    historyModal: document.getElementById('historyModal'),
    totalSpins: document.getElementById('totalSpins'),
    todaySpins: document.getElementById('todaySpins'),
    favoriteCategory: document.getElementById('favoriteCategory')
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateStats();
});

function initializeApp() {
    // Load saved settings
    const savedSettings = JSON.parse(localStorage.getItem('lunchSettings') || '{}');
    currentState.settings = { ...currentState.settings, ...savedSettings };
    
    // Load saved city selection
    const savedCity = localStorage.getItem('selectedCity') || 'sydney';
    currentState.selectedCity = savedCity;
    
    // Set initial city
    updateCity(currentState.selectedCity);
    
    // Initialize language
    updateLanguage(currentState.currentLanguage);
    
    // Generate wheel and options
    generateRoulette();
    updateOptionsDisplay();
    
    // Load settings into UI
    loadSettingsToUI();
}

function setupEventListeners() {
    // City selection
    elements.citySelect.addEventListener('change', (e) => {
        const city = e.target.value;
        updateCity(city);
    });
    
    // Price range
    elements.priceSelect.addEventListener('change', (e) => {
        currentState.priceRange = e.target.value;
        updateOptionsDisplay();
    });
    
    // Spin button
    elements.spinButton.addEventListener('click', spinWheel);
    
    // Modal controls
    setupModalControls();
    
    // Settings controls
    setupSettingsControls();
    
    // History controls
    setupHistoryControls();
}

function updateCity(city) {
    currentState.selectedCity = city;
    
    // Update city select value
    elements.citySelect.value = city;
    
    // Save city selection
    localStorage.setItem('selectedCity', city);
    
    // Regenerate options
    generateRoulette();
    updateOptionsDisplay();
}

function generateRoulette() {
    const options = getCurrentOptions();
    const wheel = elements.rouletteWheel;
    
    // Clear existing content
    wheel.innerHTML = '';
    
    // Create SVG-based wheel for precise rendering
    const svg = createSegmentPath(options);
    wheel.appendChild(svg);
}

function createSegmentPath(options) {
    // Create SVG-based wheel for precise segment rendering
    const wheel = elements.rouletteWheel;
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    
    const centerX = 100;
    const centerY = 100;
    const radius = 95;
    
    options.forEach((option, index) => {
        const segmentAngle = 360 / options.length;
        const startAngle = segmentAngle * index - 90; // Start from top
        const endAngle = startAngle + segmentAngle;
        
        // Convert to radians
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        
        // Calculate arc points
        const x1 = centerX + radius * Math.cos(startRad);
        const y1 = centerY + radius * Math.sin(startRad);
        const x2 = centerX + radius * Math.cos(endRad);
        const y2 = centerY + radius * Math.sin(endRad);
        
        // Create path for the segment
        const largeArcFlag = segmentAngle > 180 ? 1 : 0;
        const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
        
        const path = document.createElementNS(svgNS, 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', option.color);
        path.setAttribute('stroke', 'white');
        path.setAttribute('stroke-width', '2');
        
        svg.appendChild(path);
        
        // Add text and icon
        const textAngle = startAngle + segmentAngle / 2;
        const textRadius = 60;
        const textAngleRad = (textAngle * Math.PI) / 180;
        const textX = centerX + textRadius * Math.cos(textAngleRad);
        const textY = centerY + textRadius * Math.sin(textAngleRad);
        
        // Icon
        const iconText = document.createElementNS(svgNS, 'text');
        iconText.setAttribute('x', textX);
        iconText.setAttribute('y', textY - 8);
        iconText.setAttribute('text-anchor', 'middle');
        iconText.setAttribute('dominant-baseline', 'middle');
        iconText.setAttribute('font-size', '18');
        iconText.setAttribute('fill', 'white');
        iconText.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
        iconText.textContent = option.icon;
        svg.appendChild(iconText);
        
        // Name
        const nameText = document.createElementNS(svgNS, 'text');
        nameText.setAttribute('x', textX);
        nameText.setAttribute('y', textY + 8);
        nameText.setAttribute('text-anchor', 'middle');
        nameText.setAttribute('dominant-baseline', 'middle');
        nameText.setAttribute('font-size', '9');
        nameText.setAttribute('font-weight', '600');
        nameText.setAttribute('fill', 'white');
        nameText.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
        nameText.textContent = option.name;
        svg.appendChild(nameText);
    });
    
    return svg;
}

function getCurrentOptions() {
    let options = [...lunchOptions[currentState.selectedCity]];
    
    // Apply dietary filters
    if (currentState.dietaryRestrictions.length > 0) {
        options = options.filter(option => {
            return currentState.dietaryRestrictions.every(restriction => 
                option.dietaryOptions.includes(restriction)
            );
        });
    }
    
    // Apply recent choice avoidance
    if (currentState.settings.avoidRepeats) {
        const recentChoices = currentState.history
            .slice(0, 3)
            .map(h => h.category);
        
        const availableOptions = options.filter(option => 
            !recentChoices.includes(option.category)
        );
        
        if (availableOptions.length >= 3) {
            options = availableOptions;
        }
    }
    
    // Ensure we have exactly 5 options
    if (options.length > 5) {
        options = options.slice(0, 5);
    } else if (options.length < 5) {
        // Fill with remaining options if needed
        const allOptions = lunchOptions[currentState.selectedCity];
        const missing = 5 - options.length;
        const additional = allOptions
            .filter(opt => !options.find(o => o.id === opt.id))
            .slice(0, missing);
        options = [...options, ...additional];
    }
    
    return options.slice(0, 5);
}

function updateOptionsDisplay() {
    const options = getCurrentOptions();
    const grid = elements.optionsGrid;
    
    grid.innerHTML = options.map(option => `
        <div class="option-item" style="border-color: ${option.color}">
            <span class="option-icon">${option.icon}</span>
            <div class="option-name">${option.name}</div>
        </div>
    `).join('');
}

function spinWheel() {
    if (currentState.isSpinning) return;
    
    currentState.isSpinning = true;
    elements.spinButton.disabled = true;
    elements.spinButton.classList.add('spinning');
    
    const options = getCurrentOptions();
    const selectedIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[selectedIndex];
    
    // Calculate rotation
    const segmentAngle = 360 / options.length;
    const targetAngle = selectedIndex * segmentAngle + (segmentAngle / 2);
    const spins = 5 + Math.random() * 3; // 5-8 full rotations
    const finalRotation = spins * 360 + targetAngle;
    
    // Apply rotation
    elements.rouletteWheel.style.transform = `rotate(${finalRotation}deg)`;
    
    // Show result after animation
    setTimeout(() => {
        currentState.isSpinning = false;
        elements.spinButton.disabled = false;
        elements.spinButton.classList.remove('spinning');
        
        showResult(selectedOption);
        addToHistory(selectedOption);
        updateStats();
    }, 4000);
}

function showResult(option) {
    const modal = elements.resultModal;
    
    // Populate result data
    document.getElementById('resultIcon').textContent = option.icon;
    document.getElementById('resultIcon').style.background = option.color + '20';
    document.getElementById('resultName').textContent = option.name;
    document.getElementById('resultDescription').textContent = option.description;
    document.getElementById('resultPrice').textContent = option.priceRange;
    
    // Dietary options
    const dietaryDiv = document.getElementById('resultDietary');
    dietaryDiv.innerHTML = option.dietaryOptions.map(diet => {
        const icons = {
            vegetarian: '🌱',
            vegan: '🌿', 
            glutenFree: '🚫🌾',
            halal: '☪️'
        };
        return icons[diet] || '';
    }).join(' ');
    
    // Popular dishes
    const dishesGrid = document.getElementById('dishesGrid');
    dishesGrid.innerHTML = option.popularDishes.slice(0, 4).map(dish => 
        `<div class="dish-item">${dish}</div>`
    ).join('');
    
    // Show modal
    modal.classList.add('show');
}

function addToHistory(option) {
    const historyItem = {
        id: Date.now(),
        option: option,
        timestamp: new Date().toISOString(),
        city: currentState.selectedCity
    };
    
    currentState.history.unshift(historyItem);
    
    // Keep only last 50 items
    if (currentState.history.length > 50) {
        currentState.history = currentState.history.slice(0, 50);
    }
    
    // Save to localStorage
    localStorage.setItem('lunchHistory', JSON.stringify(currentState.history));
}

function updateStats() {
    // Total spins
    elements.totalSpins.textContent = currentState.history.length;
    
    // Today's spins
    const today = new Date().toDateString();
    const todaySpins = currentState.history.filter(h => 
        new Date(h.timestamp).toDateString() === today
    ).length;
    elements.todaySpins.textContent = todaySpins;
    
    // Favorite category
    const categoryCounts = {};
    currentState.history.forEach(h => {
        const category = h.option.category;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    
    const mostPopular = Object.keys(categoryCounts).reduce((a, b) => 
        categoryCounts[a] > categoryCounts[b] ? a : b, '');
    
    elements.favoriteCategory.textContent = mostPopular || '-';
}

// Modal Controls
function setupModalControls() {
    // Close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('show');
            });
        });
    });
    
    // Modal background clicks
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
    
    // Modal action buttons
    document.getElementById('findNearbyBtn').addEventListener('click', () => {
        alert('Finding nearby restaurants... (This would integrate with Maps API)');
    });
    
    document.getElementById('spinAgainBtn').addEventListener('click', () => {
        elements.resultModal.classList.remove('show');
        setTimeout(spinWheel, 500);
    });
    
    // Settings and history buttons
    document.getElementById('settingsBtn').addEventListener('click', () => {
        elements.settingsModal.classList.add('show');
    });
    
    document.getElementById('historyBtn').addEventListener('click', () => {
        elements.historyModal.classList.add('show');
        updateHistoryDisplay();
    });
}

function setupSettingsControls() {
    // Dietary checkboxes
    ['vegetarian', 'vegan', 'glutenFree', 'halal'].forEach(diet => {
        const checkbox = document.getElementById(diet);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                if (!currentState.dietaryRestrictions.includes(diet)) {
                    currentState.dietaryRestrictions.push(diet);
                }
            } else {
                currentState.dietaryRestrictions = currentState.dietaryRestrictions.filter(d => d !== diet);
            }
        });
    });
    
    // Toggle switches
    ['avoidRepeats', 'considerWeather'].forEach(setting => {
        const checkbox = document.getElementById(setting);
        checkbox.addEventListener('change', () => {
            currentState.settings[setting] = checkbox.checked;
        });
    });
    
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', () => {
        currentState.currentLanguage = languageSelect.value;
        updateLanguage(languageSelect.value);
    });
    
    // Apply settings button
    document.getElementById('applySettingsBtn').addEventListener('click', () => {
        saveSettings();
        updateOptionsDisplay();
        generateRoulette();
        elements.settingsModal.classList.remove('show');
        
        // Show confirmation
        showNotification(getTranslation('settings-applied') || 'Settings applied successfully!');
    });
    
    // Reset settings button
    document.getElementById('resetSettingsBtn').addEventListener('click', () => {
        if (confirm(getTranslation('reset-confirmation') || 'Reset all settings to default?')) {
            resetSettings();
        }
    });
}

function setupHistoryControls() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateHistoryDisplay(btn.dataset.filter);
        });
    });
}

function loadSettingsToUI() {
    // Load dietary restrictions
    currentState.dietaryRestrictions.forEach(diet => {
        const checkbox = document.getElementById(diet);
        if (checkbox) checkbox.checked = true;
    });
    
    // Load toggle settings
    Object.keys(currentState.settings).forEach(setting => {
        const checkbox = document.getElementById(setting);
        if (checkbox) checkbox.checked = currentState.settings[setting];
    });
    
    // Load language setting
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentState.currentLanguage;
    }
}

function saveSettings() {
    localStorage.setItem('lunchSettings', JSON.stringify(currentState.settings));
    localStorage.setItem('dietaryRestrictions', JSON.stringify(currentState.dietaryRestrictions));
    localStorage.setItem('appLanguage', currentState.currentLanguage);
}

function resetSettings() {
    // Reset to defaults
    currentState.settings = { avoidRepeats: true, considerWeather: true };
    currentState.dietaryRestrictions = [];
    currentState.currentLanguage = 'en';
    
    // Clear all dietary checkboxes
    ['vegetarian', 'vegan', 'glutenFree', 'halal'].forEach(diet => {
        const checkbox = document.getElementById(diet);
        if (checkbox) checkbox.checked = false;
    });
    
    // Reset toggle switches
    ['avoidRepeats', 'considerWeather'].forEach(setting => {
        const checkbox = document.getElementById(setting);
        if (checkbox) checkbox.checked = currentState.settings[setting];
    });
    
    // Reset language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = 'en';
    }
    
    // Update language and save
    updateLanguage('en');
    saveSettings();
    updateOptionsDisplay();
    generateRoulette();
    
    // Show confirmation
    showNotification(getTranslation('settings-reset') || 'Settings reset to default');
}

function getTranslation(key) {
    return translations[currentState.currentLanguage]?.[key] || translations['en'][key] || key;
}

function updateLanguage(languageCode) {
    currentState.currentLanguage = languageCode;
    
    // Update all elements with data-lang-key attributes
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = getTranslation(key);
        
        if (element.tagName === 'INPUT' && element.type === 'button') {
            element.value = translation;
        } else if (element.tagName === 'OPTION') {
            element.textContent = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update city select options (special handling)
    const citySelect = document.getElementById('citySelect');
    if (citySelect) {
        const selectedValue = citySelect.value;
        citySelect.innerHTML = `
            <option value="sydney">🏛️ ${getTranslation('sydney')}</option>
            <option value="melbourne">🎨 ${getTranslation('melbourne')}</option>
            <option value="brisbane">🌴 ${getTranslation('brisbane')}</option>
        `;
        citySelect.value = selectedValue;
    }
    
    // Update document title
    document.title = `🍽️ ${getTranslation('app-title')} - ${getTranslation('sydney')}, ${getTranslation('melbourne')} & ${getTranslation('brisbane')}`;
    
    // Update history display if modal is open
    if (elements.historyModal && elements.historyModal.classList.contains('show')) {
        updateHistoryDisplay();
    }
    
    saveSettings();
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // Add CSS animations if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function updateHistoryDisplay(filter = 'all') {
    const historyList = document.getElementById('historyList');
    let history = [...currentState.history];
    
    // Apply filter
    if (filter === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        history = history.filter(h => new Date(h.timestamp) >= weekAgo);
    } else if (filter === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        history = history.filter(h => new Date(h.timestamp) >= monthAgo);
    }
    
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <div class="history-empty-icon">🕐</div>
                <div>${getTranslation('no-lunch-decisions')}</div>
                <div style="font-size: 0.9rem; margin-top: 5px; opacity: 0.7;">
                    ${getTranslation('spin-to-start')}
                </div>
            </div>
        `;
        return;
    }
    
    historyList.innerHTML = history.map(item => {
        const date = new Date(item.timestamp);
        const timeAgo = getTimeAgo(date);
        
        return `
            <div class="history-item">
                <div class="history-icon" style="background: ${item.option.color}20">
                    ${item.option.icon}
                </div>
                <div class="history-details">
                    <div class="history-name">${item.option.name}</div>
                    <div class="history-time">${timeAgo} • ${item.city}</div>
                </div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !currentState.isSpinning) {
        e.preventDefault();
        spinWheel();
    }
    if (e.code === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
    }
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}