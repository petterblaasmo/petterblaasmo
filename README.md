<h3>
  
```javascript
​
import petter from freelance-developer;

const aboutMe = () => {
  const hobbies = [
    { name: "Programming", description: "I enjoy coding for clients" },
    { name: "Play Games", description: "I play a lot of games" },
    { name: "Working Out", description: "I enjoy going to the gym" }
    // Currently, you will mostly see me code or working out
  ];

  const games = {
    fps: ["CS:GO", "Valorant"],
    other: ["Minecraft"]
    // Trying to find new games
  };

  const languages = [
    { name: "C++", start: "2016", skill: 8 }, // C++
    { name: "JS", start: "2017", skill: 9 }, // JavaScript
    { name: "PHP", start: "2018", skill: 7 }, // PHP
    { name: "Py", start: "2019", skill: 9 }, // Python
    { name: "SP", start: "2020", skill: 8 } // SourcePawn
    // I mostly do JavaScript, I enjoy Python challenges
  ];
  
  const projects = [
    { name: "NFT Helper", status: "active", language: "JS", type: "discord" },
    { name: "RAM WL BOT", status: "active", language: "JS", type: "discord" },
    { name: "Legacy BOT", status: "closed", language: "JS", type: "discord" },
    { name: "Legacy API", status: "closed", language: "SP", type: "anti-cheat" },
    { name: "Legacy WEB", status: "closed", language: "PHP", type: "dashboard" }
    // Most of my work is closed-source
  ];
  
  const socials = [
    { platform: "discord", name: "petter#3437" },
    { platform: "steam", name: "id/unsmooth" },
    { platform: "email", name: "petterblaasmo@gmail.com" }
    // Do not hesitate to contact me
  ]
  
  return { hobbies, games, languages, projects, socials };
}
  
module.exports = aboutMe;
​
```
  
</h3>
