import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";

import { HeroSection } from "./components/herosection";

// import { Button } from "./ui/button";
import Articles from "./components/articlesection";


import { BlogCardSection } from "./components/BlogCardSection";

function App() {
  return (

    <>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <NavBar />
      <HeroSection />
      <Articles />
      <BlogCardSection />
      <Footer />
      </div>


      
      {/* <Button> Hello CN</Button> */}
      

    </>
  );
}
export default App;