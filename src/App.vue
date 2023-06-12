<template>
  <Header></Header>
  <Popup></Popup>
  <Main></Main>
</template>

<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Popup from './components/Popup.vue';
</script>

<style lang="scss">
*{
  list-style: none;
  padding: 0;
  margin: 0;
}
a{
  text-decoration-line: none;
  color:inherit;
}

h2{
  font-size:50px;
  line-height: 1;
  margin-bottom:25px;
  margin-top:60px;
}

</style>
