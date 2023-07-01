<template>
  <div class="custom">
    <img src="@/assets/custom_img1.png" alt=""/>
    <img src="@/assets/custom_img2.png" alt=""/>
    <img src="@/assets/custom_img3.png" alt=""/>
    <div>
      <h3>커스텀</h3>
      <div>
        <p>총<strong>2</strong>개</p>
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
        <div class="custom-nuguri">
          <div class="img">
            <img class="production" src="@/assets/nuguri.png" alt=""/>
            <div class="nextsee"></div>
          </div>
          <div>
            <p>농꾸 너구리컵 선물상자(62*6g)</p>
            <p>다음신청기간에 만나요</p>
            <p>13,200원</p>
          </div>
        </div>
        <div class="custom-chicken">
          <div class="img">
            <img class="production" src="@/assets/chicken.png" alt=""/>
          </div>
          <div>
            <p>[에디터를 통하지 않고 주문하시면 취소됩니다 ]농꾸 닭다리 선물상자(66g*6)</p>
            <p>다음 신청일:7/20(목)~7/25(화)</p>
            <p>15,180원</p>
          </div>
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