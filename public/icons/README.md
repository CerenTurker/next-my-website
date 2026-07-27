# Ceren Demir Favicon Pack

Copy all files into `public/icons/`.

For `src/app/layout.tsx` metadata:

```ts
icons: {
  icon: [
    { url: "/icons/favicon.ico" },
    { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  shortcut: "/icons/favicon.ico",
  apple: "/icons/apple-touch-icon.png",
},
manifest: "/icons/site.webmanifest",
```
