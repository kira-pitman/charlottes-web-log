import postData from '../data/posts.ts'
import Post from './Post.tsx'
import Header from './Header.tsx'
import header from '../data/header.ts'
import footer from '../data/footer.ts'

export function Posts() {
  return (
    <div>
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div>
      <h1 className="header">{header.title}</h1>
      <div className="flex-container-posts">
        {postData.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <h1 className="footer">
        {footer.copyright}
        {footer.author}
      </h1>
    </div>
  )
}

export default App
