import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import SearchBar from "components/SearchBar";
import Button from "components/Button";
import { LogoPayFazz, BurgerMenuIcon, CloseImg, UserIcon } from "assets";
import { toggleSidebar, userLoggedOut } from "redux/actions";

import "./Navbar.scss";

function Navbar() {
  const isSidebarActive = useSelector((state) => state.isSidebarActive);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const categoryArr = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };
  const handleLogout = () => {
    userLoggedOut();
    history.push("/login");
  };

  const handleLogoutMobile = () => {
    userLoggedOut();
    dispatch(toggleSidebar());
    history.push("/login");
  };

  console.log(user);
  return (
    <div className="navbr" style={{ overflow: isSidebarActive ? "unset" : "hidden" }} role="navigation" aria-label="main navigation">
      <div className="navbr__logo">
        <Link className="" to="/" title="BERANDA &middot; Avana">
          <LogoPayFazz />
        </Link>
        <span className="navbr__news">News</span>
      </div>
      <div className="navbr__burgerMenu" onClick={handleToggleSidebar}>
        <BurgerMenuIcon />
      </div>
      <div className="navbr__searchBar">
        <SearchBar />
        <div className="navbr__category">
          {categoryArr.map((category) => (
            <span key={category} className="navbr__textCategory">
              <Link to={`/${category.toLowerCase()}`}>{category}</Link>
            </span>
          ))}
        </div>
      </div>
      <div className="navbr__authBtn navbr__authBtn--desktop">
        {user?.email ? (
          <div className="navbr__user">
            <div className="navbr__user--icon">
              <UserIcon />
            </div>
            <p className="navbr__user--email">{user?.email}</p>
            <p className="navbr__user--logout" onClick={handleLogout}>
              Logout
            </p>
          </div>
        ) : (
          <>
            <Button onClick={handleLogin} small white>
              Login
            </Button>
            <Button onClick={handleRegister} small secondary>
              Register
            </Button>
          </>
        )}
      </div>
      <div className="navbr__overlay" onClick={handleToggleSidebar} style={{ right: isSidebarActive ? "0" : "-100%" }}></div>
      <div className="navbr__mobile" style={{ right: isSidebarActive ? "0" : "-100%" }}>
        <div className="navbr__mobileHeader">
          <img className="navbr__close" src={CloseImg} alt="" onClick={handleToggleSidebar} />
          <h3>NEWS CATEGORY</h3>
        </div>
        <div className="navbr__authBtn navbr__authBtn--mobile">
          {user?.email ? (
            <div className="navbr__user">
              <div className="navbr__user--icon">
                <UserIcon />
              </div>
              <p className="navbr__user--email">{user?.email}</p>
              <p className="navbr__user--logout" onClick={handleLogoutMobile}>
                Logout
              </p>
            </div>
          ) : (
            <>
              <Button onClick={handleLogin} small white>
                Login
              </Button>
              <Button onClick={handleRegister} small secondary>
                Register
              </Button>
            </>
          )}
        </div>
        <ul className="navbr__mobileUnorderedList">
          {categoryArr.map((category) => (
            <li key={category} className="navbr__textCategory" onClick={handleToggleSidebar}>
              <Link to={`/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
