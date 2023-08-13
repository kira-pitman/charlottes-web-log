interface Props {
  title: string
  link: string
}

function Header(props: Props) {
  return (
    <div>
      <h1>{props.title}</h1>
      ...
    </div>
  )
}

export default Header
