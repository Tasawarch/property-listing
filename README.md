# Property Finder

A modern property discovery web application built with **Next.js**, **React**, and **Tailwind CSS**. This application helps users explore properties, view detailed information, and locate properties on interactive maps.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Data](#data)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Property Browsing**: Browse and search through a curated list of properties
- **Interactive Maps**: View properties on Leaflet-powered interactive maps
- **Area Guides**: Explore different areas with detailed information
- **Property Details**: View comprehensive property information with images and descriptions
- **Responsive Design**: Fully responsive design that works on all devices
- **Search Functionality**: Advanced search and filtering capabilities
- **Contact Form**: Easy-to-use contact form for inquiries
- **Property Finder Tool**: Specialized tool to help users find properties matching their criteria

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.7](https://nextjs.org) - React framework for production
- **UI Library**: [React 19.2.0](https://react.dev)
- **Styling**: 
  - [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
  - [PostCSS 4](https://postcss.org) - CSS transformations
- **Mapping**: 
  - [Leaflet 1.9.4](https://leafletjs.com) - Interactive maps
  - [React Leaflet 5.0.0](https://react-leaflet.dev) - React bindings for Leaflet
- **Carousel**: [Swiper 12.0.3](https://swiperjs.com) - Touch slider/carousel
- **Linting**: [ESLint 9](https://eslint.org) - Code quality tool

## 📁 Project Structure

```
property/
├── app/                          # Next.js app directory
│   ├── components/               # Reusable React components
│   │   ├── AreaCard.jsx         # Area showcase card
│   │   ├── Footer.jsx           # Application footer
│   │   ├── Header.jsx           # Navigation header
│   │   ├── LeafletMap.jsx       # Interactive map component
│   │   ├── PropertyCard.jsx     # Property listing card
│   │   └── SearchBar.jsx        # Search functionality
│   ├── context/                  # React Context for state management
│   │   └── PropertyContext.jsx  # Global property context
│   ├── hooks/                    # Custom React hooks
│   │   └── useFetchProperties.js # Hook for fetching properties
│   ├── pages/                    # App routes
│   │   ├── page.js              # Home page
│   │   ├── about/               # About section
│   │   ├── area-guides/         # Area guides page
│   │   ├── contact/             # Contact page
│   │   ├── maps/                # Maps page
│   │   ├── plot-finder/         # Property finder tool
│   │   └── properties/          # Property listings page
│   ├── globals.css              # Global styles
│   └── layout.js                # Root layout
├── data/                         # Static data files
│   ├── areas.json               # Area information
│   ├── map.json                 # Map data
│   └── properties.json          # Property listings
├── public/                       # Static assets
├── styles/                       # Additional stylesheets
├── eslint.config.mjs            # ESLint configuration
├── jsconfig.json                # JavaScript config
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## 📦 Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/property.git
   cd property
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 🚀 Usage

### Development

The application automatically reloads when you make changes to files. You can start editing pages in the `app` directory.

- **Home Page**: `app/page.js`
- **Property Listing**: `app/properties/page.js`
- **Area Guides**: `app/area-guides/page.js`
- **About Page**: `app/about/page.js`
- **Contact Page**: `app/contact/page.js`
- **Maps**: `app/maps/page.js`
- **Plot Finder**: `app/plot-finder/page.js`

### Data Management

Static data is stored in JSON files in the `data/` directory:
- `properties.json` - Property listings
- `areas.json` - Area information
- `map.json` - Map configuration

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the development server on [http://localhost:3000](http://localhost:3000)

### `npm run build`
Creates an optimized production build

### `npm start`
Runs the production server

### `npm run lint`
Runs ESLint to check code quality

## 🧩 Components

- **Header**: Navigation component with links to all main pages
- **Footer**: Application footer
- **PropertyCard**: Displays individual property information
- **AreaCard**: Showcases area highlights and information
- **SearchBar**: Enables property search and filtering
- **LeafletMap**: Interactive map for property visualization

## 📊 Data Structure

### Properties Data (`data/properties.json`)
```json
{
  "properties": [
    {
      "id": 1,
      "name": "Property Name",
      "description": "Description",
      "price": 0,
      "area": "Area Name",
      "image": "image.jpg"
    }
  ]
}
```

### Areas Data (`data/areas.json`)
Contains information about different areas including descriptions and highlights.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [React Leaflet Documentation](https://react-leaflet.dev)

## 👤 Author

[Your Name/Organization]

## 📧 Support

For support, email [your-email@example.com] or open an issue on GitHub.
