import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoImage from '../assets/images/logo.jpg'; // ロゴ画像のパスを適切に設定してください
import { FaTwitter, FaYoutube } from 'react-icons/fa'; // react-iconsライブラリからTwitterとYouTubeアイコンをインポート

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.backToTop} onClick={() => window.scrollTo(0, 0)}>
        トップに戻る
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>投稿を探す</div>
          <Link to="/area" className={styles.linkItem}>
            エリアから探す
          </Link>
          <Link to="/fish" className={styles.linkItem}>
            魚種から探す
          </Link>
          <Link to="/ranking" className={styles.linkItem}>
            ランキングから探す
          </Link>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            Story's Lab Fishingについて
          </div>
          <Link to="/about" className={styles.linkItem}>
            About Story's Lab Fishing
          </Link>
          <Link to="/company" className={styles.linkItem}>
            運営会社
          </Link>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>サポート</div>
          <Link to="/help" className={styles.linkItem}>
            ヘルプ
          </Link>
          <Link to="/contact" className={styles.linkItem}>
            お問い合わせ
          </Link>
          <Link to="/terms" className={styles.linkItem}>
            利用規約
          </Link>
          <Link to="/privacy" className={styles.linkItem}>
            プライバシーポリシー
          </Link>
        </div>
      </div>
      <div className={styles.logoSnsSection}>
        <div className={styles.logoSns}>
          <img src={logoImage} alt="Site Logo" className={styles.logo} />
          <div className={styles.snsIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.snsIcon} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className={styles.snsIcon} />
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2023 Story's Lab Fishing. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
