'use client'

import React from 'react';

import Layout from '../../components/parts/Layout/layout';
import Tool from '../../components/pages/Tool';

// 実データできたら削除
const toolData: any = [
  {
    tool_category_id: 1,
    tool_category_name: 'ロッド',
    tools: [
      { tool_id: 1, tool_name: '名称1', maker: 'メーカー1', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 2, tool_name: '名称2', maker: 'メーカー2', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 3, tool_name: '名称3', maker: 'メーカー3', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 4, tool_name: '名称4', maker: 'メーカー4', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 5, tool_name: '名称5', maker: 'メーカー5', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
    ],
  },
  {
    tool_category_id: 2,
    tool_category_name: 'リール',
    tools: [
      { tool_id: 1, tool_name: '名称1', maker: 'メーカー1', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 2, tool_name: '名称2', maker: 'メーカー2', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 3, tool_name: '名称3', maker: 'メーカー3', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 4, tool_name: '名称4', maker: 'メーカー4', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 5, tool_name: '名称5', maker: 'メーカー5', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
    ],
  },
  {
    tool_category_id: 3,
    tool_category_name: 'ルアー',
    tools: [
      { tool_id: 1, tool_name: '名称1', maker: 'メーカー1', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 2, tool_name: '名称2', maker: 'メーカー2', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 3, tool_name: '名称3', maker: 'メーカー3', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 4, tool_name: '名称4', maker: 'メーカー4', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 5, tool_name: '名称5', maker: 'メーカー5', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
    ],
  },
  {
    tool_category_id: 4,
    tool_category_name: 'その他',
    tools: [
      { tool_id: 1, tool_name: '名称1', maker: 'メーカー1', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 2, tool_name: '名称2', maker: 'メーカー2', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 3, tool_name: '名称3', maker: 'メーカー3', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 4, tool_name: '名称4', maker: 'メーカー4', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
      { tool_id: 5, tool_name: '名称5', maker: 'メーカー5', recommend: 3, easy_fishing: 4, description: 'テキストテキスト'},
    ],
  },
];

const ToolPage = () => {

  if (toolData === null) {
    return
  }

  return (
    <Layout>
      <Tool 
        data={toolData}
      />
    </Layout>
  );
}

export default ToolPage;
