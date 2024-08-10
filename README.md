# Game-Verse

Welcome to **Game-Verse**, a web application designed to offer an immersive gaming experience. This project is built using modern web technologies such as Next.js, Tailwind CSS, and Prisma. It integrates a variety of tools and libraries to ensure a seamless and interactive user experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 18.0.0)
- npm (>= 7.0.0) or Yarn (>= 1.22.0)
- PostgreSQL (for Prisma setup)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/game-verse.git
   cd game-verse
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:

   Create a `.env` file in the root of your project and configure your database and other environment variables.

   ```env
   DATABASE_URL="your-database-url"
   NEXT_PUBLIC_API_KEY="your-api-key"
   ```

4. Set up Prisma:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- **Authentication:** Implemented with Lucia Auth and Prisma.
- **UI Components:** Built using Radix UI and Tiptap for rich text editing.
- **Styling:** Tailwind CSS with custom configuration and theming.
- **Real-time Chat:** Integrated using Stream Chat and Stream Chat React.
- **Form Handling:** Managed with React Hook Form and Zod for validation.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `.next` folder.
It optimizes the build for the best performance.

### `npm run start`

Starts the production build of the app.
This requires you to first run `npm run build`.

### `npm run lint`

Runs ESLint to find and fix problems in your code.

## Dependencies

This project uses a wide range of dependencies to enhance functionality:

- **Next.js**: The React framework for production.
- **Tailwind CSS**: A utility-first CSS framework.
- **Prisma**: A next-generation ORM for TypeScript and Node.js.
- **React Query**: For data fetching, caching, and synchronization.
- **Lucia Auth**: A lightweight authentication library.
- **Stream Chat**: Real-time messaging functionality.

For the full list of dependencies, see the `package.json` file.
