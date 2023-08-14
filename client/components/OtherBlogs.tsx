import OtherBlog from './OtherBlog.tsx'
import otherBlogsData from '../data/other-blogs.ts'

export function OtherBlogs() {
  return (
    <div>
      {otherBlogsData.map((blog) => (
        <OtherBlog key={blog.id} {...blog} />
      ))}
    </div>
  )
}
