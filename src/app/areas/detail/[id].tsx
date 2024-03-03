import React, { useState, useEffect } from 'react';

import { Container } from '@chakra-ui/react';
import { useParams } from "next/navigation";


const Area = () => {
  const [areaId, setAreaId] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      const areaId = params.id
      setAreaId(areaId as string);
    } 
  }, [params]);

  return (
    <Container>エリア詳細ページ {areaId}</Container>
  );
}

export default Area;
