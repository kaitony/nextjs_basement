# Project Structure & Architecture

## Directory Overview

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Root loading UI
│   └── page.tsx                 # Home page (splash screen)
│
├── components/                   # Reusable UI components
│   ├── layout.tsx               # Layout components
│   ├── loading.tsx              # Loading component
│   └── spinner.tsx              # Spinner component
│
├── configs/                      # Configuration files
│   └── urls.tsx                 # API URLs and endpoints
│
├── containers/                   # Page-level container components
│   └── Root/                  # Root page containers
│       ├── RootClientBlock.tsx
│       ├── RootClientContainer.tsx
│       ├── RootServerBlock.tsx
│       └── RootServerContainer.tsx
│
├── hooks/                        # Custom React hooks (empty)
│
├── lib/                          # Utility libraries
│   └── utils.ts                 # General utility functions
│
├── states/                       # State management (empty)
│
├── types/                        # TypeScript type definitions (empty)
│
└── utils/                        # API utilities (empty)
```

## Architecture Patterns

### Container Pattern

Each page follows a **Server/Client + Block/Container** structure:

- **ServerContainer**: Server-side data fetching
- **ServerBlock**: Server component rendering
- **ClientContainer**: Client-side state management
- **ClientBlock**: Client component rendering

### Separation of Concerns

- `/app`: Next.js routing and pages
- `/components`: Reusable, generic UI components
- `/containers`: Page-specific business logic
- `/states`: Global state management
- `/utils`: API communication layer
- `/configs`: Static configuration and data

---

## Project-Specific Rules

### Next.js App Router

- **Server Components by default** - Only use `'use client'` when necessary
- **Data fetching in ServerContainer** - Keep data fetching on the server
- **Client state in ClientContainer** - Manage client-side state separately
- **Pure rendering in Blocks** - ServerBlock/ClientBlock only handle rendering

### State Management (Zustand)

- **Global state in `/states`** - Define stores under states directory
- **Single responsibility** - Each store handles one domain (location, preference)
- **Selective subscriptions** - Use selectors to prevent unnecessary re-renders
- **Minimal state** - Keep only what needs to be global

### API Integration

- **Encapsulate in `/utils/request*.ts`** - All external API calls go here
- **Handle errors locally** - Each request function handles its own errors
- **Define types in `/types`** - API response types belong in types directory
- **No direct fetch in components** - Always use utility functions

### Styling

- **Tailwind utilities first** - Prefer utility classes over custom CSS
- **Minimal globals.css** - Keep custom styles to minimum
- **shadcn/ui in `/components`** - UI components from shadcn go here
- **Consistent spacing** - Use Tailwind spacing scale (4, 8, 12, 16...)

---

## Naming Conventions

### Files

- **Components**: PascalCase.tsx (`Button.tsx`, `Input.tsx`)
- **Utilities**: camelCase.ts (`requestWeatherApi.ts`)
- **Types**: camelCase.d.ts (`weather.d.ts`)
- **Tests**: `*.test.tsx` or `*.test.ts`

### Components

- **Server Components**: `[Feature]ServerContainer`, `[Feature]ServerBlock`
- **Client Components**: `[Feature]ClientContainer`, `[Feature]ClientBlock`
- **UI Components**: PascalCase (`Button`, `Input`, `Dialog`)

### Code Elements

- **React hooks**: `use[Name]` (`useLocation`, `useWeather`)
- **State stores**: `[name]Store` (`locationStore`, `preferenceStore`)
- **API functions**: `request[API]Api` (`requestWeatherApi`, `requestAirApi`)
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: PascalCase (`WeatherData`, `LocationState`)

---

### Error Handling Best Practices

- **Clear user messages** - Show meaningful errors to users
- **Retry with caution** - Only retry idempotent operations
- **Distinguish error types** - Separate network errors from data errors
- **Log for debugging** - Log errors for development troubleshooting
