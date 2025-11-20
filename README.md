# Tint Tone Frontend Projects

A standalone React-based frontend application built with Material-UI, Redux Toolkit, and modern build tools.

## Project Overview

This project is a modern standalone React application that provides a dashboard and project management interface. It includes comprehensive tooling for development, testing, and production builds.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tint-tone-fe-projects
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy and modify the environment files as needed:
     - `.env.development` - Development environment settings
     - `.env.production` - Production environment settings
     - `.env.uat` - UAT environment settings

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3003`

2. Alternative development commands:
   ```bash
   npm start          # Start with webpack serve
   npm run build:dev  # Build for development
   ```

### Build and Test

#### Building the Application

```bash
# Development build
npm run build:dev

# UAT build
npm run build:uat

# Production build
npm run build:prod

# Standard production build
npm run build
```

#### Running Tests

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API services
├── utils/              # Utility functions
├── contexts/           # React contexts
├── config/             # Configuration files
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Key Features

- **Material-UI**: Modern React UI framework
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Modern Build Tools**: Webpack 5 with optimized configurations
- **Multi-environment Support**: Development, UAT, and Production configurations
- **Testing Setup**: Jest and React Testing Library
- **Modern Build Tools**: Webpack 5 with optimized configurations

## Available Scripts

- `npm start` - Start development server with webpack serve
- `npm run dev` - Start development server with environment variables
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run build:uat` - Build for UAT
- `npm run build:prod` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Environment Configuration

The application supports multiple environments through environment files:

- **Development** (`.env.development`): Local development settings
- **UAT** (`.env.uat`): User Acceptance Testing environment
- **Production** (`.env.production`): Production environment settings

Key environment variables:
- `REACT_APP_API_ENDPOINT` - Backend API endpoint
- `REACT_APP_WEBSOCKET_URI` - WebSocket connection URI

## Standalone Application

This is a standalone React application that runs independently without any micro-frontend dependencies.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Technology Stack

- **React 18** - UI library
- **Material-UI v5** - Component library
- **Redux Toolkit** - State management
- **React Router v6** - Routing
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler
- **Jest** - Testing framework
- **React Testing Library** - Testing utilities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.