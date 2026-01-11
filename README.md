# YCP Website - Young Catholic Professionals

A modern, elegant website for Young Catholic Professionals built with Next.js, React, and Tailwind CSS.

## Features

- **Hero Section** - Carousel with YCP logo and imagery
- **About Page** - Mission, vision, and core values
- **History Page** - Establishment timeline and founding members
- **Executives Page** - Current leadership team with contact information
- **Join/Membership Page** - Registration form for new members
- **News & Announcements** - Weekly/monthly updates and events
- **Adverts Section** - Member business advertisements
- **Gallery** - Photos from events, charity programs, and meetings

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Design Theme

- **Primary Colors**: Purple (#8B5CF6), Pink (#EC4899), White
- **Design Philosophy**: Clean, elegant, and simple navigation representing values and modesty

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── executives/     # Executives page
│   ├── gallery/        # Gallery page
│   ├── history/        # History page
│   ├── join/           # Membership registration page
│   ├── news/           # News & announcements page
│   ├── adverts/        # Member adverts page
│   ├── globals.css     # Global styles
│   ├── layout.js       # Root layout
│   └── page.js         # Home page
├── components/
│   ├── Footer.js       # Footer component
│   ├── HeroCarousel.js # Hero carousel component
│   └── Navigation.js   # Navigation component
└── public/
    └── images/         # Image assets (to be added)
```

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Footer.js` - Footer contact info
- `app/join/page.js` - Registration form submission email

### Add Images

Place images in the `public/images/` directory:
- `public/images/hero-*.jpg` - Hero carousel images
- `public/images/executives/*.jpg` - Executive photos
- `public/images/gallery/**/*.jpg` - Gallery images

### Update Content

All page content can be updated in their respective files in the `app/` directory.

## Future Enhancements

- Admin panel for content management
- Database integration for dynamic content
- Email service integration for form submissions
- Image upload functionality
- User authentication for members
- Blog/News CMS integration

## License

This project is created for Young Catholic Professionals (YCP).
