import footer from '../data/footer.ts'

export function Footer() {
  return (
    <div>
      <h1>
        {footer.copyright}
        {footer.author}
      </h1>
    </div>
  )
}
