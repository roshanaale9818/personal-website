import React, { useEffect, useState } from "react";
import _axiosInstance from "../../shared/services/axios.instance";
import { Link } from "react-router-dom";
const Project = ()=>{
    const [data,setData]= useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('project/getProjects');
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

        getData();
    }, [])
    return <React.Fragment>
    <section className="myproject-section bg-color-1" id="project-wrap">
                    <div className="container">
                        <div className="myproject-heading txt-center">
                            <div className="heading-wrap">
                                <h1 className="heading-title">My Projects</h1>
                            </div>
                            <div className="heading-paragraph ">
                                <p>
                                    Some of my projects are mentioned below.
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row mt-20">
                        {(data&&data.length>0) &&data.map(item=>{
                            return (
                                <div className="col-lg-4 col-sm-6 col-12">
                                <div className="project-item">
                                    {/* <div className="project-icon">
                                        <img src="images/project.png" alt="project"/>
                                    </div> */}
                                    <div className="project-content">
                                        <h3 className="item-title mt-20"><Link to={item.url} className="pointer-none">{item.name}</Link></h3>
                                        <p>
                                            {item.description}
                                        </p>
                                        <Link to={item.url} >View Project</Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                        {(!data || data.length === 0) &&
                        <div className="text-center">No data available.</div>
                    }
                        </div>
                    </div>

                </section>
    </React.Fragment>
}
export {Project};