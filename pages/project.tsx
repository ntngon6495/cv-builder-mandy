import { useRouter } from 'next/router'
import * as React from 'react'
import { MainLayout } from '../components/layout/default.layout'
import TopBar from '../components/TopBar/topBar'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

export interface IProjectProps {}

const productData = [
  {
    image: './images/product-localshop.svg',
    title: 'LocalShop App',
    detail: 'Amet minim mollit non deserunt',
    link: '',
  },
  {
    image: './images/product-localshop.svg',
    title: 'K-ID',
    detail: 'Amet minim mollit non deserunt',
    link: '',
  },
  {
    image: './images/product-localshop.svg',
    title: 'Thegioitho.vn',
    detail: 'Amet minim mollit non deserunt',
    link: '',
  },
  {
    image: './images/product-basetax.svg',
    title: 'Basetax',
    detail:
      'A leading UK tax service provider for individuals, expatriates, partnerships & small businesses.',
    link: '/project/base-tax',
  },
  {
    image: './images/product-vinid.svg',
    title: 'VinID',
    detail:
      'Upgrading existing mobile app to improve UX and deliver new features to 5 million users.',
    link: '/project/vinid',
  },
  {
    image: './images/product-cxi.svg',
    title: 'CXI',
    detail:
      'SaaS solution for brands improve their customer experience in industries: F&B, Spa, Clinic, Community ... ',
    link: '/project/cxi',
  },
  {
    image: './images/product-fixle.svg',
    title: 'Fixle',
    detail:
      'Fixle is an online booking and payment platform that allows customers to search, book, track and pay for over 80 service...',
    link: '',
  },
  {
    image: './images/product-pulse.svg',
    title: 'PULSE',
    detail:
      'Pulse is a healthcare solutions provider dedicated to the provision of quality and cost-effective health, scientific & ....',
    link: '',
  },
  {
    image: './images/product-proact.svg',
    title: 'ProAct',
    detail:
      'Providing data analytics and real-time intelligence for industrial enterprises to assist in decision-making. Working as ...',
    link: '',
  },
]

const ProjectPage = (props: IProjectProps) => {
  const router = useRouter()

  return (
    <>
      <div className="border-b-[1px]">
        <div className="mx-[135px] py-[60px] text-center border-l-[1px] border-r-[1px]">
          <p className="text-[64px] font-semibold">The great Product Built</p>
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="mx-[135px] border-l-[1px] border-r-[1px] grid grid-cols-3">
          {productData.map((item: any, i) => (
            <div key={i} className="p-[20px]">
              <img src={item.image} className="w-[370px] h-[300px]" />
              <p className="mt-5">{item.title}</p>
              <p className="mt-2 text-[16px] font-normal">{item.detail}</p>
              {/* <p className="mt-2 text-[16px] font-semibold">VIEW PROJECT</p> */}
              <div className="flex mt-[10px]">
                <button
                  className="border-none font-semibold"
                  onClick={() => router.push(item.link)}
                >
                  VIEW PROJECT
                </button>
                <img className="w-6 h-6 ml-2" src="/images/corner-up-right.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

ProjectPage.Layout = MainLayout
export default ProjectPage
