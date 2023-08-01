<template>
  <div class="custom">
    <img class="custom-banner" src="@/assets/custom_img1.jpg" alt=""/>
    <img class="custom-banner" src="@/assets/custom_img2.jpg" alt=""/>
    <img class="custom-banner" src="@/assets/custom_img3.jpg" alt=""/>
    <div>
      <h3 class="custom-title">커스텀</h3>
      <div class="custom-wrap">
      <div class="custom-list">
        <p>총<strong>2</strong>개</p>
        <select class="custom-select">
          <option value>신상품</option>
          <option value>상품명</option>
          <option value>낮은가격</option>
          <option value>높은가격</option>
          <option value>인기상품</option>
          <option value>상품후기</option>
        </select>
      </div>
      <div class="custom-product">
        <div class="custom-nuguri">
          <div class="custom-img">
            <img class="img-nuguri" src="@/assets/nuguri.png" alt=""/>
            <span class="nextsee"></span>
          </div>

          <div class="custom-text">
            <p class="custom-production-title">농꾸 너구리컵 선물상자(62*6g)</p>
            <p class="custom-next">다음신청기간에 만나요</p>
            <p class="custom-price">13,200원</p>
          </div>
        </div>
        <div class="custom-chicken">
          <div class="custom-img">
            <img class="img-chicken" src="@/assets/chicken.png" alt=""/>
            <span class="nextsee"></span>
          </div>
          <div class="custom-text">
            <p class="custom-production-title">[에디터를 통하지 않고 주문하시면 취소됩니다]<br>농꾸 닭다리 선물상자(66g*6)</p>
            <p class="custom-next">다음 신청일:7/20(목)~7/25(화)</p>
            <p class="custom-price">15,180원</p>
          </div>
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
  </div>
</template>

<style>
*{
  list-style: none;
  padding: 0;
  margin: 0;
}
a{
  text-decoration-line: none;
  color:inherit;
}

.custom-title{
  color:#111111;
  font-size:36px;
  font-weight: 700;
  line-height: 140px;
  text-align: center;
  background-color: rgb(247, 246, 246);
}

.custom-banner{
  width: 100%;
}

.custom-list{
  display:flex;
  justify-content: space-between;
  margin:20px 0;
}

.custom-wrap{
  margin:0 254px;
}

.custom-select{
  font-size: 14px;
  color: #666;
  border: 1px solid #eaeaea;
  line-height: 1.4;
  padding: 10px 35px 10px 20px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  appearance: none;
  background-image: url(@/assets/select_arrow_off.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-color: #fff;
  width:180px;
  height: 50px;
}

.custom-product{
  display:flex;
  gap:20px;
}

.img-chicken{
  max-width: 100%;
  max-height: 100%;
}

.img-nuguri{
  max-width: 100%;
  max-height: 100%;
}


.custom-production-title{
  font-size:18px;
  color:#111111;
  font-weight: 700;
  min-height: 3em;
  margin-top:30px;
}

.custom-next{
  font-size:12px;
  color:#555555;
  margin-top: 10px;
}

.custom-price{
  font-size: 20px;
  color: #111111;
  font-weight: bold;
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

.custom-img{
  background-color: #fafafa;
  width: 335px;
  height: 335px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  position: relative;
}

.nextsee{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0008;
  background-image: url(@/assets/prd-icon--soldout.png);
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: inherit;
}
</style>

