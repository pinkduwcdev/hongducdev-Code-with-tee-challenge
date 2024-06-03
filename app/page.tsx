import Slider from "@/components/slider";
import { ratingCardList } from "@/data";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-[70px]">
        <h1 className="font-volkhov text-[46px] leading-none">
          This Is What Our Customers Say
        </h1>
        <p className="text-base text-[#8A8A8A] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <Slider ratingCardList={ratingCardList} />
    </div>
  );
};

export default HomePage;
