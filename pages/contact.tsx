import * as React from 'react'
import { MainLayout } from '../components/layout/default.layout'
import TopBar from '../components/TopBar/topBar'
import styles from '../styles/Home.module.css'

export interface ContactProps {}

const ContactPage = (props: ContactProps) => {
  return (
    <>
      <div className="">
        <div className="mx-[135px] text-center border-l-[1px] border-r-[1px] grid grid-cols-2">
          <div className="pt-[120px]">
            <p className="text-[64px] font-semibold ml-[20px]">Contact with me</p>
            <div className="px-[60px] mt-[30px]">
              <div className="flex">
                <img className="w-8 h-8" src="./images/icon-location.svg" />
                <p className="text-xl font-normal text-left leading-8 ml-[10px]">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
              <div className="flex mt-5">
                <img className="w-8 h-8" src="./images/icon-world.svg" />
                <p className="text-xl font-normal text-left leading-8 ml-[10px]">
                  www.mandynguyen.com
                </p>
              </div>
              <div className="flex  mt-5">
                <img className="w-8 h-8" src="./images/icon-mail.svg" />
                <p className="text-xl font-normal text-left leading-8 ml-[10px]">
                  mandy17.designer@gmail.com
                </p>
              </div>
              <div className="flex  mt-5">
                <img className="w-8 h-8" src="./images/icon-phone.svg" />
                <p className="text-xl font-normal text-left leading-8 ml-[10px]">
                  +84 905 38 32 31
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pl-3 border-l-[1px]">
            <img className="w-[500px] h-[500px]" src="./images/contact-img.svg" />
          </div>
        </div>
      </div>
    </>
  )
}

ContactPage.Layout = MainLayout
export default ContactPage
