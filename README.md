# elbow

## A nuxt-based static site boilerplate

### CSS

* CUBE CSS - inspiration for mix of utility and component (block) styles [https://piccalil.li/blog/cube-css]
* BEM naming conventions inside components [http://getbem.com/introduction/]
* Gorko - generates a set of utility classes from a config file [https://github.com/hankchizljaw/gorko]
* scss
* style resources nuxt module - [https://www.npmjs.com/package/@nuxtjs/style-resources] (for making sass variables, mixins etc globally available)

### Content management

* nuxt content module [https://content.nuxtjs.org/]
* TO DO: forestry.io

### Image management

* cloudinary [https://cloudinary.com/]

## Starting a new site fron the boilerplate

* git clone https://github.com/tctravis/elbow.git new-site-name
* git remote rm origin
* create new github repo (REMOTE_URL)
* git remote add origin  <REMOTE_URL>
* git push -u origin master


## Nuxt build setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
