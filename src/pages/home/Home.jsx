import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Consulting from '../../components/Consulting/Consulting'
import HandowndSell from '../../components/HandowndSell/HandowndSell'
import Consulting2 from '../../components/Consulting2/Consulting2'
import MachineMadeCarpet from '../../components/MachineMadeCarpets/MachineMadeCarpet'
import MemberShip from '../../components/MemberShip/MemberShip'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Consulting/>
    <HandowndSell/>
    <Consulting2/>
    <MachineMadeCarpet/>
    <MemberShip/>
    </>
  )
}
