import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "ALVIN HO",
  role: "VIDEO GAME DEVELOPER",
  introduction: "PASSIONATE GAME DEVELOPER WITH 3 YEARS OF PROFESSIONAL EXPERIENCE",
  description: "Passionate game developer with 3 years of professional experience. Shipped a visual novel that achieved 1M+ downloads across Google Play & App Store, with continuous content updates and new feature releases. I thrive on crafting fun, innovative gameplay and polishing player experiences.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/AlvinHo_CV.pdf`,
  links: {
    github: "https://github.com/NAME",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
  }
};

export const games: Game[] = [
  {
    name: "MOONLIGHT ASCENSION",
    description: "This is a werewolf-themed otome visual novel game with various sub-systems like AI chat, Wardrobe, Comic and Side Stories. By making the right choices in the main story, players can increase affection with the three male protagonists and unlock content in the subsystems. It has 1M+ downloads across both Google Play & App Store and earned $4M+ within 2 years. I implemented additional features including AI chat, Wardrobe, Comic, add new stories, new UI, visual effects & animations. I also do maintenance including migrate old backend server to PlayFab, pack assets into downloadable bundles, implement SDK e.g Firebase, AdMob and fix bugs.",
    genres: ["OTOME GAME"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.AppStore, url: "https://apps.apple.com/us/app/moonlight-ascension-werewolf/id6450210233" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/9uT7VOPj7ws?si=YpTFU6wtXsccr3mM", type: MediaType.YouTube },
      { source: "/images/games/Moonlight_Ascension/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Moonlight_Ascension/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Moonlight_Ascension/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Moonlight_Ascension/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Moonlight_Ascension/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Moonlight_Ascension/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "DREAM DECOR",
    description: "Creative home renovation game where players design and remodel rooms, kitchens, gardens and luxury spaces with full creative freedom. Features global design contests, daily challenges, leaderboards, diverse style themes (Scandinavian, Bohemian, Minimalist, etc.), and continuous content updates with new furniture collections and seasonal events. I imported numerous 3D furniture models into Unity and created countless levels with them. I also helped the team to fix lots of bug and created a demo version of this game for showcasing in TOKYO GAME SHOW 2025.",
    genres: ["3D DECORATING GAME"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.AppStore, url: "https://apps.apple.com/hk/app/dream-decor-house-makeover/id6751999319" },
      { source: LinkImageSource.GooglePlay, url: "https://play.google.com/store/apps/details?id=furniture.decor.design" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/6pDijpfAkAE?si=9imDnVkoVSvq47QQ", type: MediaType.YouTube },
      { source: "/images/games/Dream_Decor/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_6.png", type: MediaType.Image },
    ],
  }
];