import React from 'react'

function Products() {
    return (
      <div className="bg-green-300 bg-opacity-25">
  <div className="container px-5 py-24 mx-auto">

    {/* Header Product */}
    <div className="py-3 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="text-xs text-blue-600 tracking-widest font-medium title-font mb-1">Add to your wish list</h2>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-blue-600">Latest Product</h1>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="inline-flex py-3 px-5 mb-3 rounded-lg items-center hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="title-font font-medium text-blue-600 text-opacity-75">GO TO SHOP </span>
        </span>
      </button>
    </div>
  </div>

    {/* Content Product */}
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 1</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 2</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 3</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 4</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 5</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 6</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 7</h2>
          <p className="leading-7 mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
        </a>
        <div className="mt-4">
          <h3 className="leading-7 text-sm text-gray-400 mb-1">CATEGORY</h3>
          <h2 className="text-blue-600 leading-7 title-font text-lg font-medium">Product 8</h2>
          <p className="leading-7 mt-1">Description</p>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Products


