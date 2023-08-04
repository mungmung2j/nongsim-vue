<template>
  <header>
    <ul class="miniMenu">
      <router-link to="/Login">로그인</router-link>
      <router-link to="/Register">회원가입</router-link>
      <li><a href="#">주문조회</a></li>
      <li><a href="#">고객만족센터</a></li>
    </ul>
    <div class="headerBody">
      <img class="category" src="@/assets/icon-list.svg" alt=""/>
      <img class="category-x none" src="@/assets/icon_close.png" alt=""/>
      <router-link to="/" class="logoLink" href="#"><img class="logo" src="@/assets/logo.png" alt=""/></router-link>
      <div class="mainMenu">
        <ul class="mainMenu-ul">
          <li>
            <a class="mainLink" href="#" id="lounge">라운지</a>
            <li>
              <div class="lounge-box">
                <router-link to="/Membership" class="lounge-membership">멤버십</router-link><router-link to="/Membership" class="lounge-survey">고객 서베이</router-link><router-link to="/Membership" class="lounge-poodle">누들푸들</router-link><router-link to="/Membership" class="lounge-experience">체험단 리뷰</router-link>
              </div>
            </li>
          </li>
          <li><router-link to="/Custom" class="mainLink" >커스텀<span class="new">N</span></router-link></li>
          <li><router-link to="/Special" class="mainLink">스페셜</router-link></li>
          <li>
            <a class="mainLink" href="#" id="event">기획전/이벤트</a>
            <li>
              <div class="event-box">
                <router-link to="/Plan" class="event-exhibition">기획전</router-link><router-link to="/Plan" class="event-event">이벤트</router-link><router-link to="/Plan" class="event-cupon">쿠폰/상품권</router-link>
              </div>
            </li>
          </li>
          <li>
            <a class="mainLink" href="#" id="subscribe">정기구독</a>
            <li>
              <div class="subscribe-box">
                <router-link to="/Backsan" class="subscribe-backsan">백산수</router-link><router-link to="/Backsan" class="subscribe-normal">일반제품</router-link>
              </div>
            </li>
          </li>
        </ul>
        <div class="mainIcons">
          <a href="#"><img class="mainIcon" src="@/assets/lens.svg" alt="lens"/></a><a href="#"><img class="mainIcon" src="@/assets/person.svg" alt="person"/></a><a href="#"><img class="mainIcon" src="@/assets/cart.svg" alt="cart"/></a>
        </div>
      </div>
    </div>
  </header>
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

header{
  width:100%;
}

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
  height: 80px;
}

.category{
  width:40px;
  height:40px;
  background-color: #fff;
  padding:20px;
  margin-right: 30px;
  cursor: pointer;
}

.category.none{
  display:none;
}

.category-x.none{
  display:none;
}

.category-x{
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

.mainMenu-ul{
  display:block;
}

.mainMenu-ul li{
  float: left;
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
  margin:40px 70px 0 -30px;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
  color:#666;
  font-size: 18px;
  font-weight: 500;
}

.event-box{
  display:none;
}

.event-box.over{
  position:absolute;
  z-index:99;
  display:flex;
  flex-flow:column wrap;
  margin:40px 70px 0 0px;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
  color:#666;
  font-size: 18px;
  font-weight: 500;
}

.subscribe-box{
  display:none;
}

.subscribe-box.over{
  position:absolute;
  z-index:99;
  display:flex;
  flex-flow:column wrap;
  margin:40px 70px 0 -20px;
  background-color: #fff;
  padding:40px;
  gap:10px;
  box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.1);
  border-radius: 20px;
  color:#666;
  font-size: 18px;
  font-weight: 500;
}

.lounge-membership.over{
  color:#c7000e;
}

.lounge-survey.over{
  color:#c7000e;
}

.lounge-poodle.over{
  color:#c7000e;
}

.lounge-experience.over{
  color:#c7000e;
}

.event-exhibition.over{
  color: #c7000e;
}

.event-event.over{
  color:#c7000e;
}

.event-cupon.over{
  color: #c7000e;
}

.subscribe-backsan.over{
  color:#c7000e;
}

.subscribe-normal.over{
  color:#c7000e;
}

.headerBody.fixed{
  position:fixed;
  top:0;
  width: 100%;
  z-index: 999;
}
</style>

<script setup>
import {onMounted} from 'vue';
import { RouterLink } from 'vue-router';

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


  const membership=document.querySelector('.lounge-membership')
  const survey=document.querySelector('.lounge-survey')
  const poodle=document.querySelector('.lounge-poodle')
  const experience=document.querySelector('.lounge-experience')
  const exhibition=document.querySelector('.event-exhibition')
  const even=document.querySelector('.event-event')
  const cupon=document.querySelector('.event-cupon')
  const backsan=document.querySelector('.subscribe-backsan')
  const normal=document.querySelector('.subscribe-normal')

  membership.addEventListener('mouseover', function(){
    membership.classList.add('over');
  })

  survey.addEventListener('mouseover', function(){
    survey.classList.add('over');
  })

  poodle.addEventListener('mouseover', function(){
    poodle.classList.add('over');
  })

  experience.addEventListener('mouseover', function(){
    experience.classList.add('over');
  })

  exhibition.addEventListener('mouseover', function(){
    exhibition.classList.add('over');
  })

  even.addEventListener('mouseover', function(){
    even.classList.add('over');
  })

  cupon.addEventListener('mouseover', function(){
    cupon.classList.add('over');
  })

  backsan.addEventListener('mouseover', function(){
    backsan.classList.add('over');
  })

  normal.addEventListener('mouseover', function(){
    normal.classList.add('over');
  })


  membership.addEventListener('mouseleave', function(){
    membership.classList.remove('over');
  })

  survey.addEventListener('mouseleave', function(){
    survey.classList.remove('over');
  })

  poodle.addEventListener('mouseleave', function(){
    poodle.classList.remove('over');
  })

  experience.addEventListener('mouseleave', function(){
    experience.classList.remove('over');
  })

  exhibition.addEventListener('mouseleave', function(){
    exhibition.classList.remove('over');
  })

  even.addEventListener('mouseleave', function(){
    even.classList.remove('over');
  })

  cupon.addEventListener('mouseleave', function(){
    cupon.classList.remove('over');
  })

  backsan.addEventListener('mouseleave', function(){
    backsan.classList.remove('over');
  })

  normal.addEventListener('mouseleave', function(){
    normal.classList.remove('over');
  })


  const category=document.querySelector('.category')
  const categoryX=document.querySelector('.category-x')
  const categoryMenu=document.querySelector('.category-menu')
  
  category.addEventListener('click', function(){
    category.classList.add('none');
    categoryX.classList.remove('none');
    categoryMenu.classList.remove('none');
  })

  categoryX.addEventListener('click', function(){
    categoryX.classList.add('none');
    category.classList.remove('none');
    categoryMenu.classList.add('none');
  })

  const header=document.querySelector('.headerBody');
  const headerTop=header.getBoundingClientRect().top+window.scrollY;

  window.addEventListener('scroll',function(){
    if(this.window.scrollY>=headerTop){
      header.classList.add('fixed');
    }else{
      header.classList.remove('fixed');
    }
  })
})
</script>