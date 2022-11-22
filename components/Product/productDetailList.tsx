import { useRouter } from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

export interface IProductDetailListProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`
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
    link: '',
  },
  {
    image: './images/product-vinid.svg',
    title: 'VinID',
    detail:
      'Upgrading existing mobile app to improve UX and deliver new features to 5 million users.',
    link: '',
  },
  {
    image: './images/product-cxi.svg',
    title: 'CXI',
    detail:
      'SaaS solution for brands improve their customer experience in industries: F&B, Spa, Clinic, Community ... ',
    link: '',
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

export default function ProductDetailList(props: IProductDetailListProps) {
  const router = useRouter()

  return (
    <Section>
      <div className="mx-[135px] py-[60px] border-l-[1px] border-r-[1px] text-center">
        <p className="text-[48px] font-semibold mt-[60px]">The great Product Built</p>
        <button className="mt-[30px] h-12 w-[250px] rounded-[12px] bg-[#E23D27;] text-[16px] font-[600]  text-white">
          ALL PROJECT
        </button>
      </div>
      <div className="grid grid-cols-3 mx-[135px] px-[70px] border-l-[1px] border-r-[1px] border-t-[1px]">
        <div className="p-5">
          <img className="w-[370px] h-[330px]" src="./images/product-basetax.svg" />
          <p className="font-semibold text-2xl">Basetax</p>
          <p className="mt-[10px] text-[16px] leading-8">
            A leading UK tax service provider for individuals, expatriates, partnerships & small
            businesses.
          </p>
          <div className="flex mt-[10px]">
            <button
              className="border-none font-semibold"
              onClick={() => router.push('/project/base-tax')}
            >
              VIEW PROJECT
            </button>
            <img className="w-6 h-6 ml-2" src="/images/corner-up-right.svg" />
          </div>
        </div>
        <div className="p-5 ">
          <img className="w-[370px] h-[330px]" src="./images/product-pulse.svg" />
          <p className="font-semibold text-2xl">PULSE</p>
          <p className="mt-[10px] text-[16px] leading-8">
            Pulse is a healthcare solutions provider dedicated to the provision of quality and
            cost-effective health, scientific & ....
          </p>
          <div className="flex mt-[10px]">
            <button className="border-none font-semibold">VIEW PROJECT</button>
            <img className="w-6 h-6 ml-2" src="/images/corner-up-right.svg" />
          </div>
        </div>
        <div className="p-5 ">
          <img className="w-[370px] h-[330px]" src="./images/product-cxi.svg" />
          <p className="font-semibold text-2xl">CXI</p>
          <p className="mt-[10px] text-[16px] leading-8">
            SaaS solution for brands improve their customer experience in industries: F&B, Spa,
            Clinic, Community ...
          </p>
          <div className="flex mt-[10px]">
            <button
              className="border-none font-semibold"
              onClick={() => router.push('/project/cxi')}
            >
              VIEW PROJECT
            </button>
            <img className="w-6 h-6 ml-2" src="/images/corner-up-right.svg" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-[135px] px-[70px] border-l-[1px] border-r-[1px] border-t-[1px] py-[30px]">
        <div className="flex justify-end">
          <img className="w-[70] h-[70]" src="./images/arrow-left-circle.svg" />
        </div>
        <div></div>
        <div>
          <img className="w-[70] h-[70]" src="./images/arrow-right-circle.svg" />
        </div>
      </div>
    </Section>
  )
}
