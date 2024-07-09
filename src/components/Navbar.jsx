import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { removeItem } from '../helpers/persistance-storage';
import { logoutUser } from '../slice/auth';

const Navbar = () => {
    const { loggedIn, user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutUser())
        removeItem('token')
        navigate('/login')
    }

    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
            <Link to={'/'} className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-1">KAMOL</span>
            </Link>
            {
                loggedIn ? (
                    <>
                        <p className="me-3 py-2 m-0 mt-md-0 ms-md-auto">{user.username}</p>
                        <button onClick={logoutHandler} className=' btn btn-outline-danger'>Logout</button>
                    </>
                )
                    :
                    (
                        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                            <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none">Login</Link>
                            <Link to={'/register'} className="me-3 py-2 text-dark text-decoration-none">Register</Link>
                        </nav>
                    )
            }
        </div>
    );
}

export default Navbar;
