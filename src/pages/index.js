import React, { Component } from "react";
import Link from 'gatsby-link'
import Skelton from 'react-skeleton-css'
import BasicContent from '../components/Basic-Content'





export default class IndexPage extends Component {
  render() {


    return (
      <section className="section container">
        <div className="">

        </div>

        <BasicContent switches="large-padding" content={()=>{
          return (
            <section>
              <div>
                <h1 className="has-text-weight-bold">Hi, Welcome to my website. </h1>
              </div>
              <button className="button-primary shit" style={{ marginBottom: '40px'}}>
                    Learn More
              </button>
            </section>
          )
          }} >

        </BasicContent>

        <BasicContent switches="large-padding text-center"
          content={()=>{
            return (
              <section>
                <div>
                  <h1 className="has-text-weight-bold">Hi, Welcome to my website. </h1>
                </div>
                <button className="button-secondary shit" style={{ marginBottom: '40px'}}>
                      Learn More
                </button>
              </section>
            )
          }} >
        </BasicContent>
      </section>
    )
  }
}

