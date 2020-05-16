import React from 'react';



export function Profile(props) {
  return (
    <div className = 'container row profile'>
      <div className = 'row col-6'>
        <h1 className = 'col-12'>NAME</h1>
        <h1 className = 'col-12'>SURNAME</h1>
      </div>
      <h1 className = 'col-6'>SERVICES</h1>
    </div>
  )
}