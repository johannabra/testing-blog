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
            text: "Brunch is the perfect opportunity to enjoy a leisurely meal with friends and family. In this blog post, we share inventive recipes and tips for creating a memorable brunch spread, from delectable avocado toast variations to fluffy pancakes with a twist. Plus, learn how to pair drinks and set a beautiful table to impress your guests.",
            category: "food",
          },
          {
            id: 2,
            author: "Emelie Svensson",
            title: "UX Trends to Watch in 2024",
            text: "User experience (UX) design continues to evolve rapidly, driven by technological advancements and changing user expectations. In 2024, personalized user experiences, voice user interfaces (VUI) and conversational UX, augmented reality (AR) and virtual reality (VR) experiences, and inclusive design will be key trends shaping the digital landscape. These trends aim to create more intuitive, engaging, and accessible digital experiences for users worldwide.",
            category: "tech",
          },
          {
            id: 3,
            author: "Aristote Baron",
            title: "Beyond 5G: What the Future Holds for Mobile Connectivity",
            text: "As 5G technology becomes more widespread, the tech world is already looking ahead to what comes next. In this blog post, we explore the advancements beyond 5G, including the potential of 6G technology. Learn about the expected benefits, such as ultra-fast speeds and enhanced connectivity, and what these developments mean for industries like autonomous driving, smart cities, and more.",
            category: "tech",
          },
          {
            id: 4,
            author: "Killian Jones",
            title:
              "Designing for Well-being: Creating Spaces That Nurture Mind and Body",
            text: "Our living environments have a significant impact on our mental and physical health. This blog post explores how thoughtful design can enhance well-being, featuring principles of biophilic design, the importance of natural light, and how to create a calming atmosphere with color and texture. Get practical tips on designing your home or workspace to support a healthy, balanced lifestyle.",
            category: "design",
          },
          {
            id: 5,
            author: "Emelie Svensson",
            title:
              "The Rise of Quantum Computing: How It Will Change Technology Forever",
            text: "Quantum computing is poised to revolutionize the tech landscape. This blog post breaks down the complex concepts behind quantum computing in an easy-to-understand way, explaining how it differs from classical computing and its potential applications. From solving complex problems in minutes to advancing artificial intelligence, discover how quantum computing could transform various sectors.",
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
