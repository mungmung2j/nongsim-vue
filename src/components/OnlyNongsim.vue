<template>
  <div class="onlyNongsim">
    <div class="mainProduct">
    <h2>오직 농심몰에서만!</h2>
      <div class="viewProduct"><p>농심몰 전용 제품 구경하고 가세요</p>
        <div>
          <button class="planbtn">기획세트</button><button class="goods">굿즈세트</button>
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
        <div class="honeynoodle">
          <div class="img">
            <img class="production" src="@/assets/noodle_honey.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>매콤달달 세트(배홍동쫄쫄면+꿀꽈배기)_12입</p><p>16,280원</p>
          </div>
        </div>
        <div class="nujja none">
          <div class="img">
            <img class="production" src="@/assets/nujja.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>짜파구리20입(짜파게티10+얼큰한너구리10)</p><p>19,250원</p>
          </div>
        </div>
        <div class="gun">
          <div class="img">
            <img class="production" src="@/assets/gunNoodle.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>깔끔 건면 4종 세트_18입</p><p>19,690원</p>
          </div>
        </div>
        <div class="potatojip none">
          <div class="img">
            <img class="production" src="@/assets/potatojip.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>[100개한정]포테토칩 잭슨페퍼로니 집게세트_6입</p><p>9,900원</p>
          </div>
        </div>
        <div class="jjagun">
          <div class="img">
            <img class="production" src="@/assets/jjajangGun.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>짜왕건면+사천백짬뽕_16입</p><p>22,110원</p>
          </div>
        </div>
        <div class="mincho none">
          <div class="img">
            <img class="production" src="@/assets/minchokick.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>[200개 한정]민초바나나킥 키링세트_6입</p><p>9,900원</p>
          </div>
        </div>
        <div class="chips">
          <div class="img">
            <img class="production" src="@/assets/chips.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>꿀옥양오(203g*1)</p><p>3,850원</p>
          </div>
        </div>
        <div class="cook none">
          <div class="img">
            <img class="production" src="@/assets/cookset.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>집에서 세계오리세트_7입</p><p>29,920원</p>
          </div>
        </div>
        <div class="baehong">
          <div class="img"><img class="production" src="@/assets/baehong.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>배홍동 메밀 세트(13입)</p><p>12,980원</p>
          </div>
        </div>
        <div class="noodlefit none">
          <div class="img"><img class="production" src="@/assets/noodlefit.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>[선착순 300세트]누들핏 3종 세트(6입)+단백질곤약밥(1입) 증정</p><p>9,900원</p>
          </div>
        </div>
        <div class="kal">
          <div class="img">
            <img class="production" src="@/assets/kalNoodle.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>칼국수곰탕면20입(멸치칼국수10+사리곰탕면10)</p><p>19,250원</p>
          </div>
        </div>
        <div class="shrimp none">
          <div class="img">
            <img class="production" src="@/assets/shrimp.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <div>
            <p>레전드오브 새우깡 세트_8입</p><p>13,310원</p>
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
  background-color: rgb(247, 246, 246);
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

.honeynoodle.none{
  display:none;
}

.gun.none{
  display:none;
}

.jjagun.none{
  display:none;
}

.chips.none{
  display:none;
}

.baehong.none{
  display: none;
}

.kal.none{
  display: none;
}

.nujja.none{
  display:none;
}

.potatojip.none{
  display:none;
}

.mincho.none{
  display:none;
}

.cook.none{
  display:none;
}

.noodlefit.none{
  display:none;
}

.shrimp.none{
  display:none;
}

.production.over{
  border:1px solid #c7002e;
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
    border[i].classList.add('over');
  })
}

for (let i=0; i<border.length; i++){
  border[i].addEventListener('mouseleave', function(){
    border[i].classList.remove('over');
  })
}

const planbtn=document.querySelector('.planbtn')
const goods=document.querySelector('.goods')
const honeynoodle=document.querySelector('.honeynoodle')
const gun=document.querySelector('.gun')
const jjagun=document.querySelector('.jjagun')
const chips=document.querySelector('.chips')
const baehong=document.querySelector('.baehong');
const kal=document.querySelector('.kal');
const nujja=document.querySelector('.nujja');
const potatojip=document.querySelector('.potatojip')
const mincho=document.querySelector('.mincho');
const cook=document.querySelector('.cook');
const noodlefit=document.querySelector('.noodlefit');
const shrimp=document.querySelector('.shrimp');

planbtn.addEventListener('click', function(){
  planbtn.classList.add('red');
  goods.classList.add('white');
  honeynoodle.classList.add('none');
  gun.classList.add('none');
  jjagun.classList.add('none');
  chips.classList.add('none');
  baehong.classList.add('none');
  kal.classList.add('none');
  nujja.classList.remove('none');
  potatojip.classList.remove('none');
  mincho.classList.remove('none');
  cook.classList.remove('none');
  noodlefit.classList.remove('none')
  shrimp.classList.remove('none');
})

goods.addEventListener('click', function(){
  planbtn.classList.remove('red');
  goods.classList.remove('white');
  honeynoodle.classList.remove('none');
  gun.classList.remove('none');
  jjagun.classList.remove('none');
  chips.classList.remove('none');
  baehong.classList.remove('none');
  kal.classList.remove('none');
  nujja.classList.add('none');
  potatojip.classList.add('none');
  mincho.classList.add('none');
  cook.classList.add('none');
  noodlefit.classList.add('none');
  shrimp.classList.add('none');
})
})
</script>