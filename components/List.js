import s from 'styled-components';

const Container = s.div`
  font-family: Roboto;
  margin-left: 30px;
  margin-bottom: 10px;
`

export default (props) => (
  <Container>
    <a target="_blank" style={{ color: 'black' }} href={props.link || '#'}>
      <p className="is-size-6"><b>{props.title}</b></p>
      <p className="is-size-7">{props.desc}</p>
    </a>
  </Container>
)
