import React from 'react';



export function Profile(props) {
  return (
    <div className = 'container row profile justify-content-end align-items-center'>
      <div className = 'row col-6'>
        <h1 className = 'col-12'>{props.user.name}</h1>
        <h1 className = 'col-12'>{props.user.secondName}</h1>
        <h1 className = 'col-12'>{props.user.email}</h1>
      </div>
      <h1 className = 'col-6'>{props.user.services}</h1>
    </div>
  )
}