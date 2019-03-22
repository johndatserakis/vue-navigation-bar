# vue-navigation-bar

Easily mock the layout of your Vue apps.

<p align="left">
  <a href="https://www.npmjs.com/package/vue-navigation-bar"><img src="https://img.shields.io/npm/v/vue-navigation-bar.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/vue-navigation-bar"><img src="https://img.shields.io/npm/dt/vue-navigation-bar.svg" alt="NPM Downloads"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjohndatserakis%2Fvue-navigation-bar&text=Check%20out%20vue-navigation-bar%20on%20GitHub&via=johndatserakis">
  <img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/vue-navigation-bar.svg?style=social" alt="Tweet"></a>
</p>

### Links

[View demo](https://johndatserakis.github.io/vue-navigation-bar/)

[View on npm](https://www.npmjs.com/package/vue-navigation-bar)

[View on GitHub](https://github.com/johndatserakis/vue-navigation-bar)

### Install

```
# npm
npm i vue-navigation-bar

#yarn
yarn add vue-navigation-bar
```

Or you can include it through the browser at the bottom of your page along with the css:

```html
<script src="https://unpkg.com/vue-navigation-bar@1.1.1/dist/vue-navigation-bar.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://unpkg.com/vue-navigation-bar@1.1.1/dist/vue-navigation-bar.css">
```

### About

When laying out the skeleton of a new site we found a need for an easy way to visualize different sections before they were worked on.

With `vue-navigation-bar` you can quickly mock sections by customizing a few different options - for instance you can change the height of a mocked section. Changing the hight helps make the mockups more realistic because some sections are naturally a lot larger than others and that should be taken into account during the early stages. Other options include color, font-size, and text (plus more) - see the usage example below or see the code in the `./example` folder to get started.

### Usage Example

```html
<!-- css import for when you want to import the component css into your css file/files  -->
@import '/path/to/node_modules/vue-navigation-bar.css';

<!-- css import for when you're importing the css directly in your js  -->
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)
```

```html
<vue-navigation-bar
    :mobile-breakpoint="992"
    :desktop-height="150"
    :mobile-height="100"
    :background="'#128AB2'"
    :text-color="'#fff'"
    :text="'navbar'"
    :font-size="'2rem'"
></vue-navigation-bar>
```
Note - all props are optional. If you don't set any props then it will output a simple template section.

### Props

| prop | type | required | default | description |
|----------------|---------|----------|-----------------|-------------------------------------|
| mobileBreakpoint | Number | no | 992 | Width at which the mobile options are used |
| desktopHeight | Number | no | 200 | Height of the sections for desktops |
| mobileHeight | Number | no | 100 | Height of the sections for mobile |
| background | String | no | '#128AB2' | Background color |
| textColor | String | no | '#fff' | Text color |
| text | String | no | 'section' | Text to show in the section |
| fontSize | String | no | '2rem' | Text size |

### SASS Structure

```sass
.vue-navigation-bar {
    &__text {
    }
}
```

### Browser Example

[See on CodePen](https://codepen.io/johndatserakis/pen/eXLYPG)

### Development

``` bash
# install dependencies
npm install

# serve with hot reload
npm run watch

# run the tests
npm run test

# build demo page
npm run build:example

# build
npm run build
```

### Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

### License

[MIT](http://opensource.org/licenses/MIT)

Packaged with a mixture of [vue-lib-template](https://github.com/biigpongsatorn/vue-lib-template) and [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup).