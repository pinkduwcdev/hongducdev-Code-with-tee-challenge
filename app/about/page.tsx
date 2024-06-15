import Title from "@/components/title";

const AboutPage = () => {
  return (
    <div>
      <Title>About</Title>
      <p className="text-zinc-400 max-w-3xl mt-2 text-lg">
        Hi, my name is{" "}
        <span className="text-zinc-200 z-10 relative after:absolute after:z-[-1] after:h-[2px] after:w-full after:bg-gradient-radar after:bottom-0 after:left-0 after:transition-all after:duration-500 hover:after:h-full">
          hongducdev
        </span>
        . Full name is Nguyen Hong Duc. I am a 4th year student majoring in
        Software Engineering at ICTU. I am a Front end developer and am striving
        to become a Fullstack developer.
      </p>
    </div>
  );
};

export default AboutPage;
