import { Link } from "react-router-dom"
import ShoppingBagIcon from "../ShoppingBagIcon"
import Title from "../Title"
import { HeaderContainer } from "./styles"


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