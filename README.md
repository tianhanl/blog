# blog

> A blog built with Vue.js and GitHub API.

## Description
A lightweight blog using GitHub issues to host articles.

This blog framework have two major componenet, List-view and Article-view.

1. List-view is the entry point for the blog and displays the list of articles.
2. Article-view is the article detailed page and displays the content of an article.

The routing between different pages is built with vue-router.

The state management of cross page data is built with vuex.

## Usage
This blog framework tries to simply the process of posting article by requring least information.
It reads data form `config.js`, and uses data provided in this file to retrive articles from user's GitHub repository.

config.js requires following content:

`blogTitle`
Its value will be used as the title of the blog.

`username`
Its value will be used as your GitHub username to handle link address and to retrieve data from your repository.

## Features
- [x] Parse Markdown - with vue-markdown
- [x] Syntax Highlighting - with prismjs
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

## Demo
[Live Demo](http://tianhanl.github.io/blog);
