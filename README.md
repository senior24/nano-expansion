# nano-expansion
Simple vanilla javascript accordion library

## Installation

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

  <div class="nano-expansion">
    <div class="nano-expansion-toggle">expansion 1</div>
    <div class="nano-expansion-content">
      <span>sample text</span>
    </div>
  </div>
  
  ...

</div>
```
**Note**: id is required for wrapper

```javascript
const nanoExpansion = new NanoExpansion({
  duration: .2,
  wrapper: "#myexpansion",
  autoFolding: true
});
```
