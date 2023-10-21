import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl text-center mt-32 text-fuchsia-500">404 NOT FOUND</h1>
            <Link className="btn px-8 mt-8 bg-fuchsia-700 text-white text-lg" to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;