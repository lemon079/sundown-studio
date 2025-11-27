# Sundown Studio

A visually immersive and responsive studio portfolio website built with modern web technologies. This project showcases advanced frontend techniques including smooth scrolling, complex animations, and a polished UI design.

## 🚀 Features

- **Smooth Scrolling**: Integrated with [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) for a premium scrolling experience.
- **Advanced Animations**: Powered by [GSAP](https://gsap.com/) (GreenSock Animation Platform) for fluid and complex interactions.
- **Responsive Design**: Fully responsive layout ensuring a seamless experience across all devices.
- **Modern UI/UX**: Clean, minimalist aesthetic with attention to detail.
- **Page Transitions**: Smooth transitions between different sections of the website.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (powered by [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/)
- **Scrolling**: [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd sundown-studio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🔨 Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
sundown-studio/
├── public/              # Static assets
├── src/
│   ├── Components/      # Reusable UI components
│   │   ├── ui/          # Basic UI elements
│   │   ├── Navbar.jsx   # Navigation bar
│   │   └── Footer.jsx   # Footer component
│   ├── pages/           # Page components (Home, Studio, Work, Contact)
│   ├── App.jsx          # Main application component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind directives
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```
