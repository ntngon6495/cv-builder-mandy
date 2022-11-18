import React from 'react'
import styled from 'styled-components'

export interface TopBarProps {}

const Section = styled.div`
  border-bottom: solid 1px #e9e9e9;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  line-height: 78px;
  margin: 0 135px;
`
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 135px;
  margin-top: -1px;
  border: solid 1px #e9e9e9;
  border-bottom: none;
`

export default function TopBar(props: TopBarProps) {
  console.log(' Top bar ')
  return (
    <>
      <Section>
        <div className="border-b-[1px]">
          <Container>
            <div className="col-span-1 pl-[70px] border-l-[1px]">
              <a href="/" className="text-base font-bold text-[#E23D27]">
                MANDY NGUYEN
              </a>
            </div>
            <div className="col-span-1 pr-[70px] border-r-[1px]">
              <ul className="flex justify-end gap-5 ">
                <li>
                  <a href="/">About Me</a>
                </li>
                <li>
                  <a href="/">Project</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <Info>
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
        </Info>
      </Section>
    </>
  )
}
