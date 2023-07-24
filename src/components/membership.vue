<template>
  <div class="membership">
    <div class="black-wrap">
      <div class="black-top">
        <span class="nongsim-membership">NONGSIM MEMBERSHIP</span>
        <h2>쇼핑이 더 즐거워지는<br><strong>농심몰 등급별 혜택</strong></h2>
      </div>
      <div class="black-bottom">
        <p>농심몰만의 다양한 단독 혜택을 만나보세요!</p>
      </div>
    </div>
    <div class="membership-main">
      <div class="membership-division">
        <div class="premium">
          <span>유료 멤버십</span>
        </div>
        <div class="normal none">
          <span>일반 회원</span>
        </div>
      </div>
      <div class="premium-benefit">
        <div>
          <div class="membership-special-benefit">Membership Special Benefit</div>
          <h2>한 눈에 보는 <strong>귀하심 회원(유료 멤버십) 혜택</strong></h2>
          <div class="premium-text"><strong>9,900원</strong><b>으로 6개월 동안 특별한 혜택</b>을 누려보세요</div>
        </div>
        <div class="benefits">
          <div class="accumulate-wrap">
            <div class="common-img"><img src="@/assets/membership_icon1.png" alt=""/></div>
            <div>
              <p class="accumulate-text-red">3%</p>
              <p class="accumulate-text-black">구매적립</p>
            </div>
          </div>
          <div class="delivery-wrap">
            <div class="common-img"><img src="@/assets/truck.png" alt=""/></div>
            <div>
              <p class="accumulate-text-red">무료배송</p>
              <p class="accumulate-text-black">2장 쿠폰 지급</p>
            </div>
          </div>
          <div class="discount-wrap">
            <div class="common-img"><img src="@/assets/discount.png" alt=""/></div>
            <div>
              <p class="accumulate-text-red">3,000원</p>
              <p class="accumulate-text-black">할인 쿠폰 지급</p>
            </div>
          </div>
          <div class="purchase-wrap">
            <div class="common-img"><img src="@/assets/6water.png" alt=""/></div>
            <div>
              <p class="accumulate-text-red">구매 쿠폰 지급</p>
              <p class="accumulate-text-black">백산수 2L 6입</p>
            </div>
          </div>
        </div>
        <a href="#" class="membership-together">
          귀하심 회원(유료 멤버십) 함께 하실래요?
        </a>
      </div>
      <div class="normal-benefit none">
        <div class="normal-membership">Nongshim Membership</div>
        <h2><strong>농심몰 회원 혜택</strong></h2>
        <div class="normal-text">농심몰 회원에게만 제공해드리는 특별한 혜택입니다</div>
        <div class=normal-cupon>
          <div class="normal-new">
            <div class="normal-new-title">신규가입혜택쿠폰</div>
            <ul class="new-things">
              <li>
                <div class="common-img"><img class="img-register" src="@/assets/membership_tab2_icon1-1.png"/></div>
                <p class="common-text-black">신규회원가입</p>
                <p class="common-text-red">2,000원</p>
              </li>
              <li>
                <div class="common-img"><img src="@/assets/membership_tab2_icon1-2.png"/></div>
                <p class="common-text-black">생일기념</p>
                <p class="common-text-red">2,000원</p>
              </li>
              <li>
                <div class="common-img"><img src="@/assets/membership_tab2_icon1-3.png"/></div>
                <p class="common-text-black">추가정보입력</p>
                <p class="common-text-red">1,000원</p>
              </li>
              <li>
                <div class="common-img"><img src="@/assets/membership_tab2_icon1-4.png"/></div>
                <p class="common-text-black">나만의 기념일</p>
                <p class="common-text-red">농꾸 2,000원</p>
              </li>
            </ul>
          </div>
          <div class="normal-common">
          <div class="normal-common-title">공통혜택쿠폰</div>
          <ul class="common-things">
            <li>
              <div class="common-img"><img src="@/assets/membership_tab2_icon2-1.png"/></div>
              <p class="common-text-black">텍스트</p>
              <p class="common-text-red">50원</p>
            </li>
            <li>
              <div class="common-img"><img src="@/assets/membership_tab2_icon2-2.png"/></div>
              <p class="common-text-black">나만의 기념일</p>
              <p class="common-text-red">200원</p>
            </li>
            <li>
              <div class="common-img"><img src="@/assets/membership_tab2_icon2-3.png"/></div>
              <p class="common-text-black">나만의 기념일</p>
              <p class="common-text-red">5%</p>
            </li>
            </ul>
          </div>
        </div>
        <a class="normal-register" href="#">회원가입하고 혜택받기</a>
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

.common-text-black{
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 500;
  color: #111;
}

.common-img{
  height: 100px;
  margin-bottom: 25px;
}

.premium-benefit img{
  height: 100%;
}

.common-text-red{
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color:#c7002e;
}

.black-wrap{
  background: url(@/assets/membership_bg.png) no-repeat center;
  color: #fff;
  display: flex;
  flex-flow:column wrap;
  justify-content: center;
  align-items: center;
}

.nongsim-membership{
  color: #666;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 25px;
}

.black-wrap h2{
  text-align: center;
  font-size: 50px;
  font-weight: 400;
}

.black-top{
  padding:103px 0 65px;
  align-items: center;
}

.black-bottom{
  width:1400px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #222;
}

.black-bottom p{
  font-size: 22px;
  background:url(@/assets/membership_bg_icon.png) no-repeat right center;
  text-align: left;
  width: 760px;
  height: 32px;
}

.membership-division{
  display:flex;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
}

.premium{
  width:700px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #c7002e;
  font-weight: 700;
  cursor: pointer;
}

.premium.none{
  width:700px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 500;
}

.normal.none{
  width:700px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border:none;
  font-weight: 500;
}

.normal{
  width:700px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #c7002e;
  font-weight: 700;
  cursor: pointer;
}

.premium-benefit{
  padding:150px 100px;
  text-align: center;
  background-color: #fafafa;
}

.premium-benefit.none{
  display:none;
}

.normal-benefit{
  padding:150px 100px;
  text-align: center;
  background-color: #fafafa;
}

.normal-benefit.none{
  display:none;
}

.normal-benefit img{
  margin:25px 68.75px;
}

.membership-special-benefit{
  padding: 13px 30px;
  margin-bottom: 30px;
  background-color: #111;
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  letter-spacing: -1px;
  display: inline-block;
}

.premium-benefit h2{
  font-size:50px;
  font-weight: 400;
  margin: 0;
}

.premium-text{
  margin-top: 15px;
  font-size: 20px;
  font-weight: 400;
  color: #666;
  letter-spacing: -1.5px;
}

.premium-benefit b{
  font-weight: 500;
  color:#111;
}

.premium-benefit strong{
  font-weight: 700;
  color:#111;
}

.benefits{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top:100px;
  place-items: center;
}

.accumulate-wrap{
  width: 255px;
  height: 183px;
  padding: 80px 25px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
  transition: 0.25s cubic-bezier(0.25,1,0.5,1);
  cursor: default;
}

.delivery-wrap{
  width: 255px;
  height: 183px;
  padding: 80px 25px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
  transition: 0.25s cubic-bezier(0.25,1,0.5,1);
  cursor: default;
}

.discount-wrap{
  width: 255px;
  height: 183px;
  padding: 80px 25px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
  transition: 0.25s cubic-bezier(0.25,1,0.5,1);
  cursor: default;
}

.purchase-wrap{
  width: 255px;
  height: 183px;
  padding: 80px 25px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
  transition: 0.25s cubic-bezier(0.25,1,0.5,1);
  cursor: default;
}

.accumulate-text-red{
  font-weight: 600;
  color:#c7002e;
}

.benefits img{
  margin-bottom: 25px;
}

.accumulate-text-black{
  line-height: 1.62;
  font-size: 18px;
  color: #111;
  letter-spacing: -1px;
}

.membership-together{
  display:inline-block;
  width: 520px;
  height: 80px;
  margin-top: 100px;
  line-height: 80px;
  background: linear-gradient(90deg,#fe645a,#f31d32,#c7002e);
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  border-radius: 50px;
  align-items: center;
}

.normal-membership{
  padding: 13px 30px;
  margin-bottom: 30px;
  background-color: #111;
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  letter-spacing: -1px;
  display: inline-block;
}

.normal-benefit h2{
  font-size: 50px;
  font-weight: 400;
  margin: 0;
}

.normal-text{
  margin-top: 15px;
  font-size: 20px;
  font-weight: 400;
  color: #666;
  letter-spacing: -1.5px;
}

.normal-cupon{
  display:flex;
  gap:40px;
  margin-top:60px;
  justify-content: center;
}

.normal-new{
  display:flex;
  flex-flow: column wrap;
}

.new-things{
  display:flex;
  padding: 60px 40px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
}

.normal-common{
  display:flex;
  flex-flow: column wrap;
}

.common-things{
  display:flex;
  padding: 60px 40px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.05);
}

.normal-new-title{
  margin-bottom: 20px;
  line-height: 60px;
  background: linear-gradient(90deg,#fe645a,#f31d32,#c7002e);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border-radius: 10px;
}

.normal-common-title{
  margin-bottom: 20px;
  line-height: 60px;
  background: linear-gradient(90deg,#fe645a,#f31d32,#c7002e);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border-radius: 10px;
}

.img-register{
  margin:33px 68.75px !important;
}

.normal-register{
  display:inline-block;
  background: #111;
  width: 520px;
  height: 80px;
  margin-top: 100px;
  line-height: 80px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  border-radius: 50px;
}

</style>

<script setup>
import { onMounted } from 'vue';

onMounted(function(){
  const premium=document.querySelector('.premium');
  const normal=document.querySelector('.normal');
  const prefit=document.querySelector('.premium-benefit');
  const norfit=document.querySelector('.normal-benefit');

  normal.addEventListener('click', function(){
    premium.classList.add('none');
    normal.classList.remove('none');
    prefit.classList.add('none');
    norfit.classList.remove('none');
  })
  premium.addEventListener('click', function(){
    premium.classList.remove('none');
    normal.classList.add('none');
    prefit.classList.remove('none');
    norfit.classList.add('none');
  })
})
</script>