import postData from '../data/posts.ts'
import Post from './Post.tsx'
import Header from './Header.tsx'
import header from '../data/header.ts'
import footer from '../data/footer.ts'

export function Posts() {
  ;<div>{header.title}</div>
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
    <div className="container">
      <h1>{header.title}</h1>
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      <h1>
        {footer.copyright}
        {footer.author}
      </h1>
    </div>
  )
}

export default App
