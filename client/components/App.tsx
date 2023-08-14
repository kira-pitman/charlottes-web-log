import postData from '../data/posts.ts'
import Post from './Post.tsx'
import { Posts } from './Posts.tsx'
import { Header } from './Header.tsx'
import { Footer } from './Footer.tsx'

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="flex-container-posts">
        <Posts />
        <div className="flex-single-posts"></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
