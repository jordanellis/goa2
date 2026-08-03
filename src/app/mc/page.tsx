import Image from "next/image";

const VILLAINS = [
  {
    name: "Rhino",
    set: "Core",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2019/12/rhino1.jpg?strip=info&w=800",
    defeated: true,
  },
  {
    name: "Klaw",
    set: "Core",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2019/12/klaw1.jpg?strip=info&w=800",
    defeated: true,
  },
  {
    name: "Ultron",
    set: "Core",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2019/12/ultron1.jpg?strip=info&w=800",
  },
  {
    name: "Risky Business",
    set: "Avengers",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2019/12/risky1b.jpg?strip=info&w=826",
  },
  {
    name: "Mutagen Formula",
    set: "Avengers",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2019/12/mutagen1.jpg?strip=info&w=826",
  },
  {
    name: "Wrecking Crew",
    set: "Avengers",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/02/bulldozer1-1.jpg?strip=info&w=730",
  },
  {
    name: "Crossbones",
    set: "Rise of the Red Skull",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/09/c1a.jpg?strip=info&w=804",
  },
  {
    name: "Absorbing Man",
    set: "Rise of the Red Skull",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/09/a1.jpg?strip=info&w=804",
  },
  {
    name: "Taskmaster",
    set: "Rise of the Red Skull",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/09/t1.jpg?strip=info&w=766",
  },
  {
    name: "Zola",
    set: "Rise of the Red Skull",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/09/z1-5.jpg?strip=info&w=768",
  },
  {
    name: "Red Skull",
    set: "Rise of the Red Skull",
    image:
      "https://hallofheroeslcg.com/wp-content/uploads/2020/09/r1.jpg?strip=info&w=812",
  },
  {
    name: "Kang",
    set: "Rise of the Red Skull",
    image: "",
  },
  {
    name: "Brotherhood of Badoon",
    set: "Galaxy's Most Wanted",
    image: "",
  },
  {
    name: "Infiltrate the Museum",
    set: "Galaxy's Most Wanted",
    image: "",
  },
  {
    name: "Escape the Museum",
    set: "Galaxy's Most Wanted",
    image: "",
  },
  {
    name: "Nebula",
    set: "Galaxy's Most Wanted",
    image: "",
  },
  {
    name: "Ronan The Accuser",
    set: "Galaxy's Most Wanted",
    image: "",
  },
  {
    name: "Ebony Maw",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "Tower Defense",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "Thanos",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "Hela",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "Loki",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "The Hood",
    set: "Mad Titan's Shadow",
    image: "",
  },
  {
    name: "Sandman",
    set: "Sinister Motives",
    image: "",
  },
  {
    name: "Venom",
    set: "Sinister Motives",
    image: "",
  },
  {
    name: "Mysterio",
    set: "Sinister Motives",
    image: "",
  },
  {
    name: "Sinister Six",
    set: "Sinister Motives",
    image: "",
  },
  {
    name: "Venom Goblin",
    set: "Sinister Motives",
    image: "",
  },
  {
    name: "Sabretooth",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Project Wideawake",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Master Mold",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Mansion Attack",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Magneto",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Magog",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Spiral",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Mojo",
    set: "Mutant Genesis",
    image: "",
  },
  {
    name: "Morlock Siege",
    set: "NeXt Evolution",
    image: "",
  },
  {
    name: "On The Run",
    set: "NeXt Evolution",
    image: "",
  },
  {
    name: "Juggernaut",
    set: "NeXt Evolution",
    image: "",
  },
  {
    name: "Mister Sinister",
    set: "NeXt Evolution",
    image: "",
  },
  {
    name: "Stryfe",
    set: "NeXt Evolution",
    image: "",
  },
  {
    name: "Unus",
    set: "Age of Apocalypse",
    image: "",
  },
  {
    name: "Four Horsemen",
    set: "Age of Apocalypse",
    image: "",
  },
  {
    name: "Apocalypse",
    set: "Age of Apocalypse",
    image: "",
  },
  {
    name: "Dark Beast",
    set: "Age of Apocalypse",
    image: "",
  },
  {
    name: "En Sabah Nur",
    set: "Age of Apocalypse",
    image: "",
  },
  {
    name: "Black Widow",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "Batroc",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "M.O.D.O.K.",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "Citizen V",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "Baron Zemo",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "Enchantress",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "God of Lies",
    set: "S.H.I.E.L.D.",
    image: "",
  },
  {
    name: "Iron Man",
    set: "Civil War",
    image: "",
  },
  {
    name: "Captain Marvel",
    set: "Civil War",
    image: "",
  },
  {
    name: "Captain America",
    set: "Civil War",
    image: "",
  },
  {
    name: "Spider-Woman",
    set: "Civil War",
    image: "",
  },
  {
    name: "She-Hulk",
    set: "Civil War",
    image: "",
  },
  {
    name: "Vision",
    set: "Civil War",
    image: "",
  },
  {
    name: "Bullseye",
    set: "Fear No Evil",
    image: "",
  },
  {
    name: "Electro",
    set: "Fear No Evil",
    image: "",
  },
  {
    name: "Hammerhead",
    set: "Fear No Evil",
    image: "",
  },
  {
    name: "Purple Man",
    set: "Fear No Evil",
    image: "",
  },
  {
    name: "Typhoid Mary",
    set: "Fear No Evil",
    image: "",
  },
  {
    name: "Kingpin",
    set: "Fear No Evil",
    image: "",
  },
];

export default function MCLanding() {
  return (
    <>
      <div className="flex m-auto w-full pt-6 flex-wrap">
        {VILLAINS.map(({ name, defeated, image }) => (
          <div key={name} className="relative">
            <div
              className={`relative flex justify-center items-center ${defeated ? "grayscale" : ""}`}
            >
              <div className="border border-amber-500 bg-neutral-900 flex flex-col w-50 h-40 mx-auto p-1 justify-around overflow-hidden">
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    className="object-cover scale-[170%]"
                    src={image}
                    alt={name}
                    width={1000}
                    height={1000}
                    style={{
                      transform: `translate(-8px, 49px)`,
                    }}
                  />
                </div>
              </div>
              <div className="absolute bg-black border-2 border-amber-300 rounded-sm text-amber-100 w-36 text-center bottom-2 font">
                {name}
              </div>
            </div>
            {defeated && (
              <div className="absolute bg-black border-y-2 border-y-red-500 rounded-sm text-red-400 w-full text-center bottom-15 font-black tracking-widest text-lg">
                TERMINATED
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
