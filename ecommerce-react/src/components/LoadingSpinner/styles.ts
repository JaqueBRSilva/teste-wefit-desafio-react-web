import styled from "styled-components"

export const LoadingView = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const LoaderAnimation = styled.img`
    width: 83px;
    height: 83px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`