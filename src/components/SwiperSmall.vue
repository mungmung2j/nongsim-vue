<template>
  <div class="SwiperSmall">
    <div class="mainProduct">
      <h2>따끈따끈 신상~</h2>
      <p class="myNongsim">지금 이 순간에도 새로운 상품이 업데이트 중이에요!</p>
      <div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/butter.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div class="text">
          <p>켈슨 데니쉬 버터 쿠키 454g_1EA</p>
          <p>16,830원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img"><img class="production" src="@/assets/whiteJJapa.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div class="text">
          <p>하얀짜파게티큰사발면(108g*1)</p><p>1,760원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img"><img class="production" src="@/assets/pastaAli.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>파스타랑알리오올리오(128g*1)</p><p>3,960원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/woodong.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>누들핏 얼큰우동맛(30.9g*1)</p><p>1,650원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/baeJ.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
        <p>배홍동쫄쫄면(129g*4)</p><p>5,390원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img"><img class="production" src="@/assets/butter.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>켈슨 데니쉬 버터 쿠키 454g_1EA</p><p>16,830원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/whiteJJapa.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>하얀짜파게티큰사발면(108g*1)</p><p>1,760원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img"><img class="production" src="@/assets/pastaAli.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>파스타랑알리오올리오(128g*1)</p><p>3,960원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/woodong.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>누들핏 얼큰우동맛(30.9g*1)</p><p>1,650원</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="slide-context-wrap">
        <div class="img">
          <img class="production" src="@/assets/baeJ.png" alt=""/>
          <div class="addCart"></div>
        </div>
        <div>
          <p>배홍동쫄쫄면(129g*4)</p><p>5,390원</p>
        </div>
      </div>
    </div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
    </div>
  </div>
</template>

<style>
.AIProduct{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  width: auto;
  margin-bottom: 140px;
  gap: 80px 20px;
}

.swiper{
  background-color: #fff5f7;
  padding: 30px;
  margin-bottom: 140px;
}

.swiper .swiper-wrapper{
  display: flex;
  flex-flow:row nowrap;
  
}

.swiper .swiper-slide{
  display: flex;
}

.swiper .swiper-slide .slide-context-wrap{
  padding: 20px;
}

</style>

<script setup>
import { onMounted } from 'vue';
onMounted(function(){
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,  
  slidesPerGroup: 1,
  
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  

  // If we need pagination
  pagination: {
    
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