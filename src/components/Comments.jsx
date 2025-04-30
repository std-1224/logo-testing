import React, { useEffect, useState } from "react"
import axios from "axios"

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function getComments() {
      const comments = await axios.get("https://jsonplaceholder.org/posts")
      setComments(comments.data)
    }

    getComments()
  }, [])
  return (
    <ul>
      {comments?.map((comment, index) => (
        <li key={index} data-testid="comment">
          {comment.title}
        </li>
      ))}
    </ul>
  )
}

export default Comments
