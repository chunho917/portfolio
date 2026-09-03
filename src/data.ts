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
    description: "This is a werewolf-themed otome visual novel game with various sub-systems like AI chat, Wardrobe, Comic and Side Stories. By making the right choices in the main story, players can increase affection with the three male protagonists and unlock content in the subsystems. It has 1M+ downloads across both Google Play & App Store and earned $4M+ within 2 years.\n\nI implemented additional features including AI chat, Wardrobe, Comic, add new stories, new UI, visual effects & animations. I also do maintenance including migrate old backend server to PlayFab, pack assets into downloadable bundles, implement SDK e.g Firebase, AdMob and fix bugs.",
    genres: ["OTOME GAME"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.AppStore, url: "https://apps.apple.com/us/app/moonlight-ascension-werewolf/id6450210233" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/9uT7VOPj7ws", type: MediaType.YouTube },
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
    description: "Creative home renovation game where players design and remodel rooms, kitchens, gardens and luxury spaces with full creative freedom. Features global design contests, daily challenges, leaderboards, diverse style themes (Scandinavian, Bohemian, Minimalist, etc.), and continuous content updates with new furniture collections and seasonal events.\n\nI imported numerous 3D furniture models into Unity and created countless levels with them. I also helped the team to fix lots of bug and created a demo version of this game for showcasing in TOKYO GAME SHOW 2025.",
    genres: ["3D DECORATING GAME"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.AppStore, url: "https://apps.apple.com/hk/app/dream-decor-house-makeover/id6751999319" },
      { source: LinkImageSource.GooglePlay, url: "https://play.google.com/store/apps/details?id=furniture.decor.design" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/6pDijpfAkAE", type: MediaType.YouTube },
      { source: "/images/games/Dream_Decor/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Dream_Decor/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "CRUSH ISLAND",
    description: "This is an otome visual novel game with the theme of a dating reality show. The game is similar to another title Moonlight Ascension with similar sub-systems. The main difference is that it has a more complicated plot line with deeper plot branches.\n\nI did similar things as the other title Moonlight Ascension. The noticable difference is that I took more time to refine the story system to support the more complicated branching story plot.",
    genres: ["OTOME GAME"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.AppStore, url: "https://apps.apple.com/hk/app/crush-island-the-game/id6745505412" },
      { source: LinkImageSource.GooglePlay, url: "https://play.google.com/store/apps/details?id=island.romance.game" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/Io7DXRmtyns", type: MediaType.YouTube },
      { source: "/images/games/Crush_Island/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Crush_Island/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Crush_Island/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Crush_Island/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Crush_Island/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Crush_Island/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "SPELLBOUND",
    description: "This is a fantasy-themed otome visual novel game. The game is similar to another title Moonlight Ascension with similar sub-systems. The main difference is that it has a more way more visual effects in the story.\n\nI did similar things as the other title Moonlight Ascension. The noticable difference is that I took more time to add more visual effects related to magic into the story.",
    genres: ["OTOME GAME"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.GooglePlay, url: "https://play.google.com/store/apps/details?id=fantasy.story.spellbound" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/np8CpEqRjBk", type: MediaType.YouTube },
      { source: "/images/games/Spellbound/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Spellbound/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Spellbound/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Spellbound/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Spellbound/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Spellbound/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "CYBERPUNK ROCK",
    description: "This game combines music rhythm game mechanics with traditional action platformer mechanics. Every player’s attack need to be inputted on beat with the background music; and the attack sound effects are all guitar sound, so doing a combo will sounds like played a guitar melody. Also, every enemies attack on beat. So player needs to listen closely to the music to dodge or block the incoming attacks. There are also platforming challenges that requires player to move on beat.\n\nI designed the core gameplay including the combat system and the enemy AIs. Everything related to coding is implemented by me. I also designed the world layout.",
    genres: ["MUSIC STYLISH HACK 'N SLASH"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Linux],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "https://www.youtube.com/embed/Mozh3sDX64c", type: MediaType.YouTube },
      { source: "/images/games/Cyberpunk_Rock/Screenshot_1.jpg", type: MediaType.Image },
      { source: "/images/games/Cyberpunk_Rock/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/Cyberpunk_Rock/Screenshot_3.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "SUPER RUN WORLD: JUMP PLATFORM",
    description: "This is a Mario-like platformer game launched on smart phones. In every level, players need to reach the goal within the time limit while dodging enemies and traps. There are power-up items on the way that can aid players in their journey.\n\nI designed ~20 high difficulty levels, each comes with 2-3 alternative critical paths. I also helped with the optimization by doing game testing.",
    genres: ["2D PLATFORMER"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "https://www.youtube.com/embed/jH4wch0NbMg", type: MediaType.YouTube },
    ],
  }
];
