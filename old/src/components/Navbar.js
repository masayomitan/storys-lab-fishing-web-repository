/*
  src/components/Navbar.js

  このファイルはアプリケーションのナビゲーションバーを定義するコンポーネントです。
  レスポンシブデザインに対応しており、デスクトップとモバイルで異なる表示になります。
*/

import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImage from '../assets/images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ handleOpen }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={logoImage} alt="Site Logo" className={styles.logo} />
      </Link>
      <div className={styles.desktopMenu}>
        {/* デスクトップ用メニュー */}
        <Link to="/login" className={styles.link}>
          ログイン
        </Link>
        <Link to="/signup" className={styles.link}>
          ユーザー登録
        </Link>
        <Link to="/posts" className={styles.link}>
          投稿をさがす
        </Link>
      </div>
      <div className={styles.mobileMenu}>
        {/* モバイル用メニュー（Drawerを開くアイコン） */}
        <MenuIcon onClick={handleOpen} />
      </div>
    </div>
  );
}

export default Navbar;
