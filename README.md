# Portfólio V2 — Jonann Victor

Reconstrução completa do portfólio, focada em parecer um produto — não um template.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Status atual

🚧 Em construção por etapas. Nesta fase, **apenas a Hero Section** foi implementada.
Navbar, About, Projects e Footer entram nas próximas etapas.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

## Estrutura

```
src/
  components/
    Hero/
      Hero.tsx           # componente principal
      HeroBackground.tsx # grid + glow
      CodePanel.tsx       # composição visual (elemento-assinatura)
      index.ts
  data/
    profile.ts            # nome, cargo, stack, links — reaproveitado nas próximas seções
  lib/
    cn.ts
```

## Pendências antes do deploy

- Adicionar `public/resume.pdf` (o botão "Download Resume" aponta pra `/resume.pdf`)
- Ajustar links reais em `src/data/profile.ts` se necessário
