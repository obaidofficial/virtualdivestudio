import React from "react";
import { DEFAULT_BLOG_ITEMS } from "./constants";
import BlogCards from "./BlogCards";

const Blogs = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          {DEFAULT_BLOG_ITEMS.map((BlogData) => {
            return (
              <div key={BlogData.id}>
                <BlogCards BlogData={BlogData} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
