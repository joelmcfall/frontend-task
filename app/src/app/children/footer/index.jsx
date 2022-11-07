import React from 'react'
import styles from './styles'
import LikeButton from '../like_button'

export const Footer = ({ likeCount, postDate, userLiked }) => {
  const [liked, setLiked] = React.useState(userLiked)
  const [date] = React.useState(new Date().getMilliseconds())
  React.useEffect(() => {}, [liked])

  const likes = liked ? likeCount + 1 : likeCount

  const postTime = () => {
    console.log('called')
    const days = Math.abs(Math.ceil((date - postDate) / 1000 / 60 / 60 / 24))
    const months = days / 30
    const years = months / 12

    console.log(days, months, years)

    if (days > 30) {
      if (months < 12) {
        return `${months} MONTH${months > 1 ? 'S' : ''}`
      } else {
        return `${years} YEAR${years > 1 ? 'S' : ''}`
      }
    }

    return `${days} DAY${days > 1 ? 'S' : ''}`
  }

  return (
    <div style={styles.footer}>
      <div>
        <h5 style={styles.likeCount}>{`${likes} like${likeCount > 1 ? 's' : ''}`}</h5>
        <p style={styles.postAge}>{postTime()} AGO</p>
      </div>
      <div style={styles.likeButton} onClick={() => setLiked(!liked)}>
        <LikeButton liked={liked} size='large' />
      </div>
    </div>
  )
}
