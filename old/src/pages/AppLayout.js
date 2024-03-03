/*
  src/pages/AppLayout.js

  このファイルはアプリケーションの共通レイアウトを定義するコンポーネントです。
  ナビゲーションバー、コンテンツエリア、フッターなど、すべてのページに共通するレイアウトを統一します。
*/

import { Container } from '@mui/material';
import styles from './AppLayout.module.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import useIsMobile from '../hooks/useIsMobile'; // カスタムフックのインポート

function AppLayout({ children, banner }) {
  // bannerプロップの追加
  const isMobile = useIsMobile(); // カスタムフックを使用してモバイルかどうか判定

  return (
    <div>
      <AppNavbar /> {/* ナビゲーションバー */}
      {banner} {/* バナーの表示 */}
      <Container
        // maxWidthプロパティによってコンテナの最大幅を設定
        // 'xs': 最大幅600px未満, 'sm': 最大幅600px以上, 'md': 最大幅900px以上,
        // 'lg': 最大幅1200px以上, 'xl': 最大幅1536px以上, false: 最大幅の制限なし
        maxWidth={isMobile ? 'xs' : 'md'}
        className={styles.container}
      >
        {children}
      </Container>{' '}
      {/* コンテンツエリア */}
      <Footer /> {/* フッター */}
    </div>
  );
}

export default AppLayout;
