import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className="Testimonial">
        <div className="TestimonialLeft">
          <img src="./images/underlapImage.svg" alt="" />
          <div className="overlapImage">
            <img src="./images/overlapImage.svg" alt="" />
          </div>
        </div>
        <div className="TestimonialRight">
          <h3>Testimonials</h3>
          <h1>What People Say about <span>Our Organization</span></h1>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat. Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel. Vitae urna pharetra sem consectetur sed mi, nisi id feugiat. At egestas praesent mauris metus risus accumsan. Cras gravida natoque maecenas risus ultricies. Sed tincidunt porttitor viverra nunc neque, enim. Tristique molestie turpis turpis diam\</p>
          <h4>Kay Henderson</h4>
          <h5>Businessman - Entrepreneur</h5>
        </div>
    </section>
  )
}

export default Testimonial