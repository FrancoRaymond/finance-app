import loopstudios from '../images/loop-studios.svg'
import photosnap from '../images/photosnap.svg'
import p1 from '../images/profile-1.jpg'
import p2 from '../images/profile-2.jpg'
import p3 from '../images/profile-3.jpg'

export const Transactions = [
    {
        id:1,
        image: p1,
        name: "John Gates",
        amount: 550.50,
        credit: true,
        date: "19 Aug 2024"
    },
    {
        id:2,
        image: loopstudios,
        name: "Loop Studios",
        amount: 150.50,
        credit: false,
        date: "19 Aug 2024"
    },
    {
        id:3,
        image: p2,
        name: "Sam Johnson",
        amount: 670.00,
        credit: false,
        date: "18 Aug 2024"
    },
    {
        id:4,
        image: p3,
        name: "Suzan Mathews",
        amount: 800.00,
        credit: true,
        date: "17 Aug 2024"
    },
    {
        id:5,
        image: photosnap,
        name: "Photosnap",
        amount: 130.00,
        credit: false,
        date: "17 Aug 2024"
    }
]