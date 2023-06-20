<template>
  <header>
    <ul class="miniMenu">
      <li><a href="#">로그인</a></li>
      <li><a href="#">회원가입</a></li>
      <li><a href="#">주문조회</a></li>
      <li><a href="#">고객만족센터</a></li>
    </ul>
    <div class="headerBody">
      <img class="category" src="@/assets/icon-list.svg" alt=""/>
      <a class="logoLink" href="#"><img class="logo" src="@/assets/logo.png" alt=""/></a>
      <div class="mainMenu">
        <div>
          <a class="mainLink" href="#" id="lounge">라운지</a>
          <a class="mainLink" href="#">커스텀<span class="new">N</span></a>
          <a class="mainLink" href="#">스페셜</a>
          <a class="mainLink" href="#" id="event">기획전/이벤트</a>
          <a class="mainLink" href="#" id="subscribe">정기구독</a>
        </div>
        <div class="mainIcons">
          <a href="#"><img class="mainIcon" src="@/assets/lens.svg" alt="lens"/></a><a href="#"><img class="mainIcon" src="@/assets/person.svg" alt="person"/></a><a href="#"><img class="mainIcon" src="@/assets/cart.svg" alt="cart"/></a>
        </div>
      </div>
    </div>
    <div class="speech-bubble">
        <div class="lounge-box">
          <a href="#">멤버십</a><a href="#">고객 서베이</a><a href="#">누들푸들</a><a href="#">체험단 리뷰</a>
        </div>
        <div class="event-box">
          <a href="#">기획전</a><a href="#">이벤트</a><a href="#">쿠폰/상품권</a>
        </div>
        <div class="subscribe-box">
          <a href="#">백산수</a><a href="#">일반제품</a>
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

.lounge-box{
  display:none;
}

.lounge-box.over{
  position:absolute;
  z-index:99;
  display:flex;
  flex-flow:column wrap;
  left:18%;
  top:12.5%;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
}

.event-box{
  display:none;
}

.event-box.over{
  position:absolute;
  z-index:99;
  display:flex;
  flex-flow:column wrap;
  left:36%;
  top:12.5%;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
}

.subscribe-box{
  display:none;
}

.subscribe-box.over{
  position:absolute;
  z-index:99;
  display:flex;
  flex-flow:column wrap;
  left:44.5%;
  top:12.5%;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
}
</style>

<script setup>
import {onMounted} from 'vue';

onMounted(function(){
  const lounge=document.querySelector('#lounge')
  const loungeBox=document.querySelector('.lounge-box')
  const event=document.querySelector('#event')
  const eventBox=document.querySelector('.event-box')
  const subscribe=document.querySelector('#subscribe')
  const subscribeBox=document.querySelector('.subscribe-box')


  lounge.addEventListener('mouseover', function(){
    loungeBox.classList.add('over');
  });

  lounge.addEventListener('mouseleave', function(){
    loungeBox.classList.remove('over');
  });

  loungeBox.addEventListener('mouseover', function(){
    loungeBox.classList.add('over');
  })

  loungeBox.addEventListener('mouseleave', function(){
    loungeBox.classList.remove('over');
  })



  event.addEventListener('mouseover', function(){
    eventBox.classList.add('over');
  });

  event.addEventListener('mouseleave', function(){
    eventBox.classList.remove('over');
  });

  eventBox.addEventListener('mouseover', function(){
    eventBox.classList.add('over');
  })

  eventBox.addEventListener('mouseleave', function(){
    eventBox.classList.remove('over');
  })



  subscribe.addEventListener('mouseover', function(){
    subscribeBox.classList.add('over');
  });

  subscribe.addEventListener('mouseleave', function(){
    subscribeBox.classList.remove('over');
  });

  subscribeBox.addEventListener('mouseover', function(){
    subscribeBox.classList.add('over');
  })

  subscribeBox.addEventListener('mouseleave', function(){
    subscribeBox.classList.remove('over');
  })
})
</script>