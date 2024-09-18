import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Breadcrumbs.css'
const Breadcrumbs = () => {
  return (
    <div className="container text-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <Link to="/" className="text-light">Home</Link>
          </li>
          <li className="breadcrumb-item text-warning" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
