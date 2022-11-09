import React from 'react'
import "./Home.css";
import WhiteIcon from './images/aiggieNewsWhiteIcon.png'

function Home(){
    return(
        <div className="Frame">
            <div className="Artcl_box_body">
                <div className="ButtonList">
                    <div className="ArticleContent">
                        <button className="article">
                            <h1 className="ArticleTitle">Article 1</h1>
                            <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                            <img className="Article_image" src={WhiteIcon} alt="aiggieNews" />
                        </button>
                    </div>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 2</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 3</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 4</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 5</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 6</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 7</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>
                    <button className="article">
                        <h1 className="ArticleTitle">Article 8</h1>
                        <p1 className="ArticleBodyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales diam, a convallis velit. Nulla facilisi. Morbi quam nisi, vestibulum hendrerit bibendum sed, semper non nisi. In ultricies ut arcu eget elementum. Proin maximus ipsum neque, ut vestibulum velit efficitur sed. Morbi tristique erat id tellus lobortis, at sollicitudin nisi sagittis. Morbi elementum quam eget sapien tempus luctus. Nullam et nisl nisi. Proin id ante egestas felis viverra facilisis accumsan ac arcu. Ut ut lectus nisl.</p1>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Home;