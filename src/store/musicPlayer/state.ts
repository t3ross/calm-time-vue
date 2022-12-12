export interface PlayerState {
  music: object[];
  isPlaying: boolean;
  musicPlaying: Record<string, string>;
  musicStarted: boolean;
}

function state(): PlayerState {
  return {
    music: [
      {
        title: "Ruins",
        file: "@/assets/audio/Ruins.mp3",
        author: "Nick Nitro",
        name: "Ruins",
      },
      {
        title: "Hopes",
        file: "@/assets/audio/HopesAndDreams.mp3",
        author: "Lofi Lia",
        name: "HopesAndDreams",
      },
      {
        title: "Bonetrousle",
        file: "@/assets/audio/Bonetrousle.mp3",
        author: "Jonas Munk",
        name: "Bonetrousle",
      },
      {
        title: "Battle Against a True Hero",
        file: "@/assets/audio/BAATH.mp3",
        author: "Jonas Munk",
        name: "BAATH",
      },
      {
        title: "Snowdin",
        file: "@/assets/audio/Snowdin.mp3",
        author: "Lofi Lia",
        name: "Snowdin",
      },
      {
        title: "Megalovania",
        file: "@/assets/audio/Megalovania.mp3",
        author: "Jonas Munk",
        name: "Megalovania",
      },
    ],
    isPlaying: false,
    musicPlaying: {},
    musicStarted: false,
  };
}

export default state;
