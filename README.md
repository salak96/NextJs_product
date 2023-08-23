# Installasi Next JS

## Untuk menginstal versi terakhir
- `npx create-next-app@latest`

## Untuk Menginstal Sesuai versi 13 misalnya

- `npx create-next-app@13.4.7`

# Selanjutnya sesuai kebutuhan
-  Next saja atau Tab

# contoh
```
- `npx create-next-app@13.4.7 `
```
# Need to install the following packages:
- create-next-app@13.4.7
```
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
- `npm i -g create-next-app`

## Formatter pritter code

```
npm install --save-dev --save-exact prettier
```

## Buat folder di root

```
touch .prettierrc.json
```
atau
```
.prettierrc.json
```

- Masukan isi .prittierrc.json

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

- command di terminal

```
npx prettier --write . 
```

- edit package json . di script tambahkan

``` 
"format": "prettier --write .", 
```

- untuk menjalankan di terminal

```
npm run format
```
## Getting Started

First, run the development server:

```bash
npm run dev
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
