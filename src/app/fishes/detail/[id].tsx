import React, { useState, useEffect } from 'react';

import { Container } from '@chakra-ui/react';
import { useParams } from "next/navigation";


const Fish = () => {
  const [fishId, setFishId] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      const fishId = params.id
      setFishId(fishId as string);
    } 
  }, [params]);

  return (
    <Container>魚詳細ページ {fishId}</Container>
  );
}

export default Fish;
