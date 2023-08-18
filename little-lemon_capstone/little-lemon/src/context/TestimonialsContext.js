import { createContext, useContext } from "react";

const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
    const testimonials = [
        {
            name: 'Anna',
            image: 'anna.jpeg',
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
        {
            name: 'Mary',
            image:'mary.jpeg',
            rating: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
        {
            name: 'Jesus',
            image: 'jesus.jpeg',
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        },
        {
            name: 'John',
            image: 'john.jpeg',
            rating: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quasi, quod, quibusdam.',
        }
    ];
    return (
        <TestimonialsContext.Provider value={testimonials}>
            {children}
        </TestimonialsContext.Provider>
    );
};

export const useTestimonials = () => useContext(TestimonialsContext);