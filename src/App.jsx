function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white border-b ">
      <a href="/" className="text-2xl font-bold">
      The Sportory<span className="text-blue-500">.</span>
      </a>
      <div className="hidden md:flex space-x-4">
        <a href="/login" className="px-9 py-2  rounded-full border">
          Log in
        </a>
        <a
          href="/signup"
          className="px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Sign up
        </a>
      </div>
      <button className="md:hidden">Menu</button>
    </nav>
  );
}

function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay <br className="hidden lg:block" />
            Informed, <br />
            Stay Inspired,
          </h1>
          <p className="text-lg text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src="src\assets\peoplewithcat.jpg"
          alt="Person with a cat"
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

function App() {
  return (

    <>
      <NavBar />
      <HeroSection />
    </>
  );
}
export default App;