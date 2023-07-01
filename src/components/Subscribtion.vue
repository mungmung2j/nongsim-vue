<template>
  <div class="subscription">
    <div class="sub-banner">
      <img src="sub-banner" alt=""/>
      <img src="sub-banner2" alt=""/>
    </div>
    <div>
      <h3>백산수</h3>
      <div>
        <p>총<strong>4</strong>개</p>
        <select>
          <option value>신상품</option>
          <option value>상품명</option>
          <option value>낮은가격</option>
          <option value>높은가격</option>
          <option value>인기상품</option>
          <option value>상품후기</option>
        </select>
      </div>
      <div>
        <div>
          <div class="img">
            <img class="production production1" src="@/assets/backsan6.png" alt=""/>
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
          <p>[정기배송]백산수(무라벨)(1L*12)</p><p>9,020원</p>
        </div>
        <div>
          <div class="img">
            <img class="production" src="@/assets/backsan330.png" alt=""/>
            <div class="addCart"></div>
          </div>
          <p>[정기배송]백산수(무라벨)(330ml*20)</p><p>7,590원</p>
        </div>
      </div>
      <div custom-paging>
        <button><img src="@/assets/paging_first.png" alt=""/></button>
        <button><img src="@/assets/paging_prev.png" alt=""/></button>
        <div>1</div>
        <button><img src="@/assets/paging_next.png" alt=""/></button>
        <button><img src="@/assets/paging_last.png" alt=""/></button>
      </div>
    </div>
  </div>
</template>