import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'
import './Spinner.css'

const Spinner = () => {
  return (
    <Backdrop className="backdrop-spin component" open >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Spinner