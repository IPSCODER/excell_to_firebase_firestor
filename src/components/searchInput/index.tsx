import { Box, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../context/data-context'

const Search = () => {

    const [search,setSearch] = useContext(UserContext)

  return (
    <Box sx={{
        p:"2% 2% 0"
    }}>
    <input type='text' style={{
        backgroundColor:"transparent",
        border:"none",
        borderBottom:"1px solid #fff",
        width:"100%",
        display:"flex",
        height:"40px",
        padding:"5px",
        color:"#fff",
    }} placeholder='Search....' value={search} onChange={(e) => {setSearch(e.target.value)}}   />
    </Box>
  )
}

export default Search