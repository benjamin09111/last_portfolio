import React from 'react'

const Comment = ({ name, description, date }) => {
    return (

        <div className="flex relative md:bg-gray-900 flex-col bg-gray-950 p-4 rounded-xl w-full">
            <span className="text-gray-900 md:text-gray-700 opacity-30 text-7xl icon-[vaadin--comments] absolute bottom-4 right-16"></span>
            <div className="w-full flex-wrap flex justify-between mb-4">
                <div className="flex gap-2 flex-wrap justify-center items-center">
                    <div className="rounded-full overflow-hidden w-12">
                        <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" alt="profile-foto" />
                    </div>
                    <p className="flex gap-1 justify-center items-center">
                        <p>@{name}</p>
                        <span className="icon-[mingcute--comment-line]"></span>
                    </p>
                </div>
                <p>{date}</p>
            </div>
            <div>
                <p className="text-gray-100 italic relative z-999">
                    "{description}"
                </p>
            </div>
        </div>
    )
}

export default Comment
