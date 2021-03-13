# nano-expansion
Simple vanilla javascript accordion library

## Installation

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

  <div class="nano-expansion">
    <div class="nano-expansion-toggle">expansion 1</div>
    <div class="nano-expansion-content">
      <span>sample text</span>
    </div>
  </div>
  
  ...

</div>
```
Note: wrapper must have an id

**JS**
```javascript
const nanoExpansion = new NanoExpansion({
  duration: 0.2, // duration in seconds
  wrapper: "#myexpansion", // wrapper id
  autoFolding: true // only shows one expansion
});
```