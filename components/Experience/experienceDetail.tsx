import React, { useState } from 'react'
import styled from 'styled-components'

export interface IExperienceProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`

export default function ExperienceDetail(props: IExperienceProps) {
  const [typeB, setTypeB] = useState(false)
  const [typeE, setTypeE] = useState(false)
  const [typeO, setTypeO] = useState(false)

  return (
    <Section>
      <div className="grid grid-cols-2 mx-[135px] px-[70px] border-l-[1px] border-r-[1px]">
        <div className="mt-[100px]">
          <p className="text-[50px] font-semibold">Experienced many domains of knowledge</p>
        </div>
        <div className="py-[60px]">
          <div
            className={`px-[50px] py-[30px] border-b-[1px] ${
              typeB ? 'border-l-black border-l-[1px]' : 'border-l-[1px]'
            }`}
          >
            <p
              className="font-semibold cursor-pointer"
              onClick={() => {
                setTypeB(!typeB)
              }}
            >
              Business Management CRM/Loyalty
            </p>
            <div className="mt-[15px]">
              <ul
                className={typeB ? 'list-disc ml-[15px] h-[50px] ' : 'h-0'}
                style={{ transition: 'height 0.5s' }}
              >
                {typeB && (
                  <>
                    <li>Accounting & Tax Services</li>
                    <li>Booking Healthcare & Spa</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div
            className={`px-[50px] py-[30px] border-b-[1px] ${
              typeE ? 'border-l-black border-l-[1px]' : 'border-l-[1px]'
            }`}
          >
            <p
              className="font-semibold cursor-pointer"
              onClick={() => {
                setTypeE(!typeE)
              }}
            >
              E-commerce platform
            </p>
            <div className="mt-[15px]">
              <ul
                className={typeE ? 'list-disc ml-[15px] h-[80px]' : 'h-0'}
                style={{ transition: 'height 0.5s' }}
              >
                {typeE && (
                  <>
                    <li>Business Model: B2B, B2C, B2B2C, C2C</li>
                    <li>Accounting & Tax Services</li>
                    <li>Telecommunications Products and Services</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div
            className={`px-[50px] py-[30px] border-b-[0px] ${
              typeO === true ? 'border-l-black border-l-[1px]' : 'border-l-[1px]'
            }`}
          >
            <p
              className="font-semibold cursor-pointer"
              onClick={() => {
                setTypeO(!typeO)
              }}
            >
              On-demand Super App Solution
            </p>
            <div className="mt-[15px]">
              <ul
                className={typeO ? 'list-disc ml-[15px] h-[40px]' : 'h-0'}
                style={{ transition: 'height 0.5s' }}
              >
                {typeO && <li>Trusted by high-growth startups and enterprise</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
