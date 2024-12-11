import { TurboTrash, LostBalance } from "../Assets";

export const projects = [
    {
        title: "Turbo Trash",
      description: "turbo trash is a mobile hyper-casual game aimed at teaching waste management with an eco-conscious twist. you play as a sorting robot using 'TecLev' levitation technology to grab and fling various objects into the correct bins: glass, paper, plastic, organic, and metals/e-waste. the game has a strict yet friendly boss (a voice on the speaker) encouraging you to do your best, rewarding accuracy, and penalizing mistakes by draining your energy. objects roll down an increasingly fast conveyor belt, with overtime periods intensifying the pace. you can also unlock perks and different antennas to tweak gameplay and adapt to challenges. the ultimate goal? to become 'employee of the month' and beat high scores on the leaderboard. visually, it’s a mix of futuristic tech and cartoonish style, with a 'clean industrial' look, despite being set in a waste collection center.",
        image: TurboTrash,
      tags: ["Unity", "C#"],
      details: {
        engine: "Unity",
        role: "Game Designer",
        duration: "6 months",
        responsibilities: [
          "Core gameplay mechanics and systems",
          "Level design and progression",
          "Player feedback systems",
          "Gameplay testing and iteration",
          "Sound design"
        ]
      }
    },
    {
    title: "Lost Balance",
    description: "Lost Balance is a survival horror game that revolves around maintaining equilibrium on three emotional axes: anxiety/calm, fear/rashness, and depression/euphoria. players navigate these axes in response to various environmental factors and objects, balancing their emotions to prevent hitting an extreme, which would lead to game over.",
    image: LostBalance,
    tags: ["Unreal Engine", "Blueprint", "Narrative Design"],
    details: {
      engine: "Unreal Engine 5",
      role: "Game Designer",
      duration: "6 months",
      responsibilities: [
        "Story development",
        "Core gameplay mechanics and systems",
        "Gameplay testing and iteration",
        "Sound design"
      ]
    }
  }
]; 