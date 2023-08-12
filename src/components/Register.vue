<template>
  <div class="register">
    <div class="register-wrap">
      <h2>회원가입</h2>
      <div class="register-form">
        <table class="form-top">
          <tr class="classification-wrap">
            <th>회원구분</th>
            <td>
              <input type="radio"/><label>개인회원</label>
            </td>
          </tr>
          <tr class="certification-wrap">
            <th>회원인증</th>
            <td class="td-phone">
              <button class="certbtn">휴대폰 본인인증</button>
              <p>본인 명의의 휴대폰으로 본인인증을 진행합니다.</p>
            </td>
          </tr>
        </table>
        <h3>기본정보</h3>
        <p>필수입력사항</p>
        <div class="basic-information">
          <table>
            <tr class="register-id-wrap">
              <th>아이디</th>
              <td><input type="text"/></td>
            </tr>
            <tr class="register-pw-wrap">
              <th>비밀번호</th>
              <td><input type="password"/></td>
            </tr>
            <tr class="register-pwcheck-wrap">
              <th>비밀번호 확인</th>
              <td><input type="password"/></td>
            </tr>
            <tr class="register-name-wrap">
              <th>이름</th>
              <td><input type="text"/></td>
            </tr>
            <tr class="register-address-wrap">
              <th>주소</th>
              <td class="td-address">
                <ul>
                  <li class="li-address"><input type="text"/><button class="addressbtn">주소검색</button></li>
                  <li><input type="text"/></li>
                  <li><input type="text"/></li>
                </ul>
              </td>
            </tr>
            <tr class="register-call-wrap">
              <th>일반전화</th>
              <td>
                <div class="call-flexbox">
                <select>
                  <option value></option>
                  <option value>02</option>
                  <option value>031</option>
                  <option value>032</option>
                  <option value>033</option>
                  <option value>041</option>
                  <option value>042</option>
                  <option value>043</option>
                  <option value>044</option>
                  <option value>051</option>
                  <option value>052</option>
                  <option value>053</option>
                  <option value>054</option>
                  <option value>055</option>
                  <option value>061</option>
                  <option value>062</option>
                  <option value>063</option>
                  <option value>064</option>
                  <option value>0502</option>
                  <option value>0503</option>
                  <option value>0504</option>
                  <option value>0505</option>
                  <option value>0506</option>
                  <option value>0507</option>
                  <option value>070</option>
                  <option value>010</option>
                  <option value>011</option>
                  <option value>016</option>
                  <option value>017</option>
                  <option value>018</option>
                  <option value>019</option>
                  <option value>0508</option>
                </select>
                <input type="text"/>
                <input type="text"/>
                </div>
              </td>
            </tr>
            <tr class="register-phone-wrap">
              <th>휴대전화</th>
              <td>
                <div class="phone-flexbox">
                <select>
                  <option value></option>
                  <option value>010</option>
                  <option value>011</option>
                  <option value>016</option>
                  <option value>017</option>
                  <option value>018</option>
                  <option value>019</option>
                </select>
                <input type="text"/>
                <input type="text"/>
                </div>
              </td>
            </tr>
            <tr class="register-email-wrap">
              <th>이메일</th>
              <td><input type="text"/></td>
            </tr>
            <tr class="register-recommender-wrap">
              <th>추천인 아이디</th>
              <td><input type="text"/></td>
            </tr>
          </table>
        </div>
        <h3>내 취향 체크하기<span>아래 항목을 모두 체크하시면 1,000원 할인쿠폰 추가 지급!</span></h3>
        <table class="form-taste">
          <tr class="register-sex-wrap">
            <th>성별</th>
            <td>
              <input type="radio"/><label>남자</label>
              <input type="radio"/><label>여자</label>
            </td>
          </tr>
          <tr class="register-birth-wrap">
            <th>생년월일</th>
            <td>
              <input type="number"/>년
              <input type="number"/>월
              <input type="number"/>일
            </td>
          </tr>
          <tr class="register-anniversary-wrap">
            <th>나만의 기념일</th>
            <td>
              <div>
                <input type="number"/>년
                <input type="number"/>월
                <input type="number"/>일
              </div>
              <p>지난 연도로 입력해주세요(예시:2021년12월31일).</p>
            </td>
          </tr>
          <tr class="register-mbti-wrap">
            <th>MBTI</th>
            <td>
              <input type="radio"/><label>ENFJ</label>
              <input type="radio"/><label>ENTJ</label>
              <input type="radio"/><label>ENFP</label>
              <input type="radio"/><label>ENTP</label>
              <input type="radio"/><label>ESFP</label>
              <input type="radio"/><label>ESFJ</label>
              <input type="radio"/><label>ESTP</label>
              <input type="radio"/><label>ESTJ</label>
              <input type="radio"/><label>INFP</label>
              <input type="radio"/><label>INFJ</label>
              <input type="radio"/><label>INTP</label>
              <input type="radio"/><label>ISTP</label>
              <input type="radio"/><label>ISFP</label>
              <input type="radio"/><label>ISFJ</label>
              <input type="radio"/><label>ISTJ</label>
              <input type="radio"/><label>INTJ</label>
            </td>
          </tr>
          <tr class="register-person-wrap">
            <th>가구유형 (본인 포함)</th>
            <td>
              <input type="radio"/><label>1인</label>
              <input type="radio"/><label>2인</label>
              <input type="radio"/><label>3인</label>
              <input type="radio"/><label>4인</label>
              <input type="radio"/><label>5인이상</label>
            </td>
          </tr>
          <tr class="register-new-wrap">
            <th>신제품 구매유형</th>
            <td>
              <input type="radio"/><label>항상 구매</label>
              <input type="radio"/><label>대부분 구매</label>
              <input type="radio"/><label>온라인 보고 구매</label>
              <input type="radio"/><label>주변반응 보고 구매</label>
              <input type="radio"/><label>관심 별로 없음</label>
            </td>
          </tr>
          <tr class="register-interest-wrap">
            <th>관심상품군 (최대5개)</th>
            <td>
              <input type="radio"/><label>음료</label>
              <input type="radio"/><label>생수</label>
              <input type="radio"/><label>햄</label>
              <input type="radio"/><label>스프</label>
              <input type="radio"/><label>캔디</label>
              <input type="radio"/><label>초콜렛</label>
              <input type="radio"/><label>오일</label>
              <input type="radio"/><label>카레</label>
              <input type="radio"/><label>간편식</label>
              <input type="radio"/><label>잼</label>
              <input type="radio"/><label>황도</label>
              <input type="radio"/><label>조미료</label>
              <input type="radio"/><label>라면</label>
              <input type="radio"/><label>스낵</label>
            </td>
          </tr>
          <tr class="register-ramen-wrap">
            <th>좋아하는 라면</th>
            <td>
              <input type="radio"/><label>신라면</label>
              <input type="radio"/><label>짜파게티</label>
              <input type="radio"/><label>안성탕면</label>
              <input type="radio"/><label>육개장사발면</label>
              <input type="radio"/><label>너구리</label>
              <input type="radio"/><label>배홍동</label>
              <input type="radio"/><label>진라면</label>
              <input type="radio"/><label>열라면</label>
              <input type="radio"/><label>참깨라면</label>
              <input type="radio"/><label>삼양라면</label>
              <input type="radio"/><label>불닭볶음면</label>
              <input type="radio"/><label>짜파로니</label>
              <input type="radio"/><label>팔도비빔면</label>
              <input type="radio"/><label>왕뚜껑</label>
              <input type="radio"/><label>틈새라면</label>
              <input type="radio"/><label>기타</label>
            </td>
          </tr>
        </table>
        <h3>약관동의</h3>
        <div class="register-agree">
          <div class="register-allagree-wrap">
            <input type="radio"/><label>[전체동의] 이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
          </div>
          <div class="register-essential-wrap">
            <input type="radio"/><label>[필수] 이용약관 동의</label>
          </div>
          <div class="register-collection-wrap">
            <input type="radio"/><label>[필수] 개인정보 수집 및 이용 동의</label>
          </div>
          <div class="register-offer-wrap">
            <input type="radio"/><label>[선택] 개인정보 제3자 제공 동의</label>
          </div>
          <div class="register-shopping-wrap">
            <input type="radio"/><label>[선택] 쇼핑정보 수신 동의</label>
          </div>
          <div class="register-sms-wrap">
            <input type="radio"/><label>SMS 수신을 동의하십니까?</label>
          </div>
          <div class="register-emailagree-wrap">
            <input type="radio"/><label>이메일 수신을 동의하십니까?</label>
          </div>
        </div>
        <div class="register-redbtn-wrap">
          <a class="register-redbtn" href="#">회원가입</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.register h2{
  text-align: center;
  height: 140px;
  margin-bottom: 20px;
  line-height: 140px;
}

.register h3{
  margin: 80px 0 20px;
}

.register-wrap{
  margin:0 auto;
  width:1400px;
  display:block;
  position:relative;
}

.form-top{
  border-top:1px solid black;
}

th{
  width:280px;
  text-align: left;
  height: 70px;
  border-bottom: 1px solid #eaeaea;
}

td{
  width: 1120px;
  height: 70px;
  border-bottom: 1px solid #eaeaea;
  padding: 15px 20px 15px 20px;
}


.td-phone{
  display:flex;
  align-items: center;
  
}

.li-address{
  display:flex;
  max-width: 620px;
  gap:10px;
  height: auto;
}

.register-address-wrap li{
  margin-bottom: 10px;
}

.register-redbtn-wrap{
  text-align: center;
  margin:20px 0;
}

.register-redbtn{
  display:inline-block;
  width: 100%;
  background-color: #c7002e;
  color:#fff;
  height: 70px;
  line-height: 70px;
  border-radius: 10px;
  margin-top: 60px;
  font-size: 20px;
}

.register-form select{
  font-size: 14px;
  color: #666;
  border: 1px solid #eaeaea;
  line-height: 1.4;
  padding: 10px 35px 10px 20px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  appearance: none;
  background-image: url(@/assets/select_arrow_off.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-color: #fff;
}

.register input[type="text"],
.register input[type="password"]{
  font-size: 14px;
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
  max-width: 620px;
}

.call-flexbox{
  display:flex;
  width: 620px;
  gap:10px;
}

.phone-flexbox{
  display:flex;
  width: 620px;
  gap:10px;
}

.certbtn{
  color:#fff;
  background-color: #c7002e;
  border:none;
  border-radius: 10px;
  font-weight: 500;
  height: 50px;
  padding:0 15px;
  text-align: center;
  cursor: pointer;
}

.addressbtn{
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: 500;
  color:#999;
  background-color: #fafafa;
  border-radius: 10px;
  border:1px solid #eaeaea;
  cursor: pointer;
  min-width: 100px;
  padding:0 15px;
}
</style>