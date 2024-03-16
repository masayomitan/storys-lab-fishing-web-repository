'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Layout from '../../../components/parts/Layout/layout';
import FishingSpot from '../../../components/pages/FishingSpot';
// import { getDataById } from '../../utils/api'

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
    name: '名称5',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト5',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 6,
    name: '名称6',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト6',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 7,
    name: '名称7',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト7',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 8,
    name: '名称8',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト8',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 9,
    name: '名称9',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト9',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 10,
    name: '名称10',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト10',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 11,
    name: '名称11',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト11',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
  {
    id: 12,
    name: '名称12',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト12',
    tags: [
      { id: 1, name: 'トイレ' },
      { id: 2, name: '駐車場' },
      { id: 3, name: 'コンビニ' },
    ],
  },
];



const fetchFishingSpotData = async (
  id: any
) => {
  return fishingSpots;
    // props: await getDataById(id),

};

const FishingSpotPage = () => {
  const useParam = useParams()
  const pathId = (useParam) ? useParam.id : null
  const [data, setData]: any = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchFishingSpotData(pathId);
      setData(fishingSpots);
    };
    fetchData();
  }, [pathId]);

  // TODO 
  if (!data) {
    return false;
  }

  return (
    <Layout>
      <FishingSpot
        data={data}
        pathId={pathId}
      />
    </Layout>
  );
}

export default FishingSpotPage;
