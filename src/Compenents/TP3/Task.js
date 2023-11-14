import React from 'react';

export default function Task({delf,txt,Completed,toggle}) {
  const styletext={
  
    textDecoration:  Completed? "line-through": "none",
   
  }
  
  return (
    <div class="row"  >
 <div class="col-lg-9"> <input type="text" style={styletext}  onClick={toggle} readOnly class=" form-control"  value={txt} /></div>
  <div class="col-lg-3"><input type="button" onClick={delf} class="btn btn-danger btn-sm" value={"Supprimer"} /></div>
  <br /><br />
    </div>
  )
}
