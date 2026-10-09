"use client";

const BreakpointTracker = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-full bg-black/80 px-3 py-1 font-mono text-sm text-white">
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};

export default BreakpointTracker;
