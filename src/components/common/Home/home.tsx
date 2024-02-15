import Head from "next/head";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/images/hero.png')` }}
    >
      <div className="flex flex-col justify-end h-full p-8 ml-32 pb-32">
        <Head>
          <title>Build Your Villa page</title>
        </Head>
        <h4 className="text-5xl font-bold text-black mb-4">
          Build Your Villa page
        </h4>
        <h2 className="text-3xl font-semibold text-black mb-2">
          Your dream it we build it!
        </h2>
        <div
          className="text-lg text-white mb-4"
          style={{ whiteSpace: "pre-line" }}
        >
          Build your dream home in the UAE from the comfort of your home.
          Customize your {"\n"} future luxury villa to your requirements, set
          the location budget, sit back and relax.
        </div>
        <button className="bg-customColor hover:bg-customColor text-black font-semibold py-2 px-4 rounded w-56">
          Customize My Home
        </button>
      </div>
    </div>
  );
};

export default Home;
