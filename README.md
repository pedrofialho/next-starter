# next-starter

This is a _pretty opinionated_, some-batteries-included [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- [Typescript](https://www.typescriptlang.org), of course
- [EditorConfig](https://editorconfig.org/) for cross-editor coding style consistency
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code quality
- [Tailwind CSS](https://tailwindcss.com/) as CSS framework
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) for merging class lists and optimizing Tailwind styling
- [React Query/TanStack Query](https://tanstack.com/query) for Client-side server state/asynchronous state management
- [zod](https://zod.dev) for schema validation/parsing
- [date-fns](https://date-fns.org) for date manipulation
- [T3 Env](https://env.t3.gg/docs/recipes) for environment variables
- [Lucide](https://lucide.dev) for icons

## Getting Started

### Prerequisites

You'll need [pnpm](https://pnpm.io) to install packages and run the project. Follow [the installation instructions](https://pnpm.io/installation) and check your installation in a terminal with:

```sh
pnpm --version
```

### Install dependencies

```sh
pnpm install
```

### Run the development server

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## VS Code Extensions and Settings

This template includes extensions and settings recommendations to enhance the development experience with VS Code.

You can browse and enable recommended extensions for VS Code with the `Extensions: Show Recommended Extensions` command.

Run `pnpm settings` to use recommended optimal settings like format/lint on save and other niceties.

## Configuration

The linter/formatter configuration is pretty great out of the box, but if needed it can be tailored to your needs with these configuration files:

- `.editorconfig` - Customize core editor options like charset, EOL, indent type/size, etc. View [EditorConfig Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) for more info;
- `.prettier.config.cjs` - Customize advanced formatting rules. View [Prettier Docs](https://prettier.io/docs/en/index.html) for more info.
- `.eslintrc.cjs` - Customize static analysis rules. View [ESLint Rules](https://eslint.org/docs/rules/) for more info.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Build options

### Skip lint/type-checking

It is possible to run `build` with `SKIP_LINTING` and/or `SKIP_TYPE_CHECKING` to bypass linting and type checks. It can be useful to save compilation time when the code has already been checked by a previous step.

### Skip environment validation

Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for Docker builds.

## Acknowledgements

- `cn` helper from [shadcn/ui](https://github.com/shadcn/ui)
- `env` helper, cjs/mjs configuration files from [T3 Stack](https://github.com/t3-oss/create-t3-app)
