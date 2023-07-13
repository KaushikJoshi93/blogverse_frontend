'use client';
import { useState } from "react"
import LoadingBar from "./LoadingBar";
import { userRequest } from "@/lib/axios";


export default (props) => {
    const [data, setData] = useState({ title: props.title, description: props.description });
    const [loading , setLoading] = useState(false);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const updatePost = async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            let res = await (await userRequest()).patch(`/api/post/${props.postId}` , data);
            let isUpdated = await res.data;
            setLoading(false)
            alert("Post Updated Successfully!!");
            props.getPost();
            props.setShowModal(false)
        } catch (err) {
            setLoading(false);
            alert("Error Updating Post!!Try Again later!!");
            console.log(err);
        }
    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => props.setShowModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex justify-end">
                        <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                            onClick={() => props.setShowModal(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                        <h4 className="text-lg font-medium text-gray-800">
                            Update Post
                        </h4>
                        <form onSubmit={updatePost}>
                            <div className="relative">
                                <p className="text-start mb-2">Enter Title</p>
                                <input
                                    type="text"
                                    placeholder="Enter Title"
                                    className="w-full pl-2 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <p className="text-start mb-2 mt-4">Enter Description</p>
                                <textarea
                                    className="w-full pl-2 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    rows="4" id="commentMsg"
                                    placeholder="Enter Description"
                                    required
                                    name="description"
                                    value={data.description}
                                    onChange={handleChange}></textarea>
                            </div>
                            <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                               {!loading ? "Update":
                                <LoadingBar/>
                               }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}