
import React from "react"
const RequiredMessage = (props)=>{
 return <React.Fragment>
       <div class="error error-txt d-block">{
props.labelName+" "
       } 
       is required.</div>
 </React.Fragment>
}
export {RequiredMessage};