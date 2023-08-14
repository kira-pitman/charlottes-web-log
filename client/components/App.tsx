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
          <h2>Other Blogs</h2>
          <OtherBlogs />
        </div>
        <div className="flex-container-posts">
          <h2>Posts</h2>
          <Posts />
        </div>
        <div className="flex-recent-entries">
          <h2>Recent Entries</h2>
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
