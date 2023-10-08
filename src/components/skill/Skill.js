import React, { useEffect, useState } from "react";
import _axiosInstance from "../../shared/services/axios.instance";
const Skill = ()=>{
    const [data,setData]= useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await _axiosInstance.get('skill/getskills');
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
              <section className="myskills-section bg-color-1 site-section" id="skills-wrap">
                    <div className="container">
                        <div className="myskills-heading txt-center">
                            <div className="heading-wrap">
                                <h1 className="heading-title">My Skills</h1>
                            </div>
                            <div className="heading-paragraph">
                                <p>
                                    Skills that I have are
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-md-6 col-12">
                                <div className="sub-heading">
                                    <h2> Technical Skills</h2>
                                </div>
                                <div className="skill-list">
                                    <ul>
                 
                                        {
                                            (data && data.length>0)&&data.filter(x=>x.type==="0").map((item)=>{
                                                return (
                                                    <li>{item.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="sub-heading">
                                    <h2>Addittional Skills</h2>
                                </div>
                                <div className="skill-list">
                                    <ul>
                 
                                        {
                                            (data && data.length>0)&&data.filter(x=>x.type==="1").map((item)=>{
                                                return (
                                                    <li>{item.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </React.Fragment>
}
export {Skill};