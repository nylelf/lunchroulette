// Lunch Roulette Web App - JavaScript

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
    ]
};

// App State
let currentState = {
    selectedCity: 'sydney',
    priceRange: 'medium',
    dietaryRestrictions: [],
    history: JSON.parse(localStorage.getItem('lunchHistory') || '[]'),
    settings: JSON.parse(localStorage.getItem('lunchSettings') || '{"avoidRepeats": true, "considerWeather": true}'),
    isSpinning: false
};

// DOM Elements
const elements = {
    cityButtons: document.querySelectorAll('.city-btn'),
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
    
    // Set initial city
    updateCity(currentState.selectedCity);
    
    // Generate wheel and options
    generateRoulette();
    updateOptionsDisplay();
    
    // Load settings into UI
    loadSettingsToUI();
}

function setupEventListeners() {
    // City selection
    elements.cityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.dataset.city;
            updateCity(city);
        });
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
    
    // Update city button states
    elements.cityButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === city);
    });
    
    // Regenerate options
    generateRoulette();
    updateOptionsDisplay();
}

function generateRoulette() {
    const options = getCurrentOptions();
    const wheel = elements.rouletteWheel;
    
    // Clear existing segments
    wheel.innerHTML = '';
    
    // Create segments
    options.forEach((option, index) => {
        const segment = document.createElement('div');
        segment.className = 'wheel-segment';
        segment.style.background = option.color;
        
        // Calculate rotation for this segment
        const angle = (360 / options.length) * index;
        const nextAngle = (360 / options.length) * (index + 1);
        
        // Create segment shape using clip-path
        const clipPath = createSegmentClipPath(angle, nextAngle);
        segment.style.clipPath = clipPath;
        segment.style.transform = `rotate(${angle}deg)`;
        
        segment.innerHTML = `
            <div class="segment-content" style="transform: rotate(${90 - angle}deg)">
                <div class="segment-icon">${option.icon}</div>
                <div class="segment-text">${option.name}</div>
            </div>
        `;
        
        wheel.appendChild(segment);
    });
}

function createSegmentClipPath(startAngle, endAngle) {
    // Convert to radians
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    // Calculate points for the segment
    const centerX = 50;
    const centerY = 50;
    const radius = 50;
    
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    
    // Create polygon path
    return `polygon(${centerX}% ${centerY}%, ${x1}% ${y1}%, ${x2}% ${y2}%)`;
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
            updateOptionsDisplay();
            saveSettings();
        });
    });
    
    // Toggle switches
    ['avoidRepeats', 'considerWeather'].forEach(setting => {
        const checkbox = document.getElementById(setting);
        checkbox.addEventListener('change', () => {
            currentState.settings[setting] = checkbox.checked;
            saveSettings();
        });
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
}

function saveSettings() {
    localStorage.setItem('lunchSettings', JSON.stringify(currentState.settings));
    localStorage.setItem('dietaryRestrictions', JSON.stringify(currentState.dietaryRestrictions));
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
                <div>No lunch decisions yet!</div>
                <div style="font-size: 0.9rem; margin-top: 5px; opacity: 0.7;">
                    Spin the wheel to start building your history
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