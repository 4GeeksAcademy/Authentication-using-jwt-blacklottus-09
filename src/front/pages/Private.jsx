import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate, Navigate } from "react-router-dom";

export const Private = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            {store.token ? (
                <div className="row py-3">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <h1 className="text-center">
                            Has entrado a la vista super privada
                        </h1>
                    </div>
                    <div className="col-12 col-md-6 alert alert-success">
                        <p>Esta es una vista privada.</p>
                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </div>
    );
};