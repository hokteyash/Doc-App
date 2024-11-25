import {FastImageProps} from 'react-native-fast-image';
import {images} from '../assets';

export type articleType = {
  id: number;
  title: string;
};

export interface messageType {
  id: number;
  name: string;
  profile_picture: FastImageProps['source'] | number | undefined;
  message: string;
  time: string;
  didRead: boolean;
  notSeenMessage: number;
  contact?: number | string;
}

export interface appointmentType {
  id: number;
  name: string;
  date: string;
  time: string;
  specialization: string;
  appointment_status: string;
  profile_picture: FastImageProps['source'] | number | undefined;
}

export const data = [
  {
    id: 1,
    name: 'Dr.Marcus Horizo',
    specialization: 'Cardiologist',
    rating: 4.7,
    distance: '800 m',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 2,
    name: 'Dr.Maria Elena',
    specialization: 'Psychologist',
    rating: 4.9,
    distance: '1.5 km',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 3,
    name: 'Dr.Stiff Jesse',
    specialization: 'Cardiologist',
    rating: 3.2,
    distance: '300 m',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 4,
    name: 'Dr.Marcus Horizo',
    specialization: 'Cardiologist',
    rating: 4.7,
    distance: '800 m',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 5,
    name: 'Dr.Marcus Horizo',
    specialization: 'Cardiologist',
    rating: 4.7,
    distance: '800 m',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 6,
    name: 'Dr.Marcus Horizo',
    specialization: 'Cardiologist',
    rating: 4.7,
    distance: '800 m',
    thumbnail_image: images.anotherDoctor,
  },
  {
    id: 7,
    name: 'Dr.Marcus Horizo',
    specialization: 'Cardiologist',
    rating: 4.7,
    distance: '800 m',
    thumbnail_image: images.anotherDoctor,
  },
];

export const FoodData = [
  {
    id: 1,
    title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
    date: 'June 10, 2021',
    whenRead: '5 min. before',
    thumbnail_image: images.food,
  },
  {
    id: 2,
    title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
    date: 'June 10, 2021',
    whenRead: '5 min. before',
    thumbnail_image: images.food,
  },
  {
    id: 3,
    title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
    date: 'June 10, 2021',
    whenRead: '5 min. before',
    thumbnail_image: images.food,
  },
];

export const articleData = [
  {
    id: 1,
    title: 'Covid-19',
    thumbnail_image: images.covid19,
    description: 'Compare the Astrezenica and Senevoca COVID-19 Vaccines',
    date: 'June 12, 2021',
    readBefore: '5 min. before',
  },
  {
    id: 2,
    title: 'Diet',
    thumbnail_image: images.diet,
    description:
      'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
    date: 'June 12, 2021',
    readBefore: '5 min. before',
  },
  {
    id: 3,
    title: 'Fitness',
    thumbnail_image: images.people,
    description: 'Compare the Astrezenica and Senevoca COVID-19 Vaccines',
    date: 'June 12, 2021',
    readBefore: '5 min. before',
  },
  {
    id: 4,
    title: 'Food',
    thumbnail_image: images.people,
    description: 'Compare the Astrezenica and Senevoca COVID-19 Vaccines',
    date: 'June 12, 2021',
    readBefore: '5 min. before',
  },
  {
    id: 5,
    title: 'Health',
    thumbnail_image: images.people,
    description: 'Compare the Astrezenica and Senevoca COVID-19 Vaccines',
    date: 'June 12, 2021',
    readBefore: '5 min. before',
  },
];

export const message = [
  {
    id: 1,
    profile_picture: images.virat,
    name: 'Virat Kohli',
    message: 'Want the Autograph?',
    time: '12:15',
    didRead: true,
    notSeenMessage: 0,
  },
  {
    id: 2,
    profile_picture: images.oliver,
    name: 'Oliver Queen',
    message: 'You are smart bud!!',
    time: '15:23',
    didRead: false,
    notSeenMessage: 3,
  },
  {
    id: 3,
    profile_picture: images.flash,
    name: 'The Flash',
    message: 'You r Fastest Man Alive',
    time: '16:59',
    didRead: true,
    notSeenMessage: 0,
  },
  {
    id: 4,
    profile_picture: images.ironMan,
    name: 'Tony Stark',
    message: 'Wanna be Iron Man?',
    time: '04:18',
    didRead: false,
    notSeenMessage: 1,
  },
];

export const groupMessage = [
  {
    id: 1,
    profile_picture: images.codingImage,
    name: 'DSA Hustlers',
    message: 'Sliding Window',
    time: '01:20',
    didRead: true,
    notSeenMessage: 0,
    contact: '+91-1000134',
  },
  {
    id: 2,
    profile_picture: images.sportsImage,
    name: 'Sports Club',
    message: 'Chle Cricket Khelne?',
    time: '02:23',
    didRead: false,
    notSeenMessage: 3,
    contact: 'Virat Kohli',
  },
  {
    id: 3,
    profile_picture: images.ngoImage,
    name: 'Serve Needy People',
    message: 'I will contribute Food Today?',
    time: '11:05',
    didRead: true,
    notSeenMessage: 0,
    contact: 'Yash Hokte',
  },
  {
    id: 4,
    profile_picture: images.codingImage,
    name: 'Code Area',
    message: 'Leetcode is an Imp Platform',
    time: '07:12',
    didRead: false,
    notSeenMessage: 1,
    contact: '+91-20340134',
  },
];

export const privateMessage = [
  {
    id: 1,
    profile_picture: images.ana,
    name: 'Ana Da Armos',
    message: `What's going on?`,
    time: '12:15',
    didRead: true,
    notSeenMessage: 0,
  },
  {
    id: 2,
    profile_picture: images.janhvi,
    name: 'Janhvi Kapoor',
    message: 'Wanna Hangout ??',
    time: '15:23',
    didRead: false,
    notSeenMessage: 3,
  },
  {
    id: 3,
    profile_picture: images.disha,
    name: 'Disha Patani',
    message: 'Wanna go on Coffee?',
    time: '16:59',
    didRead: true,
    notSeenMessage: 0,
  },
];

export const AppointmentData = [
  {
    id: 1,
    name: 'Marcus Horizon',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Chardiologist',
    appointment_status: 'Confirmed',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 2,
    name: 'Dr. Alysa Hana',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Confirmed',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 3,
    name: 'Dr. Alysa Hana',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Completed',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 4,
    name: 'Dr. Alysa Hana',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Completed',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 5,
    name: 'Dr. Alysa Hana',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Cancelled',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 6,
    name: 'Dr. Alysa Hana',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Cancelled',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 7,
    name: 'Dr. Reema Singh',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psychtriast',
    appointment_status: 'Confirmed',
    profile_picture: images.anotherDoctor,
  },
  {
    id: 8,
    name: 'Dr. John Doe',
    date: '2024-02-20',
    time: '10:00',
    specialization: 'Psikeater',
    appointment_status: 'Cancelled',
    profile_picture: images.anotherDoctor,
  },
];
