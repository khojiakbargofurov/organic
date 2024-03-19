import React from "react";

const Hero = () =>{
  return(
    <>
      <section className="hero-section">
        <div className="max-w-7xl text-left p-6 items-center hero">
          <h2 className="title italic">
            100% Natural Food
          </h2>
          <h1 className="main-title font-bold my-6">
            Choose the best healthier way of life
          </h1>
          <button type="button" class="btn focus:outline-none text-white px-8 py-4 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Explore now </button>
        </div>
      </section>
    </>
  )
}
export default Hero