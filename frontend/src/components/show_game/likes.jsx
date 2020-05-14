import React from 'react'

export default props => {
  return (
    <ul className="likes-container">
      {props.userLikes.map(user => (
        user.likes.map(like => (
          <li>
            <p className="thumb">{like.dislike ? "👎🏼" : "👍🏼"}</p>
            <div className="like-content">
              <div className="like-header">
                <h3>{user.username}</h3>
                <span>{like.date ? like.date.slice(0, 10) : null}</span>
              </div>
              <p>{like.review}</p>
            </div>
          </li>
        ))
      ))}
    </ul>
  )
}