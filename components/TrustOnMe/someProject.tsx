import * as React from 'react'
import styled from 'styled-components'

export interface SomeProjectProps {}

const Section = styled.div`
  height: 200px;
  border-bottom: solid 1px #e9e9e9;
`

export default function SomeProject(props: SomeProjectProps) {
  return (
    <Section>
      <div className="grid grid-cols-6 mx-[135px] my-auto leading-[200px]">
        <div className="col-span-2 text-center border-l-[1px]">
          <p className="text-[24px] font-semibold">Who keep trust on me</p>
        </div>
        <div className="pl-[30px] col-span-4 border-r-[1px] border-l-[1px] flex gap-[20px] items-center">
          <img src="./images/cxi-logo.png" className="w-[160px] h-[100px]"></img>
          <img src="./images/basetax-logo.png" className="w-[160px] h-[100px]"></img>
          <img src="./images/fixle-logo.png" className="w-[160px] h-[100px]"></img>
          <img src="./images/broyte-logo.png" className="w-[160px] h-[100px]"></img>
        </div>
      </div>
    </Section>
  )
}
