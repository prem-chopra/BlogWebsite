import React, { useEffect, useState } from "react";
// import { MyContext } from '../../Context/MyContext'
import { useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
// import { firedb } from '../../Firebase/FirebaseConfig'
import { firedb } from "../Firebase/Firebaseconfig";
import { MyContext } from "../Context/MyContext";
import { Loader } from "../Components/Loader/Loader";
// import { Loader } from "../Components/Loader/Loader";

export const Blogs = () => {
  const { id } = useParams();
  const { allblog , loading , setloading } = useContext(MyContext);
  const [GetBlogs, setGetBlogs] = useState();

  const getSingleBlog = async () => {
    // setloading(true);
    try {
      const productTemp = await getDoc(doc(firedb, "blogPost", id));
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
      // setloading(false)
    } catch (error) {
      console.log(error);
      // setloading(false)
    }
  };
  console.log(GetBlogs);

  useEffect(() => {
    getSingleBlog();
  }, []);
  // {GetBlogs?.thumbnail}
  // {GetBlogs?.blog?.category}
  // {GetBlogs?.blog?.title}
  // {GetBlogs?.date}
  return (
    <>
   {
    loading ? <Loader/> : <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={GetBlogs?.thumbnail}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {GetBlogs?.sendblog?.title}
      </h1>
      <p>{GetBlogs?.date}</p>
      <p className="mb-8 leading-relaxed">
        Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
        tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
        ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
        meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
        fingerstache pitchfork.
      </p>
    </div>
  </div>
</section>
    </div>
   }

    </>
  );
};
