import * as React from 'react'
import styled from 'styled-components'

export interface IReviewProps {}

const Section = styled.div`
  /* height: 200px; */
  /* padding: 0px 70px; */
  border-bottom: solid 1px #e9e9e9;
`

export default function Review(props: IReviewProps) {
  return (
    <Section>
      <div className="mx-[135px] py-[60px] border-l-[1px] border-r-[1px] text-center">
        <p className="text-[48px] font-semibold">Review</p>
      </div>
      <div className="grid grid-cols-3 mx-[135px] px-[70px] border-l-[1px] border-r-[1px] border-t-[1px]">
        <div className="py-20 px-10">
          <img className="w-[70px] h-[70px] rounded-[20px]" src="./images/avatar-1.svg" />
          <p className="font-semibold text-2xl mt-[10px]">Name</p>
          <p className="font-[400] text-[16px]">CPO - BaseTase</p>
          <p className="mt-[5px] text-[16px] leading-[30px] font-normal italic">
            Amet minim mollit non deseruntAmet minim mollit non deseruntAmet minim mollit non
            deseruntAmet minim mollit non deserunt
          </p>
        </div>
        <div className="py-20 px-10 border-l-[1px]">
          <img className="w-[70px] h-[70px] rounded-[20px]" src="./images/avatar-2.svg" />
          <p className="font-semibold text-2xl mt-[10px]">Name</p>
          <p className="font-[400] text-[16px]">CPO - BaseTase</p>
          <p className="mt-[5px] text-[16px] leading-[30px] font-normal italic">
            Amet minim mollit non deseruntAmet minim mollit non deseruntAmet minim mollit non
            deseruntAmet minim mollit non deserunt
          </p>
        </div>
        <div className="py-20 px-10 border-l-[1px]">
          <img className="w-[70px] h-[70px] rounded-[20px]" src="./images/avatar-3.svg" />
          <p className="font-semibold text-2xl mt-[10px]">Name</p>
          <p className="font-[400] text-[16px]">CPO - BaseTase</p>
          <p className="mt-[5px] text-[16px] leading-[30px] font-normal italic">
            Amet minim mollit non deseruntAmet minim mollit non deseruntAmet minim mollit non
            deseruntAmet minim mollit non deserunt
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
