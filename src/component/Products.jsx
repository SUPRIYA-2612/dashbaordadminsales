import React from 'react'
import{ Link} from 'react-router-dom'
import Sidebar from './Shared/Sidebar'

export default function Products() {
  return (
    <div><p> this is Product </p>
    <Link to="/Dashbaord">Go to Dashboard</Link>
    <Sidebar /></div>
  )
}
