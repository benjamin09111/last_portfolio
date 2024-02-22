import React from 'react'
import Comment from "./Comment";
import comments from "../../data/comments.json";

const Comments = () => {
  return (
    <article className="flex w-full flex-col gap-2 px-6">
    <h4 className="title_section text-3xl mt-2">Comentarios</h4>
    <p className="text-md text-gray-600 mb-2">Diferentes opiniones de alumnos</p>
    {
        comments.map(comment => (
            <Comment name={comment.name} date={comment.date} description={comment.description} /> 
        ))
    }
</article>
  )
}

export default Comments
