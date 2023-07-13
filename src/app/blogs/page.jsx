'use client';
import ArticleCard from '@/components/ArticleCard';
import ArticleCardSkeleton from '@/components/ArticleCardSkeleton';
import { userRequest } from '@/lib/axios';
import { useEffect, useState } from 'react';

const blogs = [
  {
    post_id: 1,
    title: 'Blog 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    post_id: 2,
    title: 'Blog 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    post_id: 2,
    title: 'This is a title',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  // Add more blogs here
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      // setLoading(true)
      const res = await (await userRequest()).get("/api/post");
      const all_posts = await res.data;
      console.log(all_posts)
      setPosts(all_posts)
      setFilteredPosts(all_posts)
      setLoading(false);
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredPosts(posts)
    } else {
      const filteredBlogs = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filteredBlogs)
    }
  };


  return (
    <div className=" z-10 w-full mx-auto p-4 relative bg-[#111827] mt-28 pl-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Blogs</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs"
          className="border border-gray-400 text-gray-400 px-4 py-2 rounded-md w-full bg-[#111827]"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {
          filteredPosts.length ? filteredPosts.map((item, index) => (
            <ArticleCard post={item} key={item.post_id} />
          )) :
            loading ?
              <div className="w-full flex flex-col justify-center items-center flex-wrap gap-8 sm:flex-row ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <ArticleCardSkeleton key={index} />
                ))}
              </div> :
              <div className='w-full flex flex-col justify-center flex-wrap gap-8 sm:flex-row mb-14'>
                <p className='text-center text-2xl font-bold text-gray-400'>
                  No Posts
                </p>
              </div>
        }
      </div>
      <div className='z-0 absolute left-[50%] md:top-28 inset-0 blur-[118px] max-w-lg h-auto mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </div>
  );
};

export default Blogs;
