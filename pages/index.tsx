import Head from 'next/head'
import Image from 'next/image'
import ExperienceDetail from '../components/Experience/experienceDetail'
import Info from '../components/Info/info'
import { MainLayout } from '../components/layout/default.layout'
import ProductDetailList from '../components/Product/productDetailList'
import Review from '../components/Review/review'
import RightProduct from '../components/RightProduct/rightProduct'
import TopBar from '../components/TopBar/topBar'
import SomeProject from '../components/TrustOnMe/someProject'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Info />
      <SomeProject />
      <ExperienceDetail />
      <ProductDetailList />
      <RightProduct />
      <Review />
    </>
  )
}

Home.Layout = MainLayout
export default Home
