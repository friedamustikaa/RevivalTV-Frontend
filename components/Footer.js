import React from 'react'

export default function Footer() {
    return (
        <div className="bg-black mt-16">
            <div className="px-32 py-16">
                <div className="px-5 text-red-50">
                    <div className="flex">
                        <div className="w-1/4">
                            <div className="flex items-center">
                                <img src="/assets/logo.svg" alt="" className="2xl:w-20 xl:w-20 lg:w-14 md:w-11 sm:w-11 pr-3"/>
                                <p className="text-white text-lg font-semibold">autodrone</p>
                            </div>
                            <p className="text-white text-sm font-light pt-3">Look up the sky and beautiful world easily.</p>
                        </div>
                        <div className="w-1/4">
                            <div className="flex-row">
                                <p className="text-white text-sm font-semibold">Explore</p>
                                <p className="text-white text-sm font-light pt-4 pb-2">Our Services</p>
                                <p className="text-white text-sm font-light pb-2">Specification</p>
                                <p className="text-white text-sm font-light pb-2">Refund</p>
                                <p className="text-white text-sm font-light pb-2">Playlist</p>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="flex-row">
                                <p className="text-white text-sm font-semibold">Account</p>
                                <p className="text-white text-sm font-light pt-4 pb-2">My Account</p>
                                <p className="text-white text-sm font-light pb-2">Top Benefit</p>
                                <p className="text-white text-sm font-light pb-2">How-to Tutorials</p>
                                <p className="text-white text-sm font-light pb-2">Moment</p>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="flex-row">
                                <p className="text-white text-sm font-semibold">Office</p>
                                <p className="text-white text-sm font-light pt-4 pb-2">+021 2208 1996</p>
                                <p className="text-white text-sm font-light pb-2">SCBD, Jakarta</p>
                                <p className="text-white text-sm font-light pb-2">No.2 (Autodrone)</p>
                                <p className="text-white text-sm font-light pb-2">support@autodrone.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
