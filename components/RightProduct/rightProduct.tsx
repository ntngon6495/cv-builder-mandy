import * as React from 'react'
import styled from 'styled-components'

export interface IRightProductProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`

export default function RightProduct(props: IRightProductProps) {
  return (
    <Section>
      <div className="mx-[135px] py-[60px] border-l-[1px] border-r-[1px] text-center">
        <p className="text-[48px] font-semibold">
          Building the <span className="text-[#E23D27]">Right Product</span>
        </p>
      </div>
      <div className="grid grid-cols-3 mx-[135px] px-[70px] border-l-[1px] border-r-[1px] border-t-[1px]">
        <div className="py-20 px-10">
          <p className="font-semibold text-2xl">Requirements & Ideas</p>
          <p className="mt-[10px] text-[16px] leading-[30px] font-normal">
            Formulate the requirements and ideas of the stakeholders regarding the product from the
            user’s point of view.
          </p>
        </div>
        <div className="py-20 px-10 border-l-[1px]">
          <p className="font-semibold text-2xl">Analyze & assess</p>
          <p className="mt-[10px] text-[16px] leading-[30px] font-normal">
            What business value does a user story have and what development effort is behind it?
          </p>
        </div>
        <div className="py-20 px-10 border-l-[1px]">
          <p className="font-semibold text-2xl">Making decisions again and again</p>
          <p className="mt-[10px] text-[16px] leading-[30px] font-normal">
            Which user stories are realized, which are not?
          </p>
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
