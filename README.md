# nano-expansion
Simple vanilla javascript accordion library

## Installation

<<<<<<< HEAD
**via NPM**
```shell
npm install nano-expansion --save
```

**via Yarn**
```shell
yarn add nano-expansion
```

**via CDN**
```html
<link rel="stylesheet" href="https://unpkg.com/nano-expansion@1.0.0/dist/nano-expansion.css">
<script src="https://unpkg.com/nano-expansion@1.0.0/dist/nano-expansion.js"></script>
```

## Usage

You can see the index.html file for examples of usage. [Live example](https://mcanam.github.io/nano-expansion/)

**Markup**

```html
<div class="nano-expansion-wrapper" id="myexpansion">
=======
### Package manager

Manager | Command
--- | ---
npm | `npm install nano-expansion --save`
yarn | `yarn add nano-expansion`

### CDN / Download

File | CDN
--- | ---
CSS | [nano-expansion.css](https://unpkg.com/browse/nano-expansion@1.0.0/dist/nano-expansion.css)
JS | [nano-expansion.js](https://unpkg.com/browse/nano-expansion@1.0.0/dist/nano-expansion.js)

## Usage

### Markup

```html
<div class="nano-expasion-wrapper" id="myexpansion">
>>>>>>> 6a7fb3454434ba1cdcedeb5c1092df091e2f50d6

  <div class="nano-expansion">
    <div class="nano-expansion-toggle">expansion 1</div>
    <div class="nano-expansion-content">
      <span>sample text</span>
    </div>
  </div>
  
  ...

</div>
```
<<<<<<< HEAD
Note: wrapper must have an id

**JS**
```javascript
const nanoExpansion = new NanoExpansion({
  duration: 0.2, // duration in seconds
  wrapper: "#myexpansion", // wrapper id
  autoFolding: true // only shows one expansion
});
```
=======
**Note**: id is required for wrapper

```javascript
const nanoExpansion = new NanoExpansion({
  duration: .2,
  wrapper: "#myexpansion",
  autoFolding: true
});
```
>>>>>>> 6a7fb3454434ba1cdcedeb5c1092df091e2f50d6
