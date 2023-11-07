import React, { useEffect, useState } from "react";
import _axiosInstance from "../../shared/services/axios.instance";
const AboutMe = (props)=>{
    const [imgObj,setImgObj] = useState({});
    const onDownloadHandler = async()=>{
        try{
     
            // Make a GET request to the backend endpoint
            const response = await _axiosInstance.get('resume/download', {
              responseType: 'blob', // Important: responseType must be 'blob' for binary data
            });
      
            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));
      
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'myresume-file.pdf');
      
            // Append the anchor element to the body and trigger a click event
            document.body.appendChild(link);
            link.click();
            link.remove();
      
            // Clean up the URL object after the download
            window.URL.revokeObjectURL(url);

        }
        catch(err){
            console.err("Error:",err);
        }
    }
    useEffect(()=>{

        const getPicture = async () => {
            try {
                const dataResult = await _axiosInstance.post('image/getsingleimage',{type:'aboutme'});
                // console.log("ER", result);
                if (dataResult.data.status === 'ok') {
                    let resBody=dataResult.data.data;
                    setImgObj(resBody);
                    console.log("dataResult",resBody)

                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getPicture();
    },[])
return <React.Fragment>
      {/* <!--About me starts--> */}
                <section className="aboutme-section bg-color-1" id="aboutmewrap">
                    <div className="container">
                        <div className="aboutme-wrap">
                            <div className="heading-wrap">
                                <h1 className="heading-title">About Me</h1>
                            </div>
                            <div className="heading-paragraph">
                                <p>
                                    Who am I ? Get to know me.
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="about-img txt-center mt-50">
                                    <img className="aboutImage" src={imgObj&& imgObj.image_url?imgObj.image_url:''}alt="fig" />
                                </div>
                                <div className="download-wrap txt-center">
                                    <button onClick={onDownloadHandler} className="download-btn" download="roshanaalemagar" target="_blank">DOWNLOAD RESUME <i className="fa fa-download ml-2"></i></button>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="item-wrap sub-title">
                                    <h3 className="item-title">
                                    {props.data ? props.data.name :"-"}
                                    </h3>
                                    <div className="item-subtitle">
                                    {props.data ? props.data.job_designation :"-"}
                                    </div>
                                    <div className="item-paragraph">
                                        <p>
                                        {props.data ? props.data.description :"-"}

                                        </p>
                                    </div>
                                    <div className="personal-info">
                                        <div className="row">
                                            {/* <div className="col-md-6 col-12">
                                                <div className="info-list">
                                                    <ul>
                                                        <li><span>Birthday:</span> 05. 31.1998</li>
                                                        <li><span>Address:</span>MidBaneshwor,Kathmandu</li>
                                                        <li><span>Age:</span> 20 years</li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                            <div className="col-md-6 col-12">
                                                <div className="info-list">
                                                    <ul>
                                                        <li><span>Mail:</span> {props.data ? props.data.email :"-"}</li>
                                                        {/* <!-- <li><span>Phone:</span> 9818009826</li> --> */}
                                                        {/* <li><span>Study:</span> BIT</li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--About me Ends--> */}
</React.Fragment>
}
export {AboutMe};