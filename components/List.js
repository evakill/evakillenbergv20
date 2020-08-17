import s from 'styled-components';

const Container = s.div`
  font-family: Roboto;
  margin-left: 30px;
  margin-bottom: 10px;
  color: black;
`

export default (props) => {
  if (props.link) {
    return (
      <Container>
        <a target="_blank" style={{ color: 'black' }} href={props.link || '#'}>
          <p className="is-size-6"><b>{props.title}</b></p>
          <p className="is-size-7">{props.desc}</p>
        </a>
      </Container>
    )
  }
  return (
    <Container>
      <p className="has-text-black is-size-6"><b>{props.title}</b></p>
      <p className="has-text-black is-size-7">{props.desc}</p>
    </Container>
  )
}
