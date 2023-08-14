import postData from '../data/posts.ts'
import Post from './Post.tsx'
import { Posts } from './Posts.tsx'
import { Header } from './Header.tsx'
import { Footer } from './Footer.tsx'
import { OtherBlogs } from './OtherBlogs.tsx'
import { RecentEntries } from './RecentEntries.tsx'

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="flex-content">
        <div className="flex-other-blogs">
          <OtherBlogs />
        </div>
        <div className="flex-container-posts">
          <Posts />
        </div>
        <div className="flex-other-blogs">
          <RecentEntries />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
