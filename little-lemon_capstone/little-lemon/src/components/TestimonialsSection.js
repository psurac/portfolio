import './TestimonialsSection.css'
import { useTestimonials } from '../context/TestimonialsContext.js';
import Testimonial from './Testimonial.js';

function TestimonialsSection() {
    return (
        <div className='prim1 padd-right-left testi-flex'>
            {useTestimonials().map(item => <Testimonial testi={item} />)}
        </div>
    );
};

export default TestimonialsSection;