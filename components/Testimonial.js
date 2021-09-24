export default function Testimonial() {
    return (
        <div className="px-32">
            <div className="px-5">
                <p className="xl:w-1/3 lg:w-3/5 2xl:text-3xl xl:text-xl lg:text-2xl font-semibold text-black">
                What Our “Pilots Are Saying
                </p>
                <div className="flex pt-10">
                    <div className="w-1/3 xl:px-2 lg:px-2">
                        <div className="border border-grey-300 rounded-lg">
                            <div className="p-6">
                                <p className="text-xs font-light text-black">With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone. </p>
                                <div className="flex items-center pt-3">
                                    <div className="w-1/3">
                                        <img src="/assets/profile1.svg" alt="" className="rounded-full"/>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-tiny font-semibold text-black">Hugo Adams</p>
                                        <p className="text-sm font-light text-gray-400">Content Creator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 xl:px-2 lg:px-2">
                        <div className="border border-grey-300 rounded-lg">
                            <div className="p-6">
                                <p className="text-xs font-light text-black">Taking high view video become easy and faster. Battery performance really helping for making film.</p>
                                <div className="flex items-center pt-3">
                                    <div className="w-1/3">
                                        <img src="/assets/profile2.svg" alt="" className="rounded-full"/>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-tiny font-semibold text-black">Jennie Obrien</p>
                                        <p className="text-sm font-light text-gray-400">Director Film</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 xl:px-2 lg:px-2">
                        <div className="border border-grey-300 rounded-lg">
                            <div className="p-6">
                                <p className="text-xs font-light text-black">Making video content for my trip vlog so powerful and wonderful. Love the video quality.</p>
                                <div className="flex items-center pt-3">
                                    <div className="w-1/3">
                                        <img src="/assets/profile3.svg" alt="" className="rounded-full"/>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-tiny font-semibold text-black">Lisa Millz</p>
                                        <p className="text-sm font-light text-gray-400">Content WQCreator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
