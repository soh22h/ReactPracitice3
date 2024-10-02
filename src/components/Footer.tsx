// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* 회사 정보 */}
      <div>
        <p className="footer__info">
          패션쇼핑몰 | 서울특별시 강남구 패션로 123 | 대표: 홍길동 | 사업자
          등록번호: 123-45-67890 | 통신판매업신고: 제2021-서울강남-00000호
        </p>
        {/* 고객 센터 */}
        <p>
          고객센터: 02-1234-5678 | 이메일: support@fashionshop.com | 운영 시간:
          평일 09:00 ~ 18:00
        </p>
      </div>

      {/* 소셜 미디어 링크 */}
      <div className="footer__social-media">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          페이스북
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          인스타그램
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          트위터
        </a>
      </div>
    </footer>
  );
};

export default Footer;
