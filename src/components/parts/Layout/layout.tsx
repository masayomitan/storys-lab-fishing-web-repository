import React, { useCallback, useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import "../../../app/globals.css";

export type LayoutProps = {
  title?: string;
  maxWidth?: string;
  children?: React.ReactElement;
  isVisibilityFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
  return (
    <Flex direction="column" minHeight="100dvh">
      <Head>
        <title>{'title'}</title>
      </Head>
      <Header />
      <Box>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
