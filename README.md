# Balasubramanyam Kosuri - Technical Writer Portfolio

A modern, interactive portfolio website featuring 3D elements, smooth animations, and a unique typewriter theme. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

## ✨ Features

- **Custom Pen Cursor**: Interactive pen-shaped cursor that follows mouse movement
- **3D Elements**: Cards with perspective and tilt effects
- **Floating Typewriters**: Animated typewriter SVG elements in the background
- **Smooth Animations**: Parallax scrolling, fade-in effects, and staggered animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Nude/Poppy Color Palette**: Elegant color scheme with warm tones
- **Interactive Elements**: Hover effects, dynamic content, and engaging user experience

## 🎨 Design Elements

- **Color Palette**:
  - Primary Nude: #FFE5CC
  - Secondary Nude: #FFDDC1
  - Accent Poppy: #FF6B35
  - Accent Yellow: #FFD23F
  - Dark Brown: #2D1810
  - Cream: #FFF8F3

- **Typography**:
  - Space Grotesk (Primary)
  - JetBrains Mono (Code/Secondary)
  - Playfair Display (Accent)

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `balasubramanyam-portfolio`)
5. Make sure it's set to **Public**
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Files to GitHub

#### Option A: Using GitHub Web Interface (Easiest)

1. Open your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Write a commit message (e.g., "Initial portfolio upload")
5. Click "Commit changes"

#### Option B: Using Git Command Line

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio upload"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (in the repository navigation)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" (or "master")
6. Select "/ (root)" as the folder
7. Click "Save"

### Step 4: Access Your Live Site

- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
- It may take a few minutes (up to 10) for the site to be live
- GitHub will show a green checkmark when deployment is successful

## 📝 Customization Guide

### Updating Content

1. **Personal Information**: Edit the HTML in `index.html` to update:
   - Name and title
   - About section text
   - Skills and tools
   - Portfolio samples
   - Contact information

2. **Colors**: Modify the CSS variables in `styles.css`:
   ```css
   :root {
       --primary-nude: #FFE5CC;
       --accent-poppy: #FF6B35;
       /* etc... */
   }
   ```

3. **Fonts**: Change the Google Fonts import in `index.html`

### Adding Your Photo

Replace the placeholder icon in the about section:
1. Add your photo to the repository
2. Update the HTML:
   ```html
   <div class="image-placeholder">
       <img src="your-photo.jpg" alt="Balasubramanyam Kosuri">
   </div>
   ```

### Adding Portfolio Links

Update the portfolio links in `index.html`:
```html
<li><a href="YOUR_ACTUAL_LINK_HERE">Quick Start Guide</a></li>
```

## 🛠️ Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Performance Optimized**: Minimal file sizes, optimized animations
- **SEO Ready**: Semantic HTML structure
- **Accessibility**: Keyboard navigation support
- **Cross-Browser Compatible**: Works on all modern browsers

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: <768px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source. Feel free to use and modify for your own portfolio.

## 🤝 Contact

**Balasubramanyam Kosuri**
- Email: k.balu124@gmail.com
- Role: Technical Writer

## 🌟 Features Showcase

### Interactive Elements
- Custom pen cursor that scales on hover
- 3D card tilt effects
- Typewriter text animation
- Parallax scrolling backgrounds
- Smooth scroll navigation
- Progress indicator

### Animations
- Fade-in on scroll
- Staggered animations for cards
- Floating decorative elements
- Bounce effects on scroll indicator
- Hover transformations

### Mobile Optimizations
- Hamburger menu
- Touch-friendly interface
- Optimized animations for performance
- Responsive typography

---

Built with ❤️ for modern web experiences
