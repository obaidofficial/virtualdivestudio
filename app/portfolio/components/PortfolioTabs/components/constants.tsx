import { Portfolio, Category } from "./types";

export const PORTFOLIOS: Portfolio[] = [
  // Gaming Portfolio
  {
    id: "g1",
    title: "Demolition Derby",
    description:
      "Dive into the relentless world of banger racing, where your skill and courage are tested in the fiery...",
    image: "/images/Portfolio/Demolition-Derby.webp",
    category: "Gaming",
    tags: ["Shopify Plus", "E-commerce", "UX Design"],
    link: "demolition-derby",
    gameURL:
      "https://play.google.com/store/apps/details?id=com.fungames.demolition.derby.cargame",
    content: (
      <div>
        <h2 className="text-[28px] md:text-[32px] mt-6 lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          'Demolition Derby: Car Games' – the Ultimate Car Destruction
          Adventure!
        </h2>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Dive into the relentless world of banger racing, where your skill and
          courage are tested in the fiery arenas of demolition derby. Are you
          ready to outlast and out smash your rivals in the most intense
          vehicular combat ever seen?
        </p>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          Exhilarating Game Features:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Diverse Gameplay Modes:</span> From
            freestyle skirmishes to career battles, experience a variety of
            challenges that will test your driving mettle. Prepare for the next
            level with upcoming PvP modes, where the stakes are even higher!
          </li>
          <li>
            <span className="font-medium">Play Anywhere, Anytime:</span> Enjoy
            full offline functionality for those on-the-go moments. Whether
            you're flying high in the skies or commuting, 'Demolition Derby: Car
            Games' offers uninterrupted excitement without the need for an
            internet connection.
          </li>
          <li>
            <span className="font-medium">Compact and Fast-Paced Fun:</span>{" "}
            Optimized for excitement without consuming much storage, ensuring
            quick downloads and smooth gameplay on most devices.
          </li>
          <li>
            <span className="font-medium">Realistic Damage and Physics:</span>{" "}
            Witness the spectacular destruction with each collision, thanks to
            detailed car damage modeling and realistic physics. Every dent and
            scratch tells the story of your battle for survival.
          </li>
          <li>
            <span className="font-medium">Upgrade and Customize:</span> Progress
            through the game to unlock and upgrade a wide array of demolition
            derby cars. Customize your ride to suit your style and become the
            champion of the arena.
          </li>
        </ul>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          Stunning Visuals and Immersive Gameplay:
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Immerse yourself in the action with high-definition graphics and
          dynamic environments. Each arena is designed to offer not just a
          visual feast but a tactical battleground, where every corner can be
          your next big break or your potential downfall.
        </p>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          Why Play 'Demolition Derby: Car Games'?
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Tailored for Thrill-Seekers:</span>{" "}
            Embrace the chaos of free-for-all crash racing, strategic
            destruction, and intense rivalries.
          </li>
          <li>
            <span className="font-medium">Engaging Content Updates:</span>{" "}
            Regular updates bring fresh tracks, stunts, and cars right to your
            fingertips. Stay tuned for more thrilling content that keeps the
            derby excitement alive.
          </li>
          <li>
            <span className="font-medium">Community and Competition:</span> Join
            a community of players who share your passion for demolition derby.
            Compete in events, share strategies, and showcase your most
            spectacular crashes.
          </li>
        </ul>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          What’s New:
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Woah! The latest update of{" "}
          <span className="font-medium">Demolition Derby: Car Games</span> is
          here for derby fans:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">New "Demolition Derby" Mode:</span>{" "}
            Experience the thrill with added intensity.
          </li>
          <li>
            <span className="font-medium">
              Thrilling "Demolition" Car Racing:
            </span>{" "}
            Gear up for more action-packed racing.
          </li>
          <li>
            <span className="font-medium">Team Death Match:</span> For
            multiplayer "Demolition Derby" lovers.
          </li>
          <li>
            <span className="font-medium">Funky Sounds:</span> Enhance your
            gameplay with lively new audio.
          </li>
          <li>
            <span className="font-medium">Epic Environment:</span> For Derby
            crash out games fans.
          </li>
          <li>
            <span className="font-medium">Reduced Size:</span> Now only 15MB,
            making it quicker to download and less space-consuming.
          </li>
        </ul>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          <span className="font-medium">Don’t uninstall!</span> Our new update
          of banger racing is coming soon, featuring brand new monster cars in
          the upcoming months!
        </p>
      </div>
    ),
  },
  {
    id: "g2",
    title: "4x4 Mountain Climb",
    description:
      "Embark on the ultimate off-road adventure with 4x4 Mountain Climb Car Game! This thrilling hill climb...",
    image: "/images/Portfolio/4x4-Mountain-Climb.webp",
    category: "Gaming",
    tags: ["Liquid", "Automation", "Retail"],
    link: "4x4-mountain-climb",
    gameURL:
      "https://play.google.com/store/apps/details?id=com.fun.games.studios.mountainclimb.cargames&pcampaignid=web_share",
    content: (
      <div>
        <h2 className="text-[28px] md:text-[32px] mt-6 lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          About 4x4 Mountain Climb Car Game:
        </h2>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Embark on the ultimate off-road adventure with 4x4 Mountain Climb Car
          Game! This thrilling hill climb stunt game set against the backdrop of
          Mount Everest offers an exhilarating environment where you can perform
          jumps, crashes, and other exciting 4x4 car races.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Rev up your engines and get ready for intense off-road 4x4 mountain
          climb racing. Experience high-speed car racing in a stunning offline
          car driving simulator, featuring 3D mountain climb racing games. Feel
          the adrenaline as you drift classic cars, burn rubber, and conquer the
          rugged terrain of top hill climbs with your 4x4.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Set new records in off-road racing with challenging tracks
          specifically designed for your 4x4 hill climb car. Prepare for
          heart-pounding stunts and join the risky climbing tracks with other
          mountain racers and cliff climbers.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The{" "}
          <span className="font-medium">4x4 Mountain Climb Car Stunt Game</span>{" "}
          is not just a game—it's an addictive and thrilling driving simulator
          that will test your skills on the highest hills of the mountains.
          Whether you're seeking endless racing or exhilarating hill climb
          stunts, this game is perfect for your entertainment.
        </p>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          Features:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Realistic 4x4 Game Environment:</span>{" "}
            Easy-to-play and well-controlled driving simulations.
          </li>
          <li>
            <span className="font-medium">Diverse Sports Cars:</span> Choose
            from 8 different customizable sports cars and upgrade their speed
            and handling.
          </li>
          <li>
            <span className="font-medium">Car Modifications:</span> Adjust
            various specifications to enhance your mountain car's performance.
          </li>
          <li>
            <span className="font-medium">Dynamic Environment Models:</span>{" "}
            High-quality and ever-changing environments to keep the gameplay
            exciting.
          </li>
          <li>
            <span className="font-medium">Challenging Tracks:</span> Tackle
            sharp and narrow 3D impossible tracks designed for the ultimate
            driving challenge.
          </li>
          <li>
            <span className="font-medium">Multiple Camera Views:</span> Opt for
            the best driving perspective with multiple camera views.
          </li>
        </ul>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          What’s New:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Improved Game Performance:</span>{" "}
            Enjoy smoother gameplay with the latest updates and optimizations.
          </li>
          <li>
            <span className="font-medium">Enhanced Controls:</span> New
            controller added for professional-level handling of Prado cars.
          </li>
          <li>
            <span className="font-medium">Bug Fixes:</span> Resolved issues for
            an uninterrupted gaming experience.
          </li>
          <li>
            <span className="font-medium">New Modes and Missions:</span> Explore
            new game modes and diverse Prado car missions.
          </li>
          <li>
            <span className="font-medium">Optimized Ads:</span> Less intrusive
            advertising for a better gameplay experience.
          </li>
        </ul>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          <span className="font-medium">
            Download 4x4 Mountain Climb Car Game now and start your adventure!
          </span>{" "}
          Join the thrilling world of mountain car stunts and enjoy a new level
          of off-road racing. Stay connected with Fun Games Studios for more
          exciting updates coming soon!
        </p>
      </div>
    ),
  },
  {
    id: "g3",
    title: "Bus Simulator Offroad",
    description:
      "Welcome to the thrilling world of Bus Simulator Offroad Bus Game—your ultimate destination for an...",
    image: "/images/Portfolio/Bus-Simulator-Offroad.webp",
    category: "Gaming",
    tags: ["Theme Dev", "UI Design", "Shopify"],
    link: "bus-simulator-offroad",
    gameURL:
      "https://play.google.com/store/apps/details?id=com.playgtgames.studios.bus.simulator.offroad.bus.game&pcampaignid=web_share",
    content: (
      <div>
        <h2 className="text-[28px] md:text-[32px] mt-6 lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          About Bus Simulator Offroad Bus Game:
        </h2>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Welcome to the thrilling world of{" "}
          <span className="font-medium">Bus Simulator Offroad Bus Game</span>
          —your ultimate destination for an adrenaline-pumping experience in the
          realm of driving games! Get ready to embark on a journey filled with
          excitement, challenge, and the joy of navigating through various
          terrains in this open-world masterpiece.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Immerse yourself in the captivating gameplay of this offroad bus
          simulator, where you’ll face the ultimate test of your driving skills.
          Take on the role of a pro bus driver navigating through mountains,
          hills, and zig-zag bumpy hilly tracks. Feel the rush as you conquer
          challenging off-road terrain in the most realistic and breathtaking
          landscapes.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          In <span className="font-medium">Bus Simulator Offroad Bus Game</span>{" "}
          you are not just a bus driver; you are the master of the road.
          Maneuver through limited bus games and showcase your prowess in bus
          parking with the innovative real bus parking 3D mode. Your skills will
          be put to the test in an ultimate coach bus simulator, featuring an
          open-world environment and a variety of challenging scenarios.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Experience the thrill of being behind the wheel in the ultimate city
          coach bus driving simulation. Take charge of your bus in the School
          Bus Simulator Driving mode, providing a realistic and immersive gaming
          experience. Navigate through the city streets, conquer highways, and
          explore new routes in this bus-driving game.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Challenge yourself with the{" "}
          <span className="font-medium">Bus Simulator Offroad Bus Game</span>{" "}
          and become the ultimate bus driver in offline mode. Explore the
          freedom of an open-world game as you cruise through landscapes and
          conquer the mountains and hills. With a focus on realism and
          authenticity, this game sets the standard for bus simulator and
          offroad bus driving games.
        </p>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Whether you’re a fan of parking games, driving games, or simply
          seeking the thrill of a realistic bus simulator, this game has it all.
          Get ready for the ultimate adventure in{" "}
          <span className="font-medium">Bus Simulator Offroad Bus Game</span>,
          where every turn, every hill, and every challenge will test your
          skills as the pro bus driver. Download now and start your journey
          towards becoming the driving master in this 3D sensation!
        </p>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          What’s New:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>Bus Simulator Bug Fixes.</li>
          <li>Performance Optimized</li>
          <li>Ads and Crashes Optimized</li>
          <li>Loading Time Reduced</li>
          <li>New Modes Added</li>
          <li>Gameplay Improvements</li>
          <li>Features Enhanced</li>
        </ul>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          <span className="font-medium">
            Let's play our new Prado game and stay connected to Fun Games
            Studios. More updates are coming soon!
          </span>
        </p>
      </div>
    ),
  },
  {
    id: "g4",
    title: "City Pilot Flight 3D Simulator",
    description:
      "Embark on a sky-high adventure with City Pilot Flight 3D Simulator – where dreams take flight! Get ready...",
    image: "/images/Portfolio/City-Pilot-Flight-3D-Simulator.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "city-pilot-flight-3d-simulator",
    gameURL:
      "https://play.google.com/store/apps/details?id=com.playgtgames.studios.pilot.simulator3d.flight.game",
    content: (
      <div>
        <h2 className="text-[28px] md:text-[32px] mt-6 lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          About City Pilot Flight 3D Simulator:
        </h2>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          Embark on a sky-high adventure with{" "}
          <span className="font-medium">City Pilot Flight 3D Simulator</span> –
          where dreams take flight! Get ready to soar through the clouds and
          experience the thrill of being a skilled airplane pilot in this
          exhilarating flight simulation game. This isn’t just a game; it’s a
          journey into the skies where you take command of powerful aircraft and
          become the master of city skies.
        </p>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          Key Features:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Airplane Pilot Flight Mastery:</span>{" "}
            Take control of a variety of airplanes, from sleek jets to classic
            propeller planes. Test your piloting skills in realistic and dynamic
            flight scenarios.
          </li>
          <li>
            <span className="font-medium">
              City Airplane Flight Adventures:
            </span>{" "}
            Soar over breathtaking cityscapes, from towering skyscrapers to
            sprawling urban landscapes meticulously crafted for a lifelike
            experience.
          </li>
          <li>
            <span className="font-medium">Live Your Aviation Dreams:</span>{" "}
            Immerse yourself in the role of a professional aviator making
            critical decisions, managing controls, and navigating through
            challenging weather conditions.
          </li>
          <li>
            <span className="font-medium">City Flight Game Extravaganza:</span>{" "}
            Engage in a wide range of missions and challenges. Navigate busy
            airports, tricky airspaces, and execute flawless landings.
          </li>
          <li>
            <span className="font-medium">Diverse Plane Selection:</span> Choose
            from an array of aircraft, each with unique characteristics and
            handling to suit your flying preferences.
          </li>
          <li>
            <span className="font-medium">Realistic Airplane Simulator:</span>{" "}
            Enjoy advanced physics and authentic flight dynamics, creating an
            unparalleled simulation experience.
          </li>
          <li>
            <span className="font-medium">
              Drive Airplane Flying – Unleash Your Skills:
            </span>{" "}
            Master takeoffs, landings, and mid-air maneuvers as you navigate
            through diverse cityscapes.
          </li>
          <li>
            <span className="font-medium">Flight Games for Kids:</span> Offers a
            family-friendly flying experience that introduces the joy of flying
            to the next generation.
          </li>
          <li>
            <span className="font-medium">
              Jet Fighter Parking Airport Real Simulation:
            </span>{" "}
            Experience the intensity of managing powerful jet engines and
            navigating through busy runways.
          </li>
          <li>
            <span className="font-medium">Pilot Games Enthusiast Haven:</span>{" "}
            Connect with a community of enthusiasts, share adventures, and
            become part of a global community passionate about virtual aviation.
          </li>
        </ul>
        <p className="text-[#ef41de] text-[18px] lg:text-[24px] font-medium tracking-[0.17px] mt-6">
          What’s New:
        </p>
        <ul className="flex flex-col gap-1 mt-4 list-disc ml-4 text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px]">
          <li>
            <span className="font-medium">Performance Enhancements:</span>{" "}
            Optimized gameplay for smoother experiences.
          </li>
          <li>
            <span className="font-medium">Bug Fixes:</span> Resolved issues for
            uninterrupted gameplay.
          </li>
          <li>
            <span className="font-medium">New Modes:</span> Added City Pilot and
            airplane stunts for diverse flying adventures.
          </li>
          <li>
            <span className="font-medium">Ads and Loading Optimization:</span>{" "}
            Reduced ads and loading times to enhance your gaming experience.
          </li>
          <li>
            <span className="font-medium">
              Gameplay and Feature Enhancements:
            </span>{" "}
            Improved simulation features and added nitrous for exciting speed
            boosts.
          </li>
        </ul>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          <span className="font-medium">
            Download City Pilot Flight 3D Simulator now and embark on an
            exhilarating journey through the skies!
          </span>{" "}
          Whether you're navigating skyscrapers in New York City or soaring over
          the Eiffel Tower in Paris, each flight offers breathtaking views and
          challenging missions. Your feedback is crucial as we strive to enhance
          your flying experience further. After enjoying City Pilot Flight 3D
          Simulator, please take a moment to leave a review on the Play Store.
          Your reviews help us improve and deliver the best flight simulation
          adventure possible. Thank you for joining us in the skies!
        </p>
      </div>
    ),
  },
  {
    id: "g5",
    title: "Train Driving Simulator 3D",
    description:
      "Welcome to Train Driving Simulator 3D, where you can experience the thrill of being a train driver in...",
    image: "/images/Portfolio/Train-Driving-Simulator-3D.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "train-driving-simulator-3d",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "g6",
    title: "Teen High School Teacher",
    description:
      "Dive into the vibrant world of high school life with Teen High School Teacher Games! Experience the daily...",
    image: "/images/Portfolio/Teen-High-School-Teacher.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "teen-high-school-teacher",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "g7",
    title: "Rocket Car: Car Ball",
    description:
      "Dive into the thrilling fusion of rocket-powered cars and intense ball games with Rocket Car: Car Ball Games...",
    image: "/images/Portfolio/Rocket-Car-Car-Ball.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "rocket-car-car-ball",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "g8",
    title: "Gym Wrestling Fighting",
    description:
      "Step into the world of Gym Wrestling Fighting Game where wrestling, kickboxing, karate, kung fu, and mixed martial...",
    image: "/images/Portfolio/Gym-Wrestling-Fighting.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "gym-wrestling-fighting",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "g9",
    title: "Multi Prado Parking Car",
    description:
      "Hey Indian parking games lovers! We're excited to introduce the new and updated Indian Prado parking game for GT...",
    image: "/images/Portfolio/Multi-Prado-Parking-Car.webp",
    category: "Gaming",
    tags: ["Subscriptions", "Recharge", "Marketing"],
    link: "multi-prado-parking-car",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },

  // Gmae Development Portfolio
  {
    id: "gd1",
    title: "Herculi",
    description:
      "Through strategic planning, methodical analysis, and iterative development, this game successfully navigated the challenges...",
    image: "/images/Portfolio/Herculi.webp",
    category: "Gmae Development",
    tags: ["Headless", "React", "Rest API"],
    link: "herculi",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "gd2",
    title: "Burnout Ship",
    description:
      "Indeed, game apps that offer a personalized gaming experience have 40% more potential to increase user interaction...",
    image: "/images/Portfolio/Burnout-Ship.webp",
    category: "Gmae Development",
    tags: ["Elementor", "Performance", "B2B"],
    link: "burnout-ship",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "gd3",
    title: "The Flip",
    description:
      "Grass Fields is a performance based game environment. We kept the vertex count as low as possible and made sure...",
    image: "/images/Portfolio/The-Flip.webp",
    category: "Gmae Development",
    tags: ["FSE", "Gutenberg", "Portfolio"],
    link: "the-flip",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
  {
    id: "gd4",
    title: "Rush Mode Heaven",
    description:
      "A paper plane navigates through challenges on its journey, aiming to reach its destination and complete each stage...",
    image: "/images/Portfolio/Rush-Mode-Heaven.webp",
    category: "Gmae Development",
    tags: ["LMS", "LearnDash", "E-Learning"],
    link: "rush-mode-heaven",
    gameURL: "",
    content: (
      <div>
        <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
          The gaming industry is undergoing a seismic shift. Traditional game
          downloads and hardware-based gameplay are giving way to more agile,
          immersive, and accessible experiences powered by cloud gaming and edge
          computing. As developers, publishers, and infrastructure providers
          race to meet the growing demand for seamless performance, these
          technologies are reshaping how we deliver, store, and play games.
        </p>
      </div>
    ),
  },
];

// Correctly importing and using Category type from types.ts
export const CATEGORIES: Category[] = ["Gaming", "Gmae Development"];
