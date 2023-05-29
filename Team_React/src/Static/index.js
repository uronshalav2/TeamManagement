import { ipko, vodafone, twitch, bmw, spotify, paypal, star, shield, send, person} from '../Assets/index';

export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/account/login",
    title: "Account"
  },
  {
    path: "/Account/",
    src:person,
  },
   {
    path: "clients",
    sections: "Clients"
  },
  {
    path: 'cta',
    sections: "Get Started"
  },

];

export const stats = [
  {
    id: "stats-1",
    title: "Teams Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Users Active",
    value: "220K+",
  },
  {
    id: "stats-3",
    title: "Tasks Added",
    value: "230K+",
  },
];

export const logos = [
  {
    id: "ipko",
    src: ipko,
  },
  {
    id: "twitch",
    src: twitch,
  },
  {
    id: "vodafone",
    src: vodafone,
  },
  {
    id: "bmw",
    src: bmw,
  },
  {
    id: "spotify",
    src: spotify,
  },
  {
    id: "paypal",
    src: paypal,
  }
];
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Congratulations! Your hard work and dedication have earned you a well-deserved reward.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "Rest assured, we have implemented stringent security measures to safeguard your valuable information.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Easy",
    content:
      "Simplicity is key our user-friendly approach makes tasks a breeze.",
  },
];  