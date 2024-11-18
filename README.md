# Mimino

**[LIVE PAGE](https://mimino.vercel.app/)**

<img width="100%" src="./public/images/readme/readme-title.jpg" alt="main page"/>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#features">Features</a> •
  <a href="#components-api">Components API</a> •
  <a href="#credits">Credits</a> •
  <a href="#getting-started">Getting started</a>
</p>

## Introduction

`Mimino` is a web application for the hotel and restaurant complex stat showcases its elegant
accommodations, fine dining options, and available services. It provides users with a seamless
experience to explore amenities, view photos, and make reservations online.

## Features

The website consists of three static pages: Main, Restaurant, and Hotel, along with a dynamic Room
page that displays content based on the search query. The layout is responsive and cross-browser
compatible, with mobile starting at 360px, tablet at 1024px, and desktop at 1280px. The layout from
360px to 480px is fluid (stretchable), and a mobile-first approach was used.

## Components API

Here you may find a list with the most common components:

- #### Btn

| Prop             | Value               | Description                         |
| ---------------- | ------------------- | ----------------------------------- |
| `children`       | `string`            | required, button text               |
| `type`           | `button` / `submit` | optional, button type               |
| `onClick`        | `function`          | optional, add effect on click event |
| `classnameProps` | `boolean`           | optional, set additional styles     |
| `isBtn`          | `boolean`           | optional, set comp as button        |
| `isLink`         | `boolean`           | optional, set comp as link          |
| `isScroll`       | `boolean`           | optional, set comp as scroll        |
| `linkTo`         | `boolean`           | optional, set link anchor           |

## Credits

This software uses the following open source packages:

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.com/)
- [Swiper](https://swiperjs.com/)
- [react-scroll](https://www.npmjs.com/package/react-scroll)
- [react-datepicker](https://www.npmjs.com/package/react-datepicker)
- [react-hook-form](https://react-hook-form.com/)
- [svgr](https://www.npmjs.com/package/@svgr/webpack)
- [classnames](https://www.npmjs.com/package/classnames)

## Getting Started

- **Clone the repository to local machine**

```bash
https://github.com/iSteffan/mimino.git
```

- **Install dependencies** via npm:

```
npm install
```

- **Run the project in local environment**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
