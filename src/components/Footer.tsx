// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ul>
          <li>
            <h5>Products</h5>
            <ul>신상품</ul>
            <ul>공식 아울렛</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Sports</h5>
            <ul>러닝</ul>
            <ul>트레이닝</ul>
            <ul>아웃도어</ul>
            <ul>축구</ul>
            <ul>골프</ul>
            <ul>요가</ul>
            <ul>테니스</ul>
            <ul>농구</ul>
            <ul>스케이트보딩</ul>
            <ul>수영</ul>
            <ul>사이클링</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Company Info</h5>
            <ul>회사소개</ul>
            <ul>채용정보</ul>
            <ul>아디다스 앱</ul>
            <ul>컨펌드 앱</ul>
            <ul>아디다스 블로그</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Membership</h5>
            <ul>아디클럽</ul>
            <ul>adidas Runners</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Support</h5>
            <ul>고객센터, 심의수선</ul>
            <ul>주문 / 배송조회</ul>
            <ul>FAQ</ul>
            <ul>구매 이용약관</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Follow Us</h5>
            <div className="footer__social-media">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000"
                  width="20"
                  height="20"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=dz63urxyxSdO&format=png&color=000000"
                  width="20"
                  height="20"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000"
                  width="20"
                  height="20"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=123922&format=png&color=000000"
                  width="20"
                  height="20"
                  alt="tiktok"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=6Cou2lzW51Bn&format=png&color=000000"
                  width="20"
                  height="20"
                  alt="youtube"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* 회사 정보 */}
      <div className="footer__info">
        <p>
          패션쇼핑몰 | 서울특별시 강남구 패션로 123 | 대표자: 홍길동 | 사업자
          등록번호: 123-45-67890 | 통신판매업신고: 제2021-서울강남-00000호
        </p>
        {/* 고객 센터 */}
        <p>
          고객센터: 02-1234-5678 | 이메일: support@fashionshop.com | 운영 시간:
          평일 09:00 ~ 18:00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
