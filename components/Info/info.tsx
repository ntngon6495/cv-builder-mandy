import * as React from 'react'

export interface InfoProps {}

export default function Info(props: InfoProps) {
  return (
    <div className="border-b-[1px]">
      <div className="grid grid-cols-2 mx-[135px] border-r-[1px] border-l-[1px]">
        <div className="pl-[67px] pt-[98px] pb-[98px] border-r-[1px]">
          <p className="font-semibold text-[80px] tracking-tightest leading-[94px]">
            Welcome to my portfolio
          </p>
          <p className="mt-5 text-[16px] leading-[32px]">
            A Digital Experience Designer with 7+ years of experience across different domains. I
            love to see my products grow and be a part of its transformation process.
          </p>
          <button className="mt-5 h-12 w-[250px] rounded-[12px] bg-[#E23D27;] text-base font-[500]  text-white">
            CONTACT WITH ME
          </button>
        </div>

        <div>
          <img className="w-[500px] h-[500px] pl-[15px]" src="./images/img-1.png" />
        </div>
      </div>
    </div>
  )
}
