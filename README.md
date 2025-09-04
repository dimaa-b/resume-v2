# Dmitry Baryshnikov - Interactive Resume

A Wikipedia-style interactive resume built with React, TypeScript, and Vite.

## 🚀 Features

- Wikipedia-inspired design and layout
- Smooth scroll animations with intersection observer
- Typing animation for the main title
- Responsive design for mobile and desktop
- Clean, organized codebase with modern React patterns

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── index.ts        # Component exports
│   ├── WikipediaResume.tsx
│   ├── TopNav.tsx
│   ├── Sidebar.tsx
│   ├── MainContent.tsx
│   ├── TitleArea.tsx
│   ├── InfoBox.tsx
│   ├── ResumeSection.tsx
│   └── TypingAnimation.tsx
├── hooks/              # Custom React hooks
│   ├── index.ts
│   └── useIntersectionObserver.ts
├── styles/             # CSS files
│   ├── App.css
│   ├── index.css
│   └── WikipediaResume.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions and constants
│   ├── index.ts
│   └── constants.ts
└── assets/             # Static assets
    └── react.svg
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **ESLint** - Code linting

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Design Philosophy

This project mimics Wikipedia's clean, information-dense design while adding modern interactive elements:

- **Typography**: Uses Wikipedia's font stack for authenticity
- **Layout**: Three-column layout with sidebar navigation
- **Colors**: Wikipedia's color palette (#0645ad for links, etc.)
- **Animations**: Subtle animations that enhance UX without being distracting

## 📱 Responsive Design

The resume adapts to different screen sizes:
- **Desktop**: Full three-column layout
- **Tablet**: Stacked layout with sidebar at bottom
- **Mobile**: Single column with simplified navigation

## 🔧 Development

The codebase follows modern React best practices:
- **Component composition** over inheritance
- **Custom hooks** for reusable logic
- **TypeScript interfaces** for type safety
- **Barrel exports** for clean imports
- **Constants** for maintainable configuration

---

*Built with ❤️ by Dmitry Baryshnikov*
