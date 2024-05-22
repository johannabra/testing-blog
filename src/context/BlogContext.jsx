import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogPostProvider = (props) => {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts
      ? JSON.parse(localStorage.getItem("posts"))
      : [
          {
            id: 1,
            author: "Fredrika Törnkvist",
            title: "CAN YOU FEED SHARKS?",
            text: "Feeding sharks is both thrilling and risky. While it may seem adventurous, its crucial to consider the dangers involved. Sharks are apex predators finely tuned by evolution, and introducing food can disrupt natural behaviors and lead to dependency. Moreover, feeding sharks can alter migration patterns and increase human-shark conflicts. There's also the significant risk of close interaction, with potential injuries or mistaken identity bites. Conservation efforts often discourage feeding sharks to protect both humans and these magnificent creatures",
          },
          {
            id: 2,
            author: "Emelie Svensson",
            title: "UX-TRENDS",
            text: "In UX design, trends are constantly shifting, influenced by technology advancements and changing user behaviors. Designers must stay updated to remain relevant and competitive in the field. However, it's crucial not to blindly follow trends but rather to understand their underlying principles and how they align with user needs. Balancing innovation with usability ensures that designs enhance the user experience effectively. Ultimately, successful UX design involves a thoughtful integration of emerging trends with a deep understanding of user preferences and behaviors.",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </BlogContext.Provider>
  );
};
