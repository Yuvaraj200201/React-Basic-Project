import React from "react";

const Article = () => {
  return (
    <article className="container mx-auto p-4 md:p-6">
      <h1 className="font-bold text-lg sm:text-2xl">
        📰<b>Latest News</b>
      </h1>
      <div className="flex shadow-2xl bg-white gap-3 md:gap-6 mt-4 py-4 px-8 justify-center items-center">
        <img
          className="rounded-md"
          style={{ width: "28vw", height: "26vh" }}
          src="https://www.andromo.com/wp-content/uploads/2020/12/news-1.jpg"
          alt=""
        />
        <div>
          <h2 className="text-sm sm:text-lg">
            🚀<b>Vite is Revolutionizing Fronted</b>
          </h2>
          <p className="text-gray-700 text-sm md:text-lg mt-2">
            Vite is a next-gen fronted tool that delivers fast developement
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;
