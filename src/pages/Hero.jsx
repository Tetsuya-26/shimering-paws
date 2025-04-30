import React from "react";
import { Button } from "@mui/material";
import CarouSel from "../components/Carousel";
const Hero = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Shimering Paws
                    <br className="hidden lg:inline-block"/>
                </h1>
                <p className="mb-8 sm:text-xl text-justify leading-relaxed">With their fluffy coats, sweet button noses, and big round eyes that seem to sparkle with mischief, Shih Tzus are the definition of adorable. These little charmers were once royal lapdogs in ancient China, and they still carry themselves like tiny emperors today! Known for their affectionate nature, playful spirit, and love of cuddles, Shih Tzus make wonderful companions for families, singles, and seniors alike. Whether they’re prancing proudly with a bow in their hair or snoozing in your lap, it’s impossible not to smile around a Shih Tzu.</p>
                   
                    <Button sx={{ fontFamily: 'Monospace' }} 
                    size="large"  
                    variant="outlined"
                    color="inherit" 
                    >
                         <span class="relative flex size-3  -top-5 -right-32">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                    </span> Gets Started
                    </Button>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:shrink-0">
                    <CarouSel />
                </div>
            </div>
        </section>
    );
}
export default Hero;