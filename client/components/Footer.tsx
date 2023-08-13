interface Props {
  copyright: string
  author: string
}

function Footer(props: Props) {
  return (
    <div>
      <h1>
        {props.copyright}
        {props.author}
      </h1>
      ...
    </div>
  )
}

export default Footer
