<template>
  <div class="plan">
    <div>
      <h2>기획전</h2>
      <p>소개하고 싶은 농심 제품을 모아모아~</p>
    </div>
    <div>
      <div>
        <a>진행중 기획전</a>
        <a>종료된 기획전</a>
      </div>
    </div>
    <div>
      <select>
        <option value>제목</option>
        <option value>내용</option>
        <option value>글쓴이</option>
        <option value>아이디</option>
        <option value>별명</option>
      </select>
      <input type="text">
      <button>검색</button>
    </div>
    <div>
      <a class="brother-wrap" href="#">
        <div class="brother-img">
          <img src="@/assets/cupon1.jpg" alt=""/>
        </div>
        <div class="brotehr-text">
          <p>형제라면 기획전</p>
          <div>
            <span>D-15</span>
            <p>2023-06-14~2023-07-16</p>
          </div>
        </div>
      </a>
      <a class="nuguriland-wrap" href="#">
        <div class="nuguriland-img">
          <img src="@/assets/nuguriland.jpg" alt=""/>
        </div>
        <div class="nuguriland-text">
          <p>너구리랜드 기획전</p>
          <div>
            <span>D-30</span>
            <p>2023-06-01~2023-07-31</p>
          </div>
        </div>
      </a>
      <a class="cal-wrap" href="#">
        <div class="cal-img">
          <img src="@/assets/cal.jpg" alt=""/>
        </div>
        <div class="cal-text">
          <p>칼로리Fit기획전(누들핏x단백질곤약밥)</p>
          <div>
            <span>D-30</span>
            <p>2023-05-08~2023-07-31</p>
          </div>
        </div>
      </a>
    </div>
    <div>
      <button><img src="@/assets/paging_prev.png" alt=""/></button>
      <div>1</div>
      <button><img src="@/assets/paging_next.png" alt=""/></button>
    </div>
  </div>
</template>