# elbow

## A nuxt-based static site boilerplate

### CSS

* scss
* normalize.css

### Content management

* nuxt content
* forestry.io

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
