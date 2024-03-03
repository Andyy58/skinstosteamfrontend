const Charts = () => {
  return (
    <section className="w-full h-screen min-h-[1440px] background-gradient flex justify-center pt-24">
      <div className="w-[100em] h-fit min-h-[500px] flex justify-center bg-[#dceafc78] rounded-3xl">
        <div className="w-[98%] h-16 bg-[#D9D9D9] mt-6 rounded-2xl flex items-center justify-between">
          <h3 className=" pl-8 text-[20pt] text-black">Name</h3>
          <span className="w-[38%] flex h-full items-center justify-end">
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <h3 className="text-[20pt] text-black px-4 w-[28%] text-center">
              Liquidity ⓘ
            </h3>
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <h3 className="text-[20pt] text-black px-4 w-[26%]">% Profit ⓘ</h3>
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <h3 className="text-[20pt] text-black px-4 ">Amount Profit ⓘ</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Charts;
