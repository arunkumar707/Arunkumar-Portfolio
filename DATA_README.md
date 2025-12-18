# Portfolio - Frontend Only (No Backend)

This portfolio application now runs entirely on the frontend with all data stored in JSON files. No backend server is required!

## 📁 Data Structure

All portfolio data is stored in JSON files located in `src/data/`:

- **projects.json** - Your project portfolio with descriptions, tech stacks, and links
- **skills.json** - Technical skills organized by category with proficiency levels
- **experience.json** - Work experience with company details and responsibilities
- **education.json** - Educational background with institutions and achievements

## 🚀 Getting Started

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📝 Customizing Your Data

To customize the portfolio with your own information, simply edit the JSON files in `src/data/`:

### Projects (`src/data/projects.json`)
```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Project description",
  "techStack": ["React", "Node.js"],
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "featured": true
}
```

### Skills (`src/data/skills.json`)
```json
{
  "id": 1,
  "category": "Frontend",
  "name": "React.js",
  "level": 85
}
```

### Experience (`src/data/experience.json`)
```json
{
  "id": 1,
  "title": "Job Title",
  "company": "Company Name",
  "location": "Location",
  "startDate": "Jan 2024",
  "endDate": "Present",
  "current": true,
  "description": ["Responsibility 1", "Responsibility 2"]
}
```

### Education (`src/data/education.json`)
```json
{
  "id": 1,
  "degree": "Degree Name",
  "institution": "Institution Name",
  "location": "Location",
  "year": "2020 - 2024",
  "cgpa": "8.5",
  "description": "Description of your studies"
}
```

## 📧 Contact Form

The contact form is fully functional and will:
- Display success/error messages to users
- Log form submissions to the browser console
- Validate all required fields

**Note:** Since there's no backend, form submissions are logged to the console. To actually send emails, you can:
1. Integrate with a service like EmailJS, Formspree, or SendGrid
2. Add your own backend API endpoint
3. Use a serverless function (Netlify Functions, Vercel Functions, etc.)

## 🎨 Design Features

All original design elements are preserved:
- ✅ Responsive layout for all screen sizes
- ✅ Smooth animations and transitions
- ✅ Modern gradient effects
- ✅ Interactive hover states
- ✅ Loading states for data fetching
- ✅ Fallback data if JSON files fail to load

## 🔧 Technical Details

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Data Storage:** Local JSON files
- **No Backend Required:** All data is bundled with the frontend

## 📦 Deployment

You can deploy this portfolio to any static hosting service:

- **Netlify:** Drag and drop the `dist` folder
- **Vercel:** Connect your GitHub repo
- **GitHub Pages:** Use the `dist` folder
- **Cloudflare Pages:** Deploy directly from Git

## 🔄 Migration from Backend

This version has been migrated from a backend-dependent architecture to a fully static frontend application:

- ❌ Removed: Express.js backend server
- ❌ Removed: Database connections
- ❌ Removed: API endpoints
- ❌ Removed: Axios HTTP client
- ✅ Added: Local JSON data files
- ✅ Added: Simulated async data loading
- ✅ Maintained: All UI/UX features and designs

## 📄 License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!
