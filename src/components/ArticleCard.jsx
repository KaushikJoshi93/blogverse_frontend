import Link from "next/link";

const ArticleCard = ({ post }) => {

    function truncateDescription(description, maxCharacters) {
        if (description.length <= maxCharacters) {
          return description;
        } else {
          return description.substring(0, maxCharacters - 3) + "...";
        }
      }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-2xl border-gray-700 border-[0.01px] shadow-[#212c44]">
            <img src="https://cdn.dribbble.com/users/585028/screenshots/14701842/media/a8cddb1a67af23b19163f62d5885f223.png?compress=1&resize=768x576&vertical=center" alt="Article Image" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-400">{post.title}</div>
                <p className="text-gray-500 text-base">{truncateDescription(post.description , 81)}</p>
            </div>
            <div className="px-6 pb-4">
                <Link href={`/blogs/${post.post_id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</button>
                </Link>
            </div>
        </div>

    )
}
export default ArticleCard;