<template>
  <div
    class="mx-auto text-center max-w-screen-lg flex flex-col items-center h-screen justify-center"
  >
    <header class>
      <h1 class="font-display font-bold text-gray-100">
        <span class="relative z-0 -mr-4">MR</span>
        <span class="relative z-10 text-gray-800 -mx-4">//</span>
        <span class="relative z-20 -mx-6">MD</span>
        <span class="relative z-10 -ml-4 text-gray-800">.</span>
      </h1>

      <h2
        class="font-display lowercase italic font-medium opacity-50 text-gray-100 text-xl"
      >
        For beautiful websites
      </h2>
    </header>
    <main class="mt-8 font-body">
      <a
        href="mailto:mr.sauli@gmail.com"
        class="border border-gray-400 text-gray-400 px-4 py-3 hover:bg-gray-100 hover:text-gray-800 rounded-lg tracking-wide uppercase"
        >contact us</a
      >
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
header h1 {
  font-size: 5rem;
}

main a {
  transition: all 0.3s;
}
</style>
