<template>
  <div class="text-black">
    <nuxt />
  </div>
</template>


<script>
require("typeface-playfair-display");
require("typeface-fauna-one");

export default {};
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: #3a85f6;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpattern%20id%3D%22a%22%20height%3D%22700%22%20patternUnits%3D%22userSpaceOnUse%22%20width%3D%22221%22%3E%3Cpath%20d%3D%22m220%200v700%22%20fill%3D%22none%22%20stroke%3D%22%23d5d7da%22%20stroke-dasharray%3D%223%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%22.25%22%2F%3E%3C%2Fpattern%3E%3Crect%20fill%3D%22url%28%23a%29%22%20height%3D%22100%25%22%20width%3D%22100%25%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(240deg, #3a85f6, #3479dd);
  height: 100vh;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
