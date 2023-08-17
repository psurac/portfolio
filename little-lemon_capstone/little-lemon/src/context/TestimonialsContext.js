import { createContext, useContext } from "react";

const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
    const testimonials = [
        {
            name: 'Anna',
            image: 'anna.jpg',
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
        {
            name: 'Mary',
            image:'mary.jpg',
            rating: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
        {
            name: 'John',
            image: 'john.jpg',
            rating: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
    ];
    return (
        <TestimonialsContext.Provider value={testimonials}>
            {children}
        </TestimonialsContext.Provider>
    );
};

export const useTestimonials = () => useContext(TestimonialsContext);