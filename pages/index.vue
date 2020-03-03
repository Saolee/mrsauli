<template>
  <div class="mx-auto text-center grid grid-container">
    <header>
      <h1 class="font-display font-bold mt-12 text-3xl md:text-6xl text-gray-100">
        <span class="relative z-0">GR</span>
        <span class="relative z-10 text-gray-800">//</span>
        <span class="relative z-20">ID</span>
        <span class="relative z-10 text-gray-800">.</span>
      </h1>

      <h2
        class="font-display lowercase italic font-medium opacity-25 text-gray-100 text-xl mb-8"
      >Grid stuff</h2>
    </header>
    <main>
      <div class="card">
        <h2 class="title font-display font-bold text-xl">1 alonger title, spanning multiple lines</h2>
        <div class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div class="category">Course</div>
      </div>
      <div class="card">
        <h2 class="title font-display font-bold text-xl">2 title</h2>
        <div class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div class="category">Display</div>
      </div>
      <div class="card">
        <h2 class="title font-display font-bold text-xl">3 title</h2>
        <div class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div class="category">Event</div>
      </div>
      <div class="card">
        <h2 class="title font-display font-bold text-xl">4 title</h2>
        <div class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div class="category">Class</div>
      </div>
      <div class="card">
        <h2 class="title font-display font-bold text-xl">5 title</h2>
        <div class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div class="category">Course</div>
      </div>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.grid-container {
  @media screen and(min-width:700px) {
    grid-template-columns: minmax(280px, 1fr) 3fr;
  }
}
main {
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 220px;
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}
.card {
  background: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-rows: subgrid;
  padding: 10px;
}
.title {
  text-align: left;
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.excerpt {
  align-self: center;
}
.category {
  justify-self: left;
  align-self: end;
}
</style>
