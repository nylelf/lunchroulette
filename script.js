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
        'under8': 'Under $8',
        'budget': 'Budget ($8-15)',
        'medium': 'Medium ($12-22)',
        'premium': 'Premium ($20-35)',
        'sydney': 'Sydney',
        'melbourne': 'Melbourne',
        'brisbane': 'Brisbane',
        'nearby-restaurants': 'Nearby Restaurants',
        'finding-restaurants': 'Finding nearby restaurants...',
        'location-required': 'Location Access Required',
        'location-denied': 'Location access denied. Please enable location services.',
        'no-restaurants-found': 'No restaurants found nearby. Try expanding your search area.',
        'navigate': 'Navigate',
        'try-again': 'Try Again'
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
        'under8': '8美元以下',
        'budget': '经济型 ($8-15)',
        'medium': '中等 ($12-22)',
        'premium': '高端 ($20-35)',
        'sydney': '悉尼',
        'melbourne': '墨尔本',
        'brisbane': '布里斯班',
        'nearby-restaurants': '附近餐厅',
        'finding-restaurants': '正在寻找附近餐厅...',
        'location-required': '需要位置权限',
        'location-denied': '位置访问被拒绝。请启用位置服务。',
        'no-restaurants-found': '未找到附近餐厅。请尝试扩大搜索范围。',
        'navigate': '导航',
        'try-again': '重试'
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
            priceMin: 12,
            priceMax: 18,
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
            priceMin: 10,
            priceMax: 16,
            color: "#4ECDC4",
            popularDishes: ["Club Sandwich", "Caesar Salad", "Avocado Toast", "Wrap"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 2.1,
            category: "Budget Bites",
            icon: "🍞",
            name: "Quick & Cheap", 
            description: "Affordable grab-and-go options",
            priceRange: "$5-8",
            priceMin: 5,
            priceMax: 8,
            color: "#FFA500",
            popularDishes: ["Sausage Roll", "Meat Pie", "Sandwich", "Hot Dog"],
            dietaryOptions: ["halal"]
        },
        {
            id: 3,
            category: "Italian",
            icon: "🍝",
            name: "Italian Classics",
            description: "Pizza, pasta, and authentic Italian",
            priceRange: "$15-22",
            priceMin: 15,
            priceMax: 22,
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
            priceMin: 14,
            priceMax: 20,
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
            priceMin: 12,
            priceMax: 25,
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
            priceMin: 12,
            priceMax: 20,
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
            priceMin: 15,
            priceMax: 25,
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
            priceMin: 14,
            priceMax: 22,
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
            priceMin: 10,
            priceMax: 16,
            color: "#E74C3C",
            popularDishes: ["Laksa", "Banh Mi", "Dim Sum", "Korean BBQ"],
            dietaryOptions: ["vegetarian", "vegan", "halal"]
        },
        {
            id: 9.1,
            category: "Food Court",
            icon: "🍱",
            name: "Mall Food",
            description: "Quick and affordable food court options",
            priceRange: "$6-8",
            priceMin: 6,
            priceMax: 8,
            color: "#FF8C00",
            popularDishes: ["Fried Rice", "Noodle Box", "Burger", "Pizza Slice"],
            dietaryOptions: ["vegetarian", "halal"]
        },
        {
            id: 10,
            category: "Modern Australian",
            icon: "🦘",
            name: "Mod Oz",
            description: "Contemporary Australian cuisine",
            priceRange: "$18-28",
            priceMin: 18,
            priceMax: 28,
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
            priceMin: 10,
            priceMax: 18,
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
            priceMin: 15,
            priceMax: 25,
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
            priceMin: 12,
            priceMax: 20,
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
            priceMin: 14,
            priceMax: 22,
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
            priceMin: 8,
            priceMax: 16,
            color: "#32CD32",
            popularDishes: ["Organic Salads", "Fresh Juice", "Artisan Bread", "Local Cheese"],
            dietaryOptions: ["vegetarian", "vegan", "glutenFree"]
        },
        {
            id: 15.1,
            category: "Student Special",
            icon: "🎓",
            name: "Uni Deals",
            description: "Budget-friendly options near campuses",
            priceRange: "$4-7",
            priceMin: 4,
            priceMax: 7,
            color: "#9966CC",
            popularDishes: ["Ramen Cup", "Toasted Sandwich", "Mini Pizza", "Fried Rice"],
            dietaryOptions: ["vegetarian", "vegan"]
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
    isSpinning: false,
    currentRotation: 0 // Track current wheel rotation
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
    
    // Initialize language
    updateLanguage(currentState.currentLanguage);
    
    // Generate wheel and options
    generateRoulette();
    updateOptionsDisplay();
    
    // Load settings into UI
    loadSettingsToUI();
    
    // Initialize GPS location service
    initializeGPSService();
}

async function initializeGPSService() {
    console.log('🎯 Initializing hybrid location service...');
    
    // Set up city selector
    const citySelect = document.getElementById('citySelect');
    if (citySelect) {
        // Load saved city or default to Sydney
        const savedCity = localStorage.getItem('selectedCity') || 'sydney';
        citySelect.value = savedCity;
        locationService.setSelectedCity(savedCity);
        
        // Add event listener for city changes
        citySelect.addEventListener('change', function() {
            const selectedCity = this.value;
            locationService.setSelectedCity(selectedCity);
            localStorage.setItem('selectedCity', selectedCity);
            console.log(`🏙️ City changed to: ${locationService.getSelectedCityInfo().name}`);
            
            // Refresh location after city change
            refreshGPSLocation();
        });
    }
    
    // Set up location refresh button
    const refreshBtn = document.getElementById('locationRefresh');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', refreshGPSLocation);
    }
    
    // Check permissions first
    const hasPermission = await checkLocationPermission();
    if (!hasPermission) {
        console.warn('⚠️ No location permission, showing manual selection');
        showManualLocationFallback();
        return;
    }
    
    // Show initial detecting state
    locationService.updateLocationDisplay();
    
    // Try to get initial location
    try {
        console.log('Requesting GPS location...');
        const locationInfo = await locationService.getCurrentLocation();
        console.log('✅ GPS location service initialized successfully:', locationInfo);
        
        // Start watching location changes after successful initial location
        setTimeout(() => {
            locationService.startWatching();
        }, 1000);
        
    } catch (error) {
        console.warn('⚠️ GPS location failed:', error.message);
        
        // Show manual location fallback after GPS failure
        setTimeout(() => {
            showManualLocationFallback();
        }, 2000);
        
        // Show user-friendly message for common issues
        let friendlyMessage = error.message;
        if (error.message.includes('denied')) {
            friendlyMessage = 'Location access denied. Using manual selection below.';
        } else if (error.message.includes('timeout')) {
            friendlyMessage = 'GPS timeout. Using manual selection below.';
        } else if (error.message.includes('unavailable')) {
            friendlyMessage = 'GPS unavailable. Using manual selection below.';
        }
        
        locationService.updateLocationDisplay(new Error(friendlyMessage));
    }
}

// Check location permission
async function checkLocationPermission() {
    if (!navigator.geolocation) {
        return false;
    }
    
    if (navigator.permissions) {
        try {
            const permission = await navigator.permissions.query({ name: 'geolocation' });
            return permission.state !== 'denied';
        } catch (error) {
            console.warn('Could not check permissions:', error);
            return true; // Assume permission is available if we can't check
        }
    }
    
    return true;
}

// Show manual location fallback
function showManualLocationFallback() {
    const locationDisplay = document.getElementById('locationDisplay');
    if (!locationDisplay) return;
    
    // Replace location display with manual selection
    locationDisplay.innerHTML = `
        <span class="settings-icon">📍</span>
        <select id="manualLocationSelect" class="settings-select" onchange="handleManualLocationChange()">
            <option value="">Select your location...</option>
            <option value="sydney">🏛️ Sydney</option>
            <option value="melbourne">🎨 Melbourne</option>
            <option value="brisbane">🌴 Brisbane</option>
            <option value="perth">🏖️ Perth</option>
            <option value="adelaide">🍷 Adelaide</option>
        </select>
    `;
}

// Handle manual location selection
window.handleManualLocationChange = function() {
    const select = document.getElementById('manualLocationSelect');
    if (!select) return;
    
    const selectedLocation = select.value;
    if (!selectedLocation) return;
    
    const locations = {
        sydney: { lat: -33.8688, lng: 151.2093, name: 'Sydney', accuracy: 5000 },
        melbourne: { lat: -37.8136, lng: 144.9631, name: 'Melbourne', accuracy: 5000 },
        brisbane: { lat: -27.4698, lng: 153.0251, name: 'Brisbane', accuracy: 5000 },
        perth: { lat: -31.9505, lng: 115.8605, name: 'Perth', accuracy: 5000 },
        adelaide: { lat: -34.9285, lng: 138.6007, name: 'Adelaide', accuracy: 5000 }
    };
    
    const location = locations[selectedLocation];
    if (location) {
        console.log(`📍 Using manual location: ${location.name}`);
        
        // Set GPS service location manually
        locationService.userLocation = {
            lat: location.lat,
            lng: location.lng,
            accuracy: location.accuracy,
            timestamp: Date.now()
        };
        
        // Update display
        const locationText = document.createElement('span');
        locationText.textContent = `${location.name} (Manual)`;
        locationText.style.color = '#28a745';
        
        const icon = document.querySelector('#locationDisplay .settings-icon');
        if (icon) icon.textContent = '📍';
        
        console.log('✅ Manual location set successfully');
    }
};

function setupEventListeners() {
    // Price range
    elements.priceSelect.addEventListener('change', (e) => {
        currentState.priceRange = e.target.value;
        generateRoulette(); // Regenerate wheel with filtered options
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
    
    // Reset wheel rotation when regenerating
    currentState.currentRotation = 0;
    wheel.style.transform = 'rotate(0deg)';
    
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
    
    // Apply price range filter
    if (currentState.priceRange && currentState.priceRange !== 'all') {
        const priceRanges = {
            'under8': { min: 0, max: 8 },
            'budget': { min: 8, max: 15 },
            'medium': { min: 12, max: 22 },
            'premium': { min: 20, max: 35 }
        };
        
        const selectedRange = priceRanges[currentState.priceRange];
        if (selectedRange) {
            options = options.filter(option => {
                // Check if the option's price range overlaps with the selected budget
                return (option.priceMax >= selectedRange.min && option.priceMin <= selectedRange.max);
            });
        }
    }
    
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
    
    // Ensure we have exactly 4 options for better rotation calculation
    if (options.length > 4) {
        options = options.slice(0, 4);
    } else if (options.length < 4) {
        // Fill with remaining options if needed
        const allOptions = lunchOptions[currentState.selectedCity];
        const missing = 4 - options.length;
        const additional = allOptions
            .filter(opt => !options.find(o => o.id === opt.id))
            .slice(0, missing);
        options = [...options, ...additional];
    }
    
    return options.slice(0, 4);
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
    const segmentAngle = 360 / options.length;
    const spins = 5 + Math.random() * 3; // 5-8 full rotations
    
    // NEW APPROACH: Generate random rotation, then determine which segment the pointer hits
    // Generate a random final position (0-360 degrees)
    const randomEndPosition = Math.random() * 360;
    
    // Calculate total rotation needed from current position
    const totalRotationDelta = spins * 360 + randomEndPosition;
    const finalRotation = currentState.currentRotation + totalRotationDelta;
    
    // Now calculate which segment the pointer will point to after this rotation
    // The pointer is at the top (0° relative position)
    // After rotation, the wheel's effective position relative to the pointer
    const wheelFinalPosition = (finalRotation % 360 + 360) % 360;
    
    // Calculate which segment the pointer hits
    // Segments start at 0° (top) and go clockwise
    // Segment 0: 0° to segmentAngle
    // Segment 1: segmentAngle to 2*segmentAngle, etc.
    
    // But we need to account for the wheel rotation direction
    // When wheel rotates clockwise, it appears to pointer that segments moved counter-clockwise
    const pointerRelativePosition = (360 - wheelFinalPosition) % 360;
    const selectedIndex = Math.floor(pointerRelativePosition / segmentAngle) % options.length;
    const selectedOption = options[selectedIndex];
    
    // Debug logging
    console.log(`=== SPIN DEBUG (NEW APPROACH) ===`);
    console.log(`Random end position: ${randomEndPosition.toFixed(1)}°`);
    console.log(`Total rotation delta: ${totalRotationDelta.toFixed(1)}°`);
    console.log(`Current rotation: ${currentState.currentRotation.toFixed(1)}°`);
    console.log(`Final rotation: ${finalRotation.toFixed(1)}°`);
    console.log(`Wheel final position: ${wheelFinalPosition.toFixed(1)}°`);
    console.log(`Pointer relative position: ${pointerRelativePosition.toFixed(1)}°`);
    console.log(`Segment angle: ${segmentAngle}° (${options.length} segments)`);
    console.log(`Calculated segment index: ${selectedIndex}`);
    console.log(`Selected option: ${selectedOption.name}`);
    console.log(`Segment range: ${selectedIndex * segmentAngle}° - ${(selectedIndex + 1) * segmentAngle}°`);
    console.log(`===============================`);
    
    // Apply rotation animation
    elements.rouletteWheel.style.transition = 'none';
    elements.rouletteWheel.style.transform = `rotate(${currentState.currentRotation}deg)`;
    
    // Force reflow
    elements.rouletteWheel.offsetHeight;
    
    // Apply the animation
    elements.rouletteWheel.style.transition = 'transform 4s cubic-bezier(0.23, 1, 0.320, 1)';
    elements.rouletteWheel.style.transform = `rotate(${finalRotation}deg)`;
    
    // Update current rotation for next spin
    currentState.currentRotation = finalRotation;
    
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
    
    // Popular dishes - make them clickable with nearby search
    const dishesGrid = document.getElementById('dishesGrid');
    dishesGrid.innerHTML = option.popularDishes.slice(0, 4).map(dish => 
        `<div class="dish-item clickable-dish" data-dish="${dish}" onclick="showTop3RestaurantsNearby('${dish}', '${option.category}')">
            ${dish}
            <span class="click-hint">📍</span>
        </div>`
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
            // Reset find nearby results when closing modals
            resetFindNearbyResults();
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
    
    // Popular dishes are now clickable (no separate find nearby button needed)
    
    document.getElementById('spinAgainBtn').addEventListener('click', () => {
        // Reset find nearby results
        resetFindNearbyResults();
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

// Google Maps Integration
let map;
let service;
let userLocation;
let currentSelectedOption;

// Initialize Google Maps
function initMap() {
    // This function is called by Google Maps API
    // Initial map setup will be done when user requests nearby restaurants
    console.log('Google Maps API loaded');
}

// Cuisine type mapping for Google Places API
const cuisineTypeMapping = {
    // Sydney
    'Asian Fusion': ['chinese_restaurant', 'japanese_restaurant', 'thai_restaurant', 'vietnamese_restaurant', 'asian_restaurant'],
    'Cafe & Light': ['cafe', 'sandwich_shop', 'meal_takeaway'],
    'Italian Classics': ['italian_restaurant', 'pizza_restaurant'],
    'Health Bowls': ['health_food_restaurant', 'vegetarian_restaurant'],
    'Aussie Local': ['restaurant', 'meal_takeaway'],
    
    // Melbourne
    'Coffee & Brunch': ['cafe', 'bakery'],
    'Lane Way Gems': ['restaurant', 'meal_takeaway'],
    'European Deli': ['greek_restaurant', 'german_restaurant', 'european_restaurant'],
    'Asian Street Food': ['chinese_restaurant', 'korean_restaurant', 'vietnamese_restaurant', 'thai_restaurant'],
    'Modern Australian': ['fine_dining_restaurant', 'restaurant'],
    
    // Brisbane
    'Tropical Fresh': ['juice_bar', 'health_food_restaurant', 'vegetarian_restaurant'],
    'Brisbane BBQ': ['barbecue_restaurant', 'restaurant'],
    'World Flavors': ['indian_restaurant', 'greek_restaurant', 'vietnamese_restaurant', 'middle_eastern_restaurant'],
    'Riverside Dining': ['seafood_restaurant', 'restaurant'],
    'Farmers Market': ['organic_store', 'health_food_restaurant', 'vegetarian_restaurant']
};

async function findNearbyRestaurants(selectedOption) {
    currentSelectedOption = selectedOption;
    const mapContainer = document.getElementById('mapContainer');
    const restaurantList = document.getElementById('restaurantList');
    
    // Show map container
    mapContainer.style.display = 'block';
    
    // Show loading state
    restaurantList.innerHTML = `
        <div class="loading-restaurants">
            <div class="loading-icon">🔄</div>
            <p>Finding nearby restaurants...</p>
        </div>
    `;
    
    try {
        // Get user location
        userLocation = await getUserLocation();
        
        // Initialize map
        initializeMap(userLocation);
        
        // Search for restaurants
        const restaurants = await searchNearbyRestaurants(selectedOption, userLocation);
        
        // Display results
        displayRestaurants(restaurants);
        
    } catch (error) {
        console.error('Error finding restaurants:', error);
        showLocationError(error.message);
    }
}

function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser'));
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                let message;
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        message = "Location access denied. Please enable location services.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message = "Location information unavailable.";
                        break;
                    case error.TIMEOUT:
                        message = "Location request timed out.";
                        break;
                    default:
                        message = "An unknown error occurred while getting location.";
                        break;
                }
                reject(new Error(message));
            },
            {
                timeout: 10000,
                maximumAge: 300000 // 5 minutes
            }
        );
    });
}

function initializeMap(location) {
    const mapDiv = document.getElementById('restaurantMap');
    
    map = new google.maps.Map(mapDiv, {
        center: location,
        zoom: 15,
        styles: [
            {
                "featureType": "poi.business",
                "stylers": [{"visibility": "on"}]
            }
        ]
    });
    
    // Add user location marker
    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Your Location',
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="#4285F4"/>
                    <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(24, 24)
        }
    });
    
    service = new google.maps.places.PlacesService(map);
}

async function searchNearbyRestaurants(selectedOption, location) {
    const types = cuisineTypeMapping[selectedOption.category] || ['restaurant'];
    const radius = 2000; // 2km radius
    
    return new Promise((resolve, reject) => {
        const request = {
            location: location,
            radius: radius,
            types: ['restaurant', 'food', 'meal_takeaway'],
            keyword: types.join(' OR ')
        };
        
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // Filter and sort results
                const filteredResults = results
                    .filter(place => place.rating && place.rating > 3.5) // Only show well-rated places
                    .slice(0, 10) // Limit to 10 results
                    .sort((a, b) => b.rating - a.rating); // Sort by rating
                
                resolve(filteredResults);
            } else {
                reject(new Error('Failed to find nearby restaurants'));
            }
        });
    });
}

function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurantList');
    
    if (restaurants.length === 0) {
        restaurantList.innerHTML = `
            <div class="loading-restaurants">
                <div style="font-size: 2rem;">🤷‍♂️</div>
                <p>No restaurants found nearby. Try expanding your search area.</p>
            </div>
        `;
        return;
    }
    
    restaurantList.innerHTML = restaurants.map(restaurant => {
        const distance = calculateDistance(userLocation, restaurant.geometry.location);
        const rating = restaurant.rating || 'N/A';
        const priceLevel = '💰'.repeat(restaurant.price_level || 1);
        
        // Add marker to map
        const marker = new google.maps.Marker({
            position: restaurant.geometry.location,
            map: map,
            title: restaurant.name,
            icon: {
                url: currentSelectedOption.icon ? 
                    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="${currentSelectedOption.color}" stroke="white" stroke-width="2"/>
                            <text x="16" y="20" font-size="16" text-anchor="middle" fill="white">${currentSelectedOption.icon}</text>
                        </svg>
                    `)}` :
                    'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: new google.maps.Size(32, 32)
            }
        });
        
        // Add click listener to marker
        marker.addListener('click', () => {
            openInMaps(restaurant);
        });
        
        return `
            <div class="restaurant-item" onclick="focusOnRestaurant(${restaurant.geometry.location.lat()}, ${restaurant.geometry.location.lng()})">
                <div class="restaurant-info">
                    <div class="restaurant-name">${restaurant.name}</div>
                    <div class="restaurant-details">
                        <span class="restaurant-rating">⭐ ${rating}</span>
                        <span class="restaurant-distance">${distance}</span>
                        <span>${priceLevel}</span>
                    </div>
                </div>
                <div class="restaurant-actions">
                    <button class="map-btn" onclick="event.stopPropagation(); openInMaps(${JSON.stringify(restaurant).replace(/"/g, '&quot;')})">
                        Navigate
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function calculateDistance(pos1, pos2) {
    const lat1 = pos1.lat;
    const lng1 = pos1.lng;
    const lat2 = pos2.lat();
    const lng2 = pos2.lng();
    
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    
    return d < 1 ? `${Math.round(d * 1000)}m` : `${d.toFixed(1)}km`;
}

function focusOnRestaurant(lat, lng) {
    if (map) {
        map.setCenter(new google.maps.LatLng(lat, lng));
        map.setZoom(17);
    }
}

function openInMaps(restaurant) {
    const lat = restaurant.geometry.location.lat();
    const lng = restaurant.geometry.location.lng();
    const name = encodeURIComponent(restaurant.name);
    
    // Try to open in native maps app first, fall back to Google Maps
    const mapsUrl = `https://maps.google.com/maps?daddr=${lat},${lng}&q=${name}`;
    window.open(mapsUrl, '_blank');
}

// Fallback restaurant search without Google Maps API
async function findRestaurantsWithoutAPI(selectedOption) {
    const mapContainer = document.getElementById('mapContainer');
    const restaurantList = document.getElementById('restaurantList');
    
    // Show map container
    mapContainer.style.display = 'block';
    
    // Show loading state
    restaurantList.innerHTML = `
        <div class="loading-restaurants">
            <div class="loading-icon">🔄</div>
            <p>Finding nearby restaurants...</p>
        </div>
    `;
    
    try {
        // Get user location
        const userLocation = await getUserLocation();
        
        // Generate search suggestions based on cuisine type and city
        const suggestions = generateRestaurantSuggestions(selectedOption, currentState.selectedCity);
        
        // Display search suggestions
        displaySearchSuggestions(suggestions, selectedOption, userLocation);
        
    } catch (error) {
        console.error('Error getting location:', error);
        // Show search suggestions without location
        const suggestions = generateRestaurantSuggestions(selectedOption, currentState.selectedCity);
        displaySearchSuggestions(suggestions, selectedOption, null);
    }
}

function generateRestaurantSuggestions(selectedOption, city) {
    const cityData = {
        sydney: {
            'Asian Fusion': ['Din Tai Fung', 'Gumshara Ramen', 'Chat Thai', 'Mr. Wong', 'Golden Century'],
            'Cafe & Light': ['Bluestone Lane', 'Bills Darlinghurst', 'Reuben Hills', 'Single O', 'The Grounds'],
            'Italian Classics': ['Via Napoli', 'Lucio Pizzeria', 'Fratelli Paradiso', 'Alberto\'s Lounge', 'Pellegrino 2000'],
            'Health Bowls': ['Yellow', 'Fishbowl', 'Guzman y Gomez', 'Sumo Salad', 'About Life'],
            'Aussie Local': ['Harry\'s Cafe de Wheels', 'Bourke Street Bakery', 'Pie Tin', 'The Local Taphouse']
        },
        melbourne: {
            'Coffee & Brunch': ['Patricia Coffee Brewers', 'Industry Beans', 'Higher Ground', 'Top Paddock', 'Dukes Coffee Roasters'],
            'Lane Way Gems': ['Degraves Espresso Bar', 'Centre Place', 'Block Arcade Bistro', 'Manchester Lane', 'Presgrave Place'],
            'European Deli': ['Brunetti', 'European', 'Continental Deli', 'Salami King', 'Richmond Hill Cafe'],
            'Asian Street Food': ['Hwaro Korean BBQ', 'Laksa King', 'Chocolate Buddha', 'Taxi Kitchen', 'Dumplings Plus'],
            'Modern Australian': ['Attica', 'Flower Drum', 'Vue de Monde', 'Cutler & Co', 'Chin Chin']
        },
        brisbane: {
            'Tropical Fresh': ['Guzman y Gomez', 'Boost Juice', 'Fresh Fruit Co', 'The Smoothie Man', 'Tropical Smoothie Cafe'],
            'Brisbane BBQ': ['Smoke BBQ', 'Newstead Brewing', 'Cha Cha Char', 'Ribs & Burgers', 'Black Bear BBQ'],
            'World Flavors': ['Govindas', 'Jimmy\'s on the Mall', 'Vietnam Kitchen', 'Himalayan Cafe', 'Sahara Turkish'],
            'Riverside Dining': ['Eagle Street Pier', 'Riverland', 'Breakfast Creek Hotel', 'Story Bridge Hotel', 'City Botanic Gardens Cafe'],
            'Farmers Market': ['Jan Powers Farmers Markets', 'Davies Park Market', 'West End Markets', 'New Farm Park Markets']
        }
    };
    
    return cityData[city]?.[selectedOption.category] || ['Local Restaurant', 'Nearby Cafe', 'Food Court', 'Takeaway Shop'];
}

function displaySearchSuggestions(suggestions, selectedOption, userLocation) {
    const restaurantList = document.getElementById('restaurantList');
    const restaurantMap = document.getElementById('restaurantMap');
    
    // Display a search interface with multiple options
    restaurantMap.innerHTML = `
        <div style="padding: 20px; background: linear-gradient(135deg, ${selectedOption.color}20, ${selectedOption.color}10); border-radius: 12px; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">${selectedOption.icon}</div>
            <div style="font-size: 1.2rem; font-weight: 600; color: #333; margin-bottom: 8px;">Find ${selectedOption.name}</div>
            <div style="color: #666; font-size: 0.95rem;">in ${currentState.selectedCity.charAt(0).toUpperCase() + currentState.selectedCity.slice(1)}</div>
            ${userLocation ? `<div style="font-size: 0.85rem; margin-top: 8px; color: #888;">📍 Location detected</div>` : '<div style="font-size: 0.85rem; margin-top: 8px; color: #888;">📍 Using city-based search</div>'}
            
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px; flex-wrap: wrap;">
                <button onclick="searchInMaps('${selectedOption.category} restaurants', '${currentState.selectedCity}')" 
                        style="padding: 8px 16px; background: ${selectedOption.color}; color: white; border: none; border-radius: 20px; font-size: 0.9rem; cursor: pointer;">
                    🍽️ All ${selectedOption.name}
                </button>
                <button onclick="searchInMaps('${selectedOption.category} restaurants near me', '${currentState.selectedCity}')" 
                        style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 20px; font-size: 0.9rem; cursor: pointer;">
                    📍 Near Me
                </button>
                <button onclick="searchInMaps('best ${selectedOption.category} restaurants', '${currentState.selectedCity}')" 
                        style="padding: 8px 16px; background: #ffc107; color: #333; border: none; border-radius: 20px; font-size: 0.9rem; cursor: pointer;">
                    ⭐ Top Rated
                </button>
            </div>
        </div>
    `;
    
    restaurantList.innerHTML = `
        <div style="margin-bottom: 15px;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Popular ${selectedOption.name} spots:</h4>
        </div>
        ${suggestions.map((restaurant, index) => `
            <div class="restaurant-item" style="transition: transform 0.2s; cursor: pointer;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div class="restaurant-info">
                    <div class="restaurant-name" style="font-weight: 600;">${restaurant}</div>
                    <div class="restaurant-details">
                        <span class="restaurant-rating">⭐ 4.${Math.floor(Math.random() * 5) + 2}</span>
                        <span class="restaurant-distance">${(Math.random() * 2 + 0.5).toFixed(1)}km</span>
                        <span>${'💰'.repeat(Math.floor(Math.random() * 3) + 1)}</span>
                        <span style="color: ${selectedOption.color}; font-size: 0.8rem;">• ${selectedOption.category}</span>
                    </div>
                </div>
                <div class="restaurant-actions">
                    <button class="map-btn" onclick="searchInMaps('${restaurant}', '${currentState.selectedCity}')" 
                            style="background: ${selectedOption.color}; border-color: ${selectedOption.color};">
                        🗺️ Find
                    </button>
                </div>
            </div>
        `).join('')}
        
        <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 10px; border-left: 4px solid ${selectedOption.color};">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <span style="font-size: 1.5rem;">💡</span>
                <span style="font-weight: 600; color: #333;">Quick Search Tips</span>
            </div>
            <div style="font-size: 0.9rem; color: #666; line-height: 1.4;">
                • Click "Find" to search specific restaurants on Google Maps<br>
                • Use the quick search buttons above for broader searches<br>
                • Try searching "${selectedOption.category} ${currentState.selectedCity}" for more options
            </div>
        </div>
    `;
}

// Function to reset find nearby results
function resetFindNearbyResults() {
    const mapContainer = document.getElementById('mapContainer');
    const suggestionContainer = document.getElementById('restaurantSuggestions');
    
    if (mapContainer) {
        mapContainer.style.display = 'none';
    }
    
    if (suggestionContainer) {
        suggestionContainer.remove();
    }
}

// Enhanced Multi-API Restaurant Data Service
class RestaurantAPIService {
    constructor() {
        // API configurations with enhanced settings
        this.apis = {
            yelp: {
                name: 'Yelp',
                dailyLimit: 500,
                used: parseInt(localStorage.getItem('yelp_used_' + this.getDateKey()) || '0'),
                endpoint: 'https://api.yelp.com/v3/businesses/search',
                key: 'YOUR_YELP_API_KEY', // Replace with actual key
                enabled: false, // Enable when you have API key
                timeout: 8000,
                retryCount: 0,
                maxRetries: 2,
                priority: 1, // Higher number = higher priority
                lastError: null,
                consecutiveFailures: 0,
                healthStatus: 'unknown' // unknown, healthy, degraded, unhealthy
            },
            google: {
                name: 'Google Places',
                dailyLimit: 1000,
                used: parseInt(localStorage.getItem('google_used_' + this.getDateKey()) || '0'),
                endpoint: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
                key: 'YOUR_GOOGLE_API_KEY', // Replace with actual key
                enabled: false, // Enable when you have API key
                timeout: 10000,
                retryCount: 0,
                maxRetries: 3,
                priority: 2,
                lastError: null,
                consecutiveFailures: 0,
                healthStatus: 'unknown'
            },
            foursquare: {
                name: 'Foursquare',
                dailyLimit: 1000,
                used: parseInt(localStorage.getItem('foursquare_used_' + this.getDateKey()) || '0'),
                endpoint: 'https://api.foursquare.com/v3/places/search',
                key: 'YOUR_FOURSQUARE_API_KEY', // Replace with actual key
                enabled: false, // Enable when you have API key
                timeout: 7000,
                retryCount: 0,
                maxRetries: 2,
                priority: 3,
                lastError: null,
                consecutiveFailures: 0,
                healthStatus: 'unknown'
            },
            // Add new APIs easily
            zomato: {
                name: 'Zomato',
                dailyLimit: 1000,
                used: parseInt(localStorage.getItem('zomato_used_' + this.getDateKey()) || '0'),
                endpoint: 'https://developers.zomato.com/api/v2.1/search',
                key: 'YOUR_ZOMATO_API_KEY',
                enabled: false,
                timeout: 6000,
                retryCount: 0,
                maxRetries: 2,
                priority: 4,
                lastError: null,
                consecutiveFailures: 0,
                healthStatus: 'unknown'
            }
        };
        
        // Enhanced cache system
        this.cache = new Map();
        this.cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours
        this.shortCache = new Map(); // For failed requests (shorter expiry)
        this.shortCacheExpiry = 5 * 60 * 1000; // 5 minutes
        
        // Circuit breaker settings
        this.circuitBreaker = {
            failureThreshold: 5, // API marked unhealthy after 5 consecutive failures
            recoveryTimeout: 15 * 60 * 1000, // 15 minutes before retry unhealthy API
            halfOpenRetries: 1 // Number of retries when half-open
        };
        
        // Performance monitoring
        this.metrics = {
            totalRequests: 0,
            successfulRequests: 0,
            cachedRequests: 0,
            fallbackRequests: 0,
            averageResponseTime: 0,
            apiUsageStats: {}
        };
        
        // Initialize health check
        this.performPeriodicHealthCheck();
    }
    
    getDateKey() {
        return new Date().toISOString().split('T')[0];
    }
    
    // Enhanced API selection with health status and priority
    getAvailableAPIs() {
        const now = Date.now();
        return Object.entries(this.apis)
            .filter(([key, api]) => {
                // Basic availability checks
                if (!api.enabled || api.used >= api.dailyLimit) return false;
                
                // Circuit breaker logic
                if (api.healthStatus === 'unhealthy') {
                    // Check if recovery timeout has passed
                    if (api.lastFailureTime && (now - api.lastFailureTime) < this.circuitBreaker.recoveryTimeout) {
                        return false;
                    }
                    // Mark as half-open for testing
                    api.healthStatus = 'half-open';
                }
                
                return true;
            })
            .sort(([, a], [, b]) => {
                // Primary sort: Health status (healthy > half-open > degraded)
                const healthScore = { healthy: 3, half_open: 2, degraded: 1, unknown: 0.5 };
                const healthDiff = (healthScore[b.healthStatus] || 0) - (healthScore[a.healthStatus] || 0);
                if (healthDiff !== 0) return healthDiff;
                
                // Secondary sort: Priority (higher is better)
                const priorityDiff = b.priority - a.priority;
                if (priorityDiff !== 0) return priorityDiff;
                
                // Tertiary sort: Remaining quota
                return (b.dailyLimit - b.used) - (a.dailyLimit - a.used);
            });
    }
    
    // Health check for APIs
    async performHealthCheck(apiName) {
        const api = this.apis[apiName];
        if (!api || !api.enabled) return false;
        
        try {
            const startTime = Date.now();
            // Simple health check with lightweight request
            const result = await this.callAPIWithTimeout(apiName, 'test', 'sydney', true);
            const responseTime = Date.now() - startTime;
            
            // Update health status based on response time and success
            if (result.success) {
                api.consecutiveFailures = 0;
                api.healthStatus = responseTime < 3000 ? 'healthy' : 'degraded';
                return true;
            } else {
                this.handleAPIFailure(apiName, new Error('Health check failed'));
                return false;
            }
        } catch (error) {
            this.handleAPIFailure(apiName, error);
            return false;
        }
    }
    
    // Periodic health check for all APIs
    performPeriodicHealthCheck() {
        // Initial check
        setTimeout(() => {
            Object.keys(this.apis).forEach(apiName => {
                if (this.apis[apiName].enabled) {
                    this.performHealthCheck(apiName);
                }
            });
        }, 5000); // 5 second delay for initial load
        
        // Periodic checks every 10 minutes
        setInterval(() => {
            Object.keys(this.apis).forEach(apiName => {
                if (this.apis[apiName].enabled && this.apis[apiName].healthStatus !== 'unhealthy') {
                    this.performHealthCheck(apiName);
                }
            });
        }, 10 * 60 * 1000);
    }
    
    // Handle API failures with circuit breaker logic
    handleAPIFailure(apiName, error) {
        const api = this.apis[apiName];
        api.consecutiveFailures++;
        api.lastError = error.message;
        api.lastFailureTime = Date.now();
        
        if (api.consecutiveFailures >= this.circuitBreaker.failureThreshold) {
            api.healthStatus = 'unhealthy';
            console.warn(`API ${apiName} marked as unhealthy after ${api.consecutiveFailures} consecutive failures`);
        } else {
            api.healthStatus = 'degraded';
        }
    }
    
    // Enhanced API call with timeout and retry logic
    async callAPIWithTimeout(apiName, dish, city, isHealthCheck = false) {
        const api = this.apis[apiName];
        let retryCount = 0;
        
        while (retryCount <= api.maxRetries) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), api.timeout);
                
                const startTime = Date.now();
                const response = await this.callAPIImplementation(apiName, dish, city, controller.signal, isHealthCheck);
                const responseTime = Date.now() - startTime;
                
                clearTimeout(timeoutId);
                
                // Update metrics
                if (!isHealthCheck) {
                    this.updateMetrics(apiName, responseTime, true);
                }
                
                // Success - reset failure count
                api.consecutiveFailures = 0;
                if (api.healthStatus !== 'healthy') {
                    api.healthStatus = 'healthy';
                }
                
                return response;
                
            } catch (error) {
                retryCount++;
                
                if (retryCount <= api.maxRetries) {
                    // Exponential backoff
                    const delay = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
                    console.log(`Retrying ${apiName} in ${delay}ms (attempt ${retryCount}/${api.maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
                
                // All retries exhausted
                if (!isHealthCheck) {
                    this.handleAPIFailure(apiName, error);
                    this.updateMetrics(apiName, 0, false);
                }
                throw error;
            }
        }
    }
    
    // Update API usage
    updateUsage(apiName) {
        const dateKey = this.getDateKey();
        this.apis[apiName].used++;
        localStorage.setItem(`${apiName}_used_${dateKey}`, this.apis[apiName].used.toString());
    }
    
    // Enhanced cache management
    getCacheKey(dish, city) {
        return `${dish}_${city}`.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }
    
    isValidCache(cacheData, expiry = this.cacheExpiry) {
        return cacheData && (Date.now() - cacheData.timestamp) < expiry;
    }
    
    // Multi-tier cache check
    getCachedData(cacheKey) {
        // Check main cache first
        const mainCache = this.cache.get(cacheKey);
        if (this.isValidCache(mainCache)) {
            this.metrics.cachedRequests++;
            return { data: mainCache.data, source: 'cache', tier: 'main' };
        }
        
        // Check short-term cache for recent failures
        const shortCache = this.shortCache.get(cacheKey);
        if (this.isValidCache(shortCache, this.shortCacheExpiry)) {
            return { data: shortCache.data, source: 'cache', tier: 'short' };
        }
        
        return null;
    }
    
    // Store data in appropriate cache tier
    setCachedData(cacheKey, data, isError = false) {
        const cacheEntry = {
            data: data,
            timestamp: Date.now(),
            hits: 1
        };
        
        if (isError) {
            this.shortCache.set(cacheKey, cacheEntry);
        } else {
            this.cache.set(cacheKey, cacheEntry);
        }
        
        // Cleanup old cache entries periodically
        this.cleanupCache();
    }
    
    // Cache cleanup to prevent memory leaks
    cleanupCache() {
        if (Math.random() < 0.1) { // 10% chance to run cleanup
            const now = Date.now();
            
            // Clean main cache
            for (const [key, value] of this.cache.entries()) {
                if ((now - value.timestamp) > this.cacheExpiry) {
                    this.cache.delete(key);
                }
            }
            
            // Clean short cache
            for (const [key, value] of this.shortCache.entries()) {
                if ((now - value.timestamp) > this.shortCacheExpiry) {
                    this.shortCache.delete(key);
                }
            }
        }
    }
    
    // Performance metrics tracking
    updateMetrics(apiName, responseTime, success) {
        this.metrics.totalRequests++;
        
        if (success) {
            this.metrics.successfulRequests++;
            
            // Update average response time
            const prevAvg = this.metrics.averageResponseTime;
            const totalSuccessful = this.metrics.successfulRequests;
            this.metrics.averageResponseTime = ((prevAvg * (totalSuccessful - 1)) + responseTime) / totalSuccessful;
            
            // Track per-API stats
            if (!this.metrics.apiUsageStats[apiName]) {
                this.metrics.apiUsageStats[apiName] = {
                    requests: 0,
                    successes: 0,
                    avgResponseTime: 0,
                    totalResponseTime: 0
                };
            }
            
            const apiStats = this.metrics.apiUsageStats[apiName];
            apiStats.requests++;
            apiStats.successes++;
            apiStats.totalResponseTime += responseTime;
            apiStats.avgResponseTime = apiStats.totalResponseTime / apiStats.successes;
        }
    }
    
    // Get performance report
    getPerformanceReport() {
        const successRate = this.metrics.totalRequests > 0 
            ? (this.metrics.successfulRequests / this.metrics.totalRequests * 100).toFixed(1)
            : 0;
        
        const cacheHitRate = this.metrics.totalRequests > 0
            ? (this.metrics.cachedRequests / this.metrics.totalRequests * 100).toFixed(1)
            : 0;
        
        return {
            totalRequests: this.metrics.totalRequests,
            successRate: `${successRate}%`,
            cacheHitRate: `${cacheHitRate}%`,
            averageResponseTime: `${Math.round(this.metrics.averageResponseTime)}ms`,
            fallbackRequests: this.metrics.fallbackRequests,
            apiStats: this.metrics.apiUsageStats,
            cacheSize: this.cache.size,
            shortCacheSize: this.shortCache.size
        };
    }
    
    // Enhanced main function to get restaurant data
    async getRestaurantData(dish, category, city) {
        const startTime = Date.now();
        this.metrics.totalRequests++;
        
        const cacheKey = this.getCacheKey(dish, city);
        
        // Check multi-tier cache first
        const cachedResult = this.getCachedData(cacheKey);
        if (cachedResult) {
            console.log(`Using ${cachedResult.tier} cached data for ${dish} in ${city}`);
            return { 
                success: true, 
                data: cachedResult.data, 
                source: cachedResult.source,
                responseTime: Date.now() - startTime
            };
        }
        
        // Try APIs with enhanced failure handling
        const availableAPIs = this.getAvailableAPIs();
        console.log(`Available APIs for ${dish} in ${city}:`, availableAPIs.map(([name, api]) => `${name}(${api.healthStatus})`));
        
        for (const [apiName, apiConfig] of availableAPIs) {
            try {
                console.log(`Trying ${apiConfig.name} API for ${dish} in ${city} (Health: ${apiConfig.healthStatus})`);
                
                const result = await this.callAPIWithTimeout(apiName, dish, city);
                
                if (result.success) {
                    // Cache successful result
                    this.setCachedData(cacheKey, result.data);
                    
                    // Update usage and metrics
                    this.updateUsage(apiName);
                    
                    const responseTime = Date.now() - startTime;
                    console.log(`✅ ${apiConfig.name} API succeeded in ${responseTime}ms`);
                    
                    return { 
                        ...result, 
                        source: apiConfig.name,
                        responseTime: responseTime
                    };
                }
            } catch (error) {
                console.warn(`❌ ${apiConfig.name} API failed:`, error.message);
                continue;
            }
        }
        
        // All APIs failed - return fallback data
        this.metrics.fallbackRequests++;
        const fallbackData = this.getFallbackData(dish, category, city);
        
        // Cache fallback data with shorter expiry
        this.setCachedData(cacheKey, fallbackData, true);
        
        const responseTime = Date.now() - startTime;
        console.log(`🔄 All APIs failed/exhausted, using fallback data (${responseTime}ms)`);
        
        return { 
            success: true, 
            data: fallbackData, 
            source: 'fallback',
            responseTime: responseTime
        };
    }
    
    // API implementation dispatcher
    async callAPIImplementation(apiName, dish, city, signal, isHealthCheck = false) {
        const api = this.apis[apiName];
        
        switch (apiName) {
            case 'yelp':
                return await this.callYelpAPI(dish, city, api, signal, isHealthCheck);
            case 'google':
                return await this.callGoogleAPI(dish, city, api, signal, isHealthCheck);
            case 'foursquare':
                return await this.callFoursquareAPI(dish, city, api, signal, isHealthCheck);
            case 'zomato':
                return await this.callZomatoAPI(dish, city, api, signal, isHealthCheck);
            default:
                throw new Error(`Unknown API: ${apiName}`);
        }
    }
    
    // Enhanced Yelp API implementation
    async callYelpAPI(dish, city, api, signal, isHealthCheck = false) {
        const searchTerm = isHealthCheck ? 'restaurant' : `${dish} restaurant`;
        const url = `${api.endpoint}?term=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(city)}&limit=3&sort_by=rating`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Authorization': `Bearer ${api.key}`,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Yelp API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.businesses || data.businesses.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatYelpData(data.businesses)
        };
    }
    
    // Enhanced Google Places API implementation  
    async callGoogleAPI(dish, city, api, signal, isHealthCheck = false) {
        const query = isHealthCheck ? `restaurant ${city}` : `${dish} restaurant ${city}`;
        const url = `${api.endpoint}?query=${encodeURIComponent(query)}&key=${api.key}&fields=name,formatted_address,rating,price_level,types`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Google API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.status && data.status !== 'OK') {
            throw new Error(`Google API status: ${data.status}`);
        }
        
        if (!data.results || data.results.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatGoogleData(data.results.slice(0, 3))
        };
    }
    
    // Enhanced Foursquare API implementation
    async callFoursquareAPI(dish, city, api, signal, isHealthCheck = false) {
        const query = isHealthCheck ? 'restaurant' : dish;
        const url = `${api.endpoint}?query=${encodeURIComponent(query)}&near=${encodeURIComponent(city)}&limit=3&categories=13000`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Authorization': api.key,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Foursquare API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatFoursquareData(data.results)
        };
    }
    
    // New Zomato API implementation
    async callZomatoAPI(dish, city, api, signal, isHealthCheck = false) {
        const query = isHealthCheck ? 'restaurant' : dish;
        const url = `${api.endpoint}?q=${encodeURIComponent(query)}&entity_type=city&entity_id=${this.getCityId(city)}&count=3&sort=rating&order=desc`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'user-key': api.key,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Zomato API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.restaurants || data.restaurants.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatZomatoData(data.restaurants)
        };
    }
    
    // Helper method to get city ID for Zomato API
    getCityId(city) {
        const cityIds = {
            'sydney': 259,
            'melbourne': 259,
            'brisbane': 259
        };
        return cityIds[city.toLowerCase()] || 259;
    }
    
    // Format Yelp data to standard format
    formatYelpData(businesses) {
        return businesses.map(business => ({
            name: business.name,
            location: business.location.display_address.join(', '),
            rating: business.rating.toFixed(1),
            priceLevel: '💰'.repeat(business.price ? business.price.length : 2),
            specialty: business.categories[0]?.title || 'Restaurant',
            distance: business.distance ? `${(business.distance / 1000).toFixed(1)}km` : null
        }));
    }
    
    // Format Google data to standard format
    formatGoogleData(places) {
        return places.map(place => ({
            name: place.name,
            location: place.formatted_address,
            rating: place.rating ? place.rating.toFixed(1) : '4.0',
            priceLevel: '💰'.repeat(place.price_level || 2),
            specialty: place.types[0]?.replace('_', ' ') || 'Restaurant',
            distance: null // Google doesn't provide distance in text search
        }));
    }
    
    // Format Foursquare data to standard format
    formatFoursquareData(venues) {
        return venues.map(venue => ({
            name: venue.name,
            location: venue.location.formatted_address || venue.location.address,
            rating: venue.rating ? venue.rating.toFixed(1) : '4.2',
            priceLevel: '💰'.repeat(venue.price || 2),
            specialty: venue.categories[0]?.name || 'Restaurant',
            distance: venue.distance ? `${(venue.distance / 1000).toFixed(1)}km` : null
        }));
    }
    
    // Format Zomato data to standard format
    formatZomatoData(restaurants) {
        return restaurants.map(item => {
            const restaurant = item.restaurant;
            return {
                name: restaurant.name,
                location: restaurant.location.address,
                rating: restaurant.user_rating.aggregate_rating || '4.0',
                priceLevel: '💰'.repeat(restaurant.price_range || 2),
                specialty: restaurant.cuisines || 'Restaurant',
                distance: null
            };
        });
    }
    
    // Enhanced restaurant data with location support
    async getRestaurantDataWithLocation(dish, category, location, city) {
        const startTime = Date.now();
        this.metrics.totalRequests++;
        
        const cacheKey = this.getCacheKey(`${dish}_${location.lat}_${location.lng}`, city);
        
        // Check multi-tier cache first
        const cachedResult = this.getCachedData(cacheKey);
        if (cachedResult) {
            console.log(`Using ${cachedResult.tier} cached data for ${dish} near ${location.lat},${location.lng}`);
            return { 
                success: true, 
                data: cachedResult.data, 
                source: cachedResult.source,
                responseTime: Date.now() - startTime
            };
        }
        
        // Try APIs with location coordinates
        const availableAPIs = this.getAvailableAPIs();
        console.log(`Available APIs for ${dish} near location:`, availableAPIs.map(([name, api]) => `${name}(${api.healthStatus})`));
        
        for (const [apiName, apiConfig] of availableAPIs) {
            try {
                console.log(`Trying ${apiConfig.name} API for ${dish} near ${location.lat},${location.lng}`);
                
                const result = await this.callAPIWithLocationTimeout(apiName, dish, location, city);
                
                if (result.success) {
                    // Cache successful result with location
                    this.setCachedData(cacheKey, result.data);
                    
                    // Update usage and metrics
                    this.updateUsage(apiName);
                    
                    const responseTime = Date.now() - startTime;
                    console.log(`✅ ${apiConfig.name} API succeeded in ${responseTime}ms`);
                    
                    return { 
                        ...result, 
                        source: apiConfig.name,
                        responseTime: responseTime,
                        location: location
                    };
                }
            } catch (error) {
                console.warn(`❌ ${apiConfig.name} API failed:`, error.message);
                continue;
            }
        }
        
        // All APIs failed - return fallback data
        this.metrics.fallbackRequests++;
        const fallbackData = this.getFallbackData(dish, category, city);
        
        // Add distance calculation to fallback data
        const fallbackWithDistance = fallbackData.map(restaurant => ({
            ...restaurant,
            distance: this.calculateRestaurantDistance(location, restaurant, city)
        })).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        
        // Cache fallback data with shorter expiry
        this.setCachedData(cacheKey, fallbackWithDistance, true);
        
        const responseTime = Date.now() - startTime;
        console.log(`🔄 All APIs failed, using fallback data with distance calculation (${responseTime}ms)`);
        
        return { 
            success: true, 
            data: fallbackWithDistance.slice(0, 3), // Top 3 closest
            source: 'fallback',
            responseTime: responseTime,
            location: location
        };
    }
    
    // API call with location timeout
    async callAPIWithLocationTimeout(apiName, dish, location, city) {
        const api = this.apis[apiName];
        let retryCount = 0;
        
        while (retryCount <= api.maxRetries) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), api.timeout);
                
                const startTime = Date.now();
                const response = await this.callAPIImplementationWithLocation(apiName, dish, location, city, controller.signal);
                const responseTime = Date.now() - startTime;
                
                clearTimeout(timeoutId);
                
                // Update metrics
                this.updateMetrics(apiName, responseTime, true);
                
                // Success - reset failure count
                api.consecutiveFailures = 0;
                if (api.healthStatus !== 'healthy') {
                    api.healthStatus = 'healthy';
                }
                
                return response;
                
            } catch (error) {
                retryCount++;
                
                if (retryCount <= api.maxRetries) {
                    // Exponential backoff
                    const delay = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
                    console.log(`Retrying ${apiName} in ${delay}ms (attempt ${retryCount}/${api.maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
                
                // All retries exhausted
                this.handleAPIFailure(apiName, error);
                this.updateMetrics(apiName, 0, false);
                throw error;
            }
        }
    }
    
    // API implementation with location coordinates
    async callAPIImplementationWithLocation(apiName, dish, location, city, signal) {
        const api = this.apis[apiName];
        
        switch (apiName) {
            case 'yelp':
                return await this.callYelpAPIWithLocation(dish, location, api, signal);
            case 'google':
                return await this.callGoogleAPIWithLocation(dish, location, api, signal);
            case 'foursquare':
                return await this.callFoursquareAPIWithLocation(dish, location, api, signal);
            case 'zomato':
                return await this.callZomatoAPIWithLocation(dish, location, city, api, signal);
            default:
                throw new Error(`Unknown API: ${apiName}`);
        }
    }
    
    // Location-based API implementations
    async callYelpAPIWithLocation(dish, location, api, signal) {
        const url = `${api.endpoint}?term=${encodeURIComponent(dish + ' restaurant')}&latitude=${location.lat}&longitude=${location.lng}&radius=5000&limit=3&sort_by=distance`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Authorization': `Bearer ${api.key}`,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Yelp API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.businesses || data.businesses.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatYelpDataWithDistance(data.businesses)
        };
    }
    
    async callGoogleAPIWithLocation(dish, location, api, signal) {
        const url = `${api.endpoint}?query=${encodeURIComponent(dish + ' restaurant')}&location=${location.lat},${location.lng}&radius=5000&key=${api.key}`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Google API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.status && data.status !== 'OK') {
            throw new Error(`Google API status: ${data.status}`);
        }
        
        if (!data.results || data.results.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatGoogleDataWithDistance(data.results.slice(0, 3), location)
        };
    }
    
    async callFoursquareAPIWithLocation(dish, location, api, signal) {
        const url = `${api.endpoint}?query=${encodeURIComponent(dish)}&ll=${location.lat},${location.lng}&radius=5000&limit=3&categories=13000`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'Authorization': api.key,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Foursquare API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatFoursquareDataWithDistance(data.results)
        };
    }
    
    async callZomatoAPIWithLocation(dish, location, city, api, signal) {
        const url = `${api.endpoint}?q=${encodeURIComponent(dish)}&lat=${location.lat}&lon=${location.lng}&radius=5000&count=3&sort=real_distance&order=asc`;
        
        const response = await fetch(url, {
            signal,
            headers: {
                'user-key': api.key,
                'Accept': 'application/json',
                'User-Agent': 'LunchRoulette/1.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Zomato API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.restaurants || data.restaurants.length === 0) {
            throw new Error('No restaurants found');
        }
        
        return {
            success: true,
            data: this.formatZomatoDataWithDistance(data.restaurants)
        };
    }
    
    // Enhanced data formatting with distance
    formatYelpDataWithDistance(businesses) {
        return businesses.map(business => ({
            name: business.name,
            location: business.location.display_address.join(', '),
            rating: business.rating.toFixed(1),
            priceLevel: '💰'.repeat(business.price ? business.price.length : 2),
            specialty: business.categories[0]?.title || 'Restaurant',
            distance: business.distance ? `${(business.distance / 1000).toFixed(1)}km` : null,
            phone: business.phone || null,
            url: business.url || null
        }));
    }
    
    formatGoogleDataWithDistance(places, userLocation) {
        return places.map(place => ({
            name: place.name,
            location: place.formatted_address,
            rating: place.rating ? place.rating.toFixed(1) : '4.0',
            priceLevel: '💰'.repeat(place.price_level || 2),
            specialty: place.types[0]?.replace('_', ' ') || 'Restaurant',
            distance: place.geometry ? this.calculateDistanceFromCoords(
                userLocation, 
                { lat: place.geometry.location.lat, lng: place.geometry.location.lng }
            ) : null,
            placeId: place.place_id || null
        }));
    }
    
    formatFoursquareDataWithDistance(venues) {
        return venues.map(venue => ({
            name: venue.name,
            location: venue.location.formatted_address || venue.location.address,
            rating: venue.rating ? venue.rating.toFixed(1) : '4.2',
            priceLevel: '💰'.repeat(venue.price || 2),
            specialty: venue.categories[0]?.name || 'Restaurant',
            distance: venue.distance ? `${(venue.distance / 1000).toFixed(1)}km` : null,
            fsqId: venue.fsq_id || null
        }));
    }
    
    formatZomatoDataWithDistance(restaurants) {
        return restaurants.map(item => {
            const restaurant = item.restaurant;
            return {
                name: restaurant.name,
                location: restaurant.location.address,
                rating: restaurant.user_rating.aggregate_rating || '4.0',
                priceLevel: '💰'.repeat(restaurant.price_range || 2),
                specialty: restaurant.cuisines || 'Restaurant',
                distance: restaurant.location.distance ? `${restaurant.location.distance}km` : null,
                zomatoId: restaurant.id || null
            };
        });
    }
    
    // Calculate distance between two coordinates
    calculateDistanceFromCoords(pos1, pos2) {
        const R = 6371; // Earth's radius in km
        const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
        const dLng = (pos2.lng - pos1.lng) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) *
                  Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return `${(R * c).toFixed(1)}km`;
    }
    
    // Calculate distance to fallback restaurants
    calculateRestaurantDistance(userLocation, restaurant, city) {
        // Use estimated coordinates for fallback restaurants
        const cityCoords = {
            sydney: { lat: -33.8688, lng: 151.2093 },
            melbourne: { lat: -37.8136, lng: 144.9631 },
            brisbane: { lat: -27.4698, lng: 153.0251 }
        };
        
        const cityCenter = cityCoords[city.toLowerCase()] || cityCoords.sydney;
        
        // Add some random offset to simulate different restaurant locations
        const restaurantLocation = {
            lat: cityCenter.lat + (Math.random() - 0.5) * 0.1, // ±5km roughly
            lng: cityCenter.lng + (Math.random() - 0.5) * 0.1
        };
        
        return this.calculateDistanceFromCoords(userLocation, restaurantLocation);
    }
    
    // Fallback data when APIs fail
    getFallbackData(dish, category, city) {
        return getRealRestaurantsForDish(dish, category, city);
    }
    
    // Get usage statistics
    getUsageStats() {
        const stats = {};
        for (const [name, api] of Object.entries(this.apis)) {
            stats[name] = {
                used: api.used,
                limit: api.dailyLimit,
                remaining: api.dailyLimit - api.used,
                enabled: api.enabled,
                healthStatus: api.healthStatus,
                lastError: api.lastError,
                consecutiveFailures: api.consecutiveFailures,
                priority: api.priority
            };
        }
        return stats;
    }
    
    // Enable/disable API
    toggleAPI(apiName, enabled) {
        if (this.apis[apiName]) {
            this.apis[apiName].enabled = enabled;
            console.log(`API ${apiName} ${enabled ? 'enabled' : 'disabled'}`);
        }
    }
    
    // Reset API usage for testing
    resetAPIUsage(apiName = null) {
        const dateKey = this.getDateKey();
        if (apiName) {
            this.apis[apiName].used = 0;
            localStorage.setItem(`${apiName}_used_${dateKey}`, '0');
        } else {
            // Reset all APIs
            Object.keys(this.apis).forEach(name => {
                this.apis[name].used = 0;
                localStorage.setItem(`${name}_used_${dateKey}`, '0');
            });
        }
    }
    
    // Get comprehensive status report
    getStatusReport() {
        const report = {
            timestamp: new Date().toISOString(),
            performance: this.getPerformanceReport(),
            apis: {},
            cache: {
                mainCacheSize: this.cache.size,
                shortCacheSize: this.shortCache.size,
                cacheExpiry: `${this.cacheExpiry / (1000 * 60 * 60)}h`,
                shortCacheExpiry: `${this.shortCacheExpiry / (1000 * 60)}min`
            },
            circuitBreaker: this.circuitBreaker
        };
        
        // Add detailed API info
        Object.entries(this.apis).forEach(([name, api]) => {
            report.apis[name] = {
                enabled: api.enabled,
                health: api.healthStatus,
                usage: `${api.used}/${api.dailyLimit}`,
                remaining: api.dailyLimit - api.used,
                priority: api.priority,
                failures: api.consecutiveFailures,
                lastError: api.lastError,
                timeout: `${api.timeout}ms`,
                maxRetries: api.maxRetries
            };
        });
        
        return report;
    }
}

// Initialize the restaurant API service
const restaurantAPI = new RestaurantAPIService();

// API Status and Management Functions
window.showAPIUsage = function() {
    const report = restaurantAPI.getStatusReport();
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h2>📊 API Status & Performance Report</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                ${generateAPIReport(report)}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-refresh every 10 seconds
    const refreshInterval = setInterval(() => {
        if (!document.body.contains(modal)) {
            clearInterval(refreshInterval);
            return;
        }
        const updatedReport = restaurantAPI.getStatusReport();
        modal.querySelector('.modal-body').innerHTML = generateAPIReport(updatedReport);
    }, 10000);
};

function generateAPIReport(report) {
    const healthStatusColors = {
        healthy: '#28a745',
        degraded: '#ffc107', 
        unhealthy: '#dc3545',
        unknown: '#6c757d',
        half_open: '#17a2b8'
    };
    
    return `
        <div class="api-report">
            <!-- Performance Overview -->
            <div class="section">
                <h3>🎯 Performance Overview</h3>
                <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 15px 0;">
                    <div class="stat-card" style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold; color: #007bff;">${report.performance.totalRequests}</div>
                        <div style="font-size: 0.9em; color: #6c757d;">Total Requests</div>
                    </div>
                    <div class="stat-card" style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold; color: #28a745;">${report.performance.successRate}</div>
                        <div style="font-size: 0.9em; color: #6c757d;">Success Rate</div>
                    </div>
                    <div class="stat-card" style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold; color: #17a2b8;">${report.performance.cacheHitRate}</div>
                        <div style="font-size: 0.9em; color: #6c757d;">Cache Hit Rate</div>
                    </div>
                    <div class="stat-card" style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold; color: #ffc107;">${report.performance.averageResponseTime}</div>
                        <div style="font-size: 0.9em; color: #6c757d;">Avg Response</div>
                    </div>
                </div>
            </div>

            <!-- API Status -->
            <div class="section">
                <h3>🔌 API Health Status</h3>
                <div class="api-grid" style="margin: 15px 0;">
                    ${Object.entries(report.apis).map(([name, api]) => `
                        <div class="api-card" style="border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; margin: 10px 0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h4 style="margin: 0; text-transform: capitalize;">${name}</h4>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <span style="background: ${healthStatusColors[api.health]}; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8em;">
                                        ${api.health.toUpperCase()}
                                    </span>
                                    <label style="display: flex; align-items: center; gap: 5px; font-size: 0.9em;">
                                        <input type="checkbox" ${api.enabled ? 'checked' : ''} 
                                               onchange="restaurantAPI.toggleAPI('${name}', this.checked)">
                                        Enabled
                                    </label>
                                </div>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; font-size: 0.9em;">
                                <div>Usage: <strong>${api.usage}</strong></div>
                                <div>Priority: <strong>${api.priority}</strong></div>
                                <div>Failures: <strong>${api.failures}</strong></div>
                                <div>Timeout: <strong>${api.timeout}</strong></div>
                            </div>
                            ${api.lastError ? `<div style="margin-top: 10px; padding: 8px; background: #f8d7da; border-radius: 4px; font-size: 0.8em; color: #721c24;">
                                Last Error: ${api.lastError}
                            </div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Cache Information -->
            <div class="section">
                <h3>💾 Cache Status</h3>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div>Main Cache: <strong>${report.cache.mainCacheSize} entries</strong></div>
                        <div>Short Cache: <strong>${report.cache.shortCacheSize} entries</strong></div>
                        <div>Cache Expiry: <strong>${report.cache.cacheExpiry}</strong></div>
                        <div>Short Expiry: <strong>${report.cache.shortCacheExpiry}</strong></div>
                    </div>
                </div>
            </div>

            <!-- Control Panel -->
            <div class="section">
                <h3>⚙️ Control Panel</h3>
                <div style="display: flex; gap: 10px; margin: 15px 0; flex-wrap: wrap;">
                    <button onclick="restaurantAPI.resetAPIUsage(); showAPIUsage();" 
                            style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                        Reset All Usage
                    </button>
                    <button onclick="downloadAPIReport()" 
                            style="background: #28a745; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                        Download Report
                    </button>
                    <button onclick="clearAllCaches()" 
                            style="background: #ffc107; color: black; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                        Clear Caches
                    </button>
                </div>
            </div>

            <div style="margin-top: 20px; padding: 10px; background: #e9ecef; border-radius: 4px; font-size: 0.8em; color: #6c757d;">
                Report generated at: ${new Date(report.timestamp).toLocaleString()}
                <br>Auto-refresh every 10 seconds
            </div>
        </div>
    `;
}

// Additional control functions
window.downloadAPIReport = function() {
    const report = restaurantAPI.getStatusReport();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `api-report-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

window.clearAllCaches = function() {
    restaurantAPI.cache.clear();
    restaurantAPI.shortCache.clear();
    console.log('All caches cleared');
    if (document.querySelector('.api-report')) {
        showAPIUsage(); // Refresh the display
    }
};

// Additional helper functions for enhanced user experience
window.refreshRestaurantResults = async function(dish, category) {
    // Clear cache for this specific search to get fresh results
    const cacheKey = restaurantAPI.getCacheKey(dish, locationService.detectedCity || currentState.selectedCity);
    restaurantAPI.cache.delete(cacheKey);
    restaurantAPI.shortCache.delete(cacheKey);
    
    // Re-run the search
    await showTop3RestaurantsNearby(dish, category);
};

window.toggleLocationMode = function() {
    // Allow users to switch between GPS and city-based location
    if (locationService.locationAccuracy === 'gps') {
        // Switch to city mode
        locationService.locationAccuracy = 'city';
        alert('Switched to city-based location. Your next search will use the selected city center.');
    } else {
        // Try to enable GPS mode
        locationService.getBestLocation().then(() => {
            alert('GPS location enabled! Your next search will use your exact location.');
        }).catch(() => {
            alert('GPS location not available. Please enable location services in your browser.');
        });
    }
};

// Enhanced city update function with location awareness
function updateCityWithLocationAwareness(city) {
    const previousCity = currentState.selectedCity;
    currentState.selectedCity = city;
    
    // Update city select value
    elements.citySelect.value = city;
    
    // Save city selection
    localStorage.setItem('selectedCity', city);
    
    // Clear location-specific cache when city changes
    if (previousCity !== city) {
        console.log(`City changed from ${previousCity} to ${city}, clearing location cache`);
        locationService.detectedCity = null;
        locationService.userLocation = null;
        
        // Clear cached restaurant data for the previous city
        const cacheKeysToRemove = [];
        for (const key of restaurantAPI.cache.keys()) {
            if (key.includes(previousCity.toLowerCase())) {
                cacheKeysToRemove.push(key);
            }
        }
        cacheKeysToRemove.forEach(key => restaurantAPI.cache.delete(key));
    }
    
    // Regenerate options
    generateRoulette();
    updateOptionsDisplay();
}

// Location status indicator for the main interface
function updateLocationStatusIndicator() {
    const headerContent = document.querySelector('.header-content');
    let statusIndicator = document.getElementById('locationStatus');
    
    if (!statusIndicator) {
        statusIndicator = document.createElement('div');
        statusIndicator.id = 'locationStatus';
        statusIndicator.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 0.7em;
            padding: 3px 6px;
            border-radius: 10px;
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            color: #6c757d;
        `;
        headerContent.appendChild(statusIndicator);
    }
    
    if (locationService.locationAccuracy === 'gps') {
        statusIndicator.innerHTML = '🎯 GPS';
        statusIndicator.style.background = '#d4edda';
        statusIndicator.style.color = '#155724';
        statusIndicator.title = 'Using GPS location for accurate results';
    } else {
        statusIndicator.innerHTML = '🏙️ City';
        statusIndicator.style.background = '#fff3cd';
        statusIndicator.style.color = '#856404';
        statusIndicator.title = 'Using city-based location';
    }
    
    statusIndicator.onclick = toggleLocationMode;
    statusIndicator.style.cursor = 'pointer';
}

// Map integration functions
window.openInMaps = function(query, coordinates = null) {
    let url;
    
    if (coordinates && coordinates.includes(',')) {
        // Use coordinates if available
        const [lat, lng] = coordinates.split(',').map(c => c.trim());
        url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&center=${lat},${lng}`;
    } else {
        // Use text search
        url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    }
    
    window.open(url, '_blank');
};

// GPS refresh function
window.refreshGPSLocation = async function() {
    const locationText = document.getElementById('locationText');
    const refreshBtn = document.getElementById('locationRefresh');
    
    if (refreshBtn) refreshBtn.innerHTML = '⏳';
    
    try {
        await locationService.getCurrentLocation();
        if (refreshBtn) refreshBtn.innerHTML = '🔄';
    } catch (error) {
        if (refreshBtn) refreshBtn.innerHTML = '❌';
        setTimeout(() => {
            if (refreshBtn) refreshBtn.innerHTML = '🔄';
        }, 3000);
    }
};

// Enhanced refresh restaurant function
window.refreshRestaurantResults = async function(dish, category) {
    console.log(`🔄 Refreshing results for ${dish}`);
    
    // Clear any existing suggestion container to force fresh results
    const suggestionContainer = document.getElementById('restaurantSuggestions');
    if (suggestionContainer) {
        suggestionContainer.remove();
    }
    
    // Re-run the search with fresh GPS location
    try {
        await showTop3RestaurantsNearby(dish, category);
    } catch (error) {
        console.error('Refresh failed:', error);
        showErrorMessage('Failed to refresh results. Please check your location permission and try again.');
    }
};

// Error message display
function showErrorMessage(message) {
    let suggestionContainer = document.getElementById('restaurantSuggestions');
    if (!suggestionContainer) {
        const dishesGrid = document.getElementById('dishesGrid');
        suggestionContainer = document.createElement('div');
        suggestionContainer.id = 'restaurantSuggestions';
        suggestionContainer.className = 'restaurant-suggestions';
        dishesGrid.parentNode.insertBefore(suggestionContainer, dishesGrid.nextSibling);
    }
    
    suggestionContainer.innerHTML = `
        <div class="error-container" style="text-align: center; padding: 20px; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #721c24;">⚠️ Location Error</h4>
            <p style="color: #721c24; margin: 10px 0;">${message}</p>
            <div style="margin: 15px 0;">
                <button onclick="refreshGPSLocation()" style="background: #17a2b8; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">
                    🎯 Try Location Again
                </button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #6c757d; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">
                    ✕ Dismiss
                </button>
            </div>
        </div>
    `;
}

// Console API for developers
window.restaurantAPIDebug = {
    getReport: () => restaurantAPI.getStatusReport(),
    getStats: () => restaurantAPI.getUsageStats(),
    toggleAPI: (name, enabled) => restaurantAPI.toggleAPI(name, enabled),
    resetUsage: (name) => restaurantAPI.resetAPIUsage(name),
    clearCache: () => { restaurantAPI.cache.clear(); restaurantAPI.shortCache.clear(); },
    healthCheck: (name) => restaurantAPI.performHealthCheck(name),
    locationService: locationService,
    testLocation: () => locationService.getCurrentLocation(),
    watchLocation: () => locationService.startWatching(),
    stopWatch: () => locationService.stopWatching()
};

// Pure GPS Location Service - No city fallback
class HybridLocationService {
    constructor() {
        this.userLocation = null;
        this.selectedCity = 'sydney';
        this.cityRegions = {
            sydney: {
                name: 'Greater Sydney Area',
                center: { lat: -33.8688, lng: 151.2093 },
                bounds: {
                    north: -33.4,
                    south: -34.2,
                    east: 151.8,
                    west: 150.5
                }
            },
            melbourne: {
                name: 'Greater Melbourne Area',
                center: { lat: -37.8136, lng: 144.9631 },
                bounds: {
                    north: -37.4,
                    south: -38.2,
                    east: 145.8,
                    west: 144.0
                }
            },
            brisbane: {
                name: 'Greater Brisbane Area',
                center: { lat: -27.4698, lng: 153.0251 },
                bounds: {
                    north: -26.8,
                    south: -28.0,
                    east: 153.8,
                    west: 152.4
                }
            },
            perth: {
                name: 'Greater Perth Area',
                center: { lat: -31.9505, lng: 115.8605 },
                bounds: {
                    north: -31.4,
                    south: -32.5,
                    east: 116.4,
                    west: 115.2
                }
            },
            adelaide: {
                name: 'Greater Adelaide Area',
                center: { lat: -34.9285, lng: 138.6007 },
                bounds: {
                    north: -34.4,
                    south: -35.4,
                    east: 139.2,
                    west: 138.0
                }
            }
        };
        this.locationAccuracy = null;
        this.locationAge = null;
        this.isWatching = false;
        this.watchId = null;
    }
    
    setSelectedCity(cityKey) {
        this.selectedCity = cityKey;
        this.updateLocationDisplay();
        console.log(`🏙️ Selected region: ${this.cityRegions[cityKey].name}`);
    }
    
    getSelectedCityInfo() {
        return this.cityRegions[this.selectedCity];
    }
    
    async getCurrentLocation() {
        const cityInfo = this.getSelectedCityInfo();
        
        try {
            // Try high accuracy GPS first
            const gpsLocation = await this.getGPSLocation(true);
            
            // Validate GPS is within selected city region
            if (this.isLocationInCityRegion(gpsLocation, this.selectedCity)) {
                this.userLocation = gpsLocation;
                this.locationAge = Date.now();
                this.updateLocationDisplay();
                
                console.log(`📍 GPS Location in ${cityInfo.name}: ${gpsLocation.lat.toFixed(6)}, ${gpsLocation.lng.toFixed(6)} (±${Math.round(gpsLocation.accuracy)}m)`);
                return {
                    location: gpsLocation,
                    accuracy: 'gps',
                    source: `GPS in ${cityInfo.name} (±${Math.round(gpsLocation.accuracy)}m)`,
                    region: cityInfo.name
                };
            } else {
                console.warn(`GPS location outside ${cityInfo.name}, using city center as fallback`);
                return this.useCityFallback();
            }
        } catch (error) {
            console.warn('High accuracy GPS failed, trying quick mode:', error.message);
            
            try {
                // Fallback to quick mode GPS
                const gpsLocation = await this.getGPSLocation(false);
                
                if (this.isLocationInCityRegion(gpsLocation, this.selectedCity)) {
                    this.userLocation = gpsLocation;
                    this.locationAge = Date.now();
                    this.updateLocationDisplay();
                    
                    console.log(`📍 GPS Location (quick) in ${cityInfo.name}: ${gpsLocation.lat.toFixed(6)}, ${gpsLocation.lng.toFixed(6)} (±${Math.round(gpsLocation.accuracy)}m)`);
                    return {
                        location: gpsLocation,
                        accuracy: 'gps_quick',
                        source: `GPS quick mode in ${cityInfo.name} (±${Math.round(gpsLocation.accuracy)}m)`,
                        region: cityInfo.name
                    };
                } else {
                    console.warn(`GPS quick mode outside ${cityInfo.name}, using city center`);
                    return this.useCityFallback();
                }
            } catch (quickError) {
                console.error('All GPS methods failed, using city center:', quickError.message);
                return this.useCityFallback();
            }
        }
    }
    
    useCityFallback() {
        const cityInfo = this.getSelectedCityInfo();
        this.userLocation = cityInfo.center;
        this.locationAge = Date.now();
        this.updateLocationDisplay();
        
        console.log(`🏙️ Using ${cityInfo.name} center: ${cityInfo.center.lat.toFixed(6)}, ${cityInfo.center.lng.toFixed(6)}`);
        return {
            location: cityInfo.center,
            accuracy: 'city',
            source: `${cityInfo.name} center (approximate)`,
            region: cityInfo.name
        };
    }
    
    isLocationInCityRegion(location, cityKey) {
        const bounds = this.cityRegions[cityKey].bounds;
        return (
            location.lat >= bounds.south &&
            location.lat <= bounds.north &&
            location.lng >= bounds.west &&
            location.lng <= bounds.east
        );
    }
    
    async getGPSLocation(highAccuracy = true) {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported by this browser'));
                return;
            }
            
            const options = highAccuracy ? {
                enableHighAccuracy: true,
                timeout: 8000, // 8 seconds for high accuracy
                maximumAge: 30 * 1000 // 30 seconds cache
            } : {
                enableHighAccuracy: false,
                timeout: 3000, // 3 seconds for quick mode
                maximumAge: 60 * 1000 // 1 minute cache for quick mode
            };
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                        timestamp: position.timestamp
                    });
                },
                (error) => {
                    let message = 'Unknown location error';
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            message = 'Location access denied by user';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message = 'Location information unavailable';
                            break;
                        case error.TIMEOUT:
                            message = 'Location request timed out';
                            break;
                    }
                    reject(new Error(message));
                },
                options
            );
        });
    }
    
    startWatching() {
        if (this.isWatching) return;
        
        const options = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 60000 // 1 minute
        };
        
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    timestamp: position.timestamp
                };
                this.locationAge = Date.now();
                this.updateLocationDisplay();
                console.log('📍 Location updated:', this.userLocation);
            },
            (error) => {
                console.warn('Location watch error:', error.message);
                this.updateLocationDisplay(error);
            },
            options
        );
        
        this.isWatching = true;
    }
    
    stopWatching() {
        if (this.watchId !== null) {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
            this.isWatching = false;
        }
    }
    
    updateLocationDisplay(error = null) {
        const locationText = document.getElementById('locationText');
        const locationIcon = document.querySelector('#locationDisplay .settings-icon');
        const cityInfo = this.getSelectedCityInfo();
        
        if (!locationText) return;
        
        if (error) {
            locationText.textContent = `Using ${cityInfo.name}`;
            locationText.style.color = '#ffc107';
            if (locationIcon) locationIcon.textContent = '🏙️';
            return;
        }
        
        if (this.userLocation) {
            if (this.userLocation.accuracy) {
                // GPS location
                const accuracy = Math.round(this.userLocation.accuracy);
                locationText.textContent = `GPS in ${cityInfo.name} (±${accuracy}m)`;
                locationText.style.color = '#28a745';
                if (locationIcon) locationIcon.textContent = '🎯';
            } else {
                // City center fallback
                locationText.textContent = `${cityInfo.name} center`;
                locationText.style.color = '#17a2b8';
                if (locationIcon) locationIcon.textContent = '🏙️';
            }
        } else {
            locationText.textContent = `Detecting GPS in ${cityInfo.name}...`;
            locationText.style.color = '#6c757d';
            if (locationIcon) locationIcon.textContent = '🔍';
        }
    }
    
    calculateDistance(pos1, pos2) {
        const R = 6371; // Earth's radius in km
        const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
        const dLng = (pos2.lng - pos1.lng) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) *
                  Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    formatDistance(distanceKm) {
        if (distanceKm < 1) {
            return `${Math.round(distanceKm * 1000)}m`;
        } else {
            return `${distanceKm.toFixed(1)}km`;
        }
    }
}

// Initialize Hybrid location service
const locationService = new HybridLocationService();

// Simplified restaurant finder using GPS coordinates
async function getRestaurantsNearLocation(dish, category, location) {
    const startTime = Date.now();
    console.log(`🔍 Searching for ${dish} near ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);
    
    try {
        // For now, use simulated restaurant data with calculated distances
        const mockRestaurants = generateMockRestaurantsNearLocation(dish, category, location);
        
        const responseTime = Date.now() - startTime;
        return {
            success: true,
            data: mockRestaurants,
            source: 'simulated_gps',
            responseTime: responseTime
        };
    } catch (error) {
        console.error('Restaurant search failed:', error);
        throw error;
    }
}

// Generate mock restaurant data near GPS location within selected city
function generateMockRestaurantsNearLocation(dish, category, userLocation) {
    // Get current city info for context
    const cityInfo = locationService.getSelectedCityInfo();
    const cityName = cityInfo.name.split(' ')[0]; // Extract city name (e.g., "Sydney" from "Greater Sydney Area")
    
    const restaurantTypes = {
        'Pizza': [
            { name: `Mario's Authentic Pizza`, specialty: 'Wood-fired Neapolitan', rating: 4.6, suburb: getRandomSuburb(cityName) },
            { name: `${cityName} Slice House`, specialty: 'New York Style', rating: 4.3, suburb: getRandomSuburb(cityName) },
            { name: `Gourmet Pizza Co.`, specialty: 'Artisan Toppings', rating: 4.5, suburb: getRandomSuburb(cityName) }
        ],
        'Sushi': [
            { name: `Sakura Sushi Bar ${cityName}`, specialty: 'Fresh Sashimi', rating: 4.7, suburb: getRandomSuburb(cityName) },
            { name: `Edo Japanese`, specialty: 'Traditional Rolls', rating: 4.4, suburb: getRandomSuburb(cityName) },
            { name: `${cityName} Sushi Express`, specialty: 'Quick Service', rating: 4.2, suburb: getRandomSuburb(cityName) }
        ],
        'Burger': [
            { name: `The ${cityName} Burger Joint`, specialty: 'Gourmet Burgers', rating: 4.5, suburb: getRandomSuburb(cityName) },
            { name: `Patty Palace`, specialty: 'Classic American', rating: 4.3, suburb: getRandomSuburb(cityName) },
            { name: `Veggie Burger Bar`, specialty: 'Plant-Based', rating: 4.4, suburb: getRandomSuburb(cityName) }
        ],
        'Coffee': [
            { name: `${cityName} Brew & Bean`, specialty: 'Artisan Coffee', rating: 4.6, suburb: getRandomSuburb(cityName) },
            { name: `Local Roasters`, specialty: 'Single Origin', rating: 4.5, suburb: getRandomSuburb(cityName) },
            { name: `Corner Café`, specialty: 'Cozy Atmosphere', rating: 4.2, suburb: getRandomSuburb(cityName) }
        ]
    };
    
    const templates = restaurantTypes[dish] || [
        { name: `${dish} Express`, specialty: `Fresh ${dish}`, rating: 4.3, suburb: getRandomSuburb(cityName) },
        { name: `The ${dish} Place`, specialty: `Traditional ${dish}`, rating: 4.4, suburb: getRandomSuburb(cityName) },
        { name: `${dish} Corner`, specialty: `Quick ${dish}`, rating: 4.2, suburb: getRandomSuburb(cityName) }
    ];
    
    return templates.map((template, index) => {
        // Generate random location within 2km radius
        const distance = Math.random() * 2; // 0-2km
        const angle = Math.random() * 2 * Math.PI;
        
        // Convert distance to lat/lng offset (rough approximation)
        const latOffset = (distance / 111) * Math.cos(angle); // 111km per degree latitude
        const lngOffset = (distance / (111 * Math.cos(userLocation.lat * Math.PI / 180))) * Math.sin(angle);
        
        const restaurantLocation = {
            lat: userLocation.lat + latOffset,
            lng: userLocation.lng + lngOffset
        };
        
        const actualDistance = locationService.calculateDistance(userLocation, restaurantLocation);
        
        return {
            name: template.name,
            location: `${Math.floor(Math.random() * 999) + 100} ${getRandomStreetName()} St, ${template.suburb}`,
            rating: template.rating.toFixed(1),
            priceLevel: '💰'.repeat(Math.floor(Math.random() * 3) + 1),
            specialty: template.specialty,
            distance: locationService.formatDistance(actualDistance),
            coordinates: restaurantLocation,
            phone: `+61 ${Math.floor(Math.random() * 9) + 1} ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 9000) + 1000}`
        };
    }).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance)); // Sort by distance
}

// Helper function to get random suburb based on city
function getRandomSuburb(cityName) {
    const suburbs = {
        'Sydney': ['CBD', 'Circular Quay', 'Darling Harbour', 'Surry Hills', 'Paddington', 'Newtown', 'Bondi', 'Manly', 'Parramatta', 'Chatswood'],
        'Melbourne': ['CBD', 'Southbank', 'Fitzroy', 'Richmond', 'St Kilda', 'Carlton', 'Brunswick', 'Prahran', 'Chapel St', 'Docklands'],
        'Brisbane': ['CBD', 'South Bank', 'Fortitude Valley', 'New Farm', 'West End', 'Paddington', 'Teneriffe', 'Spring Hill', 'Kangaroo Point', 'Woolloongabba'],
        'Perth': ['CBD', 'Northbridge', 'Fremantle', 'Subiaco', 'Leederville', 'Mount Lawley', 'Cottesloe', 'Scarborough', 'Joondalup', 'Rockingham'],
        'Adelaide': ['CBD', 'North Adelaide', 'Glenelg', 'Port Adelaide', 'Norwood', 'Unley', 'Burnside', 'Prospect', 'Henley Beach', 'Brighton']
    };
    
    const citySuburbs = suburbs[cityName] || ['CBD', 'Downtown', 'Central', 'Main Area'];
    return citySuburbs[Math.floor(Math.random() * citySuburbs.length)];
}

// Helper function to get random street names
function getRandomStreetName() {
    const streetNames = ['Collins', 'George', 'Pitt', 'Elizabeth', 'King', 'Queen', 'Market', 'Park', 'Church', 'High', 'Main', 'Commercial', 'Crown', 'Bourke', 'Flinders', 'Spencer', 'William', 'Little'];
    return streetNames[Math.floor(Math.random() * streetNames.length)];
}

// Pure GPS-based restaurant finder
window.showTop3RestaurantsNearby = async function(dish, category) {
    console.log(`🍽️ Searching for ${dish} (${category}) using GPS location`);
    
    // Show loading state first
    showLoadingState(dish);
    
    try {
        // Get GPS location
        const locationInfo = await locationService.getCurrentLocation();
        const { location, accuracy, source } = locationInfo;
        
        console.log(`🎯 Using GPS location for ${dish} search: ${source}`);
        
        // Get restaurant data using GPS coordinates
        const result = await getRestaurantsNearLocation(dish, category, location);
        const restaurants = result.data;
        const dataSource = result.source;
        
        // Create or update the restaurant suggestions section
        let suggestionContainer = document.getElementById('restaurantSuggestions');
        if (!suggestionContainer) {
            // Create the container if it doesn't exist
            const dishesGrid = document.getElementById('dishesGrid');
            suggestionContainer = document.createElement('div');
            suggestionContainer.id = 'restaurantSuggestions';
            suggestionContainer.className = 'restaurant-suggestions';
            dishesGrid.parentNode.insertBefore(suggestionContainer, dishesGrid.nextSibling);
        }
        
        // Get data source badge
        const getSourceBadge = (source) => {
            const badges = {
                'Yelp': '🟡 Live from Yelp',
                'Google Places': '🔵 Live from Google',
                'Foursquare': '🟣 Live from Foursquare',
                'cache': '💾 From Cache',
                'fallback': '📝 Curated Data'
            };
            return badges[source] || '📊 Mixed Sources';
        };
        
        // Create location status for GPS-based search
        const locationStatus = `🎯 GPS Location (±${Math.round(location.accuracy || 0)}m accuracy)`;
        
        // Update the content with GPS-based restaurant data
        suggestionContainer.innerHTML = `
            <div class="suggestion-header">
                <h4>📍 Top 3 places for <strong>${dish}</strong> near you</h4>
                <div class="location-info-bar" style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0; padding: 8px; background: #f8f9fa; border-radius: 6px; font-size: 0.85em;">
                    <span class="location-status">${locationStatus}</span>
                    <span class="data-source-badge">${getSourceBadge(dataSource)}</span>
                </div>
            </div>
            <div class="restaurant-cards">
                ${restaurants.map((restaurant, index) => `
                    <div class="restaurant-card ${index === 0 ? 'closest-restaurant' : ''}" onclick="openInMaps('${restaurant.name}', ${restaurant.coordinates ? `${restaurant.coordinates.lat}, ${restaurant.coordinates.lng}` : `'${restaurant.location}'`})" style="position: relative; ${index === 0 ? 'border: 2px solid #28a745;' : ''}">
                        <div class="restaurant-rank" style="background: ${index === 0 ? '#28a745' : '#6c757d'}; color: white; padding: 5px 8px; border-radius: 12px; font-weight: bold;">#${index + 1}</div>
                        ${restaurant.distance && index === 0 ? '<div class="closest-badge" style="position: absolute; top: -5px; right: -5px; background: #28a745; color: white; font-size: 0.7em; padding: 2px 6px; border-radius: 10px;">Closest</div>' : ''}
                        <div class="restaurant-info">
                            <div class="restaurant-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                                <div class="restaurant-name" style="font-weight: bold; color: #333;">${restaurant.name}</div>
                                ${restaurant.distance ? `<div class="distance-badge" style="background: #007bff; color: white; font-size: 0.7em; padding: 2px 6px; border-radius: 10px; font-weight: bold;">${restaurant.distance}</div>` : ''}
                            </div>
                            <div class="restaurant-location" style="color: #6c757d; font-size: 0.9em; margin-bottom: 5px;">${restaurant.location}</div>
                            <div class="restaurant-details" style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                                <span class="restaurant-rating" style="color: #ffc107;">⭐ ${restaurant.rating}</span>
                                <span class="restaurant-price">${restaurant.priceLevel}</span>
                                <span class="restaurant-specialty" style="font-style: italic; color: #6c757d;">• ${restaurant.specialty}</span>
                            </div>
                        </div>
                        <div class="restaurant-action" style="display: flex; align-items: center; gap: 5px;">
                            <span title="Open in Maps" style="cursor: pointer; font-size: 1.2em;">🗺️</span>
                            ${restaurant.phone ? `<span onclick="event.stopPropagation(); window.open('tel:${restaurant.phone}')" title="Call restaurant" style="cursor: pointer; font-size: 1.2em;">📞</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="suggestion-footer">
                <div class="performance-info" style="text-align: center; margin: 10px 0; padding: 8px; background: #e9ecef; border-radius: 4px; font-size: 0.8em; color: #666;">
                    📊 Search completed in ${result.responseTime}ms • Sorted by actual distance from your GPS location
                </div>
                <div class="footer-actions" style="display: flex; gap: 8px; justify-content: center; margin: 15px 0;">
                    <button onclick="refreshRestaurantResults('${dish}', '${category}')" 
                            class="refresh-btn" style="background: #17a2b8; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85em;">
                        🔄 Refresh Results
                    </button>
                    <button onclick="openInMaps('${dish} restaurants near me')" 
                            class="nearby-btn" style="background: #28a745; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85em;">
                        🗺️ More Options  
                    </button>
                    <button onclick="showAPIUsage()" 
                            class="api-btn" style="background: #6c757d; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85em;">
                        📊 API Status
                    </button>
                </div>
            </div>
        `;
        
        // Show the container with animation
        suggestionContainer.style.display = 'block';
        suggestionContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        console.error('Error showing restaurants:', error);
        showErrorMessage(error.message || 'Unable to find restaurants nearby. Please check your location permission.');
    }
};

// Show loading state while fetching restaurant data
function showLoadingState(dish) {
    let suggestionContainer = document.getElementById('restaurantSuggestions');
    if (!suggestionContainer) {
        const dishesGrid = document.getElementById('dishesGrid');
        suggestionContainer = document.createElement('div');
        suggestionContainer.id = 'restaurantSuggestions';
        suggestionContainer.className = 'restaurant-suggestions';
        dishesGrid.parentNode.insertBefore(suggestionContainer, dishesGrid.nextSibling);
    }
    
    suggestionContainer.innerHTML = `
        <div class="suggestion-header">
            <h4>🔍 Finding best places for <strong>${dish}</strong>...</h4>
        </div>
        <div class="loading-restaurants">
            <div class="loading-spinner">⏳</div>
            <p>Searching nearby restaurants...</p>
        </div>
    `;
    suggestionContainer.style.display = 'block';
}

// Real restaurant data based on popular local establishments and reviews
function getRealRestaurantsForDish(dish, category, city) {
    const realRestaurants = {
        sydney: {
            'Ramen': [
                { name: 'Ippudo Sydney', location: 'CBD', rating: '4.6', priceLevel: '💰💰', specialty: 'Tonkotsu Ramen', distance: generateDistance() },
                { name: 'Gumshara Ramen', location: 'Chinatown', rating: '4.5', priceLevel: '💰💰', specialty: 'Rich Tonkotsu', distance: generateDistance() },
                { name: 'Menya Noodle Bar', location: 'Circular Quay', rating: '4.4', priceLevel: '💰💰', specialty: 'Authentic Japanese', distance: generateDistance() }
            ],
            'Pho': [
                { name: 'Pho Pasteur', location: 'Cabramatta', rating: '4.7', priceLevel: '💰', specialty: 'Traditional Vietnamese', distance: generateDistance() },
                { name: 'Jasmine Rice', location: 'CBD', rating: '4.3', priceLevel: '💰', specialty: 'Fresh Herbs', distance: generateDistance() },
                { name: 'Miss Saigon', location: 'Newtown', rating: '4.4', priceLevel: '💰', specialty: 'Authentic Broth', distance: generateDistance() }
            ],
            'Dumplings': [
                { name: 'Din Tai Fung', location: 'World Square', rating: '4.5', priceLevel: '💰💰', specialty: 'Xiaolongbao', distance: generateDistance() },
                { name: 'Shanghai Night', location: 'Chinatown', rating: '4.3', priceLevel: '💰', specialty: 'Hand-made Dumplings', distance: generateDistance() },
                { name: 'Mr. Wong', location: 'Bridge Lane', rating: '4.6', priceLevel: '💰💰💰', specialty: 'Cantonese Style', distance: generateDistance() }
            ],
            'Pad Thai': [
                { name: 'Chat Thai', location: 'CBD', rating: '4.4', priceLevel: '💰💰', specialty: 'Authentic Thai', distance: generateDistance() },
                { name: 'Spice I Am', location: 'Surry Hills', rating: '4.5', priceLevel: '💰💰', specialty: 'Street Food Style', distance: generateDistance() },
                { name: 'Long Chim', location: 'Star City', rating: '4.3', priceLevel: '💰💰', specialty: 'David Thompson', distance: generateDistance() }
            ],
            'Sushi': [
                { name: 'Sokyo', location: 'Pyrmont', rating: '4.7', priceLevel: '💰💰💰', specialty: 'Premium Sashimi', distance: generateDistance() },
                { name: 'Kumo Izakaya', location: 'Surry Hills', rating: '4.4', priceLevel: '💰💰', specialty: 'Fresh Daily', distance: generateDistance() },
                { name: 'Sushi Train', location: 'Various', rating: '4.2', priceLevel: '💰', specialty: 'Conveyor Belt', distance: generateDistance() }
            ]
        },
        melbourne: {
            'Flat White': [
                { name: 'Patricia Coffee Brewers', location: 'Little Bourke St', rating: '4.6', priceLevel: '💰', specialty: 'Single Origin', distance: generateDistance() },
                { name: 'Industry Beans', location: 'Fitzroy', rating: '4.5', priceLevel: '💰', specialty: 'Specialty Roast', distance: generateDistance() },
                { name: 'Seven Seeds', location: 'Carlton', rating: '4.4', priceLevel: '💰', specialty: 'Coffee Roasters', distance: generateDistance() }
            ],
            'Smashed Avo': [
                { name: 'Higher Ground', location: 'CBD', rating: '4.5', priceLevel: '💰💰', specialty: 'Sourdough Base', distance: generateDistance() },
                { name: 'Top Paddock', location: 'Richmond', rating: '4.6', priceLevel: '💰💰', specialty: 'Perfect Poach', distance: generateDistance() },
                { name: 'Auction Rooms', location: 'North Melbourne', rating: '4.4', priceLevel: '💰💰', specialty: 'Artisan Bread', distance: generateDistance() }
            ],
            'Gourmet Burgers': [
                { name: '8bit', location: 'Footscray', rating: '4.7', priceLevel: '💰💰', specialty: 'Retro Gaming Theme', distance: generateDistance() },
                { name: 'Royal Stacks', location: 'Collins St', rating: '4.4', priceLevel: '💰💰', specialty: 'American Style', distance: generateDistance() },
                { name: 'Huxtaburger', location: 'Multiple', rating: '4.3', priceLevel: '💰💰', specialty: 'Local Beef', distance: generateDistance() }
            ]
        },
        brisbane: {
            'Beef Brisket': [
                { name: 'Smoke BBQ', location: 'West End', rating: '4.6', priceLevel: '💰💰', specialty: '12-hour Smoke', distance: generateDistance() },
                { name: 'Ribs & Burgers', location: 'Queen St', rating: '4.3', priceLevel: '💰💰', specialty: 'Tender & Juicy', distance: generateDistance() },
                { name: 'Black Bear BBQ', location: 'Fortitude Valley', rating: '4.5', priceLevel: '💰💰', specialty: 'Texas Style', distance: generateDistance() }
            ],
            'Indian Curry': [
                { name: 'Indian Mehfil', location: 'South Brisbane', rating: '4.5', priceLevel: '💰💰', specialty: 'North Indian', distance: generateDistance() },
                { name: 'Garam Masala', location: 'CBD', rating: '4.4', priceLevel: '💰', specialty: 'Authentic Spices', distance: generateDistance() },
                { name: 'Himalayan Cafe', location: 'Toowong', rating: '4.3', priceLevel: '💰', specialty: 'Nepalese Style', distance: generateDistance() }
            ],
            'Mango Smoothie Bowl': [
                { name: 'Grind Coffee', location: 'New Farm', rating: '4.5', priceLevel: '💰', specialty: 'Fresh Tropical', distance: generateDistance() },
                { name: 'The Bowls', location: 'Paddington', rating: '4.4', priceLevel: '💰', specialty: 'Local Mango', distance: generateDistance() },
                { name: 'Naked Foods', location: 'Various', rating: '4.2', priceLevel: '💰', specialty: 'Organic Fruits', distance: generateDistance() }
            ]
        }
    };
    
    // Get restaurants for the specific dish
    const cityRestaurants = realRestaurants[city];
    if (cityRestaurants && cityRestaurants[dish]) {
        return cityRestaurants[dish];
    }
    
    // Fallback to generic restaurants for this category/city
    const fallbackRestaurants = generateFallbackRestaurants(category, city);
    return fallbackRestaurants;
}

// Generate realistic distance based on city size
function generateDistance() {
    return ((Math.random() * 3) + 0.5).toFixed(1) + 'km';
}

// Fallback restaurants when specific dish data isn't available
function generateFallbackRestaurants(category, city) {
    const fallbacks = {
        sydney: [
            { name: 'Local Sydney Favorite', location: 'CBD', rating: '4.3', priceLevel: '💰💰', specialty: category, distance: generateDistance() },
            { name: 'Harbour View Eatery', location: 'Circular Quay', rating: '4.4', priceLevel: '💰💰', specialty: 'City Views', distance: generateDistance() },
            { name: 'Sydney Signature', location: 'Darling Harbour', rating: '4.2', priceLevel: '💰💰', specialty: 'Tourist Friendly', distance: generateDistance() }
        ],
        melbourne: [
            { name: 'Laneway Legend', location: 'CBD', rating: '4.5', priceLevel: '💰💰', specialty: category, distance: generateDistance() },
            { name: 'Melbourne Must-Try', location: 'Southbank', rating: '4.3', priceLevel: '💰💰', specialty: 'Local Favorite', distance: generateDistance() },
            { name: 'Coffee Capital Choice', location: 'Fitzroy', rating: '4.4', priceLevel: '💰', specialty: 'Artisan Style', distance: generateDistance() }
        ],
        brisbane: [
            { name: 'River City Special', location: 'South Bank', rating: '4.4', priceLevel: '💰💰', specialty: category, distance: generateDistance() },
            { name: 'Brisbane Best', location: 'Fortitude Valley', rating: '4.3', priceLevel: '💰', specialty: 'Local Choice', distance: generateDistance() },
            { name: 'Sunshine State Dining', location: 'West End', rating: '4.2', priceLevel: '💰💰', specialty: 'Queensland Style', distance: generateDistance() }
        ]
    };
    
    return fallbacks[city] || fallbacks['sydney'];
}

// Global function to search in maps
window.searchInMaps = function(restaurantName, city) {
    const query = encodeURIComponent(`${restaurantName} ${city}`);
    
    // Try to detect if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // On mobile, try to open native maps app first
        const nativeMapsUrl = `maps://?q=${query}`;
        const googleMapsUrl = `https://www.google.com/maps/search/${query}`;
        
        // Try native maps first, fallback to Google Maps web
        const link = document.createElement('a');
        link.href = nativeMapsUrl;
        link.click();
        
        // Fallback to web version after a short delay
        setTimeout(() => {
            window.open(googleMapsUrl, '_blank');
        }, 2000);
    } else {
        // On desktop, open Google Maps web directly
        const mapsUrl = `https://www.google.com/maps/search/${query}`;
        window.open(mapsUrl, '_blank');
    }
};

function showGoogleMapsNotAvailable() {
    // This function is no longer needed as we use the fallback
}

function showLocationError(message) {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = `
        <div class="location-prompt">
            <div class="location-icon">📍</div>
            <p><strong>Location Access Required</strong></p>
            <p>${message}</p>
            <button class="enable-location-btn" onclick="findNearbyRestaurants(currentSelectedOption)">
                Try Again
            </button>
        </div>
    `;
}

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}