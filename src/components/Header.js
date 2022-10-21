import React, { useEffect, useState } from 'react'
import Face from '../icons/face.png'
export default function TasksList() {
  return (
    <div className="Header">
      <div className="headerText">
        nerds.family
        <img src={Face} />
      </div>
    </div>
  )
}
