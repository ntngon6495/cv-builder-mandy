import * as React from 'react'
import styled from 'styled-components'

export interface IExperienceProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`

export default function ExperienceDetail(props: IExperienceProps) {
  return (
    <Section>
      <div className="grid grid-cols-2 mx-[135px] px-[70px] border-l-[1px] border-r-[1px]">
        <div className="my-auto">
          <p className="text-[50px] font-semibold">Experienced many domains of knowledge</p>
        </div>
        <div className="py-[60px]">
          <div className="px-[50px] py-[30px] border-l-[1px] border-b-[1px]">
            <p className="font-semibold">Business Management CRM/Loyalty</p>
            <ul className="list-disc ml-[15px]">
              <li>Accounting & Tax Services</li>
              <li>Booking Healthcare & Spa</li>
            </ul>
          </div>
          <div className="px-[50px] py-[30px] border-l-[1px] border-b-[1px]">
            <p className="font-semibold">E-commerce platform</p>
            {/* <ul className="list-disc ml-[15px]">
              <li>Accounting & Tax Services</li>
              <li>Booking Healthcare & Spa</li>
            </ul> */}
          </div>
          <div className="px-[50px] py-[30px] border-l-[1px] border-b-0">
            <p className="font-semibold">On-demand Super App Solution</p>
            {/* <ul className="list-disc ml-[15px]">
              <li>Accounting & Tax Services</li>
              <li>Booking Healthcare & Spa</li>
            </ul> */}
          </div>
        </div>
      </div>
    </Section>
  )
}
