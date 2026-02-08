Quick React (Vite) + Tailwind scaffold

1) Create project (runs in project folder):

```bash
npm create vite@latest react-portfolio -- --template react
cd react-portfolio
npm install
```

2) Install Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to `tailwind.config.cjs` (content paths):

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

In `src/index.css` add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3) Sample `src/components/Skills.jsx` and `src/App.jsx` are provided in this folder. Start dev server with `npm run dev`.
