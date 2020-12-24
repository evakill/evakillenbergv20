import s from 'styled-components'

const Container = s.div`
  font-family: Roboto;
  margin: 15px 0px 10px 30px;
  color: black;
`

export default function List(props) {
    if (props.link) {
        return (
            <Container>
                <a
                    target="_blank"
                    style={{ color: 'black' }}
                    href={props.link || '#'}
                >
                    <p className="is-size-6" style={{ fontWeight: 500 }}>
                        {props.title}
                    </p>
                    <p className="is-size-7">{props.desc}</p>
                </a>
            </Container>
        )
    }
    return (
        <Container>
            <p className="has-text-black is-size-6" style={{ fontWeight: 500 }}>
                {props.title}
            </p>
            <p className="has-text-black is-size-7">{props.desc}</p>
        </Container>
    )
}
