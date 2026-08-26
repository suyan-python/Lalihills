import { motion } from "framer-motion";

import image1 from "../assets/images/ticker-01.jpg";
import image2 from "../assets/images/ticker-02.jpg";
import image3 from "../assets/images/ticker-03.jpg";
import image4 from "../assets/images/ticker-04.jpg";
import image5 from "../assets/images/ticker-05.jpg";


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
];


const ImageTicker = () =>
{
    // Duplicate the images so the loop is seamless
    const tickerImages = [...images, ...images];

    return (
        <section className="relative w-full overflow-hidden bg-brown">

            {/* Top label */}

            <div className="absolute left-0 top-0 z-20 flex h-full items-center">

                <div className="bg-red px-5 py-3">

                    <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-lightCream">
                        From the hills
                    </span>

                </div>

            </div>


            <motion.div
                className="flex w-max"
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >

                {tickerImages.map((image, index) => (

                    <div
                        key={index}
                        className="relative h-[180px] w-[280px] shrink-0 overflow-hidden sm:h-[220px] sm:w-[340px] lg:h-[280px] lg:w-[430px]"
                    >

                        <img
                            src={image}
                            alt=""
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-brown/10" />

                    </div>

                ))}

            </motion.div>

        </section>
    );
};


export default ImageTicker;