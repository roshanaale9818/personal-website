import React from "react";
import "./Admin.personalinfo.css";
const AdminPersonalInfo = () => {
    return <React.Fragment>
        <fieldset>
            <legend>PersonalInfo:</legend>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input className="form-control" type="text" id="address" name="eddress" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="form-control" type="text" id="email" name="email" />
                </div>
                <div className="form-group">
                <label htmlFor="education">Education:</label>
                <input className="form-control" type="education" id="education" name="Education" />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input className="form-control" type="text" id="phone" name="phone" />
                </div>
                <button type="button" className="btn btn-primary mt-2">Save </button>
            </form>
        </fieldset>
    </React.Fragment>
}
export { AdminPersonalInfo };