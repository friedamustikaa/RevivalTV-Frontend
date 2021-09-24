import Benefit from "../components/Benefit";
import Feature from "../components/Feature";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-hero md:bg-hero w-full h-screen bg-no-repeat bg-cover bg-center">
        <Navbar />
        {/* <Navbar />
        <div className="container">
          <div className="pt-16 pb-9 px-4">
            <h1 className=" text-white text-center font-medium text-3xl">
              {"Representing Drone Light"}
            </h1>
            <div className="mt-4">
              <p className=" text-white text-center font-light">
                Look up the sky and beautiful world with simple navigation.
              </p>
              <p className=" text-white text-center font-light">
                Just record anmd get a lot memories to share, lighlty and fast
                like a lightning
              </p>
            </div>
            <div className="text-center py-6">
              <button className="uppercase bg-blue-600 font-semibold text-white text-center rounded-3xl px-16 py-2">
                get now
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <Feature />
      <Benefit />
      <Product />
      <Testimonial />
    </Layout>
  );
}
