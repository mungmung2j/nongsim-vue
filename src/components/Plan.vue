<template>
  <div class="plan">
    <div class="plan-banner">
      <h2>기획전</h2>
      <p>소개하고 싶은 농심 제품을 모아모아~</p>
    </div>
    <div>
      <div class="plan-type">
        <a class="plan-progress">진행중 기획전</a>
        <a class="plan-finish">종료된 기획전</a>
      </div>
    </div>
    <div class="plan-main-wrap">
      <div class="plan-serch-wrap">
        <select class="plan-select">
          <option value>제목</option>
          <option value>내용</option>
          <option value>글쓴이</option>
          <option value>아이디</option>
          <option value>별명</option>
        </select>
        <input type="text" class="plan-input">
        <button class="plan-serch">검색</button>
      </div>
    <div class="plan-main">
      <a class="plan-a-wrap" href="#">
        <div class="plan-img">
          <img class="brother-cupon" src="@/assets/cupon1.jpg" alt=""/>
        </div>
        <div class="plan-a-text">
          <p class="plan-text-title">형제라면 기획전</p>
          <div class="plan-text-day">
            <span class="plan-text-dday">D-15</span>
            <p class="plan-text-period">2023-06-14~2023-07-16</p>
          </div>
        </div>
      </a>
      <a class="plan-a-wrap" href="#">
        <div class="plan-img">
          <img src="@/assets/nuguriland.jpg" alt=""/>
        </div>
        <div class="plan-a-text">
          <p class="plan-text-title">너구리랜드 기획전</p>
          <div class="plan-text-day">
            <span class="plan-text-dday">D-30</span>
            <p class="plan-text-period">2023-06-01~2023-07-31</p>
          </div>
        </div>
      </a>
      <a class="plan-a-wrap" href="#">
        <div class="plan-img">
          <img src="@/assets/cal.jpg" alt=""/>
        </div>
        <div class="plan-a-text">
          <p class="plan-text-title">칼로리Fit기획전(누들핏x단백질곤약밥)</p>
          <div class="plan-text-day">
            <span class="plan-text-dday">D-30</span>
            <p class="plan-text-period">2023-05-08~2023-07-31</p>
          </div>
        </div>
      </a>
    </div>
    <div class="plan-paging">
      <button class="plan-paging-prev"><img src="@/assets/paging_prev.png" alt=""/></button>
      <div class="plan-paging-now">1</div>
      <button class="plan-paging-next"><img src="@/assets/paging_next.png" alt=""/></button>
    </div>
  </div>
  </div>
</template>

<style>
.plan-banner{
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url("@/assets/visual_bg_event2.jpg");
  color:white;
  height: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

.plan-banner h2{
  font-size: 50px;
  color:#fff;
  letter-spacing: -1px;
}

.plan-banner p{
  margin-top: 25px;
  font-weight: 400;
  font-size: 20px;
  color: #ccc;
  letter-spacing: -1.5px;
  top:50%;
}

.plan-type{
  display:flex;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
  color: #666666;
}

.plan-progress{
  font-weight: 600;
  border-bottom:4px solid #c7002e;
  height: 75px;
  line-height: 75px;
  min-width: 350px;
  display:flex;
  justify-content: center;
  color:#111;
}

.plan-finish{
  font-weight: 600;
  height: 75px;
  line-height: 75px;
  min-width: 350px;
  display:flex;
  justify-content: center;
}

.plan-main-wrap{
  display:flex;
  flex-flow:column wrap;
  margin:0 254px;
}

.plan-serch-wrap{
  display:flex;
  justify-content: flex-end;
  gap:13px;
  margin-top:20px;
}

.plan-select{
  width: auto;
  min-width: 120px;
  margin: auto 5px;
  font-size: 14px;
  color:#666;
  border: 1px solid #eaeaea;
  outline: none;
  padding:10px 35px 10px 20px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
}

.plan-input{
  width: 400px;
  background-color: #fafafa;
  background-image: url(@/assets/lens-black.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  background-size: 24px auto;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  height: 50px;
  line-height: 1.4;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px 70px 10px 20px;
  box-sizing: border-box;
}

.plan-serch{
  width:80px;
  color:#fff;
  background-color: #111;
  border-radius: 10px;
  cursor: pointer;
}

.plan-main{
  margin-top:20px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;
}

.plan-a-wrap{
  width: calc(100% - 40px);
  background-size: cover;
  overflow: hidden;
  margin-bottom: 40px;
  margin-left: 40px;
  color: #111;
  vertical-align: top;
  border-radius: 40px;
}

.plan-a-text{
  text-align: center;
  border: 1px solid #eaeaea;
  border-width: 0 1px 1px;
  overflow: hidden;
  border-radius: 0 0 40px 40px;
  padding-bottom: 20px;
}

.plan-text-title{
  font-size: 22px;
  font-weight: 400;
  line-height: 1.5;
  margin: 20px 0 5px;
}

.plan-text-dday{
  display: inline-block;
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 30px;
  font-weight: 600;
  background-color: #c7002e;
  color: #fff;
  text-align: center;
  margin-right: 3px;
}

.plan-text-day{
  display:flex;
  justify-content: center;
  gap:3px;
}

.plan-paging{
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  gap:13px;
  margin-top:70px;
  margin-bottom: 50px;
}

.plan-paging-prev{
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

.plan-paging-next{
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

.plan-paging-now{
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