import React, { useState, useEffect } from 'react';

import { Container } from '@chakra-ui/react';
import { useParams } from "next/navigation";


const ToolCategory = () => {
  const [toolCategoryId, setToolCategoryId] = useState<string | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      const toolCategoryId = params.id
      setToolCategoryId(toolCategoryId as string);
    } 
  }, [params]);

  return (
    <Container>道具種別詳細ページ {toolCategoryId}</Container>
  );
}

export default ToolCategory;
