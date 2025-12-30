import heroImage from "../assets/author.jpg"


export function HeroSection() {
    return (
      <main className="container px-4 py-8 lg:py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Stay <br className="hidden lg:block" />
              Updated, <br />
              Stay in the Game.
            </h1>
            <p className="text-lg text-gray-500">
                Your daily source of sports news, insights, and moments that matter — across every game and every competition.
            </p>
          </div>
          <img
            src={heroImage}
            alt="Picture of Author"
            className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
          />
          <div className="lg:w-1/3 lg:pl-8">
            <h2 className="text-xl font-semibold mb-2">-Author</h2>
            <h3 className="text-2xl font-bold mb-4">Tiz T.</h3>
            <p className="text-gray-500 mb-4">
            I am a sports enthusiast and freelance writer with a passion for a wide range of sports. I enjoy sharing insights, analysis, and stories that capture the excitement and spirit of competition.
            </p>
            <p className="text-gray-500">
              When I&apos;m not writing, I spend my time following major sporting events, tracking athlete performances, and staying up to date with the latest sports news.
            </p>
          </div>
        </div>
      </main>
    );
  }