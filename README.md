# blog

> A blog built with React and GitHub API.

## Description
A lightweight blog using GitHub issues to host articles.

This blog framework has two major components, List-view and Article-view.

1. List-view is the entry point for the blog and displays the list of articles.
2. Article-view is the article detailed page and displays the content of an article.

Routing is handled by react-router-dom.

Cross-page state is provided via React Context.

## Usage
This blog framework tries to simplify the process of posting articles by requiring minimal configuration.
It reads data from `config.js`, and uses data provided in this file to retrieve articles from the user's GitHub repository.

`blogTitle`
Its value will be used as the title of the blog.

`username`
Its value will be used as your GitHub username to handle link address and to retrieve data from your repository.

## Features
- [x] Parse Markdown - with marked
- [x] Syntax Highlighting - with prismjs
- [x] Animations/Transitions - with react-transition-group
- [ ] Tag System

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## End-to-end tests

```bash
# run Cypress in headless mode
npm run test:e2e

# open Cypress runner
npm run test:e2e:open
```

## Demo
[Live Demo](http://tianhanl.github.io/blog);
