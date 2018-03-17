import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Navbar from '../components/Navbar'
import './all.sass'
import './site.scss'
import './base.scss'
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
