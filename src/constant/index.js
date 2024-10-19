import icon1 from '../assets/icon_1.png'
import icon2 from '../assets/icon_2.png'
import icon3 from '../assets/icon_3.png'
import icon4 from '../assets/icon_4.png'

import courses1 from '../assets/courses_1.jpg'
import courses2 from '../assets/courses_2.jpg'
import courses3 from '../assets/courses_3.jpg'

import avt1 from '../assets/avt1.png'
import avt2 from '../assets/avt2.png'
import avt3 from '../assets/avt3.png'

import avt4 from '../assets/avt4.png'
import avt5 from '../assets/avt5.png'
import avt6 from '../assets/avt6.png'

export const navLinks = [
    {
        id: 'courses',
        title: 'Courses',
    },
    {
        id: 'teacher',
        title: 'Teacher',
    },
    {
        id: 'offers',
        title: 'Offers',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const service = [
    {
        title: 'Online Degrees',
        context: 'Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.',
        icon:icon1,
    },
    {
        title: 'Short Courses',
        context: 'Enhace your skills with our concise and focused short courses, designed for quick and effective learning.',
        icon: icon2,
    },
    {
        title: 'Training From Experts',
        context: 'Immerse yourself in knowledge with industry experts guiding you througn hands-on expericence.',
        icon: icon3,
    },
    {
        title: '1.5k+ Video Courses',
        context: 'Dive into a vast library of over 1.5k+ video courses covering many subjects, offering a visual learning expericence.',
        icon: icon4,
    },
];

const course = [
    {
        image: courses1,
        type: 'Web Design',
        rate: '4.9',
        title: 'Web Design & Development',
        class: '25 Classes',
        student: '185 Student',
        price: '$560.00',
        avatar: avt1,
        author: 'J.Morgan',
    },
    {
        image: courses2,
        type: 'UI/UX Design',
        rate: '5.0',
        title: 'Wireframing & Prototyping',
        class: '8 Classes',
        student: '400 Student',
        price: '$160.00',
        avatar: avt2,
        author: 'Jordan Re',
    },
    {
        image: courses3,
        type: 'Data Science',
        rate: '4.9',
        title: 'Python For Data Science',
        class: '18 Classes',
        student: '160 Student',
        price: '$432.00',
        avatar: avt3,
        author: 'Alex Taylor',
    },
];

const review = [
    {
        avatar: avt4,
        author: 'Alexa Rodriguez',
        type: 'Web Development',
        context: 'Enrolling in courses at this elearning platform was a game-changer for me. Absolutely transformative experience!'
    },
    {
        avatar: avt5,
        author: "Emily Chen",
        type: "UX/UI Designer",
        context: "Exceptional courses! The practical insights and flexiable learning structure have been instrumental in my professional growth."
    },
    {
        avatar: avt6,
        author: 'James Johnson',
        type: 'Web Developer',
        context: 'Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding...'
    },
];

export {service, course, review}