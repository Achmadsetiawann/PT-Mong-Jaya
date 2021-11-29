import Head from "next/head";
import { 
  GetInTouch,
        Header,
        Ourservice,
        Overview,
        PremiumOrder,
        Products, 
        Team, 
        Testimonial} from "../components";


export default function Home() {
  return (
    <>
      <Head>
        <title>PT Mong Jaya Utama</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Overview />
      <Ourservice />
      <Products/>
      <PremiumOrder/>
      <Testimonial/>
      <Team/>
      <GetInTouch/>
    </>
  )
}
