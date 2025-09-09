# 🍽️ Lunch Roulette

A fun and interactive web application to help you decide what to eat for lunch! Spin the wheel and discover great food options in Australian cities.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://nylelf.github.io/lunchroulette)
[![Netlify Status](https://img.shields.io/badge/netlify-deployed-success)](https://lunch-roulette-test.netlify.app)

![Lunch Roulette Preview](https://via.placeholder.com/800x400/FF6B35/FFFFFF?text=Lunch+Roulette+🍽️)

## ✨ Features

- 🎯 **Interactive Roulette Wheel** - Smooth SVG-based spinning animation
- 🏙️ **Multiple Cities** - Sydney, Melbourne, and Brisbane with local food options
- 🌍 **Multi-language Support** - 10 languages including English, Chinese, Spanish, French, German, Japanese, Korean, Portuguese, Russian, and Arabic
- 🍴 **Dietary Preferences** - Filter by vegetarian, vegan, gluten-free, and halal options
- 💰 **Price Range Filtering** - Budget ($8-15), Medium ($12-22), Premium ($20-35)
- 📊 **History Tracking** - Keep track of your lunch decisions with statistics
- ⚙️ **Smart Settings** - Avoid recent choices and customizable preferences
- 📱 **Responsive Design** - Perfect experience on mobile and desktop
- 💾 **Offline Storage** - Your preferences and history saved locally

## 🚀 Live Demo

- **Production Environment**: [GitHub Pages](https://nylelf.github.io/lunchroulette)
- **Testing Environment**: [Netlify](https://lunch-roulette-test.netlify.app)

## 🎮 How to Use

1. **Select Your City** - Choose from Sydney, Melbourne, or Brisbane
2. **Set Preferences** - Pick your price range and dietary requirements
3. **Spin the Wheel** - Click the big spin button and let fate decide!
4. **Explore Results** - Get detailed info about your lunch choice
5. **Track History** - View your past decisions and favorites

## 🌍 Supported Cities & Cuisines

### Sydney 🏛️
- 🥢 **Asian Fusion** - Chinese, Japanese, Thai, Vietnamese ($12-18)
- 🥪 **Cafe & Light** - Sandwiches, salads, coffee ($10-16)
- 🍝 **Italian Classics** - Pizza, pasta, authentic Italian ($15-22)
- 🥗 **Health Bowls** - Poke, quinoa, fresh ingredients ($14-20)
- 🥧 **Aussie Favorites** - Meat pies, BBQ, fish & chips ($12-25)

### Melbourne 🎨
- ☕ **Coffee & Brunch** - World-class coffee culture ($12-20)
- 🏪 **Lane Way Gems** - Hidden Melbourne specialties ($15-25)
- 🧀 **European Deli** - Greek, Italian, German influences ($14-22)
- 🍜 **Asian Street Food** - Authentic street food experience ($10-16)
- 🦘 **Modern Australian** - Contemporary Australian cuisine ($18-28)

### Brisbane 🌴
- 🥭 **Tropical Fresh** - Fresh fruits, smoothies, light meals ($10-18)
- 🍖 **Brisbane BBQ** - Queensland-style barbecue ($15-25)
- 🌏 **World Flavors** - Diverse cultural cuisines ($12-20)
- 🛥️ **Riverside Dining** - Cafés with city views ($14-22)
- 🥬 **Farmers Market** - Fresh local produce & artisan foods ($8-16)

## 🛠️ Technologies Used

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Graphics**: SVG-based roulette wheel for smooth animations
- **Storage**: localStorage for data persistence
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Fonts**: Google Fonts (Inter)
- **Icons**: Unicode Emoji

## 🚀 Quick Start

### Online (Recommended)
Just visit the [live demo](https://nylelf.github.io/lunchroulette) - no installation required!

### Local Development
```bash
# Clone the repository
git clone https://github.com/nylelf/lunchroulette.git
cd lunch-roulette

# Open in browser
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

### 🗺️ Enabling Google Maps Features (Optional)

To enable the "Find Nearby Restaurants" feature:

1. **Get a Google Maps API Key**:
   - Visit [Google Cloud Console](https://developers.google.com/maps/gmp-get-started)
   - Create a new project or select existing one
   - Enable the **Maps JavaScript API** and **Places API**
   - Create credentials (API key)

2. **Configure the API Key**:
   - Open `index.html`
   - Find line 11: `<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"></script> -->`
   - Replace `YOUR_API_KEY` with your actual API key
   - Uncomment the line by removing `<!--` and `-->`

3. **Test the Feature**:
   - Spin the wheel
   - Click "Find Nearby" in the result modal
   - Allow location access when prompted
   - View nearby restaurants on the map

**Note**: Google Maps API is free for most personal use cases (up to $200/month credit).

## 🌐 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 PWA Features

- Responsive design optimized for mobile
- Offline functionality with localStorage
- Fast loading with optimized assets
- Touch-friendly interface

## 🎨 Customization

You can easily customize the app by modifying:

- **Cities & Options**: Edit `lunchOptions` in `script.js`
- **Colors & Styling**: Modify CSS custom properties in `styles.css`
- **Languages**: Add translations in the `translations` object
- **Features**: Extend functionality in `script.js`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- 🏙️ Add more cities (Perth, Adelaide, etc.)
- 🍕 More cuisine categories
- 🌍 Additional language translations
- 🎨 UI/UX improvements
- 📊 Enhanced statistics
- 🔧 Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Food data inspired by real Australian dining scenes
- Icons provided by Unicode Consortium
- Fonts by Google Fonts
- Built with love for food lovers everywhere! ❤️

## 📞 Support

Having issues? Here are some common solutions:

**Wheel not spinning?**
- Check if JavaScript is enabled
- Try refreshing the page
- Clear browser cache

**Data not saving?**
- Ensure localStorage is enabled
- Check if you're in incognito/private mode

**Mobile display issues?**
- Update to latest browser version
- Clear browser data

---

<div align="center">

**[🍽️ Try Lunch Roulette Now!](https://nylelf.github.io/lunchroulette)**

Made with ❤️ for lunch decisions everywhere

</div>