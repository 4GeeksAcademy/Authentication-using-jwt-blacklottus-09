import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand mx-auto order-lg-first" to="/">
          <p>Home</p>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">            
          <form
            className="d-flex mx-0 mx-lg-5 mb-3 my-lg-0 order-lg-2 flex-grow-1"
            role="search"
          >
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar libros, autores, géneros..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="btn-group ms-auto">
          <button
            type="button"
            className="btn border-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-user"></i>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            {!store.token ? (
              <>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <p>no hay opciones xd</p>
            )}
            {store.token && (
              <>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="btn-group me-3">
          <button
            type="button"
            className="btn border-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {store.cartCount}{" "}
              <span className="visually-hidden">items in cart</span>
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <h6 className="dropdown-header">Carrito de Compras</h6>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {store.cartCount === 0 ? (
              <li>
                <span className="dropdown-item text-muted">
                  Aún no hay artículos en el carrito.
                </span>
              </li>
            ) : (
              <li>
                <span className="dropdown-item text-muted">
                  Tienes {store.cartCount} artículo(s) en el carrito.
                </span>
              </li>
            )}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item text-center" to="/cart">
                Ver Carrito Completo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
