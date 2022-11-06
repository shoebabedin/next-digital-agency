import Head from 'next/head'
import CustomPlan from '../components/Common/CustomPlan/CustomPlan'
import CaseStudy from '../components/Home/CaseStudy'
import Explore from '../components/Home/Explore'
import Hero from '../components/Home/Hero'
import OurClient from '../components/Home/OurClient'
import RecentProjects from '../components/Home/RecentProjects'
import Service from '../components/Home/Service'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/* <!-- hero section --> */}
      <Hero/>
      {/* <!-- hero section --> */}

      {/* <!-- our service --> */}
      <Service/>
      {/* <!-- our service --> */}

      {/* <!-- Case Studies --> */}
      <CaseStudy/>
      {/* <!-- Case Studies --> */}

      {/* <!-- Explore our world class features --> */}
      <Explore/>
      {/* <!-- Explore our world class features --> */}

      {/* <!-- Recent Projects --> */}
      <RecentProjects/>
      {/* <!-- Recent Projects --> */}

      {/* <!-- Our Client Say --> */}
      <OurClient/>
      {/* <!-- Our Client Say --> */}

      {/* <!-- Custome Plan --> */}
      <CustomPlan/>
      {/* <!-- Custome Plan --> */}

    </>
  )
}
