import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Overview() {
    return (
    <div class="container px-5 py-24 mx-auto flex flex-wrap">

        {/* Image Overview */}
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <iframe width="1350" height="480" src="https://www.youtube.com/embed/IKpTVbQPX_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="object-cover object-center h-96 w-full"></iframe>
        </div>

        {/* Content Overview */}
        <div class="flex flex-col flex-wrap lg:py-6 -mb-5 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-5 lg:items-start items-center">
                <div class="flex-grow">
                    <h1 class="text-gray-900 text-6xl title-font font-bold mb-5">Mong Jaya <span className = "text-indigo-500">Utama</span></h1>
                    <p class="leading-relaxed text-base text-2xl font-light">Powerful User Experience Tool for Offer you industrial, Mining, Marine and Trucking Sector</p>
                    <a class="mt-5 text-3xl font-medium text-yellow-500 inline-flex items-center">MORE THAN YOU NEEDS                   </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Overview



