# Overview

This is a Korean educational consulting website for "스콜라시프트" (ScholarShift), a consulting firm specializing in university admissions guidance. The application is built as a full-stack web application using React with TypeScript for the frontend and Express.js for the backend, designed to showcase the company's services, team, and provide consultation booking functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Programs, News, Strategies, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Styling**: Tailwind CSS with custom design tokens following Korean design guidelines
- **Typography**: Noto Sans KR for Korean language optimization
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

## Data Storage
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema**: User authentication schema with username/password fields
- **Migrations**: Drizzle Kit for database schema management
- **In-Memory Storage**: Fallback MemStorage implementation for development

## Component Structure
- **Layout Components**: Header with navigation, Hero section, Footer
- **Content Sections**: About (consultant profiles), Programs (service offerings), News (announcements), Strategies (blog-style content), Contact (consultation form)
- **UI System**: Comprehensive design system with custom CSS variables for light/dark mode support

## Development Environment
- **Platform**: Replit-optimized with development banner and error overlay
- **Hot Reload**: Vite HMR with Replit integration
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Asset Management**: Static asset handling with generated consultant images

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, Wouter for routing
- **Build Tools**: Vite with React plugin, TypeScript compiler
- **Development**: tsx for TypeScript execution, esbuild for production builds

## UI and Styling
- **Component Library**: Radix UI primitives for accessibility-compliant components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Noto Sans KR) via CDN

## Backend Services
- **Database**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schema validation with Drizzle integration
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

## Development Tools
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Utilities**: class-variance-authority for component variants, clsx and tailwind-merge for className management
- **Date Handling**: date-fns for date manipulation
- **UI Enhancements**: Embla Carousel for image carousels

## Replit Integration
- **Development**: @replit/vite-plugin-runtime-error-modal for error handling
- **Code Mapping**: @replit/vite-plugin-cartographer for development environment integration
- **Asset Management**: Custom asset path resolution for attached images