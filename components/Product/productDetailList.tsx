import * as React from 'react'
import styled from 'styled-components'

export interface IProductDetailListProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`

export default function ProductDetailList(props: IProductDetailListProps) {
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
          <button className="mt-[10px] border-none font-semibold">VIEW PRODJECT</button>
        </div>
        <div className="p-5 ">
          <img className="w-[370px] h-[330px]" src="./images/product-pulse.svg" />
          <p className="font-semibold text-2xl">PULSE</p>
          <p className="mt-[10px] text-[16px] leading-8">
            Pulse is a healthcare solutions provider dedicated to the provision of quality and
            cost-effective health, scientific & ....
          </p>
          <button className="mt-[10px] border-none font-semibold">VIEW PRODJECT</button>
        </div>
        <div className="p-5 ">
          <img className="w-[370px] h-[330px]" src="./images/product-cxi.svg" />
          <p className="font-semibold text-2xl">CXI</p>
          <p className="mt-[10px] text-[16px] leading-8">
            SaaS solution for brands improve their customer experience in industries: F&B, Spa,
            Clinic, Community ...
          </p>
          <button className="mt-[10px] border-none font-semibold">VIEW PRODJECT</button>
        </div>
      </div>
    </Section>
  )
}
