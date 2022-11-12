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
       console.log(res.name)
       setProfileData(({
         profile_name: res.title,
         paragraphCont: res.content,
         link: res.link,
         image:res.image}))
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
                        <a href={profileData.link}>
                            <button className="article">
                                
                                <div className="articleText">
                                    <h1 className="ArticleTitle">{profileData.profile_name}</h1>
                                    <p className="ArticleBodyPara">{profileData.paragraphCont}</p>
                                </div>
                                <div className="ArticleImage_Content">
                                    <img className="Article_image_direct" src={profileData.image} alt="aiggieNews" />
                                </div>
                             </button>
                             </a>
                         </div>}
                    </div>
                    <div className="ArticleContent">
                        <button className="article">
                            <div className="articleText">
                                <h1 className="ArticleTitle">Article 2</h1>
                                <p className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p>
                            </div>
                            <div className="ArticleImage_Content">
                                <img className="Article_image_direct" src={WhiteIcon} alt="aiggieNews" />
                            </div>
                        </button>
                    </div>
                    <div className="ArticleContent">
                        <button className="article">
                            <div className="articleText">
                                <h1 className="ArticleTitle">Article 3</h1>
                                <p className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p>
                            </div>
                            <div className="ArticleImage_Content">
                                <img className="Article_image_direct" src={WhiteIcon} alt="aiggieNews" />
                            </div>
                        </button>
                    </div>
                    <div className="ArticleContent">
                        <button className="article">
                            <div className="articleText">
                                <h1 className="ArticleTitle">Article 4</h1>
                                <p className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p>
                            </div>
                            <div className="ArticleImage_Content">
                                <img className="Article_image_direct" src={WhiteIcon} alt="aiggieNews" />
                            </div>
                        </button>
                    </div>
                    <div className="ArticleContent">
                        <button className="article">
                            <div className="articleText">
                                <h1 className="ArticleTitle">Article 5</h1>
                                <p className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p>
                            </div>
                            <div className="ArticleImage_Content">
                                <img className="Article_image_direct" src={WhiteIcon} alt="aiggieNews" />
                            </div>
                        </button>
                    </div>


                    

                </div>
            </div>
        </div>
    );
}

export default Home;