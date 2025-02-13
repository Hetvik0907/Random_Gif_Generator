import Random from "./components/Random";
import Tag from './components/Tag';



export default function App() {
  return (
    <div className=" relative items-center h-full w-full flex flex-col  background overflow-hidden">
      <h1 className="  bg-white rounded-2xl
      w-11/12 text-center mt-[40px]  py-4 text-3xl font-bold
      
      ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center  ">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
