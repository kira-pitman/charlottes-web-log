interface Props {
  id: number
  blogTitle: string
  link: string
}

function otherBlog(props: Props) {
  return (
    <div>
      <a href={props.link}>
        <h3>{props.blogTitle}</h3>
      </a>
    </div>
  )
}

export default otherBlog
