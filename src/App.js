import logo from './logo.svg';
import arils from './assets/arils.png';

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#121212] min-h-screen flex flex-col items-center justify-center text-white relative">
        <img src={arils} className="absolute top-2 right-4" alt="arils" />
        
        <p className="text-[148px] font-extralight font-sans whitespace-nowrap animate-scroll text-right w-full overflow-hidden">
          coming soon
        </p>

        <div className="fixed bottom-[50px] w-full flex justify-center items-center">
          <img src={logo} className="inline-block" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
