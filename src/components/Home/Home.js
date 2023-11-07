import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { AboutMe } from "../aboutme/AboutMe";
import _axiosInstance from "../../shared/services/axios.instance";
const Home = () => {
    const [data,setData]= useState([]);
    const [socialMedia,setSocialMedia]= useState([]);
    const [homeObj,setHomeObj]= useState({
        image_url:''
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('home/gethome');
                // console.log("ER", result);
                if (result.data.status === 'ok') {
                    setData(result.data.data);
                    let resBody=result.data.data;
                    setData(resBody);
                    // console.log("personalinfo",personalInfo)

                }

            } catch (error) {
                console.log("Error", error)
            }
        };
        const getLinks = async () => {
            try {
                const dataResult = await _axiosInstance.get('socialmedia/getsocialmedia');
                // console.log("ER", result);
                if (dataResult.data.status === 'ok') {
                    let resBody=dataResult.data.data;
                    setSocialMedia(resBody);
                    console.log("dataResult",resBody)

                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        const getHomePicture = async () => {
            try {
                const dataResult = await _axiosInstance.post('image/getsingleimage',{type:'hompage'});
                // console.log("ER", result);
                if (dataResult.data.status === 'ok') {
                    let resBody=dataResult.data.data;
                    setHomeObj(resBody);
                    console.log("dataResult",resBody)

                }

            } catch (error) {
                console.log("Error", error)
            }
        };

        getData();
        getLinks();
        getHomePicture();
    }, [])
    return <>
        <section className="main-banner-section">
            <div className="container">
                <div className="content-section">
                    <div className="top-content">
                        <div className="item-img">
                            <img className="homeImage" src={homeObj && homeObj.image_url !== undefined ?homeObj.image_url:''} alt="img" />
                        </div>
                        <div className="item-content">
                            <div className="item-top-text">
                                {data ? data.greeting :"Hello"}
                            </div>
                            <div className="item-title">
                                <h1>I am  
                                {data &&data.name ? " "+data.name :" -"}
                                </h1>
                            </div>
                            <div className="item-intro">
                                <h2>
                                    <span>  {data ? data.job_designation :"-"}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="item-social">
                            <ul>
                                {
                                    socialMedia.map(item=>{
                                       return( <li key={item.id}> <Link to={item.url} target="_blank" rel="noopener noreferrer" >
                                       <i className={item.icon}></i>
                                   </Link></li>)
                                    })
                                }

                                {/* {(skillData&&skillData.length > 0 ) ? skillData.map(item=>{
                                    return (         <li> <Link to={item.url} target="_blank" rel="noopener noreferrer" >
                                    <i className={item.icon}></i>
                                </Link></li>)
                                }):''} */}
                                {/* <Link to="https://www.linkedin.com/in/roshanaale9818" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin"></i>
                                </Link></li> */}
                                {/* <li><Link to="https://github.com/roshanaale9818" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github"></i></Link></li> */}
                                {/* <li><Link to="https://www.linkedin.com/in/roshanaale9818" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin"></i>
                                </Link></li>
                                <li><Link to="https://github.com/roshanaale9818" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github"></i></Link></li> */}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AboutMe data={data}/>
    </>
}
export { Home };