import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { 
    Box, 
    Heading,
    Flex,
    useMediaQuery 
} from '@chakra-ui/react';

import Head from 'next/head';
import HamburgerMenu from '../HamburgerMenu/index'

const Header: React.FC = () => {
  // レスポンシブ列数を設定
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box as="header" w="full" borderColor="gray.200" margin='0 10px'>
      <Head>
        <title>{'タイトル'}</title>
      </Head>
      <Flex
        as="header"
        w="full"
        boxShadow="sm"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size='lg' margin='10px 0 0 0'>
          <Box
            position="relative"
            width="50%"
          >
            <Link href="/">
              <Image
                src="/images/header-logo.png"
                width={130}
                height={30}
                style={{ 
                  objectFit: 'contain',
                  width: '120%',
                  height: 'auto',
                }}
                alt="Story's"
              />
            </Link>
          </Box>
        </Heading>
        <HamburgerMenu />
      </Flex>
    </Box>
  );
};

export default Header;
