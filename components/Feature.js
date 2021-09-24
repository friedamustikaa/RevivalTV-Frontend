export default function Feature() {
  return (
    <div>
      <div className="flex flex-wrap p-2 ">
        <div className="w-full xl:w-1/2 lg:w-1/2 p-3">
          <div className="w-auto h-screen overflow-hidden relative">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/feature1.svg"
              alt=""
            />
            <div className="h-full xl:pt-32 lg:pt-28 md:pt-32 sm:pt-32 relative ">
              <p className="text-black text-center 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-3xl sm:text-3xl font-bold">
                Ultra Light
              </p>
              <p className=" text-center 2xl:text-xl xl:text-xl lg:text-base md:text-xl sm:text-xl font-thin 2xl:px-28 xl:px-24 lg:px-14 md:px-32 sm:px-24">
                Drone move faster with weighing component under 200 g
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2 p-3">
          <div className="w-auto h-screen overflow-hidden relative">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/feature2.svg"
              alt=""
            />
            <div className="h-full xl:pt-32 lg:pt-28 md:pt-28 sm:pt-28 relative ">
              <p className="text-white text-center 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl font-bold">
              Best Resolution
              </p>
              <p className="text-white text-center 2xl:text-xl xl:text-xl lg:text-base md:text-xl sm:text-xl font-thin 2xl:px-32 xl:px-20 lg:px-14 md:px-28 sm:px-20">
              Take a beautiful view with best camera up to 4K Camera
                Resolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
