import React from "react";
import { MyContext } from "../Context/MyContext";
import { useContext } from "react";
import { BlogPostCard } from "../Components/BlogPostCard";
// import Blogpostcard from "../Components/Blogpostcard";
import { Loader } from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import '../App.css'
const links = [
  { name: "Free ", href: "#" },
  { name: "Accessable", href: "#" },
  { name: "Easy", href: "#" },
  { name: "Save your Data", href: "#" },
];
const stats = [
  { name: "Login and Use Anytime ", value: "10000k +users" },
  { name: "Your Privacy Our Duty", value: "100% secure" },
  { name: "12 months membership", value: "Only 299$" },
  { name: "100k+ members ", value: "Join Community" },
];
export const Home = () => {
  const { allblog, loading } = useContext(MyContext);
  console.log("from home page " + allblog);
  console.log(allblog);
  return (
    <>
      <div className="bg-white">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
              <div>
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  A social media for learners
                </p>
                <h1 className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-6xl">
                  Welcome back to My Blogs Website
                </h1>
                <Link
                  to="/allblogs"
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Check out all Blogs
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div className=" bg-black">
          <h1 className="text-3xl font-bold text-center text-white p-4">Checkout Blogs</h1>
          <div className="sm:grid gap-y-5  xl:flex flex-wrap justify-around items-center ">
            {loading ? (
              <Loader />
            ) : (
              allblog?.slice(0, 3).map((item) => {
                return <BlogPostCard item={item} key={item.id} />;
              })
            )}
          </div>

          <Link to="/allblogs">
           <div className=" flex justify-center p-4 ">
           <button className="button-shake  ">see more</button>
           </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
