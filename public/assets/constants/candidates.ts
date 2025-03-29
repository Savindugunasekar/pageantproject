import msworld from "../images/candidates/msworld.jpg";
import { StaticImageData } from "next/image";

export interface Candidate {
  id: number;
  name: string;
  image: StaticImageData;
  age: number;
  from: string;
}

export const candidateList: Candidate[] = [
  { id: 1, name: "Anuki Perera", image: msworld, age: 23, from: "Colombo" },
  { id: 2, name: "Dinara Fernando", image: msworld, age: 25, from: "Galle" },
  { id: 3, name: "Shanali Weerasinghe", image: msworld, age: 24, from: "Kandy" },
  { id: 4, name: "Ishani Ranasinghe", image: msworld, age: 22, from: "Negombo" },
  { id: 5, name: "Nethmi Jayawardena", image: msworld, age: 26, from: "Kurunegala" },
  { id: 6, name: "Pavithra Senanayake", image: msworld, age: 24, from: "Matara" },
  { id: 7, name: "Tharushi Wickramasinghe", image: msworld, age: 23, from: "Jaffna" },
  { id: 8, name: "Chamodi De Silva", image: msworld, age: 25, from: "Anuradhapura" },
  { id: 9, name: "Harini Rathnayake", image: msworld, age: 22, from: "Ratnapura" },
  { id: 10, name: "Sachini Gunawardena", image: msworld, age: 26, from: "Batticaloa" },
  { id: 11, name: "Kavindi Rajapaksha", image: msworld, age: 24, from: "Trincomalee" },
  { id: 12, name: "Mihiri Senarath", image: msworld, age: 23, from: "Badulla" },
  { id: 13, name: "Chathurika Wickramanayake", image: msworld, age: 25, from: "Hambantota" },
  { id: 14, name: "Praveeni Liyanage", image: msworld, age: 24, from: "Puttalam" },
  { id: 15, name: "Hasini Dissanayake", image: msworld, age: 22, from: "Monaragala" },
  { id: 16, name: "Sewwandi Gamage", image: msworld, age: 25, from: "Polonnaruwa" },
  { id: 17, name: "Rashmi Fernando", image: msworld, age: 26, from: "Nuwara Eliya" },
  { id: 18, name: "Janani Samarasinghe", image: msworld, age: 24, from: "Mannar" },
  { id: 19, name: "Naduni Abeywardena", image: msworld, age: 23, from: "Kilinochchi" },
  { id: 20, name: "Thilini Madushani", image: msworld, age: 22, from: "Ampara" },
  { id: 21, name: "Hiruni Samarasinghe", image: msworld, age: 24, from: "Gampaha" },
  { id: 22, name: "Yasodhara Peris", image: msworld, age: 25, from: "Kalutara" },
  { id: 23, name: "Sanduni Wijesinghe", image: msworld, age: 23, from: "Matale" },
  { id: 24, name: "Dulmini Senanayake", image: msworld, age: 26, from: "Galle" },
  { id: 25, name: "Thilakshi Peiris", image: msworld, age: 24, from: "Colombo" },
  { id: 26, name: "Shenali Abeynayake", image: msworld, age: 22, from: "Kegalle" },
  { id: 27, name: "Vishmi Ratnayake", image: msworld, age: 25, from: "Mullaitivu" },
  { id: 28, name: "Dewmini Fernando", image: msworld, age: 24, from: "Vavuniya" },
  { id: 29, name: "Rashmika Karunaratne", image: msworld, age: 23, from: "Puttalam" },
  { id: 30, name: "Sasini Jayasundara", image: msworld, age: 22, from: "Ratnapura" },
  { id: 31, name: "Menaka Silva", image: msworld, age: 26, from: "Hambantota" },
  { id: 32, name: "Yoshani Ranasinghe", image: msworld, age: 24, from: "Jaffna" },
  { id: 33, name: "Piumi Amarasinghe", image: msworld, age: 25, from: "Badulla" },
  { id: 34, name: "Nisansala Peiris", image: msworld, age: 22, from: "Matara" },
  { id: 35, name: "Madhushani Gunawardena", image: msworld, age: 23, from: "Kilinochchi" },
  { id: 36, name: "Thamali Liyanage", image: msworld, age: 25, from: "Trincomalee" },
  { id: 37, name: "Vindhya Ekanayake", image: msworld, age: 24, from: "Kurunegala" },
  { id: 38, name: "Dilshani Perera", image: msworld, age: 22, from: "Mannar" },
  { id: 39, name: "Navodya Seneviratne", image: msworld, age: 26, from: "Anuradhapura" },
  { id: 40, name: "Upeksha Senarath", image: msworld, age: 23, from: "Ampara" }
];