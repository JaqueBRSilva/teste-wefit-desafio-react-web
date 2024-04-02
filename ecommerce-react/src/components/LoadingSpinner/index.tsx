import styled from "styled-components"
import LOADER_IMG from '../../assets/loader.png'

const LoadingView = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const LoaderAnimation = styled.img`
    width: 83px;
    height: 83px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`

function LoadingSpinner() {
    return (
        <LoadingView>
            <LoaderAnimation src={LOADER_IMG} alt="loading spinner" />
        </LoadingView>
    )
}

export default LoadingSpinner