# HNG Stage 1 - Multi-Page React Application

A modern, responsive multi-page application built with React, TailwindCSS v4.0, and React Router. This project extends the Stage 0 profile card into a full multi-page application with Contact Us and About Me pages.

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.com) - _Update with your actual deployment URL_

## 📋 Features

### ✅ Profile Card (Home Page)

-   **Semantic HTML**: Uses proper semantic elements (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
-   **Accessibility**: Full keyboard navigation, ARIA labels, focus management
-   **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
-   **Testable**: All elements include required `data-testid` attributes
-   **Dynamic Content**: Real-time display of current time in milliseconds
-   **Modern Styling**: TailwindCSS v4.0 with smooth animations and gradients

### ✅ Contact Us Page

-   **Form Validation**: Client-side validation with real-time error feedback
-   **Required Fields**: Full name, email, subject, and message with proper validation
-   **Accessibility**: All inputs have labels, ARIA associations, and error messages
-   **Success State**: Confirmation message after successful submission
-   **Responsive Design**: Works seamlessly across all device sizes

### ✅ About Me Page

-   **Reflective Content**: Personal bio, goals, areas for improvement, and future notes
-   **Semantic Structure**: Proper use of `<main>`, `<section>`, `<h2>`, `<h3>` elements
-   **Accessibility**: Screen reader friendly with proper heading hierarchy
-   **Responsive Layout**: Optimized for mobile, tablet, and desktop viewing

### ✅ Navigation

-   **React Router**: Seamless navigation between pages
-   **Accessibility**: Proper ARIA labels and current page indicators
-   **Responsive**: Mobile-friendly navigation with backdrop blur effects

## 🎯 Required Elements (All Present)

### Profile Card Elements

| Element                     | data-testid                  | Status |
| --------------------------- | ---------------------------- | ------ |
| Profile card root container | `test-profile-card`          | ✅     |
| Name (plain text)           | `test-user-name`             | ✅     |
| Short biography (paragraph) | `test-user-bio`              | ✅     |
| Current time (milliseconds) | `test-user-time`             | ✅     |
| Avatar image                | `test-user-avatar`           | ✅     |
| Social links list           | `test-user-social-links`     | ✅     |
| Individual social links     | `test-user-social-{network}` | ✅     |
| Hobbies list                | `test-user-hobbies`          | ✅     |
| Dislikes list               | `test-user-dislikes`         | ✅     |

### Contact Us Elements

| Element          | data-testid                  | Status |
| ---------------- | ---------------------------- | ------ |
| Full name input  | `test-contact-name`          | ✅     |
| Email input      | `test-contact-email`         | ✅     |
| Subject input    | `test-contact-subject`       | ✅     |
| Message textarea | `test-contact-message`       | ✅     |
| Submit button    | `test-contact-submit`        | ✅     |
| Error messages   | `test-contact-error-{field}` | ✅     |
| Success message  | `test-contact-success`       | ✅     |

### About Me Elements

| Element                | data-testid              | Status |
| ---------------------- | ------------------------ | ------ |
| About page container   | `test-about-page`        | ✅     |
| Bio section            | `test-about-bio`         | ✅     |
| Goals section          | `test-about-goals`       | ✅     |
| Confidence section     | `test-about-confidence`  | ✅     |
| Future note section    | `test-about-future-note` | ✅     |
| Extra thoughts section | `test-about-extra`       | ✅     |

## 🛠️ Tech Stack

-   **React 19.1.1** - Modern React with hooks and functional components
-   **TailwindCSS v4.0** - Latest version with new features and improvements
-   **React Router DOM** - Client-side routing for multi-page navigation
-   **Vite** - Fast build tool and development server
-   **ESLint** - Code linting and quality assurance

## 📱 Responsive Breakpoints

-   **Mobile**: < 768px (stacked layout, full-width navigation)
-   **Tablet**: 768px - 1023px (side-by-side layout, optimized spacing)
-   **Desktop**: ≥ 1024px (enhanced spacing and larger elements)

## ♿ Accessibility Features

-   **Keyboard Navigation**: All interactive elements are keyboard accessible
-   **Focus Management**: Visible focus indicators for all focusable elements
-   **ARIA Labels**: Descriptive labels for screen readers
-   **Semantic HTML**: Proper heading hierarchy and landmark elements
-   **Alt Text**: Descriptive alt text for images
-   **Form Validation**: Real-time validation with ARIA error associations
-   **High Contrast Support**: CSS media queries for high contrast mode
-   **Reduced Motion**: Respects user's motion preferences

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone <your-repo-url>
    cd fe-stage1
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🧪 Testing

The application includes built-in validation for all required `data-testid` attributes. You can test the application by:

1. **Manual Testing**: Navigate through all pages and test form validation
2. **Automated Testing**: Use the data-testid attributes for automated testing
3. **Accessibility Testing**: Use screen readers and keyboard navigation
4. **Responsive Testing**: Test on different screen sizes and devices

## 📦 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation component
│   ├── ProfileCard.jsx    # Profile card component
│   ├── ContactUs.jsx      # Contact form component
│   └── AboutMe.jsx        # About me page component
├── App.jsx                # Main app component with routing
├── main.jsx              # React entry point
└── index.css              # TailwindCSS imports
```

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for React Router (if needed)

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app and deploy
3. Configure environment variables if needed

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Configure GitHub Pages to serve from the `gh-pages` branch

## 🔧 Configuration

### TailwindCSS v4.0

The project uses TailwindCSS v4.0 with the new Vite plugin. Configuration is handled automatically with sensible defaults.

### React Router

The application uses React Router for client-side routing with the following routes:

-   `/` - Profile Card (Home)
-   `/contact` - Contact Us page
-   `/about` - About Me page

## 📝 Notes

-   All components are built with accessibility in mind
-   Form validation includes real-time feedback and proper error handling
-   The application is fully responsive and works on all device sizes
-   All external links include `rel="noopener noreferrer"` for security
-   The project follows React best practices and modern development patterns

## 🤝 Contributing

This is a Stage 1 task submission for the HNG internship program. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## 📄 License

This project is part of the HNG Stage 1 task and is available for educational purposes.

## 🎯 Next Steps

For future enhancements, consider:

-   Adding unit tests with React Testing Library
-   Implementing form submission to a backend API
-   Adding more interactive features
-   Implementing dark mode toggle
-   Adding animations and micro-interactions
