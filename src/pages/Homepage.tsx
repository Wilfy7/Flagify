import React, { useEffect, useState } from 'react'
import { Box, Image, Input, Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import { increment } from '../redux/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';



const Homepage = () => {
  // setting up a usestate for countries
const [countries, setCountries] = useState([])

const color = useSelector((state:any) => state.backgroundColor.color)

// using state to interact with the redux store
const dispatch = useDispatch()

// A function to handleClick
const handleClick = (e:any) => {
  dispatch(increment())

  console.log(e.target.id)
}

// fetching the Api with useeffect
useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data)=> setCountries(data) )
    console.log(countries)
  }, [])

  // To handle the search bar
  const handleSearch = (e: any) => { 
    const lowerCase = e.target.value.toLowerCase() 
    setCountries(countries)   
    
   const searchResult = countries.filter((country: any) => {
      return country.name.official.toLowerCase().includes(e.target.value.toLowerCase())
    }) 
      setCountries(searchResult)
  }

  return ( 
  <Box>
    <Banner />
    <Box>
    <Input
       placeholder='Search for your Country' 
       size="lg" ml="px"
       width="100%"
       height="2.9rem" 
       mt="1rem"
       borderRadius="10px"
       p="10px"
       id='Search'
       onChange={handleSearch}
       onKeyDown={handleSearch}
       onBlur={() => setCountries(countries)}
       
    />
   
     

    </Box>
    {/* Category Heading */}
    <Box
    display="flex"
    p="10px"
    justifyContent="space-between"
    alignItems="center"
    style={{ 
    color : color === "#112838" ? "#fff" : "#112838" }}
    
    >
     <Text>Flag</Text>
     <Text>Name</Text>
     <Text>Region</Text>
     <Text>Capital</Text>
     <Text>Population</Text>
     <Text>Favorite</Text>
    </Box>
     <hr style={{ width:"100%" }}/>
     {countries.length && (countries.map((country: any) => (
      <Box key={country.latlng}>
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      >
        <Link to=''>
          <Image 
          src={country.flags.png} 
          alt={country.name.common}
          boxSize="50px"
          />
        </Link>
         
        <Link to=
        {`/country/${country.name.official}`}>
          <span 
          style={{
            cursor: "pointer",
            color : color === "#112838" ? "#fff" : "#112838" 
          }}
          className='country_span'>{country.name.official.split(' ')[0]}
          </span>
        </Link>

        <Link to=
        {`/country/${country.name.official}`}>
          <span 
           style={{
            cursor: "pointer",
            color : color === "#112838" ? "#fff" : "#112838" }}
          className='country_span'
        >{country.region}
          </span>
        </Link>

        <Link to=
        {`/country/${country.name.official}`}>
          <span 
          style={{
            cursor: "pointer",
            color : color === "#112838" ? "#fff" : "#112838" }}
          className='country_span'

          >{country.capital}
          </span>
        </Link>

        <Link to=
        {`/country/${country.name.official}`}>
          <span 
          style={{
            cursor: "pointer",
            color : color === "#112838" ? "#fff" : "#112838" }}
          className='country_span'
          >
            {country.population}
            </span>
        </Link>

        
          <span className='country_span'
          onClick={handleClick}
          style={{cursor: 'pointer',
          color : color === "#112838" ? "#fff" : "#112838" 

        }}

          id={country.name.official}
          >
            <FavoriteIcon />
            </span>
            
        </Box>
      
      <hr style={{ width:"100%" }}/>

      </Box>
     )))

     
     }

  </Box> 

  
  )
}


export default Homepage




