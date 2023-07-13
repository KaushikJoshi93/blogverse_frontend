'use client'

import LoadingBar from "@/components/LoadingBar";
import { userRequest } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

const page = () => {
    const [data , setData] = useState({title:"" , description:""});
    const [loading , setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e)=>{
        setData({...data , [e.target.name]:e.target.value})
    }

    const createPost = async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            let res = await (await userRequest()).post("/api/post" , data);
            let isCreated = await res.data;
            setLoading(false);
            alert("Post Created Successfully!!");
            router.push("/blogs");
        } catch (err) {
            setLoading(false);
            alert("Error While Creating Post!!Try Again later!!");
            console.log(err)
        }
    }
  return (
    <div className="relative py-12 bg-gray-900 mt-9">
    <div className="relative z-10 max-w-screen-xl mx-auto text-gray-200 p-8 md:p-4">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <p className="text-white text-3xl font-semibold sm:text-4xl">
               Create Post
            </p>
            <p className="text-gray-300">
                Start writing amazing post😊😊
            </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-transparent border-[1px] rounded-xl border-[#837e7e] sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form
                onSubmit={createPost}
                className="space-y-5"
            >
                <div>
                    <label className="font-medium">
                       Title
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-gray-300 shadow-sm rounded-lg"
                        name="title"
                        onChange={handleChange}
                        value={data.title}
                    />
                </div>
                
                <div>
                    <label className="font-medium">
                        Description
                    </label>
                    <textarea 
                    required 
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-300 shadow-sm rounded-lg"
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                    ></textarea>
                </div>
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-blue-500 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                   {!loading ? "Create Post":
                    <LoadingBar/>
                   }
                </button>
            </form>
        </div>
    </div>
    <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
</div>
  )
}

export default page