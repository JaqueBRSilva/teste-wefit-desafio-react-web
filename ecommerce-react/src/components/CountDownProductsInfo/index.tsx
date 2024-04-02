import styled from "styled-components"

const Text = styled.p`
    color: var(--mid-grey);
    font-weight: 600;
`

function CountDownProductsInfo() {

    return (
        <>
            <Text>
                0 itens
            </Text>
        </>
    )
}

export default CountDownProductsInfo