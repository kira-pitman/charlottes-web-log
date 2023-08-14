interface Props {
  id: number
  name: string
  link: string
}

function recentEntry(props: Props) {
  return (
    <div>
      <a href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </div>
  )
}

export default recentEntry
