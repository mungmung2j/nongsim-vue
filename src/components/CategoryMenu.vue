<template>
  <div class="category-menu none">
    <div class="category-menu-detail">
      <div class="detail-wrap">
        <div class="detail-top">
          <div class="detail-theme">
            <span class="theme-big">테마추천😋</span><span class="theme-span">매운맛</span><span class="theme-span">순한맛</span><span class="theme-span">대용량📦</span><span class="theme-span">재구매 BEST👍</span>
          </div>
          <div class="detail-ramen">
            <span class="ramen-big">라면</span><span class="ramen-span">봉지면</span><span class="ramen-span">용기면</span><span class="ramen-span">용기면(6입)</span><span class="ramen-span">건면</span>
          </div>
          <div class="detail-snack">
            <span class="snack-big">스낵</span><span class="snack-span">소용량</span><span class="snack-span">중용량</span><span class="snack-span">대용량</span><span class="snack-span">묶음</span>
          </div>
          <div class="detail-simple">
            <span class="simple-big">간편식</span><span class="simple-span">소스</span><span class="simple-span">라볶이</span><span class="simple-span">누들핏</span><span class="simple-span">컵누룽Z</span>
          </div>
          <div class="detail-backsan">
            <span class="backsan-big">백산수</span><span class="backsan-span">백산수</span>
          </div>
          <div class="detail-drink">
            <span class="drink-big">음료</span><span class="drink-span">탄산음료</span><span class="drink-span">차음료</span><span class="drink-span">과일음료</span><span class="drink-span">스포츠음료</span>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="detail-brand">
            <span class="brand-big">브랜드</span><span class="brand-span">신라면</span><span class="brand-span">너구리</span><span class="brand-span">짜파게티</span><span class="brand-span">포테토칩</span><span class="brand-span">츄파춥스</span>
          </div>
          <div class="detail-candy">
            <span class="candy-big">초콜릿/캔디류</span><span class="candy-span">하드캔디</span><span class="candy-span">소프트캔디</span><span class="candy-span">젤리</span><span class="candy-span">초콜릿</span>
          </div>
          <div class="detail-soup">
            <span class="soup-big">스프</span><span class="soup-span">보노스프</span>
          </div>
          <div class="detail-curry">
            <span class="curry-big">카레</span><span class="curry-span">하우스카레</span>
          </div>
          <div class="detail-global">
            <span class="global-big">글로벌</span><span class="global-span">조미식품</span><span class="global-span">캔</span><span class="global-span">잼</span><span class="global-span">디저트</span>
          </div>
        </div>
      </div>
    </div>
    <div class="category-menu-cupon">
      <div class="cupon-wrap">
        <a href="#" class="cupon-brother">
          <div class="brother-text">
            <h3 class="h3-cupon">형제라면<br>선착순 쿠폰🥡</h3>
            <p>매주 월 오후 10시<br>레시피와함께 공개됩니다!</p>
            <p class="cupon-date">2023-06-14~2023-07-16</p>
          </div>
          <div>
            <img class="brother-img" src="@/assets/cupon1.jpg" alt=""/>
          </div>
        </a>
        <a href="#" class="cupon-everyday">
          <div class="everyday-text">
            <h3 class="h3-cupon">매일 출첵하고<br>쿠폰 득템하자!</h3>
            <p>10회 출석하면 1,000원 쿠폰 증정</p>
            <p class="cupon-date">2022-08-30~</p>
          </div>
          <div>
            <img class="everyday-img" src="@/assets/cupon2.jpg" alt=""/>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.category-menu{
  display:flex;
  position: fixed;
  background: #fff;
  z-index: 99;
  width: 100%;
}

.category-menu.none{
  display:none;
}

.detail-wrap{
  display:flex;
  flex-flow:column wrap;
  padding:70px 0 70px 22px;
  width:910px;
  border-right: gray 1px solid;
}

.cupon-wrap{
  display:flex;
  flex-flow:column wrap;
  padding: 80px 0 80px 60px;
  gap:30px;
}

.detail-top{
  display:flex;
  flex-flow: row wrap;
  padding-bottom: 50px;
}

.detail-bottom{
  display:flex;
  flex-flow:row wrap;
  padding-top:50px;
  width:850px;
  border-top: gray 1px solid;
}

.detail-theme{
  display:flex;
  flex-flow:column wrap;
  width:200px;
}

.theme-big{
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 15px;
}

.brand-big{
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 15px;
}

.candy-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.soup-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.global-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.global-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.soup-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.candy-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}



.brand-span{
  font-size: 18px;
  padding:6px 0;
  font-weight: 700;
}

.theme-span{
  font-size: 18px;
  padding:6px 0;
  font-weight: 700;
}

.detail-ramen{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.ramen-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.simple-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.backsan-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.drink-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.curry-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.curry-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.drink-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.backsan-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.simple-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.ramen-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.detail-snack{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.snack-big{
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
}

.snack-span{
  font-size: 18px;
  padding:6px 0;
  color:#666;
}

.detail-simple{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-backsan{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-drink{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-brand{
  display:flex;
  flex-flow:column wrap;
  width: 200px;
}

.detail-candy{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-soup{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-curry{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.detail-global{
  display:flex;
  flex-flow:column wrap;
  width: 142px;
}

.cupon-brother{
  display:flex;
  flex-flow:row nowrap;
  gap:75px;
  align-items: center;
}

.cupon-everyday{
  display:flex;
  flex-flow: row nowrap;
  gap:40px;
  align-items: center;
}

.brother-img{
  width:390px;
  border-radius: 20px;
}

.everyday-img{
  width:390px;
  border-radius: 20px;
}

.h3-cupon{
  font-size: 30px;
}

.brother-text{
  display:flex;
  flex-flow:column nowrap;
  gap:15px;
}

.everyday-text{
  display:flex;
  flex-flow:column nowrap;
  gap:15px;
}

.brother-text p{
  display:flex;
  flex-flow:column nowrap;
  color: #666;
  font-size: 16px;
}

.everyday-text p{
  display:flex;
  flex-flow:column nowrap;
  color: #666;
  font-size: 16px;
}

.cupon-date{
  padding-left: 25px;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  background-image: url(@/assets/gnb-banner__date-icon.png);
  background-repeat: no-repeat;
  background-position: left center;
}
</style>