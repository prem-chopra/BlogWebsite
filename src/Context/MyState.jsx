
import { useEffect, useState } from 'react'
import { MyContext } from './MyContext'
import { deleteDoc, doc, query } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { collection, } from 'firebase/firestore'
// import { doc } from 'firebase/firestore'
import { firedb } from '../Firebase/Firebaseconfig'


export const MyState = ({children}) => {
    const [isLogin,setIsLogin] = useState("")
    const [allblog,setallblog] = useState([])
    const [loading , setloading] = useState(false)
    
    const getValue = () =>{
    const storedata = localStorage.getItem("admin")
    setIsLogin(storedata)

  }
  function getAllBlogs() {
    setloading(true);
    try {
        const q = query(
            collection(firedb, "blogPost"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let blogArray = [];
            QuerySnapshot.forEach((doc) => {
                blogArray.push({ ...doc.data(), id: doc.id });
            });

            setallblog(blogArray)
            console.log(blogArray)
            setloading(false)
        });
        return () => data;
    } catch (error) {
        console.log(error)
        setloading(false)
        }
    }

    // Blog Delete Function 
    const deleteBlogs = async (id) => {
      try {
          if(confirm("Are you sure to delete this post?") ){

              await deleteDoc(doc(firedb, "blogPost", id))
              getAllBlogs()
              toast.success("Blogs deleted successfully")
          }
          
      } catch (error) {
          console.log(error)
      }
  }

useEffect(()=>{
  getAllBlogs()
},[])
  

  return (
    <>
    <MyContext.Provider value={{isLogin,setIsLogin,getValue,allblog,deleteBlogs,setloading,loading}}>{children}</MyContext.Provider>
    </>
  )
}
