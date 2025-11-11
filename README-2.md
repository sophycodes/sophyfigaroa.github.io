# Sophy Figaroa Portfolio Website

A clean, modern portfolio website with a sleek design using white, black, grey, and blue (#5271ff) as the accent color.

## Pages

- **Home (index.html)**: Hero section with introduction and call-to-action
- **Portfolio (portfolio.html)**: Showcases your work with 3 sub-tabs:
  - Overview
  - Digital Art
  - Analog Art
- **Projects (projects.html)**: Technical projects and work
- **About (about.html)**: Information about you, skills, and interests

## Color Scheme

- **Accent Color**: #5271ff (Blue)
- **Primary**: White (#ffffff)
- **Text**: Black (#000000)
- **Greys**: Various shades for depth and hierarchy

## Customization

### Adding Your Content

1. **Replace placeholder images**: Update the `.card-placeholder` and `.image-placeholder` divs with actual images
2. **Update text**: Replace the sample text with your own content
3. **Add more portfolio items**: Copy and paste the `.portfolio-card` or `.project-item` divs

### Customizing Colors

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --accent-color: #5271ff;
    --black: #000000;
    --white: #ffffff;
    --light-grey: #f5f5f5;
    --medium-grey: #999999;
    --dark-grey: #333333;
    --border-grey: #e0e0e0;
}
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select the branch (usually `main`) and root folder
5. Click Save
6. Your site will be live at `https://[your-username].github.io/[repository-name]`

## File Structure

```
portfolio-website/
├── index.html          # Home page
├── portfolio.html      # Portfolio with tabs
├── projects.html       # Projects page
├── about.html          # About page
├── styles.css          # All styling
├── script.js           # Interactive features
└── README.md          # This file
```

## Features

- **Responsive Design**: Works on all devices
- **Tab Navigation**: Smooth tab switching on portfolio page
- **Clean Layout**: Minimalist design focusing on content
- **Smooth Animations**: Subtle hover effects and transitions
- **Easy to Customize**: Well-organized code with comments

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Tips for Adding Images

To add your own images:

1. Create an `images` folder in your project
2. Add your images to this folder
3. Replace the placeholder divs with `<img>` tags:

```html
<img src="images/your-image.jpg" alt="Description">
```

## Need Help?

Feel free to customize the code to match your needs. The structure is flexible and easy to modify.

Good luck with your portfolio! 🚀
