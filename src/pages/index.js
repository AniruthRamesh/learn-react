// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import List from './components/list_plain'
// import List from './components/list_keys'
import Images from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
// import Gallery from './components/whyState'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
// import Form from './components/snapshot2'
import ShoppingCart from './qcomps/shoppingCart'

export default function Home() {
  return (
    <div className={styles.main}>
        <Images />
        <RecipeList/>
        <Form/>
        <FeedbackForm/>
        {/* <Form/> */}
        <ShoppingCart/>

    </div>
  )
}
