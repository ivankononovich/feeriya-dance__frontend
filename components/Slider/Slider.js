import { useState } from 'react'

import Container from './../Container/Container'
import css from './../../styles/index.scss'
import css1 from './slider.scss'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import next from 'next'

const Slider = () => {
  const [current, setCurrent] = useState(0)

  const sliderData = [
    {
      image: 'main-bg.jpg'
    },
    {
      image: 'Untitled-1.jpg'
    },
    {
      image: 'Untitled-2.jpg'
    },
    {
      image: 'Untitled-3.jpg'
    },
  ]

  const length = sliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  return (
    <Container>
      <div className={css1.slider}>
        <FaArrowAltCircleLeft className={css1.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={css1.rightArrow} onClick={nextSlide} />
        {
          sliderData.map((slide, index) => {
            return (
              <div className={index === current ? css1.slideActive : css1.slide} key={index}>
                {index === current && (
                  <img className={css.image} src={`/static/${slide.image}`} alt="" />
                )}
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}

export default Slider