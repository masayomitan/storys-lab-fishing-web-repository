/*
  src/index.js

  このJavaScriptファイルはReactアプリケーションのエントリーポイントです。
  ここではReactとReactDOMのライブラリをインポートし、ReactDOMを用いてReactのコンポーネントをDOMにレンダリングします。

  また、アプリケーション全体のスタイルを設定するindex.cssや、アプリケーションのルートコンポーネントであるAppコンポーネントもインポートしています。

  ReactDOM.createRoot(document.getElementById('root'))によってReactのルートノードが作成され、そのルートノードに<App />コンポーネントが描画されます。
  これにより、アプリケーションが起動し、ユーザーがアクセスできるようになります。

  React.StrictModeは、開発モードでのみ有効な特別なモードで、潜在的な問題を洗い出すためのものです。
  例えば、廃止予定のライフサイクルメソッドの使用や予期せぬ副作用などを検出します。

  また、reportWebVitalsはWeb Vitalsというパフォーマンス指標を測定し報告するためのユーティリティ関数です。
*/

// ReactとReactDOMライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom/client';

// アプリケーション全体のスタイルを設定するCSSファイルをインポート
import './index.css';

// アプリケーションのルートコンポーネントをインポート
import App from './App';

// Web Vitalsを測定するためのユーティリティ関数をインポート
import reportWebVitals from './reportWebVitals';

// Font Awesomeのライブラリをインポート
import 'font-awesome/css/font-awesome.min.css';

// ルート要素を取得し、Reactのルートノードを作成
const root = ReactDOM.createRoot(document.getElementById('root'));

// ルートノードにAppコンポーネントをレンダリング
// React.StrictModeで囲むことで、潜在的な問題を検出する
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitalsを測定し、結果を報告
reportWebVitals();
