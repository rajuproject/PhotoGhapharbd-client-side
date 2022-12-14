
import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../FireBase/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);




  const handleLogOut = () => {
    logOut()
    navigate("/")
      .then(() => { })
      .catch(error => console.error(error))
  }







  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/allService">All Service</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
             
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">PhotoGrapharBD</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/allService">All Service</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>


          </ul>
        </div>
        <div className="navbar-end">


          <>


            {
              user?.uid ?
                <>
                  <Link className='mr-24' to="/myReview">My Review</Link>
                  <Link className='mr-24' to="/add">Service add</Link>

                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogOut} className='btn'>Log out</Button>

                </>
                :
                <>

                  <Link to='/signIn' className="btn">Log In</Link>
                  <Link to='/register' className="btn">Sign Up</Link>

                </>

            }





          </>

        </div>
      </div>
    </div>
  );
};

export default Header;