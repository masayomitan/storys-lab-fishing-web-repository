/*
  src/components/AppNavbar.js

  このファイルはアプリケーションのナビゲーションバー全体を制御するコンポーネントです。
  ナビゲーションバーと引き出しメニュー（DrawerMenu）の表示・非表示を管理します。
*/

import { useState } from 'react';
import Navbar from './Navbar';
import DrawerMenu from './DrawerMenu';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <DrawerMenu isOpen={isOpen} handleClose={handleClose} />
    </>
  );
}

export default AppNavbar;
