import LOADER_IMG from '../../assets/loader.png'
import { LoaderAnimation, LoadingView } from "./styles"


function LoadingSpinner() {
    return (
        <LoadingView>
            <LoaderAnimation src={LOADER_IMG} alt="loading spinner" />
        </LoadingView>
    )
}

export default LoadingSpinner