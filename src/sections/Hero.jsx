const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer collection</p>
        <h1>
          <span>New Arrival of</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish new Nike arrivals with quality comfort and innovated
          designs!
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
