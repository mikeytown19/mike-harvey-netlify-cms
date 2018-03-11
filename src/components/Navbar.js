import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo-yellow.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="">
            <img src={logo} alt="Kaldi" style={{ width: '5.75rem', maxHeight: '5.75rem' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/mikeytown19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
