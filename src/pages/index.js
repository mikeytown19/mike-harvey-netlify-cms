import React, { Component } from "react";
import Link from 'gatsby-link'
import Skelton from 'react-skeleton-css'


export default class IndexPage extends Component {
  render() {


    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Hi, Welcome to my website. </h1>
          </div>
          <button className="button-primary" style={{ marginBottom: '40px'}}>
                Button
          </button>

          <p></p>


          <div className="container">
            <div className="row">
              <div>
                <div style={{ backgroundColor: 'teal'}} className="two columns">2</div>
                <div style={{ backgroundColor: 'orange'}} className="ten columns">100</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="three columns"> </div>
                <div className="nine columns">9</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="four columns"> </div>
                <div className="eight columns">8</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="five columns"> </div>
                <div className="seven columns">7</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="six columns"> </div>
                <div className="six columns">6</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="seven columns"> </div>
                <div className="five columns">6</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="eight columns"> </div>
                <div className="four columns">4</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="nine columns"> </div>
                <div className="three columns">3</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="ten columns"> </div>
                <div className="two columns">2</div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="eleven columns"> </div>
                <div className="one column">1</div>
              </div>
            </div>
            <div className="row"></div>
          </div>

        </div>
      </section>
    )
  }
}

