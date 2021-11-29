import React from 'react'

function Ourservice() {
    return (
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Service</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Be a great partner to customers
by being able to provide solutions for all
the need for performing engineering components in the sector <span className="font-extrabold text-indigo-500">
Industrial,</span><span className="font-extrabold text-red-500">Trucking and </span><span className="font-extrabold text-yellow-300">Mining</span></p>
        </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://images.squarespace-cdn.com/content/v1/5ece93955433fd6c00b4f4ba/1635794627107-6UW56F0LPSAVO3E1ZHRY/ett-mining-service-truck-4.jpg?format=750w"/>
            </div>
            <h2 class="text-xl font-medium title-font text-indigo-500 mt-5">Industrial Components</h2>
            <p class="text-base leading-relaxed mt-2">The leading group of companies in the Indonesian region for the sale of industrial components and solutions for original equipment manufacturers (OEMs) as well as repairs and maintenance</p>
        </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="http://maryland.ae/wp-content/uploads/2015/06/home-1.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-red-500 mt-5">Trucking Components</h2>
            <p class="text-base leading-relaxed mt-2">Our wide range and variety of truck and trailer components makes us a one-stop shop for all your frequently used trucking items e.g. wheel chocks, chevrons, LED tail lights, suzi-pipes and statutory markings and stickers.</p>
        </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://images.squarespace-cdn.com/content/v1/5ece93955433fd6c00b4f4ba/1636387394618-OV1721XFQLS4EVVHCL94/ett-crane-trucks-4.jpg?format=750w"/>
            </div>
            <h2 class="text-xl font-medium title-font text-yellow-300 mt-5">Mining Components</h2>
            <p class="text-base leading-relaxed mt-2">Using materials and high quality components sourced from reputable international suppliers, ensures that our machines and equipment can endure and excel in the rugged conditions and tough applications where they operate.</p>
        </div>
        </div>
    </div>
    )
}

export default Ourservice
