'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { Container } from '@chakra-ui/react';
import Layout from '../../../../components/parts/Layout/layout';
import FishingSpotDetail from '../../../../components/pages/FishingSpot/detail';
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
  const [fishes, setFishes]: any = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchFishingSpotData(pathId);
      setData(result);
      setFishes(fishesData);
    };
    fetchData();
  }, [pathId, fishes]);

  // TODO 
  if (!data) {
    return false;
  }

  return (
    <Layout>
      <FishingSpotDetail
        data={data}
        fishes={fishes}
        pathId={pathId}
      />
    </Layout>
  );
}

export default FishingSpotPage;
