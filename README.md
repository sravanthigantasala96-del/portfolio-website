# Portfolio Website

An interactive portfolio website built with React and Tailwind CSS to showcase professional experience, skills, and projects.

## 🌐 Live Website

**https://sravanthigantasala96-del.github.io/portfolio-website**

## 🚀 Features

- **Component-Based Architecture**: Modular, reusable React components
- **React Router**: Multi-page navigation with routing
- **React Hooks**: useState and useEffect for state management
- **Tailwind CSS**: Utility-first CSS framework for modern styling
- **Responsive Design**: Mobile-friendly layouts
- **Professional Design**: Clean, modern design with custom color scheme
- **Interactive UI**: Dynamic content, animations, and transitions

## 🛠️ Technologies Used

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Client-side routing
- **Tailwind CSS** 3.4.19 - Utility-first CSS framework
- **PostCSS** & **Autoprefixer** - CSS processing

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

Create an optimized production build:
```bash
npm run build
```

## 🚢 Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
1. Build the project for production
2. Deploy the `build` folder to the `gh-pages` branch
3. Make the site available at the GitHub Pages URL

## 📄 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── 404.html          # Custom 404 for GitHub Pages routing
├── src/
│   ├── components/       # React components
│   │   ├── About.js      # About page with profile info
│   │   ├── Education.js  # Education and certifications
│   │   ├── Experience.js # Professional experience
│   │   ├── Home.js       # Landing page
│   │   ├── Navigation.js # Navigation bar
│   │   ├── Projects.js   # Project showcase
│   │   ├── Skills.js     # Technical skills
│   │   └── ScrollToTop.js # Scroll to top button
│   ├── images/           # Image assets
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles and Tailwind imports
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- **Utility-First**: Styles applied directly in JSX using Tailwind utility classes
- **Custom Configuration**: Custom colors and theme extensions in `tailwind.config.js`
- **Minimal CSS**: Only complex pseudo-elements (like gradient borders) use minimal CSS files
- **Responsive Design**: Built-in responsive utilities for mobile-first design

### Custom Colors

The project uses a custom color palette defined in `tailwind.config.js`:
- `danske-blue`: #003d82
- `danske-blue-light`: #0056b3
- `danske-gray`: #f5f7fa
- `danske-text`: #1a2332

## 📱 Pages

- **Home**: Hero section with animated role display and quick links
- **About**: Personal overview, goals, languages, and contact information
- **Experience**: Professional experience with interactive company selector
- **Education**: Education history with expandable cards and certifications
- **Skills**: Technical skills organized by category
- **Projects**: Project showcase with detailed descriptions and achievements

## 🔧 React Concepts Demonstrated

1. **Component-Based Architecture**: Reusable, modular components
2. **JSX**: Declarative UI rendering
3. **State Management**: useState hook for component state
4. **Routing**: React Router DOM for navigation
5. **React Hooks**: useState, useEffect for state and side effects
6. **Conditional Rendering**: Dynamic content based on state
7. **Event Handling**: User interactions and form handling

## 📝 Development Notes

- The project uses `create-react-app` with React Scripts
- Routing is configured with `basename="/portfolio-website"` for GitHub Pages
- A custom 404.html handles client-side routing on GitHub Pages
- All components have been converted to use Tailwind CSS utility classes

## 👤 Author

**Sai Sravanthi G**
- Email: sravanthigantasala.96@gmail.com
- Location: Aarhus/Copenhagen, Denmark
- LinkedIn: [linkedin.com/in/sravanthigantasala](https://www.linkedin.com/in/sravanthigantasala)

---

Built with ❤️ using React and Tailwind CSS
