import React from 'react'

const BusItem = ({bus}) => {
    const {insurance, phone, vehicle_registration}=bus
  return (
    <div><h3>existing Buses in the company</h3>

    <p>{insurance}</p>
    <p>{phone}</p>
    <p>{vehicle_registration}</p></div>
  )
}

export default BusItem