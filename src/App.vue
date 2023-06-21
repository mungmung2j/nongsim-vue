<template>
  <Header></Header>
  <Popup></Popup>
  <SwiperBig></SwiperBig>
  <Character></Character>
  <OnlyNongsim></OnlyNongsim>
  <NongGGu></NongGGu>
  <AI></AI>
  <SwiperSmall></SwiperSmall>
  <review></review>
  <Main></Main>
</template>

<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Popup from './components/Popup.vue';
import SwiperBig from './components/SwiperBig.vue';
import Character from './components/Character.vue';
import OnlyNongsim from './components/OnlyNongsim.vue';
import NongGGu from './components/NongGGu.vue';
import AI from './components/AI.vue';
import SwiperSmall from './components/SwiperSmall.vue';
import review from './components/Review.vue';
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

/* button css */
.plan{
  color:#999;
  font-size:16px;
  background: none;
  height: 42px;
  line-height: 42px;
  padding:0 40px;
  border-radius: 22px;
  border:1px solid #eaeaea;
  cursor: pointer;
}

.plan.red{
  color:white;
  font-size:16px;
  background: #c7002e;
  height: 42px;
  line-height: 42px;
  padding:0 40px;
  border-radius: 22px;
  border:1px solid #eaeaea;
  cursor: pointer;
}

.goods{
  color:white;
  font-size:16px;
  background: #c7002e;
  height: 42px;
  line-height: 42px;
  padding:0 40px;
  border-radius: 22px;
  border:none;
  margin-left: 10px;
  cursor:pointer;
}

.goods.white{
  color:#999;
  font-size:16px;
  background: none;
  height: 42px;
  line-height: 42px;
  padding:0 40px;
  border-radius: 22px;
  border:1px solid #eaeaea;
  margin-left: 10px;
  cursor:pointer;
}

.more{
  text-align: center;
  margin: 40px 0;
}

.moreBtn{
  border-radius: 30px;
  padding: 0 30px;
  font-size:18px;
  height: 60px;
  line-height: 60px;
  min-width: 140px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin-bottom: 140px;
  cursor:pointer;
}

.mainProduct{
  margin:140px 100px;
}
</style>
