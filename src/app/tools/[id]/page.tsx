'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Layout from '../../../components/parts/Layout/layout';
import ToolDetailBox from '../../../components/pages/Tool/detail';

const ToolDetailPage = () => {
  const params = useParams()
  const [toolId, setToolId] = useState<string | null>(null)

  useEffect(() => {
    if (params && params.id) {
      const toolId = params.id
      setToolId(toolId as string);
    } 
  }, [params]);

  return (
    <Layout>
      <ToolDetailBox 
        toolId={toolId}
      />
    </Layout>
  );
}

export default ToolDetailPage;
