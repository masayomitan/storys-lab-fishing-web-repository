/*
  src/App.js

  このファイルはReactアプリケーションのルートコンポーネントを定義します。
  ここでは、react-router-domを使って、アプリケーションのルーティングを設定しています。
  アプリケーションの各ページ（HomePage, PostsPage, PostDetailPage）に対応するルートが設定されており、
  ブラウザのURLに応じて表示するページが切り替わります。
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch ではなく、Routes をインポート
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routesコンポーネント内で各ページのルートを定義 */}
        <Routes>
          <Route path="/" element={<HomePage />} />{' '}
          {/* ルートURLに対するページ */}
          <Route path="/posts" element={<PostsPage />} />{' '}
          {/* /postsに対するページ */}
          <Route path="/posts/:postId" element={<PostDetailPage />} />{' '}
          {/* 個別の投稿ページ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
