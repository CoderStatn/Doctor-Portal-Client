import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import person1 from "../images/people-1.png";
import person2 from "../images/people-2.png";
import person3 from "../images/people-3.png";
import fluoride from "../images/fluoride.png";
import cavity from "../images/cavity.png";
import whitening from "../images/whitening.png";

export const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    Icon: AccessTimeIcon,
    background: "#1CC7C1",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003 USA",
    Icon: LocationOnIcon,
    background: "#3A4256",
  },
  {
    title: "Call us now",
    description: "+15697854124",
    Icon: WifiCalling3Icon,
    background: "#1CC7C1",
  },
];
export const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!",
    img: whitening,
  },
];

export const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price: 15,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price: 17,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    price: 19,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    price: 25,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    price: 35,
    space: 10,
  },
];
