'use client'

import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";

const ScrollTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["ホーム", "プロフィール", "設定", "お問い合わせ"];

  return (
    <Box>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<GiHamburgerMenu style={{ fontSize: "32px" }} />}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Drawer 
          onClose={() => setIsOpen(false)} 
          isOpen={isOpen}
        >
          <DrawerOverlay
            />
          <DrawerContent
            >
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody
              h='100%'
              bg='rgba(255, 255, 255, 0.8)'
            >
            {menuItems.map((item, index) => (
              <Box
                textAlign='center'
                p={10}
                key={index}
                fontSize="24px"
              >
                {item}
              </Box>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Menu>

    </Box>
  );
}

export default ScrollTab;
