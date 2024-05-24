import { createContext, useState, useEffect, useContext } from "react";

export const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogPostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts
      ? JSON.parse(storedPosts)
      : [
          {
            id: 1,
            author: "Fredrika Törnkvist",
            title:
              "Elevate Your Brunch Game: Creative Recipes and Tips for the Perfect Weekend Spread",
            text: "Brunch is the perfect opportunity to enjoy a leisurely meal with friends and family...",
            category: "food",
          },
          {
            id: 2,
            author: "Emelie Svensson",
            title: "UX-TRENDS",
            text: "In UX design, trends are constantly shifting, influenced by technology advancements and changing user behaviors...",
            category: "tech",
          },
          {
            id: 3,
            author: "Aristote Baron",
            title: "Beyond 5G: What the Future Holds for Mobile Connectivity",
            text: "As 5G technology becomes more widespread, the tech world is already looking ahead to what comes next...",
            category: "tech",
          },
          {
            id: 4,
            author: "Killian Jones",
            title:
              "Designing for Well-being: Creating Spaces That Nurture Mind and Body",
            text: "Our living environments have a significant impact on our mental and physical health...",
            category: "design",
          },
          {
            id: 5,
            author: "Emelie Svensson",
            title:
              "The Rise of Quantum Computing: How It Will Change Technology Forever",
            text: "Quantum computing is poised to revolutionize the tech landscape...",
            category: "tech",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
};
