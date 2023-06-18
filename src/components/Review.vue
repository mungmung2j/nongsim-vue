<template>
  <div class="ProductReview">
    <div class="mainProduct">
    <h2>농심 신제품 먹어보니 어때요?</h2>
      <p class="myNongsim">쇼핑 멘토들의 후기</p>
      <div class="newProduct">
        <div class="review">
          <img class="reviewProduction" src="@/assets/nooloong.jpg" alt=""/>
          <div class="reviewD">
            <p class="cupZ">[컵누룽Z]</p><p class="reviewZ">아저씨들이 좋아할 맛(실제로 40대 초반의 남편이 너무 만족스럽다며 또 구매하라고 적극 추천함)</p>
          </div>
        </div>
        <div class="review">
          <img class="reviewProduction" src="@/assets/nooloong2.jpg" alt=""/>
          <div class="reviewD">
            <p class="cupZ">[컵누룽Z]</p><p class="reviewZ">농심몰에서 신제품을 먼저 만날수 있고 어떤 제품인지 기대되는 얼리어먹터</p></div>
          </div>
        <div class="review">
          <img class="reviewProduction" src="@/assets/nooloong3.jpg" alt=""/>
          <div class="reviewD">
            <p class="cupZ">[컵누룽Z]</p><p class="reviewZ">간단히 국물이 먹고싶어서 물부엇다가 이거슨 소주를 부르는 맛?</p>
          </div>
        </div>
        <div class="review">
          <img class="reviewProduction" src="@/assets/nooloong4.jpg" alt=""/>
          <div class="reviewD">
            <p class="cupZ">[컵누룽Z]</p><p class="reviewZ">농심몰에서 구입한 이 달의 얼리어먹터</p>
          </div>
        </div>
      </div>
      <div class="more">
        <button class="moreReview">체험단 리뷰 더 보러가기</button>
      </div>
      </div>
  </div>
</template>

<style>
.review{
  display:flex;
  flex-flow:column wrap;
  width: 310px;
  border-radius: 12px;
  border:0.5px solid #d4d3d3;
}

.reviewProduction{
  height: 218px;
  width: 310px;
  margin-bottom: 30px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.newProduct{
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}


.cupZ{
  font-size:16px;
  color:#666;
  font-weight: 600;
}

.reviewZ{
  font-size:16px;
  color:#666;
}

.reviewD{
  margin: 0px 20px 30px 20px;
}

.moreReview{
  border-radius: 30px;
  padding: 0 30px;
  font-size:18px;
  height: 60px;
  line-height: 60px;
  min-width: 140px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin-bottom: 140px;
  cursor: pointer;
}

</style>