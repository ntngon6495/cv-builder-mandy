import * as React from 'react'
import { MainLayout } from '../../components/layout/default.layout'

export interface VinIDProps {}

const VinIDPage = (props: VinIDProps) => {
  return (
    <>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[60px] border-r-[1px] border-l-[1px]">
          <p className="font-semibold text-[80px]">VinID</p>
          <p className="text-[20px]">CRM/Loyalty Big Data</p>
          <img className="h-[520px] mt-[80px] mx-auto" src="/images/vinID/1.png" />
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="grid grid-cols-2 py-[90px] text-center mx-[135px] border-r-[1px] border-l-[1px]">
          <div className="text-left px-[60px]">
            <p className="font-semibold text-[40px]">Overview</p>
            <p className="mb-[40px] mt-6">
              Upgrading existing mobile app to improve UX and deliver new features to 5 million
              users.
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
              Strategy:{' '}
              <span className="font-normal">Loyalty, .NET, Swift, Koltin, Microservice</span>
            </p>
            <p className="font-medium text-[20px] mt-4">
              Client: <span className="font-normal">Vingroup</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px]">
        <div className="justify-center text-center mx-[135px] py-[90px] px-14   border-r-[1px] border-l-[1px]">
          <p className="font-bold text-[48px] text-left mb-9">
            Loyalty app used by 5 million users
          </p>
          <p className="font-normal text-[22px] text-left mt-8">
            VinGroup is the most well-known private business group in Vietnam with a comprehensive
            ecosystem including: real estate, education, health, retail, travel, entertainment,
            heavy industry. VinID cards were issued as customer loyalty cards for Vingroup members.
            Having too many cards in pocket raise a lot of difficulties for both publishers and
            users. Therefore, digitalizing all this process is inevitable, benefits VinGroup and
            more than 5 milion users: unlimited promotions and handling as many different types of
            loyalty cards as we pleased.
          </p>
          <img className="w-[820px] mx-auto" src="/images/vinID/2.jpeg" />
          <p className="font-bold text-[48px] text-left my-10">New UX bring more revenue</p>
          <h2 className="text-left mb-10 text-[24px] font-extralight">
            Optimize the user flow and makes the interface more intuitive
          </h2>
          <ul className="text-left text-[24px] mb-10 ml-8 list-disc">
            <li>
              One of the crucial components of the VinID app was its integration with QR Code. Users
              can add or use points to make payment quickly by scanning QR code.
            </li>
            <li>
              Simplifying UI, have a clear layout that is easy use when a client is in a hurry or on
              the go
            </li>
            <li>
              Handling small improvement from push notification, delivering vouchers to million
              users in comfortable methods.
            </li>
          </ul>
          <img className="w-[820px] mx-auto my-20" src="/images/vinID/3.jpeg" />
          <img className="w-[40px] mx-auto my-5" src="/images/vinID/4.png" />
          <div className="px-4 border-l-[#03993f] border-l-[2px] mb-9">
            <p className="text-left font-extralight text-[24px] italic ">
              THE RESULT – A DIAMOND UNDER PRESSURE
            </p>
          </div>
          <h2 className="text-left mb-10 text-[24px] font-extralight">
            Meet all the customer’s requirement under a pressured deadline to help Vingroup
            Marketing Department runs campaigns on time.
          </h2>
          <ul className="text-left text-[24px] mb-10 ml-8 list-disc">
            <li>Minimalistic and elegant UI/UX for Vietnamese culture.</li>
            <li>Strengthen security level & integrated Face ID.</li>
            <li>System can serve large request with load balancing.</li>
            <li>Strict and intense testing for apps with 1 million downloads.</li>
            <li>Engage more users through the reward system.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

VinIDPage.Layout = MainLayout
export default VinIDPage
