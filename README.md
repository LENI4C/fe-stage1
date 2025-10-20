# HNG Stage 1 - Multi-Page React Application

A modern, responsive multi-page application built with React, TailwindCSS v4.0, and React Router. This project extends the Stage 0 profile card into a full multi-page application with "Contact" and "About" pages.

## 🚀 Live Demo

[View Live Demo](https://fe-stage1.vercel.app) - _https://fe-stage1.vercel.app_

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

- **React 19.1.1** - Modern React with hooks and functional components
- **TailwindCSS v4.0** - Latest version with new features and improvements
- **React Router DOM** - Client-side routing for multi-page navigation
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance

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
│   ├── Contact.jsx      # Contact form component
│   └── About.jsx        # About me page component
├── App.jsx                # Main app component with routing
├── main.jsx              # React entry point
└── index.css              # TailwindCSS import
```

## 🤝 Contributing

This is a Stage 1 task submission for the HNG internship program. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## 📄 License

This project is part of the HNG Stage 1 task and is available for educational purposes.
