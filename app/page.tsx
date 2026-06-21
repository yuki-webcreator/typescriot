import Image from "next/image";

type Monster = {
  id: number;
  name: string;
};

const monsters: Monster[] = [
  { id: 0, name: "ピンクちゅー" },
  { id: 1, name: "ブルーちゅー" },
  { id: 2, name: "グリーンちゅー" },
  { id: 3, name: "イエローちゅー" },
  { id: 4, name: "パープルちゅー" },
  { id: 5, name: "オレンジちゅー" },
  { id: 6, name: "レッドちゅー" },
  { id: 7, name: "ブルーちゅー" },
  { id: 8, name: "グリーンちゅー" },
  { id: 9, name: "イエローちゅー" },
  { id: 10, name: "パープルちゅー" },
  { id: 11, name: "オレンジちゅー" },
  { id: 12, name: "レッドちゅー" },
  { id: 13, name: "ブルーちゅー" },
  { id: 14, name: "グリーンちゅー" },
  { id: 15, name: "イエローちゅー" },
  { id: 16, name: "パープルちゅー" },
  { id: 17, name: "オレンジちゅー" },
  { id: 18, name: "レッドちゅー" },
  { id: 19, name: "グリーンちゅー" },
  { id: 20, name: "イエローちゅー" },
  { id: 21, name: "パープルちゅー" },
  { id: 22, name: "オレンジちゅー" },
  { id: 23, name: "レッドちゅー" },
];

export default function Home() {
  const MonsterCount = 23;

  return (
    <main>
      {monsters.map((monster, i) => {
        return (
          <div key={i}>
            <Image
              src={`/image/monster-${i + 1}.png`}
              alt="Monster"
              width={80}
              height={80}
            />
            <h2>{monster.name}</h2>
            <p>HP：100</p>
          </div>
        );
      })}
    </main>
  );
}
