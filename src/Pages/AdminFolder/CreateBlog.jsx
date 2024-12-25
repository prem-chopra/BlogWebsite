import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { uploadBytes , getDownloadURL } from "firebase/storage";
// import { Editor } from "@tinymce/tinymce-react";
import { firedb } from "../../Firebase/Firebaseconfig";
import { collection } from "firebase/firestore";
import { storage } from "../../Firebase/Firebaseconfig";
import { ref } from "firebase/storage";
import { addDoc } from "firebase/firestore";
// import { Link } from "react-router-dom";


export const CreateBlog = () => {
  const [sendblog, setsendblog] = useState({
    title: "",
    content: "",
    time: Timestamp.now(),
    category: "",
    
  });

  const [thumbnail, setthumbnail] = useState("");
  const [text,settext]=useState()
  const addPost = async () => {
    if (
      sendblog.title =="" ||
      sendblog.content=="" ||
      sendblog.category=="" 
    ) {
      toast("please fill the all empty values");
    }
    uploadImage()
  }
  const uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage,` blogimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            const productRef = collection(firedb, "blogPost")
            try {
                addDoc(productRef, {
                    sendblog,
                    thumbnail: url,
                    time: Timestamp.now(),
                    date: new Date().toLocaleString(
                        "en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }
                    )
                })
                navigate('/dashboard')
                toast.success('Post Added Successfully');


            } catch (error) {
                toast.error(error)
                console.log(error)
            }
        });});
}
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const navigate = useNavigate();

  const onclickforback = () => {
    navigate("/dashboard");
  };

  //Create markup function 

  function createMarkup(c) {
      return { __html: c };
    }
  return (
    <>
      <div className="container mx-auto  ">
        <IoMdArrowRoundBack onClick={onclickforback} className="absolute top-28 left-5 w-16 h-5 bg-gray-400 hover:text-white transition-all duration-100 " />
        <div className="capitalize">
          <h1 className="capitalize text-3xl font-thin  flex justify-center items-center py-4">create blog</h1>
          <div>
          <h2 className="text-center">upload thumbnail</h2>
            {thumbnail && (
              <img
                src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
                alt="thumbnail"
                className="container mx-auto w-96 "
              />
            )}
          </div>
          <div className="w-full h-full">
            
            <div className="w-full grid grid-rows-3 gap-y-3 place-content-center ">
              <div>
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => {
                    setthumbnail(e.target.files[0]);
                  }}
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="border-2"
                value={sendblog.title}
                placeholder="title"
                onChange={(e) => {
                  setsendblog({ ...sendblog, title: e.target.value });
                }}
              />
              <input type="text" name="" id="" className="border-2" value={sendblog.category} placeholder="category"
                onChange={(e) => {
                  setsendblog({ ...sendblog, category: e.target.value });
                }} />
              <div>
                <Editor
                  apiKey="q4g6bc8d06yeqfloio99y0lh7sbq19n8tp1t2anozx7x0z81"
                  onEditorChange={(newValue, editor) => {
                    setsendblog({ ...sendblog, content: newValue });
                    settext(editor.getContent({ format: 'text' }));
                  }}
                  onInit={(evt, editor) => {
                    settext(editor.getContent({ format: 'text' }));
                  }}
                  initialValue="This is the initial content of the editor"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <button onClick={addPost} className="w-full bg-indigo-500 rounded-lg h-8 hover:bg-indigo-800 hover:text-white">send</button>
              <div className="m-2" >
                <p className="text-2xl m-1">Preview</p>
                <div className=" border-2 border-gray-300 w-full h-20 lin">
                  {
                    sendblog.content?(<div dangerouslySetInnerHTML={createMarkup(sendblog.content)}/>):('content preview div ')
                  }
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
