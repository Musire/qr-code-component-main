import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Helmet>
      <div className="centered w-screen h-screen ">
        <div className="bg-white w-72 min-h-[26rem] h-auto rounded-2xl p-3 centered-col space-y-5 text-center">
          <div className="rounded-2xl w-full h-64 bg-qrcode bg-contain bg-no-repeat bg-center" />
          <article className="w-11/12 space-y-3 font-outfit pb-6">
            <h1 className="text-[16.5px] font-extrabold">Improve your front-end skills by building projects</h1>
            <p className="text-[.85rem] font-medium text-grayblue">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  )
}