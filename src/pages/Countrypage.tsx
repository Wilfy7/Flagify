import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const Countrypage = () => {
  const [country, setCountry] = useState([])
  const location = useLocation()
  const id = location.pathname.split('/country/') [1]
  console.log(country)

  useEffect(() => {
    try{
      const fetchContry = async() => {
       const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
      setCountry(response.data)
    }
      fetchContry()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return (
    <Box 
    display="flex"
    marginTop="7rem"
    height="80" 
    justifyContent="center"
    alignItems="center"
    alignSelf="center"
    >
      
      <Box width={["100%", "100%", "100%", "100%"]}
      >
        {
          country.map((item:any) =>(
            <Box key={item.name} 
            >
              <Image 
              src={item.flags.png}
              alt={item.name.common}
              width={["100%", "100%", "80%", "100%"]}
              height='22rem'
              
              />
              <Box 
              w="50%"
              margin="0 auto"
              > 

              <Menu>
                <MenuButton
                as={Button} rightIcon={<ChevronDownIcon />}
                padding='10px'
                fontSize='1.2rem'
                width={["100%", "100%", "100%", "100%"]}
                bg= '#122738'
                color='white'
                border='none'
                >
                  {item.name.common} 
                </MenuButton>
                <MenuList>
                  <MenuItem
                  bg="#122738"
                  color="white"
                  border="none"
                  fontSize="1.2rem"
                  margin="10px"
                  >
                  Capital: {item.capital}</MenuItem>
                  <MenuItem
                  bg="#122738"
                  color="white"
                  border="none"
                  fontSize="1.2rem"
                  margin="10px"
                  >
                  Region: {item.region}</MenuItem>
                   <MenuItem
                     bg="#122738"
                     color="white"
                     border="none"
                     fontSize="1.2rem"
                     margin="10px"
                   >
                    Population: {item.population}
                   </MenuItem>

                   <MenuItem
                    bg="#122738"
                    color="white"
                    border="none"
                    fontSize="1.2rem"
                    margin="10px"
                   > Border: {item.borders}
                   </MenuItem>
                  
                </MenuList>
              </Menu>

              </Box>
            </Box>
          ))
        }

      </Box>
    </Box>
  )
}

export default Countrypage
