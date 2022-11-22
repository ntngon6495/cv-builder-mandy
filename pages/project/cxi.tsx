import * as React from 'react'
import { MainLayout } from '../../components/layout/default.layout'

export interface cxiProps {}

const CXIPage = (props: cxiProps) => {
  return (
    <>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[60px] border-r-[1px] border-l-[1px]">
          <p className="font-semibold text-[80px]">CXI</p>
          <p className="text-[20px]">Business Management CRM/Loyalty</p>
          <img className="h-[520px] mt-[80px] mx-auto" src="/images/cxi/1.png" />
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="grid grid-cols-2 py-[90px] text-center mx-[135px] border-r-[1px] border-l-[1px]">
          <div className="text-left px-[60px]">
            <p className="font-semibold text-[40px]">Overview</p>
            <p className="mb-[40px] mt-6">
              SaaS solution for brands improve their customer experience in industries: F&B, Spa,
              Clinic, Community ...
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
              Strategy: <span className="font-normal">Flutter, SaaS, Laravel</span>
            </p>
            <p className="font-medium text-[20px] mt-4">
              Client: <span className="font-normal">CXI Digital</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[90px]  border-r-[1px] border-l-[1px]">
          <p className="px-[60px] text-left mb-9 text-[22px]">
            SaaS solution for brands improve their customer experience in industries:{' '}
            <strong>F&B, Spa, Clinic, Community ...</strong>
          </p>
          <p className="px-[60px] text-left mb-9 text-[22px]">
            CXI provides a smart approach to keep customers with brands by powerful CDP. CXI offer
            blockchain solution for enterprise/big community launch their own token.
          </p>
          <p className="px-[60px] text-left mb-6 text-[22px]">
            <strong>Core features:</strong>
          </p>
          <ul className="text-left mx-[80px] mb-9 list-disc font-medium text-[22px]">
            <li>
              <strong>Generate an app easily with drag-n-drop UI</strong>
            </li>
            <li>
              <strong>CRM for contact management, case management, sale performance.</strong>
            </li>
            <li>
              <strong>Solutions for restaurants: POS, Kitchen display, Inventory, Delivery</strong>
            </li>
            <li>
              <strong>Solution for community: events, eCommerce, membership ...</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

CXIPage.Layout = MainLayout
export default CXIPage
