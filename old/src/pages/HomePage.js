/*
  src/pages/HomePage.js

  このファイルはアプリケーションのホームページを定義します。
  主な機能としては、メインビジュアルの表示、投稿の検索バー、各セクションへのリンクなどがあります。
  HomePage.module.cssファイルで定義されたスタイルシートを使用してデザインが適用されています。
*/
import AppLayout from './AppLayout';
import styles from './HomePage.module.css';
import useIsMobile from '../hooks/useIsMobile';
import homepageBannerMobile from '../assets/images/homepage-banner-mobile.jpg';
import homepageBannerDesktop from '../assets/images/homepage-banner-desktop.jpg';

function HomePage() {
  const isMobile = useIsMobile();
  const bannerImage = isMobile ? homepageBannerMobile : homepageBannerDesktop;

  // バナー部分の定義
  const banner = (
    <div
      className={isMobile ? styles.bannerMobile : styles.bannerDesktop}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.search}>
          <i className="fa fa-search" style={{ color: 'grey' }}></i>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="投稿を検索します"
          />
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout banner={banner}>
      {' '}
      {/* バナーをプロップとして渡す */}
      {/* その他のセクション... */}
    </AppLayout>
  );
}

export default HomePage;
