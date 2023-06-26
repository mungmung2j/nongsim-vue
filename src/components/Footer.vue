<template>
  <footer>
    <div class="black-box">
      <div class="footer-top">
        <div class="footer-menu">
          <a href="#" class="footer-menu-span">회사소개</a><span class="footer-menu-span">|</span><a href="#" class="footer-menu-span">이용약관</a><span class="footer-menu-span">|</span><a href="#" class="footer-menu-span white">개인정보처리방침</a><span class="footer-menu-span">|</span><a href="#" class="footer-menu-span">이용안내</a><span class="footer-menu-span">|</span><a href="#" class="footer-menu-span">고객만족센터</a><span class="footer-menu-span">|</span><a href="#" class="footer-menu-span white">임직원인증</a>
        </div>
        <select>
          <option value>FAMILLY SITE</option>
          <option value>농심</option>
          <option value>농심홀딩스</option>
          <option value>농심엔지니어링</option>
          <option value>농심개발</option>
          <option value>율촌화학</option>
          <option value>NDS</option>
          <option value>농심미분</option>
          <option value>메가마트</option>
          <option value>농심기획</option>
          <option value>율촌재단</option>
          <option value>태경농산</option>
          <option value>호텔농심</option>
          <option value>농심미국</option>
          <option value>농심중국</option>
          <option value>농심일본</option>
          <option value>코코이찌방야</option>
          <option value>식문화연구</option>
          <option value>식문화전문도서관</option>
        </select>
      </div>
      <span><img src="@/assets/logo-black.png" alt="nongsim"/></span>
      <div class="footer-main">
        <div class="footer-info">
          <div class="name">
            <p>법인명(상호) : (주)농심 | 대표자(성명) : 이병학 |  사업자 등록번호 : 118-81-03914 | 통신판매업 신고 : 제 2022-서울동작-0618 호</p><a href="#" class="info-check">사업자정보확인</a>
          </div>
          <div>
            <p>주소 : 07057 서울특별시 동작구 여의대방로 112 (신대방동) 농심신대방사옥</p>
          </div>
          <div>
            <p>호스팅제공자 : 카페24 | 상담메일 : nsmall2022@naver.com | 고객센터 : 1533-0658</p>
          </div>
          <div class="KG">
            <a href="https://iniweb.inicis.com/popup/common/popup_escrow_notice.jsp?mid=ECAnsma4d1"><img src="@/assets/KG.png" alt="KG"/></a><p>(주)케이지이니시스의 안전 구매 (에스크로) 서비스를 이용하실 수 있습니다.</p>
          </div>
          <div class="copyright">
            <p>COPYRIGHT © 농심몰. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
        <div class="download">
          <span>App Download</span>
          <div class="download-img">
            <a href="https://play.google.com/store/apps/details?id=com.cafe24.ec.plusnsmall2022&pli=1"><img src="@/assets/google.png" alt="playstore"/></a><a href="https://apps.apple.com/kr/app/%EB%86%8D%EC%8B%AC%EB%AA%B0/id6443553325"><img src="@/assets/apple.png" alt="applestore"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.black-box{
  background-color: #111;
  color:#666666;
  font-size: 14px;
  padding:0 48px 80px;
}

.footer-top{
  display:flex;
  flex-flow: flex wrap;
  justify-content: space-between;
  height: 73px;
  border-bottom: 1px solid #333;
  margin-bottom: 40px;
  align-items: center;
}

.footer-menu-span{
  padding-right: 15px;
}

.footer-menu-span.white{
  color:#d5d5d5;
  font-weight: 700;
}

.footer-info{
  color:#999;
  line-height: 25.2px;
}

.name{
  display:flex;
  flex-flow:row wrap;
}

.info-check{
  font-size: 12px;
  color: #666;
  display: inline-block;
  border: 1px solid #333;
  height: 24px;
  line-height: 24px;
  padding: 0 5px;
  border-radius: 12px;
  margin-left: 15px;
}

.KG{
  display:flex;
  flex-flow: row wrap;
  margin: 10px 0;
  color:#5a5b5b;
  gap:5px;
}

.copyright{
  color:#5a5b5b;
}

.footer-main{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.download{
  color:#f2f2f2;
  font-weight: 700;
  text-align: right;
  font-size: 15px;
}

.download-img{
  margin-top:10px;
  display: flex;
  gap:5px;
}

select{
  height: 34px;
  border: 1px solid #666;
  border-radius: 17px;
  padding: 0 35px 0 15px;
  background: #111 url(@/assets/select_arrow_off.png)no-repeat right center;
  color: #666;
  font-size: 12px;
  font-weight: 500;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance:none;
  width:160px;
}
</style>