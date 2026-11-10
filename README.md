# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Formulaire de contact

Le formulaire utilise EmailJS. Copiez `.env.example` vers `.env`, puis renseignez les identifiants du service, du modèle et la clé publique depuis votre compte EmailJS :

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Le modèle EmailJS doit utiliser les variables `from_name`, `reply_to`, `subject` et `message`. Redémarrez le serveur Vite après avoir modifié `.env`. Le formulaire affiche un message explicite tant que les identifiants ne sont pas configurés.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
