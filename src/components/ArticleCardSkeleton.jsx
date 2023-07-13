

const ArticleCardSkeleton = () => {
    return (
      <div className="w-[300px] rounded overflow-hidden shadow-2xl shadow-black border-gray-700 border-[0.01px] animate-pulse">
        <div className="bg-gray-700 h-40"></div>
        <div className="px-6 py-4">
          <div className="bg-gray-700 h-6 mb-2"></div>
          <div className="space-y-2">
            <div className="bg-gray-700 h-4"></div>
            <div className="bg-gray-700 h-4"></div>
            <div className="bg-gray-700 h-4"></div>
          </div>
        </div>
        <div className="px-6 pb-4">
          <div className="bg-gray-700 h-10 w-20"></div>
        </div>
      </div>
    );
  };
  
export default ArticleCardSkeleton