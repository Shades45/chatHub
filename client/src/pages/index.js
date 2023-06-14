import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login/'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Users from './users'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const {token} = useSelector(state=> state.user)
  // if (!token) {
  //   return (
  //     <Login/>
  //   )
  // }else {
  //   return (
  //     <Users/>
  //   )
  // }
  return (
    <>
    <p>Hi</p>
    </>
  )
}
