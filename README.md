
# Lethargic Solutions:
<div>
<img  style="display: flex;justify-content:center; align-items:center; font-size:25px; font-weight:600;" src='https://github.com/alpha-alexxx/lethargic-sol-portfolio/blob/main/src/assets/main_logo.svg' width='48px' height='48px'/>Lethargic Solution
</div>

This is my portfolio website, built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/), styled with [SCSS](https://sass-lang.com/), and with backend integration using [Sanity.io](https://www.sanity.io/).



## Status and Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/843c83b2-e565-4392-850f-9f0628857e00/deploy-status)](https://lethargic-sol.netlify.app)


## Installation

To run the website locally, you'll need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your computer.

1. Clone this repository to your local machine:

Install my-project with npm

```bash
git clone https://github.com/your-username/my-portfolio-website.git
```
2. Navigate to the project directory and install the dependencies:

```bash
cd my-portfolio-website
npm install
```
    
## Backend Integration
1. Login on [sanity.io](https://www.sanity.io/) with Github/Google/Email.

2. Create a project which will be created automatically for the first time.
3. You will get a command like this: 
Example:
```bash
npm create sanity@latest -- --template get-started --project [project] --dataset production --provider [google/github/else]
```
4. Run it in terminal of Your code editor.
5. After that create schema using [Sanity Docs](https://www.sanity.io/docs). Or Using My [Schemas](https://gist.github.com/alpha-alexxx/6b63ba330b4858820e32dee499d21461)
6. Also install sanity/cli for furthur usuages.
```bash
npm -g @sanity/cli ```
7. Run sanity Development Server.
```bash
sanity start or, npm run start
```
8. Save some data and now come to the frontend.
9. Open `src/client.js` for receiving the data from API. Put your VITE_APP_SANITY_PROJECT_ID, VITE_APP_SANITY_TOKEN in created `.env` file in `/src/` folder from sanity Management Dashboard.

```
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_APP_SANITY_TOKEN;
const dataset = 'production'
const apiVersion = '2022-03-25'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: true,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
```
Now Save it. and run server . !!! BOOM !!! It started.
## Usage/Examples
1. To start the development server, run the following command:
```bash
npm run start
 or,
npm start
```
This will start the Vite development server and open the website in your default web browser at [Localhost](http://localhost:5173).

2. To build the website for production, run the following command:

```bash
npm run build
```
This will generate a production-ready build of the website in the `dist/` directory.

## Authors
- ![alpha-alexxx](https://avatars.githubusercontent.com/u/65218056?s=20&v=4)
*[alpha-alexxx](https://github.com/alpha-alexxx/)*

## License

![MIT](https://img.shields.io/badge/License-MIT-green.svg)

