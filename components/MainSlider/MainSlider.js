import Slider from 'react-slick'

import Link from 'next/link'

import css from './main-slider.scss'

const MainSlider = ({ img }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: css.button__bar,
  }

  const sliderData = [
    {
      image: '111.jpg',
      url: '/product?id=monopoliya-bolshaya-afera',
    },
    {
      image: 'Untitled-1.jpg',
      url: '/product?id=LOL-kykla-s-volosami-564744Е7С-V',
    },
    {
      image: 'Untitled-2.jpg',
      url: '/product?id=inercionni-avto-kran-1',
    },
    {
      image: 'Untitled-3.jpg',
      url: '/product?id=kukla-s-sobachkoi-cs699-12',
    },
  ]

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Slider {...settings}>
        {sliderData.map((slide, index) => {
          return (
            <>
              <Link href={slide.url}>
                <a>
                  <img
                    className={css['card']}
                    src={`/static/${slide.image}`}
                    key={index}
                  />
                </a>
              </Link>
            </>
          )
        })}
      </Slider>
    </div>
  )
}

export default MainSlider
