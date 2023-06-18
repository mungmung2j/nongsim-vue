<template>
  <div class="NongGGu">
    <div class="mainProduct">
    <h2>세상에 단 하나, 농꾸</h2>
      <p class="myNongsim">나만의 농심 라면&스낵</p>
      <div class="snack">
        <div>
          <div class="img">
            <img class="production" src="@/assets/chicken.png" alt=""/>
          </div>
          <p>농꾸 닭다리 선물상자(66g*6)</p><p>다음 신청 5/4일(목)_예정</p><p>15,180원</p>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/nuguri.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>농꾸 너구리컵 선물상자(62g*6)</p><p>다음 신청기간에 만나요</p><p>13,200원</p>
        </div>
        <div class="snackSet">
          <div class="img">
            <img class="production" src="@/assets/snackSet.jpg" alt=""/>
          </div>
          <p>#농꾸 #커스텀</p><p>세상에 단 하나뿐인 나만의 라면&스낵</p>
        </div>
      </div>
      </div>
  </div>
</template>

<style>
.snack{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: auto;
  margin-bottom: 140px;
  gap:80px 20px;
}

.snackSet{
  grid-column-start: 3;
  grid-column-end: 5;
  gap:80px 20px;
}

.myNongsim{
  font-size:20px;
  font-weight:500;
  color:#666666;
  margin-bottom: 30px;
}
</style>