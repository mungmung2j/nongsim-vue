<template>
  <header>
    <ul class="miniMenu">
      <li><a href="#">로그인</a></li>
      <li><a href="#">회원가입</a></li>
      <li><a href="#">주문조회</a></li>
      <li><a href="#">고객만족센터</a></li>
    </ul>
    <div class="headerBody">
      <img class="category" src="/assets/icon-list.svg" alt=""/>
      <a class="logoLink" href="#"><img class="logo" src="/assets/logo.png" alt=""/></a>
      <div class="mainMenu">
        <div>
          <a class="mainLink" href="#">라운지</a><a class="mainLink" href="#">커스텀<span class="new">N</span></a><a class="mainLink" href="#">스페셜</a><a class="mainLink" href="#">기획전/이벤트</a><a class="mainLink" href="#">정기구독</a>
        </div>
        <div class="mainIcons">
          <a href="#"><img class="mainIcon" src="/assets/lens.svg" alt="lens"/></a><a href="#"><img class="mainIcon" src="/assets/person.svg" alt="lens"/></a><a href="#"><img class="mainIcon" src="/assets/cart.svg" alt="lens"/></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.miniMenu{
  display:flex;
  flex-flow:row nowrap;
  justify-content: end;
  font-size: 12px;
  font-weight: 500;
  gap:12px;
  padding:13px 48px;
  color:#111111;
}

.headerBody{
  background-color:#c7000e;
  padding:0 50px;
  display: flex;
  flex-flow:row nowrap;
  align-items: center;
}

.category{
  width:40px;
  height:40px;
  background-color: #fff;
  padding:20px;
  margin-right: 30px;
  cursor: pointer;
}

.logo{
  height: 28px;
}

.logoLink{
  padding: 20px;
}

.mainMenu{
  color: #fff;
  margin-left:10px;
  display:flex;
  justify-content: space-between;
  width: 100%;
}

.mainLink{
  padding:20px;
  font-size: 18px;
  font-weight: 500;
}

.mainIcons{
  display:flex;
  gap:40px;
}

.mainIcon{
  height: 24px;
}

.new{
  font-size:5px;
  background-color: #cdd91c;
  color:#111111;
  line-height: 16px;
  font-weight: 700;
  padding: 0 3px;
  margin-left: 3px;
  border-radius: 8px;
  position: absolute;
}
</style>