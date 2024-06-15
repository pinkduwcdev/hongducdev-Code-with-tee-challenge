const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-2xl font-semibold text-blue-400 inline-block relative after:absolute after:h-[2px] after:w-7 after:bg-blue-400 after:left-full after:top-1/2 after:ml-3">
      {children}
    </h3>
  );
};

export default Title;
