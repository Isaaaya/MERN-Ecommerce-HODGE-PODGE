import { UserIcon, HeartIcon } from 'assets/icons/index';
import {
    HeadingOneIcon,
    BoldIcon,
    ItalicIcon,
    StrikethroughIcon,
    OrderedListIcon,
    BulletListIcon,
    RedoIcon,
    UndoIcon,
    ParagraphIcon,
} from "assets/icons/textEditorIcons";
import GiftBoxImage from 'assets/images/gift-box.webp';

export const headerLinks = [
    {
        link: '/auth/signin',
        icon: <UserIcon width="30" height="30" />,

    },
    {
        link: '/wishlist',
        icon: <HeartIcon width="30" height="30" />,

    }
];

export const userInputFields = [
    {
        type: 'text',
        caption: 'First Name',
        showAtSignin: false,
    },
    {
        type: 'text',
        caption: 'Last Name',
        showAtSignin: false,
    },
    {
        type: 'email',
        caption: 'Email',
        showAtSignin: true,
    },
    {
        type: 'password',
        caption: 'Password',
        showAtSignin: true,
    },
];


export const footerNavigations = [
    {
        title: 'About',
        values: ['Our Story', 'Personalisation', 'Corporate Gift', 'Rewards Club', 'Affiliates'],
    },
    {
        title: 'INFORMATION',
        values: ['FAQs', 'Delivery & Returns', 'Jobs', 'Terms & Conditions / Privacy', 'Contact'],
    },
];

export const adminNavbarLinks = [
    {
        title: 'Products',
        link: 'products',
    },
    {
        title: 'Collections',
        link: 'productCollections',
    },
    {
        title: 'Categories',
        link: 'categories',
    },
    {
        title: 'Subcategories',
        link: 'subcategories',
    },
    {
        title: 'Add Product',
        link: 'addProduct',
    },
    {
        title: 'Orders',
        link: 'orders',
    }
];


export const whyUsValues = [
    {
        caption: 'great gifts',
        content: 'Hundreds of unique & inspiring gifts for hard to please.',
    },
    {
        caption: 'made personal',
        content: 'All gifts are lovingly picked, packed & personalised in our London Studio.',
        icon: GiftBoxImage,
        iconReference: 'Gift Box Icon by Roundicons Premium'
    },
    {
        caption: 'delivered globally',
        content: 'Beautiful gift packaging with global express delivery.',
    },
];


export const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
};

export const twitterPickerColors = [
    "#B80000",
    "#DB3E00",
    "#FCCB00",
    "#008B02",
    "#006B76",
    "#1273DE",
    "#004DCF",
    "#5300EB",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#194d33"
]


export const sortingOptions = [
    {
        caption: "A-Z",
        value: "az",
    },
    {
        caption: "Z-A",
        value: "za",
    },
    {
        caption: "Price, low to high",
        value: "lowHigh",
    },
    {
        caption: "Price, high to low",
        value: "highLow",
    },
    {
        caption: "Date, old to new",
        value: "oldNew",
    },
    {
        caption: "Date, new to old",
        value: "newOld",
    },
];


export const productInputFields = [
    {
        caption: 'Price',
        min: 0.1,
    },
    {
        caption: 'Quantity',
        min: 0,
    }
];


export const tiptapButtonsData = [
    { icon: <BoldIcon width="22" height="22" />, command: "toggleBold", title: "bold" },
    { icon: <ItalicIcon width="22" height="22" />, command: "toggleItalic", title: "italic" },
    { icon: <StrikethroughIcon width="22" height="22" />, command: "toggleStrike", title: "strike" },
    { icon: <ParagraphIcon width="22" height="22" />, command: "setHardBreak", title: "hardBreak" },
    {
        icon: <HeadingOneIcon width="22" height="22" />,
        command: "toggleHeading",
        args: { level: 1 },
        title: "heading",
    },
    {
        icon: <BulletListIcon width="22" height="22" />,
        command: "toggleBulletList",
        title: "bulletList",
    },
    {
        icon: <OrderedListIcon width="22" height="22" />,
        command: "toggleOrderedList",
        title: "orderedList",
    },
    { icon: <UndoIcon width="22" height="22" />, command: "undo", title: "undo" },
    { icon: <RedoIcon width="22" height="22" />, command: "redo", title: "redo" },
];


export const shippingDetailsFields = ["First Name", "Last Name", "Street Address", "Apt Number", "State", "Zip"]
