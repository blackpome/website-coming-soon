import logo from './logo.svg';
import arils from './assets/arils.png';

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#121212] min-h-screen flex flex-col items-center justify-center text-white relative px-4">
        <img src={arils} className="absolute top-2 right-4" alt="arils" />
        
        <p className="font-extralight font-sans text-right w-full overflow-hidden whitespace-nowrap animate-scroll
          text-[48px] sm:text-[72px] md:text-[100px] lg:text-[148px]">
          coming soon
        </p>

        <div className="fixed bottom-[50px] w-full flex justify-center items-center">
          <img src={logo} className="inline-block max-w-[80%] sm:max-w-[300px]" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
