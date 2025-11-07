import { useState } from 'react'
import sliderImg from '../../assets/images/PNG/Slider.png'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const total = 6

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  return (
    <div className="slider">
      <img src={sliderImg} alt="Slider" />
      <button className="nav-btn prev" onClick={prev}>‹</button>
      <button className="nav-btn next" onClick={next}>›</button>
      <div className="slider-content">
        <span className="slider-text">تجربه غذای سالم و گیاهی به سبک ترخینه</span>
        <button className="order-btn">سفارش آنلاین غذا</button>
      </div>
      <div className="slide-counter">
        {[...Array(total)].map((_, i) => (
          <div
            key={i}
            className={`counter-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider