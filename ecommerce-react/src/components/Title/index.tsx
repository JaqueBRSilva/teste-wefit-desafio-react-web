import styled from "styled-components"

const TitleName = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
`

function Title() {
    return (
        <TitleName>
            WeMovies
        </TitleName>
    )
}

export default Title