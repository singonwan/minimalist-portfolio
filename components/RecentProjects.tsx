import { projects } from "@/data";
import React from "react";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
