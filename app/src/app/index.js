import React from 'react'
import { Comments } from './children/comments'
import { User } from './children/user'
import { Footer } from './children/footer'
import Image from './children/image'
import styles from './styles'
import { getCaptionFromEdges } from './helpers'

const App = (props) => {
  const { data } = props
  console.log(data)

  console.log('data: ', data)
  // //caption
  // console.log('data: ', data.edge_media_to_caption.edges[0].node.text);
  // //number of likes
  // console.log('data: ', data.edge_media_preview_like.count);
  // //user post info
  // console.log('data: ', data.owner);
  // //comments
  // console.log('data: ', data.comments);
  // //usernames for comment
  // console.log('data: ', data.edge_media_to_comment.edges)

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} onDoubleClick />
      </div>
      <div style={styles.text}>
        <User user={data.owner} location={data.location} />
        <hr style={styles.break} />
        <Comments
          commenters={data.edge_media_to_comment.edges}
          caption={getCaptionFromEdges(data.edge_media_to_caption)}
          user={data.owner}
        />
        <Footer likeCount={data.edge_media_preview_like.count} postDate={data.taken_at_timestamp} userLiked={data.viewer_has_liked} />
      </div>
    </main>
  )
}

export default App
