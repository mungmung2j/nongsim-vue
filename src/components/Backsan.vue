<template>
  <div class="backsan">
    <div class="backsan-banner">
      <img src="@/assets/backsan-banner1.gif" alt=""/>
      <img src="@/assets/backsan-banner2.jpg" alt=""/>
    </div>
    <h2>백산수</h2>
    <div class="backsan-main">
      <div class="backsan-select-wrap">
        <span>총4개</span>
        <select class="backsan-select">
          <option value>신상품</option>
          <option value>상품명</option>
          <option value>낮은가격</option>
          <option value>높은가격</option>
          <option value>인기상품</option>
          <option value>사용후기</option>
        </select>
      </div>
      <div class="backsan-product">
      <div>
          <div class="img">
            <img class="production" src="@/assets/backsan330.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>[정기배송]백산수(330ml*20)</p><p>7,590원</p>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/backsan6.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>[정기배송]백산수(무라벨)(2L*6)</p><p>5,500원</p>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/backsan20.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>[정기배송]백산수(무라벨)(500ml*20)</p><p>8,030원</p>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/backsan12.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>[정기배송]백산수</p><p>9,020원</p>
        </div>
    </div>
    <div class="custom-paging">
        <button class="custom-paging-first"><img src="@/assets/paging_first.png" alt=""/></button>
        <button class="custom-paging-prev"><img src="@/assets/paging_prev.png" alt=""/></button>
        <div class="custom-paging-now">1</div>
        <button class="custom-paging-next"><img src="@/assets/paging_next.png" alt=""/></button>
        <button class="custom-paging-last"><img src="@/assets/paging_last.png" alt=""/></button>
      </div>
  </div>
  </div>
</template>

<style>
.backsan-banner img{
  width: 100%;
}

.backsan-banner{
  display: flex;
  flex-flow:column wrap;
}

.backsan h2{
  color:black;
  font-size:36px;
  font-weight: 700;
  line-height: 140px;
  text-align: center;
  background-color: rgb(247, 246, 246);
}

.backsan-main{
  margin: 40px 254px;
}

.backsan-select-wrap{
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.backsan-select{
  font-size: 14px;
  color: #666;
  border: 1px solid #eaeaea;
  line-height: 1.4;
  padding: 10px 35px 10px 20px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(@/assets/select_arrow_off.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-color: #fff;
}

.production{
  background-color:rgb(247, 246, 246);
  width: 335px;
  border-radius: 12px;
  margin:20px 0;
}

.backsan-product{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:20px;
  width: 100%;
  
}

.production.over{
  border:1px solid #c7002e;
}

.custom-paging{
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  gap:13px;
  margin-top:70px;
  margin-bottom: 50px;
}

.custom-paging-first{
  border-color:#eaeaea;
  background-color: #fff;
  width:36px;
  height: 36px;
  border-radius:50%;
  border-style:solid;
  border-width:1px;
  color:#000000;
  display:inline-block;
  margin:0px 5px;
  cursor: pointer;
}

.custom-paging-prev{
  border-color:#eaeaea;
  background-color: #fff;
  width:36px;
  height: 36px;
  border-radius:50%;
  border-style:solid;
  border-width:1px;
  color:#000000;
  display:inline-block;
  margin:0px 5px;
  cursor: pointer;
}

.custom-paging-next{
  border-color:#eaeaea;
  background-color: #fff;
  width:36px;
  height: 36px;
  border-radius:50%;
  border-style:solid;
  border-width:1px;
  color:#000000;
  display:inline-block;
  margin:0px 5px;
  cursor: pointer;
}

.custom-paging-last{
  border-color:#eaeaea;
  background-color: #fff;
  width:36px;
  height: 36px;
  border-radius:50%;
  border-style:solid;
  border-width:1px;
  color:#000000;
  display:inline-block;
  margin:0px 5px;
  cursor: pointer;
}

.custom-paging-now{
  border-color:#eaeaea;
  background-color: #c7002e;
  width:36px;
  height: 36px;
  border-radius:50%;
  border-style:solid;
  border-width:1px;
  color:#fff;
  display:flex;
  margin:0px 5px;
  justify-content: center;
  align-items: center;  
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
})


</script>