import React from 'react'
import styles from './styles'

export const User = ({ user, location }) => {
  return (
    <div style={styles.header}>
      <img id='profilePic' alt={user.username} src={user.profile_pic_url} />
      <div style={styles.headerText}>
        <p style={styles.headerUser}>{user.username}</p>
        <p style={styles.headerLocation}>{location.name}</p>
      </div>
    </div>
  )
}
