import React from 'react'
import Footer from '../Components/Folder/Footer'
import Header from '../Components/Header/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
