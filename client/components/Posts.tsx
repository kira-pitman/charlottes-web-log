import Post from './Post.tsx'
import postData from '../data/posts.ts'

export function Posts() {
  return (
    <div>
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
