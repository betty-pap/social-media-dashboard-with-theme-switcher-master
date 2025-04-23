import facebookLogo from './images/icon-facebook.svg';
import instagramLogo from './images/icon-instagram.svg';
import twitterLogo from './images/icon-twitter.svg';
import youtubeLogo from './images/icon-youtube.svg';


const statistics = [
  {username: '@nathanf', number: 1987, followers: 'Followers', statToday: '12 Today', statColor: 'green', logo: facebookLogo, pattern: 'fb'},
  {username: '@nathanf', number: 1044, followers: 'Followers', statToday: '99 Today', statColor: 'green', logo: twitterLogo, pattern: 'tw'},
  {username: '@realnathanf', number: '11k', followers: 'Followers', statToday: '1099 Today', statColor: 'green', logo: instagramLogo, pattern: "ig"},
  {username: 'Nathan F.', number: 8239, followers: 'Subscribers', statToday: '144 Today', statColor: 'red', logo: youtubeLogo, pattern: 'yt'},
];

const overviewData = [
  { title: "Page Views", number: 87, change: "3%", changeColor: "green", logo: facebookLogo},
  { title: "Likes", number: 52, change: "2%", changeColor: "red", logo: facebookLogo},
  { title: "Likes", number: 5462, change: "2257%", changeColor: "green", logo: instagramLogo},
  { title: "Profile Views", number: "52k", change: "1375%", changeColor: "green", logo: instagramLogo},
  { title: "Retweets", number: 117, change: "303%", changeColor: "green", logo:twitterLogo},
  { title: "Likes", number: 507, change: "553%", changeColor: "green", logo: twitterLogo},
  { title: "Likes", number: 107, change: "19%", changeColor: "red", logo: youtubeLogo},
  { title: "Total Views", number: 1407, change: "12%", changeColor: "red", logo: youtubeLogo},
];


export  {statistics, overviewData};