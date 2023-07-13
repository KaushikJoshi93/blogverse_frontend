import React from 'react'

const AdminCards = (props) => {
    return (
        <div className="w-[250px] h-24 border-[#8853b9c5] border-[1px] p-8 rounded-md flex gap-4 hover:shadow-gray-400 hover:shadow-lg cursor-pointer">
            {props.children}
            {props.name}
        </div>
    )
}

export default AdminCards