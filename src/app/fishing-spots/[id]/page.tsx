'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Layout from '../../../components/parts/Layout/layout';
import FishingSpotDetail from '../../../components/pages/FishingSpot/detail';

// 実データできたら削除
const fishingSpots: any = [
  {
    id: 1,
    name: '名称1',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト1',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 2,
    name: '名称2',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト2',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 3,
    name: '名称3',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト3',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 4,
    name: '名称4',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 5,
    name: '名称4',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
      { id: 4, name: '堤防' },
      { id: 5, name: '潮干狩り' },
    ],
  },
];

const fishesData: any = [
  {
    id: 1,
    name: '名称1',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト1',
  },
  {
    id: 2,
    name: '名称2',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト2',
  },
  {
    id: 3,
    name: '名称3',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト3',
  },
  {
    id: 4,
    name: '名称4',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト4',
  },
];

const FishingSpotPage = () => {
  const [fishingSpotId, setFishingSpotId] = useState<string | null>(null);
  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const fishId = params.id
      setFishingSpotId(fishId as string);
    } 
  }, [params]);


  return (
    <Layout>
      <FishingSpotDetail
        fishingSpotId={fishingSpotId}
      />
    </Layout>
  );
}

export default FishingSpotPage;
