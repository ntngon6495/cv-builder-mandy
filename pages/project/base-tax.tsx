import Image from 'next/image'
import * as React from 'react'
import { MainLayout } from '../../components/layout/default.layout'

export interface BaseTaxProps {}

const BaseTaxPage = (props: BaseTaxProps) => {
  return (
    <>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[60px] border-r-[1px] border-l-[1px]">
          <p className="font-semibold text-[80px]">Basetax</p>
          <p className="text-[20px]">Fintech CRM/Loyalty</p>
          <img className="h-[520px] mt-[80px] mx-auto" src="/images/basetax/2.png" />
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="grid grid-cols-2 py-[90px] text-center mx-[135px] border-r-[1px] border-l-[1px]">
          <div className="text-left px-[60px]">
            <p className="font-semibold text-[40px]">Overview</p>
            <p className="mb-[40px] mt-6">
              A leading UK tax service provider for individuals, expatriates, partnerships & small
              businesses.
            </p>
            <div className="flex mt-[10px]">
              <button
                className="border-none font-semibold"
                // onClick={() => router.push('/project/base-tax')}
              >
                VIEW LIVE PROJECT
              </button>
              <img className="w-6 h-6 ml-2" src="/images/corner-up-right.svg" />
            </div>
          </div>
          <div className="border-b-[1px] text-left pt-[60px] pb-[20px] mr-[60px]">
            <p className="font-medium text-[20px]">
              Strategy: <span className="font-normal">Angular, Laravel</span>
            </p>
            <p className="font-medium text-[20px] mt-4">
              Client: <span className="font-normal">Basetax</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[90px]  border-r-[1px] border-l-[1px]">
          <img className="w-[820px] mx-auto" src="/images/basetax/1.jpeg" />
          <p className="px-[60px] text-left mt-5">
            Previously, financial bookkeeping was complicated and cumbersome, also it was generally
            more suitable for large enterprises than small businesses. Until Making Tax Digital
            introduced, there were a vast range of accounting software that’s been designed uniquely
            for small businesses and self-employed workers, and many of the products were
            surprisingly cheap or even completely free. Basetax was becoming more popular as one of
            the first trend-capture among the low cost but high quality products.
          </p>
          <img className="w-[820px] mx-auto mt-5" src="/images/basetax/3.jpeg" />
          <img className="w-[820px] mx-auto mt-5" src="/images/basetax/4.jpeg" />
          <img className="w-[820px] mx-auto mt-5" src="/images/basetax/5.jpeg" />
        </div>
      </div>
    </>
  )
}

BaseTaxPage.Layout = MainLayout
export default BaseTaxPage
