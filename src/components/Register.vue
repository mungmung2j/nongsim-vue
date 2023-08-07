<template>
  <div class="register">
    <div class="register-wrap">
      <h2>회원가입</h2>
      <div class="register-form">
        <div class="form-top">
          <div>
            <p>회원구분</p>
            <div>
              <input type="radio"/><label>개인회원</label>
            </div>
          </div>
          <div>
            <div>회원인증</div>
            <div>
              <button>휴대폰 본인인증</button>
              <p>본인 명의의 휴대폰으로 본인인증을 진행합니다.</p>
            </div>
          </div>
        </div>
        <h3>기본정보</h3>
        <p>필수입력사항</p>
        <div class="basic-information">
          <div>
            <div>
              <p>아이디</p>
              <input type="text"/>
            </div>
            <div>
              <p>비밀번호</p>
              <input type="password"/>
            </div>
            <div>
              <p>비밀번호 확인</p>
              <input type="password"/>
            </div>
            <div>
              <p>이름</p>
              <input type="text"/>
            </div>
            <div>
              <p>주소</p>
              <div>
                <input type="text"/><button>주소검색</button>
                <input type="text"/>
                <input type="text"/>
              </div>
            </div>
            <div>
              <p>일반전화</p>
              <div>
                <select>
                  <option value="02"></option>
                  <option value="031"></option>
                  <option value="032"></option>
                  <option value="033"></option>
                  <option value="041"></option>
                  <option value="042"></option>
                  <option value="043"></option>
                  <option value="044"></option>
                  <option value="051"></option>
                  <option value="052"></option>
                  <option value="053"></option>
                  <option value="054"></option>
                  <option value="055"></option>
                  <option value="061"></option>
                  <option value="062"></option>
                  <option value="063"></option>
                  <option value="064"></option>
                  <option value="0502"></option>
                  <option value="0503"></option>
                  <option value="0504"></option>
                  <option value="0505"></option>
                  <option value="0506"></option>
                  <option value="0507"></option>
                  <option value="070"></option>
                  <option value="010"></option>
                  <option value="011"></option>
                  <option value="016"></option>
                  <option value="017"></option>
                  <option value="018"></option>
                  <option value="019"></option>
                  <option value="0508"></option>
                </select>
                <input type="number"/>
                <input type="number"/>
              </div>
            </div>
            <div>
              <p>휴대전화</p>
              <div>
                <select>
                  <option value="010"></option>
                  <option value="011"></option>
                  <option value="016"></option>
                  <option value="017"></option>
                  <option value="018"></option>
                  <option value="019"></option>
                </select>
                <input type="number"/>
                <input type="number"/>
              </div>
            </div>
            <div>
              <p>이메일</p>
              <input type="text"/>
            </div>
            <div>
              <p>추천인 아이디</p>
              <input type="text"/>
            </div>
          </div>
        </div>
        <h3>내 취향 체크하기<span>아래 항목을 모두 체크하시면 1,000원 할인쿠폰 추가 지급!</span></h3>
        <div class="form-taste">
          <div>
            <p>성별</p>
            <div>
              <input type="radio"/><label>남자</label>
              <input type="radio"/><label>여자</label>
            </div>
          </div>
          <div>
            <p>생년월일</p>
            <div>
              <input type="number"/>년
              <input type="number"/>월
              <input type="number"/>일
            </div>
          </div>
          <div>
            <p>나만의 기념일</p>
            <div>
              <div>
                <input type="number"/>년
                <input type="number"/>월
                <input type="number"/>일
              </div>
              <p>지난 연도로 입력해주세요(예시:2021년12월31일).</p>
            </div>
          </div>
          <div>
            <p>MBTI</p>
            <div>
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
            </div>
          </div>
          <div>
            <p>가구유형 (본인 포함)</p>
            <div>
              <input type="radio"/><label>1인</label>
              <input type="radio"/><label>2인</label>
              <input type="radio"/><label>3인</label>
              <input type="radio"/><label>4인</label>
              <input type="radio"/><label>5인이상</label>
            </div>
          </div>
          <div>
            <p>신제품 구매유형</p>
            <div>
              <input type="radio"/><label>항상 구매</label>
              <input type="radio"/><label>대부분 구매</label>
              <input type="radio"/><label>온라인 보고 구매</label>
              <input type="radio"/><label>주변반응 보고 구매</label>
              <input type="radio"/><label>관심 별로 없음</label>
            </div>
          </div>
          <div>
            <p>관심상품군 (최대5개)</p>
            <div>
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
            </div>
          </div>
          <div>
            <p>좋아하는 라면</p>
            <div>
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
            </div>
          </div>
        </div>
        <h3>약관동의</h3>
        <div class="register-agree">
          <div>
            <input type="radio"/><label>[전체동의] 이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
          </div>
          <div>
            <input type="radio"/><label>[필수] 이용약관 동의</label>
          </div>
          <div>
            <input type="radio"/><label>[필수] 개인정보 수집 및 이용 동의</label>
          </div>
          <div>
            <input type="radio"/><label>[선택] 개인정보 제3자 제공 동의</label>
          </div>
          <div>
            <input type="radio"/><label>[선택] 쇼핑정보 수신 동의</label>
          </div>
          <div>
            <input type="radio"/><label>SMS 수신을 동의하십니까?</label>
          </div>
          <div>
            <input type="radio"/><label>이메일 수신을 동의하십니까?</label>
          </div>
        </div>
        <a href="#">회원가입</a>
      </div>
    </div>
  </div>
</template>

<style>

</style>

