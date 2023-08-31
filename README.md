# Installasi Next JS

# Untuk menginstal versi terakhir

```bash
npx create-next-app@latest
```

## Untuk Menginstal Sesuai versi 13 misalnya

```bash
npx create-next-app@13.4.7
```

# Selanjutnya sesuai kebutuhan

-   Next saja atau Tab

# contoh

```bash
npx create-next-app@13.4.7
```

# Need to install the following packages:

-create-next-app@13.4.7

```bash
Ok to proceed? (y) y
√ What is your project named? ... my-app
√ Would you like to use TypeScript with this project? ... No / Yes  (YES)
√ Would you like to use ESLint with this project? ... No / Yes	     (YES)
√ Would you like to use Tailwind CSS with this project? ... No / Yes (no) pakai SaSS
√ Would you like to use `src/` directory with this project? ... No / Yes (YES)
√ Use App Router (recommended)? ... No / Yes				(no)
√ Would you like to customize the default import alias? ... No / Yes	(YES)
Creating a new Next.js app in I:\FRONTEND\NEXT JS\my-app.

Using npm.
```

## You can update by running

```bash
npm i -g create-next-app
```

## Formatter pritter code

```bash
npm install --save-dev --save-exact prettier
```

## Buat folder di root

```bash
touch .prettierrc.json
```

atau

```
.prettierrc.json
```

-   Masukan isi .prittierrc.json

```
{
"tabWidth": 4,
"singleQuote": true,
"jsxSingleQuote": true,
"semi": true,
"printWidth": 150,
"bracketSpacing": true,
"braceSameLine": true
}

```

-   command di terminal

```bash
npx prettier --write .
```

-   edit package json . di script tambahkan

```
"format": "prettier --write .",
```

-   untuk menjalankan di terminal

```bash
npm run format
```

## Instal SaSS Css

```bash
npm i --save-dev sass
```

-   Akan, masuk package json

```
  "devDependencies": {
        "sass": "^1.66.1"
    }
```

## Install Tailwind Css

```bash
npm i -D tailwindcss postcss autoprefixer
```

-   Install update

```bash
npx tailwindcss init -p

```

-   Configuring Tailwind to styles globas.css

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

-   Importing Styles

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Firebase Set Up

```bash
npm install firebase
```

## Getting Started

First, run the development server:

````bash
- Buat folder dalam src nama Util/ lib
```bash
cd src
````

```bash
mkdir utils
```

```bash
mkdir lib
```

-   Buat folder dalam Util/lib nama DB

```bash
 mkdir db
```

```bash
mkdir firebase
```

-   Buat file firebase.ts

```bash
touch fireabase.ts
```

-   Buat file init.ts

```bash
touch init.ts
```

-   Copy Project Settings

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "lambang-app.firebaseapp.com",
  projectId: "lambang-app",
  storageBucket: "lambang-app.appspot.com",
  messagingSenderId: "1234",
  appId: "1:558522649003:web:0ef48054a17fb39056aaee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Buat Env diluar

```bash
touch .env.local
```

-   Masukan sesuai di dalam init lib/Utils Tanpa kutip '' dan koma , diakhir

```
FIREBASE_API_KEY = API KEY
FIREBASE_AUTH_DOMAIN = nextjs-1f3e5 FIREBASE_PROJECT_ID = nextjs-1f3e5
FIREBASE_STORAGE_BUCKET =nextjs-1f3e5appspot.com
FIREBASE_MESSAGING_SENDER_ID =
FIREBASE_APP_ID =

```

-   Ubah kembali init/lib dengan memanggil env.local

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

```

# RUNING NEXT JS

```bash
npm run dev
```

# or

yarn dev

# or

pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```
