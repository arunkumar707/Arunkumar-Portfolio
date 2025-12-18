# Arun Kumar A N - Portfolio Frontend

A modern, production-ready portfolio website built with **React.js** and **Tailwind CSS**.

## 🚀 Features

- ✨ Modern, responsive design with dark theme
- 🎨 Beautiful gradient effects and animations
- 📱 Mobile-first approach
- 🔄 Dynamic data fetching from backend API
- 💼 Professional sections: Hero, About, Skills, Experience, Projects, Education, Contact
- 🎯 SEO optimized with meta tags
- ⚡ Fast loading with Vite
- 🎭 Smooth scroll animations

## 🛠️ Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## 📦 Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
VITE_API_URL=http://localhost:3001/api
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
All content is fetched from the backend API. Update the backend data to change portfolio content.

### Fallback Data
Each component has fallback data that displays if the API is unavailable.

## 🔗 API Integration

The frontend communicates with the backend through the following endpoints:

- `GET /api/projects` - Fetch all projects
- `GET /api/skills` - Fetch all skills
- `GET /api/experience` - Fetch work experience
- `GET /api/education` - Fetch education details
- `POST /api/contact` - Submit contact form

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👨‍💻 Author

**Arun Kumar A N**
- Full Stack Developer
- React.js & Node.js Expert
