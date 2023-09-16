export default function BotaoLink(props) {
  console.log (props)
  return (
    <a className={props.ButtonLink} href={props.href}>
      {props.children}
    </a>
  )
}