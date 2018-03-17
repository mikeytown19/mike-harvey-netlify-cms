import React from 'react'


function islegal(params) {
  return <p>{params}</p>
}

export default ({ switches, content }) => (
  <div className={ `layout-basic-content cf-component ${ switches }` }>
  <div className="row">
            {content ? content() : null}
     </div>
  </div>
)
