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
            <ul>공식아울렛</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Sports</h5>
            <ul>러닝</ul>
            <ul>축구</ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Company Info</h5>
            <ul>회사소개</ul>
            <ul>채용정보</ul>
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
            <ul>고객센터</ul>
            <ul>FAQ</ul>
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
            </div>
          </li>
        </ul>
      </div>

      {/* 회사 정보 */}
      <div className="footer__info">
        <p>
          패션쇼핑몰 | 서울특별시 강남구 패션로 123 | 대표: 홍길동 | 사업자
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
