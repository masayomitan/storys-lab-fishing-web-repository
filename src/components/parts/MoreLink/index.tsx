import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react'

type MoreLinkProps = {
  route: string
}

const MoreLink: React.FC<MoreLinkProps> = ({ route }) => {
	return (
		<Box
    boxShadow="md"
    m="2px 10px"
    p={2}
    borderRadius="5"
    background="lightblue"
    borderColor="deepskyblue"
  >
    <Link href={`/${route}`}>
      <Text
        fontSize={20}
        fontWeight="bold"
        textAlign="center"
        color="#fff"
      >
        さらに見る
      </Text>
    </Link>
  </Box>
	)

}

export default MoreLink
