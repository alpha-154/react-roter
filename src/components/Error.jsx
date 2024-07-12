import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError()

  return (
    <div className='error-container'>
      <h2>{error?.message || "error while fetching data from vans"}</h2>
      <pre> {error.status} - {error.statusText} </pre>
    </div>
  )
}

export default Error
