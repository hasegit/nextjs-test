import type { NextPage } from 'next'
import Layout from "../components/layout"

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen py-0 px-2 flex flex-col items-center">
          <div className="p-6 font-bold z-10 text-gray-500 drop-shadow-lg w-full">
            <h1 className="text-5xl fade">
              Cats
            </h1>
            <h2 className="font-thin text-xs">
              powered by <a className="hover:font-light" href="https://thecatapi.com/">The Cat API.</a>
            </h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
