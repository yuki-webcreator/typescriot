"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  return (
    <main>
      <div className="grid grid-cols-3 container py-10">
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    </main>
  );
}

function MonsterCard({ monster }: { monster: Monster }) {
  const [hp, setHp] = useState(100);

  return (
    <div className="p-4 border shadow-sm">
      <Image
        src={`/image/monster-${monster.id + 1}.png`}
        alt="Monster"
        width={80}
        height={80}
      />
      <h2>{monster.name}</h2>
      <p>HP：{hp}</p>
      <div className="h-3 rounded-full overflow-hidden">
        <div
          className="bg-lime-500 size-full transition duration-300"
          style={{
            width: `${hp}%`,
          }}
        ></div>
      </div>
      <Button
        onClick={() => {
          setHp((prev) => Math.max(0, prev - 10));
        }}
        disabled={hp <= 0}
      >
        攻撃
      </Button>
    </div>
  );
}
