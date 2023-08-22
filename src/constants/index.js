import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { naga3, naga5, naga6, naga7, naga8, naga9, naga10, naga11, naga12, bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, shoe8, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3,  } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: naga8,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: naga7,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: naga6,
    },
];

export const statistics = [
    { value: '3+', label: 'Brands' },
    { value: '5+', label: 'Shops' },
    { value: '2k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];


export const products2 = [
    {
        imgURL: naga3,
        name: "Hustle T-shirt - Purple",
        price: "€29.99",
    },
    {
        imgURL: naga9,
        name: "Outta Hamburg - Sweater",
        price: "€49.99",
    },
    {
        imgURL: naga11,
        name: "Hustle Hard - Sweater",
        price: "€49.99",
    },
    {
        imgURL: naga10,
        name: "Black Naga - Sweater",
        price: "€59.99",
    },
];




export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Naga - T-shirt", link: "https://www.redbubble.com/i/t-shirt/Naga-Apparel-by-Naga-Apparel/138746578.IJ6L0" },
            { name: "Naga - Hoddies", link: "https://www.redbubble.com/i/hoodie/Naga-Apparel-by-Naga-Apparel/138827059.Z4UL5.XYZ" },
            { name: "Naga - Sweater", link: "https://www.redbubble.com/i/sweatshirt/Naga-Apparel-by-Naga-Apparel/138746578.LEP2X" },
            { name: "Naga - Golden Cobra Lightweight", link: "https://www.redbubble.com/i/hoodie/Naga-Golden-Cobra-by-Naga-Apparel/138747739.O6XP1" },
            { name: "Naga - Golden Cobra Duffle Bag", link: "https://www.redbubble.com/i/duffle-bag/Naga-Golden-Cobra-by-Naga-Apparel/138747739.TZ9LO" },
            { name: "Naga - Golden Cobra Bucket Hat", link: "https://www.redbubble.com/i/bucket-hat/Naga-Golden-Cobra-by-Naga-Apparel/138747739.S29A5" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "https://nagaclub-hh.vercel.app/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "chosenfewrecords@@hotmail.de", link: "mailto:chosenfewrecords@@hotmail.de" },
            { name: "+4917629255188", link: "tel:+4917629255188" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, link: "https://www.facebook.com/nagaclothing/", alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];