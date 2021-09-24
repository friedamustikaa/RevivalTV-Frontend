export default function Product() {
    return (
        <div className="py-16 px-32">
            <div className="text-center pb-5">
                <p className="text-2xl font-semibold text-black">New Products</p>
                <p className="text-xs font-light text-gray-600">New innovation, best quality than before. </p>
                <p className="text-xs font-light text-gray-600">Make every moment flying operation become unforgettable.</p>
            </div>
            <div className="flex pt-10 text-center">
                <div className="w-1/3 xl:px-5 lg:px-2"> 
                    <div className="border border-grey-300 rounded-lg">
                        <div className="p-6">
                            <img className="rounded-lg" src="/assets/mini_drone.svg" alt="" />
                            <p className="text-2xl font-semibold text-black py-2">Mini Drone</p>
                            <p className="text-tiny font-light text-black">Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.</p>
                            <button className="uppercase bg-blue-600 text-sm font-semibold text-white text-center rounded-3xl px-8 py-2 mt-3">
                                get now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 xl:px-5 lg:px-2"> 
                    <div className="border border-grey-300 rounded-lg">
                        <div className="p-6">
                            <img className="rounded-lg" src="/assets/drone_light.svg" alt="" />
                            <p className="text-2xl font-semibold text-black py-2">Drone Light</p>
                            <p className="text-tiny font-light text-black">Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.</p>
                            <button className="uppercase bg-blue-600 text-sm font-semibold text-white text-center rounded-3xl px-8 py-2 mt-3">
                                get now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 xl:px-5 lg:px-2"> 
                    <div className="border border-grey-300 rounded-lg">
                        <div className="p-6">
                            <img className="rounded-lg" src="/assets/mini_drone.svg" alt="" />
                            <p className="text-2xl font-semibold text-black py-2">Mini Drone</p>
                            <p className="text-tiny font-light text-black">Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.</p>
                            <button className="uppercase bg-blue-600 text-sm font-semibold text-white text-center rounded-3xl px-8 py-2 mt-3">
                                get now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
