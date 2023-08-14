import RecentEntry from './RecentEntry.tsx'
import recentEntriesData from '../data/recent-entries.ts'

export function RecentEntries() {
  return (
    <div>
      {recentEntriesData.map((blog) => (
        <RecentEntry key={blog.id} {...blog} />
      ))}
    </div>
  )
}
