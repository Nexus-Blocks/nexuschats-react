import {Elmer, Florencio, Lavern, Titus, Geoffrey, Alfonso, Benny, Jamel, Daryl} from "../assets"



type MsgData = {
    name: string;
    message: string;
    tags: { label: string; color: string }[];
    profilePhoto: string;
  };

type chatMessages = {
  text: string;
  sentByUser: boolean;
}
  

  export const dataSet: MsgData[] = [
    {
      name: "Elmer Laverty",
      message: "Haha oh man 🔥",
      tags: [ { label: "Question", color: "amber" },
              { label: "Help wanted", color: "green" },
      ],
      profilePhoto: Elmer,
    },
    {
      name: "Florencio Dorrance",
      message: "woohoooo",
      tags: [ { label: "Question", color: "amber" },
              { label: "Help wanted", color: "green" },
      ],
      profilePhoto: Florencio,
    },
    {
      name: "Lavern Laboy",
      message: "Haha that's terrifying 😂",
      tags: [ { label: "Question", color: "amber" },
              { label: "Help wanted", color: "amber" },
      ],
      profilePhoto: Lavern,
    },
    {
      name: "Titus Kitamura",
      message: "omg, this is amazing",
      tags: [ { label: "Question", color: "indigo" },
              { label: "Help wanted", color: "purple" },
      ],
      profilePhoto: Titus,
    },
    {
      name: "Geoffrey Mott",
      message: "What's the weather like today?",
      tags: [ { label: "Question", color: "indigo" },
              { label: "Help wanted", color: "blue" },
      ],
      profilePhoto: Geoffrey,
    },
    {
      name: "Alfonzo Schuessler",
      message: "perfect!",
      tags: [ { label: "Question", color: "red" },
              { label: "Help wanted", color: "indigo" },
      ],
      profilePhoto: Alfonso
    },
  ];
  

export const chatData: chatMessages[] = [
  { text: "Hello!", sentByUser: true },
  { text: "Hi there!", sentByUser: false },
  { text: "How are you?", sentByUser: true },
  { text: "Im good buddie", sentByUser: false },
  { text: "Kurisei ikoko", sentByUser: true },
  // Add more messages here...
];
