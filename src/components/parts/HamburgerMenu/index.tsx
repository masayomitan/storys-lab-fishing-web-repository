'use client'

import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";

const ScrollTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["ホーム", "プロフィール", "設定", "お問い合わせ", "ログアウト"];

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<GiHamburgerMenu style={{ fontSize: "32px" }} />}
        variant='outline'
        onClick={() => setIsOpen(!isOpen)}
      />
      <MenuList
        w="full"
        maxH="200vh"
        overflowY="auto"
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            fontSize="xl"
            style={{
              transition: "transform 0.7s",
              transform: isOpen ? "translateX(0)" : "translateX(60px)",
              transitionDelay: `${100 + index * 100}ms`
            }}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default ScrollTab;
