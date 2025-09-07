<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# DEVersidade

DEVersidade é um projeto desenvolvido pelo **Grupo nº17 do Programa Desenvolve 2025**, com foco em **inovação, diversidade e tecnologia**. Este site apresenta o time, projetos desenvolvidos e serve como portfólio interativo do grupo.

---

## 📌 Funcionalidades

- **Página de boas-vindas** com apresentação do grupo e imagem principal.  
- **Seção “Quem Somos”** mostrando o time com cards e links para perfis.  
- **Carrossel horizontal** com os membros do grupo, totalmente responsivo.  
- **Seção “Nossos Projetos”** exibindo cards interativos com descrição dos projetos.  
- **Footer moderno** com links rápidos, redes sociais e informações de contato.  
- **Design responsivo** para dispositivos móveis, tablets e desktops.  
- **Uso de fontes personalizadas** (IBM Plex Sans).  

---

## 🛠 Tecnologias Utilizadas

- **React.js** – biblioteca principal para construção da interface.  
- **Tailwind CSS** – framework CSS para estilização rápida e responsiva.  
- **React Icons** – ícones para links e destaques nos cards.  
- **Vite** – ferramenta para bundling e desenvolvimento rápido.  
- **JavaScript/JSX** – lógica da aplicação e componentes.  

---

## ⚡ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/deversidade.git
>>>>>>> 5d498ec1679ed8eb023659bd1d0e93cd87e1fc5a
