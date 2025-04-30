import React from "react";

const Gallery = () => {
    return (
<section class="text-gray-400 bg-gray-900 body-font"id="Gallery">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Our Gallery</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto sm:text-xl leading-relaxed text-base">Step into a world of elegance, affection, and undeniable charm with our gallery dedicated to Shih Tzus — one of the most beloved toy breeds in the world.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/src/assets/img/puppies.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
export default Gallery;