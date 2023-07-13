

const Comment = (props) => {
    return (
        <div className="flex flex-col items-start mb-4">
            <div className="flex">
                <img className="w-8 h-8 rounded-full mr-4" src="https://cdn.dribbble.com/users/585028/screenshots/14701842/media/a8cddb1a67af23b19163f62d5885f223.png?compress=1&resize=768x576&vertical=center" alt="Profile Image" />
                <h3 className="text-base font-medium">{props.commentData.name ?? "John Doe"}</h3>
            </div>
            <p className="text-gray-400 ml-12 italic">{props.commentData.message ?? ""}</p>
        </div>
    )
}

export default Comment