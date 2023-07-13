'use client';
import LoadingBar from "@/components/LoadingBar";
import Comment from "@/components/Comment";
import { userRequest } from "@/lib/axios";
import { useEffect, useState } from "react"
import useCookie from "@/hooks/useCookie";
import { useRouter } from "next/navigation";
import AdminCards from "@/components/AdminCards";
import EditPostModal from "@/components/EditPostModal";


export default function Post({ params }) {
    const [postData, setPostData] = useState([]);
    const router = useRouter();
    const { cookie } = useCookie();
    const [loading, setLoading] = useState(false);
    const [showModal , setShowModal] = useState(false);

    const getPost = async () => {
        try {
            const res = await (await userRequest()).get(`/api/post/${params.postId}`);
            const post = await res.data;
            setPostData(post);
        } catch (err) {
            console.error(err)
        }
    }

    const deletePost = async () => {
        try {
            const shouldDelete = confirm("Do you really want to delete this post??");
            if (shouldDelete) {
                const res = await (await userRequest()).delete(`api/post/${postData.post_id}`);
                const isDeleted = await res.data;
                alert("Post Deleted!!");
                router.push("/");
            }
        } catch (err) {
            alert("Error While Deleting post!! ");
            console.log(err);
        }
    }
    const submitComment = async (e) => {
        e.preventDefault();
        try {
            if (!cookie || !cookie.hasOwnProperty("id")) {
                router.push("/login")
            } else {
                let elem = document.querySelector("#commentMsg");
                const message = elem.value;
                const postId = postData.post_id;
                setLoading(true);
                const res = await (await userRequest()).post("/api/post/addComment", { postId, message });
                const data = await res.data;
                setLoading(false);
                console.log(data);
                alert("Comment Added!!")
                elem.value = "";
                await getPost();
            }
        } catch (err) {
            setLoading(false);
            alert("There is a error !! while adding your comment . Please Try Again later!!");
            console.log(err)
        }
    }

    
      

    useEffect(() => {
        getPost();
    }, [])
    return (
        <div className=' px-4 relative mt-12'>
            {postData.title ?
                <div className="flex flex-col py-8 ">
                    {/* Blog Image */}
                    <img src="https://cdn.dribbble.com/users/585028/screenshots/14701842/media/a8cddb1a67af23b19163f62d5885f223.png?compress=1&resize=768x576&vertical=center" alt="Blog Image" className="w-[70%] h-auto md:h-[400px] rounded-lg self-center" />

                    {/* Blog Title */}
                    <h1 className="text-base text-start md:text-3xl font-bold mt-8 mb-4 md:text-center text-gray-300 border-[0.5px] border-purple-400 p-4 rounded-md">{postData.title}</h1>

                    {/* Blog Description */}
                    <p className="text-gray-300 text-[1.2rem] mb-8 text-start m-4 text-sm md:text-xl">{(postData.description)}</p>

                    <div className="bg-transparent border-[1px] border-gray-700 text-white p-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">{postData.comments?.length} Comments</h2>
                        {
                            postData.comments?.length ?
                                postData.comments.map((comment, index) => {
                                    return <Comment commentData={comment} key={index} index={index} />
                                }) :
                                ""
                        }

                        {/* Add Comment Form */}
                        <form className="mt-4" onSubmit={submitComment}>
                            <label className="block mb-2 text-lg font-medium">Add a Comment</label>
                            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 bg-transparent italic" rows="4" id="commentMsg" required></textarea>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">
                                {!loading ? "Submit" : <LoadingBar />}
                            </button>
                        </form>
                    </div>

                    {/* Edit and Delete post button */}
                    {
                        (cookie && cookie.role == "admin") ?
                            <div className="w-full mt-4 flex justify-between">
                                <button className="bg-green-500 p-2 pl-4 pr-4 rounded flex" onClick={()=>setShowModal(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>

                                    Edit
                                </button>
                                <button className="bg-red-500 p-2 pl-4 pr-4 rounded flex" onClick={deletePost}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    Delete
                                </button>
                            </div> : ""
                    }
                   { 
                   showModal ?
                   <EditPostModal setShowModal={setShowModal} title={postData.title} description={postData.description} postId = {postData.post_id} getPost={getPost}/>:""
                   }
                </div> :
                // <p className="text-center flex justify-center items-center w-full h-screen text-2xl font-bold">Loading Your Post....</p>
                <div className="flex justify-center items-center w-full h-screen">
                    <LoadingBar className="text-white" />
                </div>
            }

            <div className='absolute inset-12 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </div>

    )
}