import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
       <>
<footer className="text-center text-lg-start bg-light text-muted">
<section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Furniture
          </h6>
          <p>
            We have the best furniture . do you need any furniture. then contact with us.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Product Management
          </h6>
          <p>
            <NavLink to="/add-new-product" className="text-reset">Add New Product</NavLink>
          </p>
          <p>
            <NavLink to="/manage-products" className="text-reset">Manage Products</NavLink>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/about" className="text-reset">about</NavLink>
          </p>
          <p>
            <NavLink to="/contact" className="text-reset">contact</NavLink>
          </p>
          <p>
            <NavLink to="/login" className="text-reset">signup</NavLink>
          </p>
          <p>
            <NavLink to="/signup" className="text-reset">login</NavLink>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" >
    © 2021 Copyright:
    <NavLink className="text-reset fw-bold" to="/">FurnitureProduct.com</NavLink>
  </div>
</footer>
       </>
    )
}

export default Footer
