import React from "react";
import PropTypes from 'prop-types';
const NoRecordsRow = (props)=>{
        return <>
<tr>
    <td colSpan={props.colSpan} className="text-center" >{props.message || "No records available."}</td>
</tr>
        </>;
}
NoRecordsRow.prototype = {
    colSpan:PropTypes.string.isRequired,
    message:PropTypes.string,
    align:PropTypes.string
}
export default NoRecordsRow;