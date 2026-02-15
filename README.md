# Meal Planner

A React-based interactive meal planner application that helps you plan your weekly meals.

## Features

- Browse a collection of meals
- Generate random meal plans for the week
- Customize your meal selections
- Save and edit your meal plans
- Prepare grocery lists based on selected meals

## Deployment

This project is set up to automatically deploy to GitHub Pages.

### Automatic Deployment

The application automatically deploys to GitHub Pages when:
- You push to the `main` branch
- You can also trigger deployment manually from the GitHub Actions tab

### Manual Deployment

1. Go to the repository on GitHub
2. Click on the "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow" button
5. Select the branch and click "Run workflow"

The site will be available at: `https://nickball12.github.io/meal_planner/`

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nickball12/meal_planner.git
   cd meal_planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technology Stack

- React 18
- TypeScript
- Webpack 5
- Tailwind CSS (via CDN)
- Lucide React (for icons)

## License

MIT
