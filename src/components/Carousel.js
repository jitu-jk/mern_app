import React from 'react';

export default function Carousel({search, setSearch}) {
  
    return (

          <div> <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
          </div>
          <div className="carousel-container">
            <div className="carousel-item active">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg" className="d-block w-100" style={{ filter: "brightness(50%)", width: "100%", height: "650px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://b.zmtcdn.com/data/pictures/chains/1/931/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|960:500&crop=960:500;*,*" className="d-block w-100" style={{ filter: "brightness(50%)", width: "100%", height: "650px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" className="d-block w-100" style={{ filter: "brightness(50%)", width: "100%", height: "650px" }} alt="..." />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
    );
}
    

//         // <div>
//         //     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//         //         <div className="carousel-inner" id='carousel'>
//         //             <div className="carousel-caption" style={{ zIndex: "10" }}>
//         //                 <form className="d-flex justify-content-center align-items-center">
//         //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         //                     <button className="btn btn-outline-success" type="submit">Search</button>
//         //                 </form>
//         //             </div>
//         //             <div className="carousel-container">
//         //                 <div className="carousel-item active">
//         //                     <img src="https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "700px" }} alt="..." />
//         //                 </div>
//         //                 <div className="carousel-item">
//         //                     <img src="https://b.zmtcdn.com/data/pictures/chains/1/931/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|960:500&crop=960:500;*,*" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "700px" }} alt="..." />
//         //                 </div>
//         //                 <div className="carousel-item">
//         //                     <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" className="d-block w-100" style={{ filter: "brightness(30%)", width: "100%", height: "700px" }} alt="..." />
//         //                 </div>
//         //             </div>
//         //         </div>

//         //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         //             <span className="visually-hidden">Previous</span>
//         //         </button>
//         //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         //             <span className="visually-hidden">Next</span>
//         //         </button>
//         //     </div>
//         // </div>
//  )
 // }
