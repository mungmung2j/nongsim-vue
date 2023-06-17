<template>
  <div class="secondSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="newZ" src="@/assets/newZ.jpg" alt=""/>
        </div>
        <div class="swiper-slide">
          <img class="newZ" src="@/assets/Main_pc_DAYplus.jpg" alt=""/>
        </div>
        <div class="swiper-slide">
          <img class="newZ" src="@/assets/Main_pc_welchs_set.jpg" alt=""/>
        </div>
      </div>      

      <!-- If we need navigation buttons -->
      <div class="swiper-controller">
      <div class="swiper-button-prev"></div>
      
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      
      <div class="swiper-button-next"></div>
      </div>
      <!-- If we need scrollbar -->
      
    </div>
</template>

<style>
.newZ{
  max-width: 100%;
}

.secondSwiper .swiper-button-prev{
  display: block;
    position: absolute;
    top: calc(65%);
    left: 5px;
    width: 30px;
    height: 30px;
    background-size: auto 12px;
    background-image: url(@/assets/main-visual__icon--prev.png);
    background-repeat: no-repeat;
    background-position: center center;
    font-size: 1px;
    text-indent: -9999vw;
    color: transparent;
}

.secondSwiper .swiper-button-next{
  display: block;
    position: absolute;
    top: calc(65% );
    left: auto;
    width: 30px;
    height: 30px;
    background-size: auto 12px;
    background-image: url(@/assets/main-visual__icon--next.png);
    background-repeat: no-repeat;
    background-position: center center;
    font-size: 1px;
    text-indent: -9999vw;
    color: transparent;
}

.secondSwiper .swiper-controller{
  position: absolute;
    top: 600px;
    right: calc(10%);
    min-width: 120px;
    height: 40px;
    padding: 0 40px;
    text-align: center;
    background-color: #0003;
    border-radius: 20px;
    z-index: 1;
    white-space: nowrap;
    display: flex;
    justify-content:center;
}



.swiper-pagination{
  color:white !important;
  margin-bottom: 3px;
}
</style>

<script setup>
  import { onMounted } from 'vue'

onMounted(() => {
  const secondSwiper = new Swiper('.secondSwiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,  
  slidesPerGroup: 1,
  
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    
  },

});
})


</script>