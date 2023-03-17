import React from 'react'
import movies from '../data/movie.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import '../styles/movie.css' //一定要放在slick css下方才能複寫


const Movie = () => {
    const settings = {
        dots: true, //呈現原點效果
        infinite: true, //迴圈
        speed: 1000,
        slidesToShow: 5, //一次要顯示幾張圖片。
        SlidesToScroll: 1, //一次滑動要顯示幾張圖片。
        autoplay: true, //如設定為 true，則圖片會自動進行輪播，當滑鼠移至 Slider 時才會停下。
        autoplayspeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
        customPaging: (i) => {
            return (
                <a>
                    <img src={movies[i].url} />
                </a>
            );
        },
        centerMode: true, //配合上面custom設定置中點擊的圖片
        dotsClass: "slick-dots slick-thumb", //複寫原點的class，除了原本的slick-dots，還附帶slick-thumb class
    }
    return (
        <div className='exhibit'>
            <Slider {...settings}>
                {movies.map((movie, index) => {
                    return (
                        <div className='wrap'>
                            <img src={movie.url} alt={movie.name} key={movie.name + index}></img>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Movie;
