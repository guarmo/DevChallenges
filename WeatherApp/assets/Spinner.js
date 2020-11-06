import React, { Fragment } from 'react'
import spinner from './ajax-loader.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner}
             alt="Loading..."
             className="spinner"
             style={{ width:'20px', margin:'auto', display:'block'}}
             />
        </Fragment>
    )
}

export default Spinner
