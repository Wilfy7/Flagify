import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box>

    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    pt="2rem"
    gap={"3rem"}
    >
      <Heading 
      size="6xl" 
      fontSize="6rem" 
      letterSpacing="0.8rem" 
      >Flagify</Heading>
      <Text letterSpacing="0.5rem"
      >Find all the Countries in the world here </Text>
    </Box>
    </Box>
  )
}

export default Banner
