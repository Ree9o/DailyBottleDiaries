import getDiaries from "@/src/app/services/getDialies";
import React from "react";
import DiaryContaienerItem from "../../organisms/DiaryContainerItem/DairyContainerItem";

export default async function DiariesContainer() {
  const diaries = await getDiaries();

  return (
    <>
      <div className="grid h-screen w-full grid-cols-1 items-center justify-items-center gap-2  overflow-auto  bg-white p-6 px-4 py-8 shadow-md  sm:grid-cols-2 xl:grid-cols-4 ">
        {diaries.map((diary) => (
          <div
            key={diary.id}
            className="size-60 rounded-lg border border-black"
          >
            <DiaryContaienerItem diary={diary} />
          </div>
        ))}
      </div>
    </>
  );
}
