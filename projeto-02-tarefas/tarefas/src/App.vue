<template>
  <div id="app">
    <h1>Tarefas</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #403b4a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #403b4a,
    #e7e9bb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #403b4a, #e7e9bb);
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
