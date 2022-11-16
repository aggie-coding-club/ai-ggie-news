import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "./Home.css";
import WhiteIcon from './images/aiggieNewsWhiteIcon.png'
import { redirect } from 'react-router-dom';


function Home(){
    const [profileData, setProfileData] = useState(null)
 
   function getData() {
     axios({
       method: "GET",
       url:"/articles",
     })
     .then((response) => {
         console.log("Info recieved")
         
       const res =response.data
       console.log(response.data)
       setProfileData(({
         article_name1: res.title1,
         paragraphCont1: res.content1,
         link1: res.link1,
         image1:res.image1,
         article_name2: res.title2,
         paragraphCont2: res.content2,
         link2: res.link2,
         image2:res.image2,
         article_name3: res.title3,
         paragraphCont3: res.content3,
         link3: res.link3,
         image3:res.image3,
         article_name4: res.title4,
         paragraphCont4: res.content4,
         link4: res.link4,
         image4:res.image4,
         article_name5: res.title5,
         paragraphCont5: res.content5,
         link5: res.link5,
         image5:res.image5
        }))
     }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
     })}
     getData()
    return(
        <div className="Frame">
            <div className="Artcl_box_body">
                <div className="ButtonList">
                    <div className="ArticleContent">
                    {profileData && <div>
                        <a href={profileData.link1}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.article_name1}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont1}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image1} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
                    <div className="ArticleContent">
                    {profileData && <div>
                        <a href={profileData.link2}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.article_name2}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont2}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image2} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
                    <div className="ArticleContent">
                    {profileData && <div>
                        <a href={profileData.link3}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.article_name3}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont3}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image3} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
                    <div className="ArticleContent">
                       {profileData && <div>
                        <a href={profileData.link4}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.article_name4}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont4}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image4} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
                    <div className="ArticleContent">
                    {profileData && <div>
                        <a href={profileData.link5}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.article_name5}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont5}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image5} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default Home;