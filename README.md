# [v10.dev](https://v10.dev)

![](https://raw.githubusercontent.com/drizzer14/v10i.dev/main/public/banner.png)

## About

This repository contains the source code of [v10.dev](https://v10.dev) website.

### CMS

GitHub is used as a CMS for this project, the content is stored in the private (at least, for now) repository. Content is written using markdown with extended GFM syntax. Data fetching is done through the GitHub REST API.

### Tech stack

- Yarn 1
- TypeScript 4.4
- Next.js 12:
  - `next-pwa`
  - `next-seo`
  - `next-sitemap`
  - _Front-end_:
    - React 17
    - `styled-components`
    - `swr`
    - `dayjs`
    - _Markdown_:
      - `react-markdown`
      - `remark`
      - `gray-matter`
      - _Code Blocks_:
        - `lowlight` _for AST parsing_
        - `highlight.js` _for language support_
        - `hast-util-to-html` _for HTML output_
  - _Back-end (API routes)_:
    - NestJS 8
- Babel
- `axios` _for all HTTP requests_
- `feed` _to generate the RSS feed_
- `fnts` _for some functional style spice_
- CI/CD:
  - Vercel deployment
  - `zx` _as language for CI scripts_
  - `eslint`
  - `prettier`
  - `stylelint`
  - `npm-package-json-lint`
  - `husky`
  - `lint-staged`
  - `commitlint`
  - Jest

### Project Structure

- `/public` – static assets
- `/scripts` – CI and misc scripts (`zx` & Node.js)
- `/src`:
  - `/api` – Next.js API routes
  - `/client` – Front-end code
  - `/shared` – code shared between `/api` and `/client`
  - `/pages` – Next.js file system routing
- `/tests` – unit and integration tests

## Development

To run the project locally, first, [fork and] clone this repository:

```sh
git clone git@github.com:drizzer14/v10i.dev.git
```

Install dependencies:

```sh
yarn install
```

Add `.env` file in the project root using the `.env.example` template. Preferably, fill in **all** the variables, except for optional `HOST` and `PORT` which can be omitted to enforce the defaults (`localhost:3000`).

Then, start the local development server:

```sh
yarn start
```

To test the production build:

```sh
yarn build

yarn serve
```

---

Designed and coded with ❤️ by [Dmytro Vasylkivskyi](https://github.com/drizzer14).
