import React from 'react'
import { Link } from 'react-router'

function PageNotfound() {
  return (
    <div style={{textAlign :'center'}}>
        <h1>Page not found </h1>

        <Link to='/'>Go to home page </Link>
        <h3>404 error</h3>
    </div>
  )
}

export default PageNotfound