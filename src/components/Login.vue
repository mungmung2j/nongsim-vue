<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-top">
        <router-link to="/" class="login-back">돌아가기</router-link>
        <h2 class="login-logo"><img src="@/assets/logo--black.png"/></h2>
      </div>
      <div class="login-main">
        <div class="login-section">
          <div class="login-select">
            <a class="login-mem" href="#">로그인</a>
            <a class="login-nonmem" href="#">비회원 주문조회</a>
          </div>
          <div class="login-form">
            <input class="login-id" type="text" placeholder="아이디(영문, 숫자 4~16자)"/>
            <input class="login-password" type="password" placeholder="비밀번호(영문, 숫자, 특수문자 혼합 8~16자)"/>
            <div class="login-float">
              <p class="remember">
                <input type="checkbox"/>
                <label>아이디 저장</label>
              </p>
              <div class="login-find">
                <a href="#">아이디찾기</a>
                <span class="find-I">|</span>
                <a href="#">비밀번호재설정</a>
              </div>
            </div>
            <a class="login-btn" href="#">로그인</a>
            <a class="register-btn" href="#"><img src="@/assets/icon-login--mall.png"/>농심몰 회원가입</a>
            <a class="login-cupon" href="#">신규가입시 최대7천원 쿠폰 증정!</a>
            <a class="login-kakao" href="#"><img src="@/assets/icon-login--kakao_new.png"/>카카오로 로그인</a>
            <a class="login-apple" href="#"><img src="@/assets/icon-login--apple.png"/>Apple 로그인</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login-wrap{
  margin:0 auto;
  width: 600px;
}

.login-top{
  border-bottom: 1px solid #efefef;
  display: flex;
  padding:80px 0 30px;
}

.login-logo{
  margin: auto;
}

.login-back{
  display: block;
  position: absolute;
  height: 30px;
  line-height: 30px;
  width: 90px;
  min-width: auto;
  text-align: center;
  font-size: 13px;
  color: #999;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 15px;
}

.login-main{
  padding: 30px 0;
  margin: 0 80px 100px 80px;
}

.login-select{
  display:flex;
  margin-bottom: 20px;
  justify-content: space-between;
}

.login-form{
  display: flex;
  flex-flow: column wrap;
  gap:10px;
}

.login-float{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.login-mem{
  border:1px solid #999;
  background-color:#fff;
  font-size: 14px;
  color:#111;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  border-radius: 10px 0 0 10px;
  width: 218px;
  text-align: center;
}

.login-nonmem{
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  font-size: 14px;
  color:#999;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  border-radius: 0 10px 10px 0;
  text-align: center;
  width: 218px;
}

.login-id{
  font-size:14px;
  color: #666;
  font-weight: 400;
  width: 100%;
  height: 50px;
  line-height: 1.4;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #fff;
  box-sizing: border-box;
}

.login-password{
  font-size:14px;
  color: #666;
  font-weight: 400;
  width: 100%;
  height: 50px;
  line-height: 1.4;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #fff;
  box-sizing: border-box;
}

input[type="checkbox"]{
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
  background: none;
  background-image: url(@/assets/input_check2.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}

.remember label{
  font-size: 14px;
  font-weight: 700;
  color:#000;
  line-height: 1;
}

.remember{
  display:flex;
  align-items: center;
}

.login-find{
  font-size: 14px;
  color: #999;
}

.find-I{
  padding:0 16px;
}

.login-btn{
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  color:#fff;
  background-color: #c7002e;
}

.register-btn{
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  color:#c7002e;
  background-color: #fff;
  border:1px solid #c7002e;
}

.register-btn img{
  position:relative;
  height: 20px;
  left:0;
}

.login-cupon{
  position: relative;
  display: block;
  color: #fff;
  background-color: #666;
  height: 50px;
  line-height: 50px;
  margin: 20px 0 8px;
  border-radius: 20px;
  text-align: center;
}

.login-kakao{
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  background-color: #fee500;
  color:#222;
}

.login-apple{
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  text-align: center;
  background-color: #000;
  color: #fff;
}
</style>