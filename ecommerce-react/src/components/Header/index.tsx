import { Link } from "react-router-dom"
import styled from "styled-components"
import ShoppingBagIcon from "../ShoppingBagIcon"
import Title from "../Title"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Title />
            </Link>

            <Link to="/shopping-cart">
                <ShoppingBagIcon />
            </Link>
        </HeaderContainer>
    )
}

export default Header