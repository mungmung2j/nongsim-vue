<template>
  <div class="onlyNongsim">
    <div class="mainProduct">
    <h2>오직 농심몰에서만!</h2>
      <div class="viewProduct"><p>농심몰 전용 제품 구경하고 가세요</p>
        <div>
          <button class="whiteBtn">기획세트</button><button class="redBtn">굿즈세트</button>
        </div>
      </div>
      <div class="only">
        <div class="set">
          <div class="img">
            <img class="production" src="@/assets/product__list__banner--nsmall.jpg" alt=""/>
          </div>
          <div>
            <p>#전용세트 #기획전</p><p>농심몰에서만 만나는 한정 & 굿즈 세트</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/noodle_honey.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>매콤달달 세트(배홍동쫄쫄면+꿀꽈배기)_12입</p><p>16,280원</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/gunNoodle.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>깔끔 건면 4종 세트_18입</p><p>19,690원</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/jjajangGun.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>짜왕건면+사천백짬뽕_16입</p><p>22,110원</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/chips.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>꿀옥양오(203g*1)</p><p>3,850원</p>
          </div>
        </div>
        <div>
          <div class="img"><img class="production" src="@/assets/baehong.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>배홍동 메밀 세트(13입)</p><p>12,980원</p>
          </div>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/kalNoodle.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>칼국수곰탕면20입(멸치칼국수10+사리곰탕면10)</p><p>19,250원</p>
          </div>
        </div>
      </div>
      <div class="more">
        <button class="moreBtn">더보기</button>
      </div>
    </div>
  </div>
</template>

<style>
.viewProduct{
  display:flex;
  justify-content: space-between;
  margin-bottom: 60px;
  font-size:20px;
  font-weight: 500;
  color:#666666;
}

.mainProduct{
  margin:140px 100px;
}

.only{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:80px 20px;
  width: auto;
}

.set{
  grid-column-start:1;
  grid-column-end: 3;
}

.production{
  width: 100%;
  border-radius: 12px;
  background-color: #fff
}

.img{
  margin-bottom: 30px;
  position:relative;
}

.addCart{
  bottom: 20px;
  right: 20px;
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-image:url(@/assets/addCart.png);
  background-repeat: no-repeat;
}
</style>

<script setup>
import {onMounted} from "vue";

onMounted(function(){
  const border=document.querySelectorAll('.production')
// ['.production1', '.production2']
//const a = [1,2,3,4]

for (let i = 0; i < border.length; i++) {
  border[i].addEventListener('mouseover', function(){
    border[i].classList.add('over')
  })
}

for (let i=0; i<border.length; i++){
  border[i].addEventListener('mouseleave', function(){
    border[i].classList.remove('over')
  })
}
})
</script>