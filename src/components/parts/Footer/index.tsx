import React from 'react';

import Link from 'next/link'

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
          <Box>
            <Text textAlign="center">
              <a href="https://storys-lab.com/" target="_blank" rel="noopener noreferrer">
              運営会社
              </a>
            </Text>
          </Box>
          <Box>
            <Text textAlign="center">お問い合わせ</Text>
          </Box>
          <Box>
            <Text textAlign="center">よくある質問</Text>
          </Box>
          <Box>
            <Text textAlign="center">プライバシーポリシー</Text>
          </Box>
        </SimpleGrid>
        <Box className='copyright'>
          © 2024 Story&apos;s Lab Fishing. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
