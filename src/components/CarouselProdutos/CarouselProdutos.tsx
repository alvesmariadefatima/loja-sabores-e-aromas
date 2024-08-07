import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
    { url: 'produto1.png' },
    { url: 'produto2.png' },
    { url: 'produto3.png' },
    { url: 'produto4.png' }
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{ width: '30%', margin: '0 auto' }}>
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo.url} alt={`Foto ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;