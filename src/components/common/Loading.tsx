import ReactDOM from "react-dom";
import { PropagateLoader } from "react-spinners";

export const Loading = () => {
    return (
        ReactDOM.createPortal(
            <PropagateLoader
                className="loading-spinner"
            />,
            document.body
        )
    );
};