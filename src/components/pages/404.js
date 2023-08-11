import ErrorMessgae from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="app__title" style={{'textAlign': 'center'}}>
            <ErrorMessgae/>
            <p>Page doesn't Exist!</p>
            <Link to='/'><span>Back to main page</span></Link>
        </div>
    )
}

export default Page404;