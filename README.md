# blog

> A blog built with Vue.js and GitHub API.

## Description
This blog will use the issues of its repository as blog articles. 

In list-view, it will display all the articles its owner created with their creation time.

In article-view, it will display the body content of an article, and the content will be cached for quicker rendering next time.

## Usage
Please change the content of config.js to let the program to display your articles.

config.js requires following content:

`blogTitle`
Its value will be used as the title of the blog.

`username`
Its value will be used as your GitHub username to handle link address and to retrieve data from your repository.


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