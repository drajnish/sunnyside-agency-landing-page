# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Learned about 'srcset'

```html
<picture>
  <source
    media="(min-width: 376px)"
    srcset="images/desktop/image-transform.jpg"
  />
  <img src="images/mobile/image-transform.jpg" alt="transform" />
</picture>
```

Learned to make triangles and fix its position

```css
.navigation::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-right: 30px solid #fff;
  position: absolute;
  right: 0;
  top: -25px;
}
```

### Continued development

Will start learning about gird layout, some javascript concepts about DOM and many more...

### Useful resources

- [How a css triangle made](https://codepen.io/chriscoyier/pen/lotjh) - It shows an animation about how a css triangle made. I really liked this.

## Author

- [Rajnish Deshmukh]
- Frontend Mentor - [@drajnish](https://www.frontendmentor.io/profile/drajnish)
- Twitter - [@DeshmukhRajnish](https://www.twitter.com/DeshmukhRajnish)
