'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";

import Layout from '../../../components/parts/Layout/layout';
import PrefectureDetail from '../../../components/pages/Prefecture/detail';


const PrefecturePage = () => {

    const [prefectureId, setPrefectureId] = useState<string | null>(null);

    const params = useParams();

    useEffect(() => {
      if (params && params.id) {
        const prefectureId = params.id
        setPrefectureId(prefectureId as string);
      } 
    }, [params]);

  return (
    <Layout>
      <PrefectureDetail
        prefectureId={prefectureId}
      />
    </Layout>
  );
}

export default PrefecturePage;
