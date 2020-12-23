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
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 4000)
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  nextSlide()

  return (
    <Container>
      <div className={css1.slider}>
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