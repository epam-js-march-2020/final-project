import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BuildInCarousel({imgArray}) {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 540 },
        items: 3,
        slidesToSlide: 3
      },
      mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
  
    return(
      <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style d-lg-none"
          itemClass="carousel-item-padding-40-px"
      >
        {imgArray.map((image, i) => (
          <div key={i}>
            <img
              className="d-block mx-auto carousel-image"
              src={image}
              alt={`${i} slide`}
            />
          </div>
        ))}
      </Carousel>
    );
  }
  