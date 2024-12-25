import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../../Context/MyContext";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";

export const Dashboard = () => {
  const { getValue, allblog, deleteBlogs, loading } = useContext(MyContext);
  const [SearchTerm, setsearchTerm] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    getValue();
    toast("logout successfully");
    navigate("/");
  };
  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };
  const filteredBlogs = allblog.filter((item) => {
    return (
      item.sendblog.title.toLowerCase().includes(SearchTerm.toLowerCase()) ||
      item.sendblog.category.toLowerCase().includes(SearchTerm.toLowerCase())
    );
  });

  return (
    <>
      <section className="bg-black text-white">
        <div className="admincard flex justify-center items-center gap-5 py-5 ">
          <div className="w-56">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-3xl  "
            />
          </div>
          <div className="admindetails flex  flex-col gap-y-2 ">
            <div>
              <h1 className="text-2xl font-bold ">Prem Chopra</h1>
            </div>
            <div>
              <h1 className="">Web Developer</h1>
              <h1 className="">Premchopra971800@gmail.com</h1>
              <h1 className="">Total Blog : {allblog.length}</h1>
            </div>
            <div className="flex flex-row gap-x-3">
              <Link to="/createblog">
                <button className="bg-red-500 px-2 rounded-lg">
                  Create Blog
                </button>
              </Link>
              <button
                onClick={Logout}
                className="bg-indigo-800 px-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="h-1 m-2  bg-gray-400" />
        </div>
        <div>
          <div className=" min-h-screen ">
            <p className=" text-3xl text-center">DASHBOARD</p>
            <div>
              <section className=" sm:py-5">
                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                  <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                      <div className="flex justify-between items-center flex-1 space-x-4">
                        <h5>
                          <span className="text-xl text-black">
                            All Products:{allblog.length}
                          </span>
                        </h5>
                        <div>
                          <input
                            type="text"
                            value={SearchTerm}
                            onChange={handleSearch}
                            placeholder="Search..."
                            className="border-2  text-black placeholder:text-black rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-black">
                        <thead className="text-xs text-gray-800 uppercase bg-gray-200">
                          <tr>
                            <th scope="col" className="p-4">
                              S.NO
                            </th>
                            <th scope="col" className="px-4 py-3">
                              THUMBNAILS
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-4 py-3">
                              DATE
                            </th>

                            <th scope="col" className="px-4 py-3">
                              CONTENT
                            </th>
                            <th scope="col" className="px-6 py-3">
                              ACTION
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <Loader />
                          ) : (
                            filteredBlogs?.map((item, index) => {
                              const {
                                thumbnail,
                                category,
                                title,
                                date,
                                id,
                                sendblog,
                              } = item;
                              return (
                                <tr
                                  key={id}
                                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                  <td className="w-4 px-4 py-3">{index + 1}</td>
                                  <th
                                    scope="row"
                                    className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    <img
                                      src={thumbnail}
                                      alt="iMac Front Image"
                                      className="w-auto h-8 mr-3"
                                    />
                                  </th>
                                  <td className="px-4 py-2">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                      {sendblog.title}
                                    </span>
                                  </td>

                                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {date}
                                  </td>
                                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="flex items-center">
                                      {sendblog.content}
                                    </div>
                                  </td>
                                  <td className=" py-2 flex gap-x-2 items-center justify-center flex-cols">
                                    <Link
                                      to={`/blogs/${id}`}
                                      className="bg-blue-500 rounded-lg px-2 text-white py-29 "
                                    >
                                      view
                                    </Link>
                                    <button
                                      onClick={() => {
                                        deleteBlogs(id);
                                      }}
                                      className="bg-red-500 rounded-lg px-2 py-2  text-white"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                    
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
