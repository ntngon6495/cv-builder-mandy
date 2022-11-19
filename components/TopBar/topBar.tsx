import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

export interface TopBarProps {}

export default function TopBar(props: TopBarProps) {
  const [active, setActive] = useState('')
  const router = useRouter()

  console.log(active)

  return (
    <>
      <div className="border-b-[1px]">
        <div className="grid grid-cols-2 leading-[78px] mx-[135px]">
          <div className="col-span-1 pl-[70px] border-l-[1px]">
            <a
              onClick={() => router.push('/')}
              className="text-base font-bold text-[#E23D27] cursor-pointer"
            >
              MANDY NGUYEN
            </a>
          </div>
          <div className="col-span-1 pr-[70px] border-r-[1px]">
            <ul className="flex justify-end gap-5 ">
              <li>
                <a
                  className={`cursor-pointer ${active === 'ABOUT_ME' ? 'text-[#E23D27]' : ''}`}
                  onClick={() => {
                    setActive('ABOUT_ME')
                    router.push('about')
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className={`cursor-pointer  ${active === 'PROJECT' ? 'text-[#E23D27]' : ''}`}
                  onClick={() => {
                    setActive('PROJECT')
                    router.push('/project')
                  }}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className={`cursor-pointer ${active === 'CONTACT' ? 'text-[#E23D27]' : ''}`}
                  onClick={() => {
                    setActive('CONTACT')
                    router.push('/contact')
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
