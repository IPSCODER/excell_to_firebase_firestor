import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Search from '../components/searchInput'
import FileForm from '../components/file-picker/FileForm'

interface LayoutProps{
    children:ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Box sx={{
        p:"2% 2% 0"
    }}>
    <FileForm/>
    </Box>
    <Search/>
    <Box sx={{
        p:"2% 2% 0"
    }} >
        {children}
    </Box>
        </>
  )
}

export default Layout