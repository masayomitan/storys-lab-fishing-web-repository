/*
  src/DrawerMenu.js

  このファイルはモバイルデバイス上でナビゲーションバーの代わりに表示される
  引き出しメニュー（Drawer）を定義するコンポーネントです。
*/

import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';
import styles from './DrawerMenu.module.css'; // CSSを別ファイルに分割

function DrawerMenu({ isOpen, handleClose }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        style: { width: '66%', background: '#FFFFFF' },
      }}
    >
      <div className={styles.drawerHeader}>
        {/* 閉じるアイコン */}
        <CloseIcon onClick={handleClose} />
      </div>
      <Link to="/login" className={styles.link}>
        <LoginIcon /> ログイン
      </Link>
      <Link to="/signup" className={styles.link}>
        <RegisterIcon /> ユーザー登録
      </Link>
      <hr />
      <Link to="/posts" className={styles.link}>
        <SearchIcon /> 投稿をさがす
      </Link>
    </Drawer>
  );
}

export default DrawerMenu;
