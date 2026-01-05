import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";

import { HeroSection } from "./components/herosection";

// import { Button } from "./ui/button";
import Articles from "./components/articlesection";
import { BlogCard } from "./components/BlogCard";
import { blogPosts } from "./data/blogPosts";

function App() {
  return (

    <>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <NavBar />
      <HeroSection />
      <Articles />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
        <BlogCard {...blogPosts[0]} />
        <BlogCard {...blogPosts[1]} />
        <BlogCard {...blogPosts[2]} />
        <BlogCard {...blogPosts[3]} />
        <BlogCard {...blogPosts[4]} />
        <BlogCard {...blogPosts[5]} />
      </div>
      <Footer />
      </div>


      
      {/* <Button> Hello CN</Button> */}
      

    </>
  );
}
export default App;