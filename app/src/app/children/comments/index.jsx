import React from 'react'
import LikeButton from '../like_button'
import styles from './styles'

export const Comments = ({ commenters, caption, user }) => {
  return (
    <>
      <div style={styles.commentsContainer}>
        <div style={styles.caption}><span style={styles.username}>{user.username}</span>{caption}</div>
        {commenters.map(({ node, index }) => {
          const { owner, text, viewer_has_liked } = node

          return (
            <div key={index} style={styles.commentContainer}>
              <p style={styles.commentText}><span style={styles.username}>{owner.username}</span> {text}</p>
              <div style={styles.commentLike}>
                <LikeButton liked={viewer_has_liked} size='medium' />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
