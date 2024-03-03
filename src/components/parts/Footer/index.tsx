import React from 'react';
import { 
    Box, 
    SimpleGrid, 
    Text, 
    Stack, 
    useMediaQuery 
} from '@chakra-ui/react';

import PrefecturesContainer from '../Prefecture/index';
import './style.css';

const Footer: React.FC = () => {
  // レスポンシブ列数を設定
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box>      
      <PrefecturesContainer />
      <Box as="footer" w="full" p={4} borderTop="1px solid" borderColor="gray.200">
        <SimpleGrid columns={isLargerThan480 ? 4 : 2} spacing={4}>
          <Box boxShadow="sm" p={4} borderRadius="md">
            <Text textAlign="center">運営会社</Text>
          </Box>
          <Box boxShadow="sm" p={4} borderRadius="md">
            <Text textAlign="center">お問い合わせ</Text>
          </Box>
          <Box boxShadow="sm" p={4} borderRadius="md">
            <Text textAlign="center">よくある質問</Text>
          </Box>
          <Box boxShadow="sm" p={4} borderRadius="md">
            <Text textAlign="center">プライバシーポリシー</Text>
          </Box>
        </SimpleGrid>
        <Box className='copyright'>
          © 2023 Story&apos;s Lab Fishing. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
