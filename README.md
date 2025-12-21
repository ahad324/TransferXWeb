# TransferX Web

**TransferX** is the official web portal for the TransferX ecosystem – the universal offline data collection tool. Secure, fast, and resumable file transfers for Exams, Corporate, and Creative Studios without internet.

## 🚀 Technology Stack

-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
-   **Library:** [React 19](https://react.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** Framer Motion
-   **Deployment:** Netlify

## ✨ Features

-   **Modern Architecture:** Built with the latest Next.js 16 features for server-side rendering and SEO optimization.
-   **Semantic SEO:** Fully optimized with JSON-LD Schema, OpenGraph, and semantic HTML structure.
-   **Performance:** Uses `lenis` for smooth scrolling and optimized image loading.
-   **Responsive Design:** Mobile-first approach ensuring perfect rendering on all devices.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This command will:
1.  Generate the production application in `.next`.
2.  Produce a static sitemap via Next.js native generation.

## 📂 Project Structure

```bash
TransferXWeb/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── layout.jsx        # Root layout with <main> & accessibility
│   ├── page.jsx          # Home page
│   └── globals.css       # Global styles
├── src/
│   ├── components/       # Reusable UI components
│   ├── views/            # Page content logic (Home, About, etc.)
│   └── styles/           # Component-specific CSS
├── public/               # Static assets (images, icons)
└── netlify.toml          # Netlify deployment configuration
```

## 🚀 Deployment

The project is configured for seamless deployment on **Netlify**.

1.  Push changes to the repository.
2.  Netlify automatically detects the `next.config.mjs` and builds using the Next.js Runtime.
3.  **Note:** The `netlify.toml` is pre-configured to handle redirects and headers for SEO indexing.

## 📄 License

This project is proprietary software developed by **AbdulAhad**.
