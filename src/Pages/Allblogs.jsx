// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import { useContext } from "react";
// import { MyContext } from "../Context/MyContext";
// import { Loader } from "../Components/Loader/Loader";
// // import { MyState } from '../Context/MyState';

// export const Allblogs = () => {
//   const { allblog , loading } = useContext(MyContext);
//   // console.log(allblog);
//   return (
//     <>
//       <div className=" grid grid-cols-3 m-auto">
//       { loading ? <Loader/> : allblog.map((item, index) => {
//         const { date, id, sendblog, thumbnail, time } = item;
//         return (
//           <div key={id}>
//             <Card className="w-96  ">
//               <CardHeader shadow={false} floated={false} className="h-96">
//                 <img
//                   src={thumbnail}
//                   alt="card-image"
//                   className="h-full w-full object-cover"
//                 />
//               </CardHeader>
//               <CardBody>
//                 <div className="mb-2 flex items-center justify-between">
//                   <Typography color="blue-gray" className="font-medium">
//                     {sendblog.title}
//                   </Typography>
//                   <Typography color="blue-gray" className="font-medium">
//                     {date}
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="blue-gray" className="font-medium">
//                     {sendblog.category}
//                   </Typography>
//                 </div>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="font-normal opacity-75"
//                 >
//                   With plenty of talk and listen time, voice-activated Siri
//                   access,
//                 </Typography>
//               </CardBody>
//             </Card>
//           </div>
//         );
//       })
//       }
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Loader } from "../Components/Loader/Loader";
import { Link } from "react-router-dom";

export const Allblogs = () => {
  const { allblog, loading } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState(""); // Add a state for the search term

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = allblog.filter((item) => {
    return (
      item.sendblog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sendblog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className=" bg-white py-6">
        <div className="my-5 lg:flex justify-around items-center" >
          <div className="max-w-2xl lg:mx-0 ml-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

          <div className="w-80 py-3  border-none outline-none mx-auto lg:mx-0">
            <Input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              className=""
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 grid-cols-2 box-content gap-x-4 gap-y-3 lg:px-20">
          {loading ? (
            <Loader />
          ) : (
            filteredBlogs.map((item, index) => {
              const { date, id, sendblog, thumbnail, time } = item;
              return (
                <div key={id}>
                  <Link to={`/blogs/${id}`}>
                  <Card className="border-2 transition ease-out delay-100  hover:scale-95  duration-300">
                    <CardHeader shadow={false} floated={false} className="h-60">
                      <img
                        src={thumbnail}
                        alt="card-image"
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {sendblog.title}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          {date}
                        </Typography>
                      </div>
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          {sendblog.category}
                        </Typography>
                      </div>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                      >
                        With plenty of talk and listen time, voice-activated
                        Siri access,
                      </Typography>
                    </CardBody>
                  </Card>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
