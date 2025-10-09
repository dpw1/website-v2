# GetDatesWithAI Website

A modern, single-page website for selling the GetDatesWithAI ebook and related services. Built with React and optimized for CloudFlare Pages deployment.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Beautiful dark color scheme with gradient buttons
- **Content Management**: All text content stored in easily editable JSON files
- **Static Deployment**: Ready for CloudFlare Pages hosting
- **Modern React**: Built with React 18 and functional components

## Sections

1. **Hero Section**: Primary call-to-action with guarantee and statistics
2. **Value Proposition**: Addresses pain points and explains the solution
3. **Ethical AI Usage**: Explains the ethical approach to AI-generated photos
4. **Products & Pricing**: Four service tiers with Ecwid integration
5. **FAQ**: Comprehensive Q&A section
6. **Footer**: Contact information and final CTA

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Content Management

All user-facing text is stored in JSON files in the `src/content/` directory:

- `heroContent.json` - Hero section content
- `valuePropositionContent.json` - Value proposition content
- `ethicalAiContent.json` - Ethical AI section content
- `productsContent.json` - Products and pricing
- `faqContent.json` - FAQ questions and answers
- `footerContent.json` - Footer content

To update content, simply edit the relevant JSON file and rebuild.

## Ecwid Integration

The website includes placeholder Ecwid links for products 1-3. Update these in `src/components/Products.js`:

```javascript
const ecwidLinks = {
  ebook: 'https://your-ecwid-store.com/ebook',
  review: 'https://your-ecwid-store.com/review',
  combo: 'https://your-ecwid-store.com/combo'
};
```

## CloudFlare Pages Deployment

1. Connect your GitHub repository to CloudFlare Pages
2. Set build command: `npm run build`
3. Set build output directory: `build`
4. Deploy!

The website will be available as static HTML/CSS/JS files, perfect for CloudFlare Pages hosting.

## Customization

### Colors
Main colors are defined in `src/App.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Secondary gradient: `#f093fb` to `#f5576c`
- Background: `#0a0a0a`

### Fonts
Uses Inter font family from Google Fonts. To change, update the font import in `public/index.html`.

## Support

For questions or support, contact: support@datingguide.com
