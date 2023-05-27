import {ipko,vodafone,twitch,bmw,spotify, paypal} from '../Assets/index';

export const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path:"/account",
      title:"Account"      
    },
    {
      path:"clients",
      sections:"Clients"
    }
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
      id:"ipko",
      src:ipko,
    },
    {
      id:"twitch",
      src:twitch,
    },
    {
      id:"vodafone",
      src:vodafone,
    },
    {
      id:"bmw",
      src:bmw,
    },
    {
      id:"spotify",
      src:spotify,
    },
    {
      id:"paypal",
      src:paypal,
    }
  ]