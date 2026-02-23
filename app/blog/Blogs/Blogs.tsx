import React from "react";
import { BLOGS } from "./constants";
import BlogCards from "./BlogCards";

const Blogs = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          {BLOGS.map((blogdata) => {
            return (
              <div key={blogdata.id}>
                <BlogCards blogdata={blogdata} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
