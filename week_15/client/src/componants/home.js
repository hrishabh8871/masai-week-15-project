import React from 'react';
import '../App.css';
import HomeProduct from './homeProduct';
class Home extends React.Component {            
    render () {        
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                           
                            <div className="carousel-inner">
                           
                                <div className="carousel-item">
                                <img src="https://i.hungrygowhere.com/business/da/99/12/00/carousel.jpg" className="d-block w-100 mainImg" alt="..."/>
                              
                                </div>
                                <div className="carousel-item active">
                                <img src="https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Category/Carousel/Supar-Saver-Carousel-banner.jpg" className="d-block w-100 mainImg" alt="..."/>
                               
                                </div>
                                <div className="carousel-item">
                                <img src="https://www.caseys.com/medias/App-Carousel.jpg?context=bWFzdGVyfGltYWdlc3w2NDc0OTJ8aW1hZ2UvanBlZ3xoMzQvaDUwLzg4MDk3NzYyODM2NzgvQXBwLUNhcm91c2VsLmpwZ3w0Y2MyMTlkMGM1ZmMwZWY4MTgzZGJhZTI0YTBjMDc2OWY0OWY2MDk5NDFjM2MwNTQzNDQzNWU0NGY4ZjhjMmM2" className="d-block w-100 mainImg" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                </div>
               <div>
                        
               
               <HomeProduct />
    
               </div>
            </div>
        )
    }
       
}

   
export default Home;