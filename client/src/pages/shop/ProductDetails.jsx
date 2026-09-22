import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductInfoGrid from "./ProductInfoGrid";
import StickyPurchaseBar from "./StickyPurchaseBar";
import { useCart } from "../../layouts/CartContext";
import { AnimatePresence } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

import { GiCoffeeBeans, GiCoffeePot, GiPouringPot } from "react-icons/gi";
import { FaMugHot } from "react-icons/fa";
import ProductDetailsLeft from "./ProductDetailsLeft";
import ProductDetailsRight from "./ProductDetailsRight";

const ProductDetails = ({ products = [] }) => {
  const { slug } = useParams();

  const initialProduct = products.find((item) => item.slug === slug);

  const [productType, setProductType] = useState(
    initialProduct?.type || "beans",
  );

  const [selectedOrigin, setSelectedOrigin] = useState(
    initialProduct?.origin || "",
  );

  const [selectedSize, setSelectedSize] = useState(
    initialProduct?.sizeOptions?.[0] || null,
  );

  const [selectedGrind, setSelectedGrind] = useState(
    initialProduct?.grindOptions?.[0] || "",
  );

  const [selectedForm, setSelectedForm] = useState(
    initialProduct?.formOptions?.[0] || "",
  );

  const [quantity, setQuantity] = useState(1);

  const [purchaseType, setPurchaseType] = useState("one-time");

  const [frequency, setFrequency] = useState(
    initialProduct?.frequencies?.[0] || "Every 4 Weeks",
  );

  // Origins available for selected type
  const origins = [
    ...new Set(
      products
        .filter((item) => item.type === productType)
        .map((item) => item.origin)
        .filter(Boolean),
    ),
  ];

  // Make sure selected origin exists for current type
  useEffect(() => {
    if (!origins.includes(selectedOrigin)) {
      setSelectedOrigin(origins[0] || "");
    }
  }, [productType, origins, selectedOrigin]);

  // Find current product
  const product =
    products.find(
      (item) => item.type === productType && item.origin === selectedOrigin,
    ) || initialProduct;

  // Reset purchase options when product changes
  useEffect(() => {
    if (!product) return;

    setSelectedSize(product.sizeOptions?.[0] || null);
    setSelectedGrind(product.grindOptions?.[0] || "");
    setSelectedForm(product.formOptions?.[0] || "");
    setQuantity(1);
  }, [product?.slug]);

  if (!product) {
    return (
      <section className="flex h-dvh items-center justify-center bg-ivory">
        <p className="text-sm text-ink/50">Product not found.</p>
      </section>
    );
  }

  return (
    <section className="h-dvh min-h-[620px] w-full overflow-hidden">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <ProductDetailsLeft
          product={product}
          products={products}
          productType={productType}
          setProductType={setProductType}
          origins={origins}
          selectedOrigin={selectedOrigin}
          setSelectedOrigin={setSelectedOrigin}
        />

        <ProductDetailsRight
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedGrind={selectedGrind}
          setSelectedGrind={setSelectedGrind}
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
          quantity={quantity}
          setQuantity={setQuantity}
          purchaseType={purchaseType}
          setPurchaseType={setPurchaseType}
          frequency={frequency}
          setFrequency={setFrequency}
        />
      </div>
    </section>
  );
};

// const CircularDetail = ({
//   title,
//   value,
//   position,
//   linePosition,
//   reveal,
//   lineFrom,
// }) => {
//   const opacity = useTransform(reveal, [0, 1], [0, 1]);
//   const scale = useTransform(reveal, [0, 1], [0.82, 1]);
//   const y = useTransform(reveal, [0, 1], [18, 0]);
//   const lineScale = useTransform(reveal, [0, 1], [0, 1]);

//   const smoothScale = useSpring(scale, {
//     stiffness: 220,
//     damping: 16,
//     mass: 0.7,
//   });

//   const smoothY = useSpring(y, {
//     stiffness: 220,
//     damping: 16,
//     mass: 0.7,
//   });

//   const smoothLine = useSpring(lineScale, {
//     stiffness: 260,
//     damping: 20,
//     mass: 0.6,
//   });

//   return (
//     <div className={`absolute ${position}`}>
//       <motion.div
//         style={{
//           opacity,
//           scale: smoothScale,
//           y: smoothY,
//         }}
//         className="relative min-w-[70px] text-center sm:min-w-[80px]"
//       >
//         <span className="block text-[6px] uppercase tracking-[0.28em] text-ink/55 sm:text-[8px] sm:tracking-[0.4em]">
//           {title}
//         </span>

//         <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.1em] text-ink sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
//           {value}
//         </span>

//         <motion.span
//           style={{
//             scaleX: smoothLine,
//             transformOrigin: lineFrom === "right" ? "right" : "left",
//           }}
//           className={`absolute ${linePosition} top-1/2 hidden h-px w-20 bg-ink/20 xl:block`}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const FaqItem = ({ number, question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-ink/10">
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="group flex w-full items-center gap-5 py-7 text-left sm:py-8"
//       >
//         <span className="w-8 shrink-0 text-[7px] font-medium tracking-[0.2em] text-red sm:w-10">
//           {number}
//         </span>

//         <span className="flex-1 pr-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-red sm:text-base lg:text-lg">
//           {question}
//         </span>

//         <motion.span
//           animate={{ rotate: isOpen ? 45 : 0 }}
//           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-500 group-hover:border-red group-hover:text-red"
//         >
//           <Plus size={13} strokeWidth={1} />
//         </motion.span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//             className="overflow-hidden"
//           >
//             <div className="grid grid-cols-[32px_1fr] gap-5 pb-8 sm:grid-cols-[40px_1fr]">
//               <span />
//               <p className="max-w-2xl text-[11px] leading-7 text-ink/50 sm:text-xs sm:leading-7">
//                 {answer}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
// const ProductDetails = ({ products = [] }) => {
//   const { slug } = useParams();
//   const { addToCart } = useCart();
//   const product = products?.find((item) => item.slug === slug);

//   const sectionRef = useRef(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedGrind, setSelectedGrind] = useState(
//     product?.grindOptions?.[0] || "beans",
//   );
//   const [frame, setFrame] = useState(0);
//   const [purchaseType, setPurchaseType] = useState("one-time");
//   const [frequency, setFrequency] = useState(
//     product?.frequencies?.[0] || "Every 4 Weeks",
//   );

//   const DEFAULT_FREQUENCIES = [
//     "Weekly",
//     "Every 2 Weeks",
//     "Every 3 Weeks",
//     "Every 4 Weeks",
//   ];
//   const handleFrequencyChange = (value) => {
//     setFrequency(value);
//   };

//   const handleAddToCart = () => {
//     addToCart(product, {
//       size: selectedSize.label,
//       grind: selectedGrind,
//       purchaseType,
//       frequency: purchaseType === "subscribe" ? frequency : null,
//       price: unitPrice,
//       quantity,
//     });
//     trackEvent("add_to_cart", {
//       currency: "NPR",
//       value: Number(product.price) * quantity,
//       items: [
//         {
//           item_id: product._id,
//           item_name: product.name,
//           item_brand: "Laali Hills",
//           item_category: "Coffee",
//           item_variant: `${selectedSize} / ${selectedGrind}`,
//           price: Number(product.price),
//           quantity,
//         },
//       ],
//     });
//   };

//   useEffect(() => {
//     if (!product) return;

//     trackEvent("view_item", {
//       currency: "NPR",
//       value: Number(product.price) || 0,
//       items: [
//         {
//           item_id: product._id,
//           item_name: product.name,
//           item_brand: "Laali Hills",
//           item_category: "Coffee",
//           price: Number(product.price) || 0,
//           quantity: 1,
//         },
//       ],
//     });
//   }, [product]);

//   const sizeOptions = useMemo(() => {
//     if (!product) return [];

//     if (product.sizeOptions?.length) {
//       return product.sizeOptions.map(({ grams, price }) => ({
//         label: `${grams}g`,
//         grams,
//         price,
//       }));
//     }

//     return [
//       {
//         label: `${product.size}g`,
//         grams: product.size,
//         price: product.price,
//       },
//     ];
//   }, [product]);

//   const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

//   useEffect(() => {
//     setSelectedSize(sizeOptions[0]);
//   }, [sizeOptions]);

//   const rotationImages = useMemo(() => {
//     if (!product) return [];
//     if (product.rotationImages?.length) return product.rotationImages;
//     return [product.image];
//   }, [product]);

//   const hasRealRotation = rotationImages.length > 1;

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 90,
//     damping: 28,
//     mass: 0.35,
//   });

//   // --- Turntable motion (used only when no real angle shots are available) ---
//   const productRotateY = useTransform(smoothProgress, [0, 1], [0, 360]);
//   const productRotateX = useTransform(smoothProgress, [0, 0.5, 1], [4, 0, -4]);
//   const productScale = useTransform(smoothProgress, [0, 1], [1, 1]);

//   // Contact shadow breathes with the rotation angle so the product feels
//   // grounded instead of floating while it turns.
//   const shadowScaleX = useTransform(productRotateY, (deg) => {
//     const rad = (deg * Math.PI) / 180;
//     return 0.55 + Math.abs(Math.cos(rad)) * 0.45;
//   });
//   const shadowOpacity = useTransform(
//     smoothProgress,
//     [0, 0.1, 0.9, 1],
//     [0, 0.35, 0.35, 0.15],
//   );

//   const hintOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
//   const chromeReveal = useTransform(smoothProgress, [0.02, 0.1], [0, 1]);
//   const titleY = useTransform(smoothProgress, [0, 1], [0, -28]);
//   const productY = useTransform(smoothProgress, [0, 1], [0, -34]);
//   const ringScale = useTransform(smoothProgress, [0.03, 0.15], [0.75, 1]);
//   const ringOpacity = useTransform(smoothProgress, [0.03, 0.15], [0, 1]);

//   const originReveal = useTransform(smoothProgress, [0.12, 0.22], [0, 1]);

//   const altitudeReveal = useTransform(smoothProgress, [0.22, 0.32], [0, 1]);

//   const flavorReveal = useTransform(smoothProgress, [0.32, 0.42], [0, 1]);

//   const aromaReveal = useTransform(smoothProgress, [0.42, 0.52], [0, 1]);

//   const processReveal = useTransform(smoothProgress, [0.52, 0.62], [0, 1]);

//   const roastReveal = useTransform(smoothProgress, [0.62, 0.72], [0, 1]);

//   const caffeineReveal = useTransform(smoothProgress, [0.72, 0.82], [0, 1]);

//   const typeReveal = useTransform(smoothProgress, [0.82, 0.92], [0, 1]);

//   const mobileDetailOpacity = useTransform(smoothProgress, [0.16, 0.3], [0, 1]);
//   const descriptionReveal = useTransform(smoothProgress, [0.14, 0.28], [0, 1]);
//   const descriptionY = useTransform(smoothProgress, [0.14, 0.28], [24, 0]);

//   useEffect(() => {
//     if (!hasRealRotation) return; // nothing to swap when we're faking rotation with CSS

//     const unsubscribe = smoothProgress.on("change", (value) => {
//       const nextFrame = Math.min(
//         rotationImages.length - 1,
//         Math.floor(value * rotationImages.length),
//       );

//       setFrame(nextFrame);
//     });

//     return () => unsubscribe();
//   }, [smoothProgress, rotationImages.length, hasRealRotation]);

//   if (!product) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-lightCream px-6">
//         <div className="text-center">
//           <p className="text-[9px] uppercase tracking-[0.35em] text-stone">
//             Product not found
//           </p>
//           <Link
//             to="/shop"
//             className="mt-5 inline-flex items-center gap-3 border border-ink/20 px-6 py-3 text-[9px] uppercase tracking-[0.25em] text-ink"
//           >
//             <ArrowLeft size={14} />
//             Back to shop
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
//   const unitPrice =
//     purchaseType === "subscribe"
//       ? selectedSize.price * (1 - subscriptionDiscount)
//       : selectedSize.price;
//   const total = unitPrice * quantity;

//   const GRIND_CONFIG = {
//     beans: {
//       label: "Whole Beans",
//       subtitle: "Grind fresh",
//       icon: GiCoffeeBeans,
//     },
//     fine: {
//       label: "Fine",
//       subtitle: "Moka Pot",
//       icon: GiCoffeePot,
//     },
//     medium: {
//       label: "Medium",
//       subtitle: "V60",
//       icon: GiPouringPot,
//     },
//     coarse: {
//       label: "Coarse",
//       subtitle: "Advanced V60",
//       icon: GiPouringPot,
//     },
//   };

//   return (
//     <main className="overflow-x-clip bg-lightWhite  text-ink ">
//       <section ref={sectionRef} className="relative h-[400vh] bg-lightWhite ">
//         <div className="sticky top-0 isolate flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">
//           <motion.div
//             style={{ opacity: chromeReveal }}
//             className="absolute left-4 top-5 z-20 sm:left-7 sm:top-7 md:left-10 md:top-10"
//           >
//             <Link
//               to="/shop/coffee"
//               className="inline-flex items-center gap-2 text-[6px] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-red sm:gap-3 sm:text-[8px] sm:tracking-[0.35em]"
//             >
//               <ArrowLeft
//                 size={12}
//                 strokeWidth={1.2}
//                 className="sm:h-[13px] sm:w-[13px]"
//               />
//               <span>Coffee collection</span>
//             </Link>
//           </motion.div>

//           <motion.div
//             style={{ opacity: chromeReveal }}
//             className="absolute right-4 top-5 z-20 max-w-[42%] text-right sm:right-7 sm:top-7 md:right-10 md:top-10"
//           >
//             <span className="block text-[6px] uppercase tracking-[0.3em] text-ink/50 sm:text-[8px] sm:tracking-[0.4em]">
//               The product
//             </span>

//             <p className="mt-1.5 text-[7px] uppercase tracking-[0.14em] text-ink sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
//               {product.origin} · {product.type}
//             </p>
//           </motion.div>

//           {/* Product */}
//           <motion.div
//             initial={{ y: 140, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{
//               duration: 1.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             style={{
//               scale: productScale,
//               y: productY,
//               perspective: 1400,
//             }}
//             className="relative z-10 flex h-[min(52vw,48vh)] w-[min(52vw,48vh)] min-h-60 min-w-60 max-h-125 max-w-125 items-center justify-center sm:h-[min(55vw,55vh)] sm:w-[min(55vw,55vh)]"
//           >
//             {/* Outer rings */}
//             <motion.div
//               style={{ scale: ringScale, opacity: ringOpacity }}
//               className="absolute inset-[5%] rounded-full border border-ink/20"
//             />

//             <motion.div
//               style={{ scale: ringScale, opacity: ringOpacity }}
//               className="absolute inset-[14%] rounded-full border border-ink/10"
//             />

//             {/* Product image */}
//             <motion.div
//               style={{
//                 rotateY: hasRealRotation ? 0 : productRotateY,
//                 rotateX: hasRealRotation ? 0 : productRotateX,
//                 transformStyle: "preserve-3d",
//               }}
//               className="relative h-full w-full"
//             >
//               <img
//                 src={rotationImages[frame]}
//                 alt={product.name}
//                 className="h-full w-full object-contain drop-shadow-2xl"
//               />

//               {/* Description reveal */}
//               <motion.div
//                 style={{ opacity: descriptionReveal }}
//                 className="absolute inset-0 flex items-center justify-center bg-lightWhite/85 px-[10%] text-center sm:px-[12%]"
//               >
//                 <motion.p
//                   style={{ y: descriptionY }}
//                   className="max-w-[18rem] text-[10px] font-light leading-5 text-ink sm:max-w-sm sm:text-sm sm:leading-7"
//                 >
//                   {product.description}
//                 </motion.p>
//               </motion.div>
//             </motion.div>

//             {/* Ground shadow */}
//             <motion.div
//               style={{
//                 scaleX: shadowScaleX,
//                 opacity: shadowOpacity,
//               }}
//               className="absolute bottom-[3%] h-4 w-[52%] rounded-full bg-ink/20 blur-xl sm:h-6 sm:w-[55%]"
//             />
//           </motion.div>

//           {/* Scroll hint */}
//           <motion.div
//             style={{ opacity: hintOpacity }}
//             className="absolute bottom-[12vh] left-1/2 z-20 -translate-x-1/2 text-center sm:bottom-[13vh]"
//           >
//             <span className="whitespace-nowrap text-[6px] uppercase tracking-[0.32em] text-ink sm:text-[8px] sm:tracking-[0.4em]">
//               Scroll for details
//             </span>

//             <motion.span
//               animate={{ y: [0, 6, 0] }}
//               transition={{
//                 duration: 1.6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="mx-auto mt-2 block h-6 w-px bg-ink/30 sm:mt-3 sm:h-8"
//             />
//           </motion.div>

//           {/* Product title */}
//           <motion.div
//             style={{ y: titleY }}
//             className="absolute left-1/2 top-[16vh] z-20 w-[82%] -translate-x-1/2 text-center md:top-[12vh] sm:w-[75%] md:w-auto"
//           >
//             <h1 className="header text-[clamp(1.7rem,7vw,2.75rem)] uppercase leading-[0.88] tracking-[-0.04em] text-ink sm:text-4xl font-medium">
//               {product.name}
//             </h1>

//             <p className="mx-auto mt-4 max-w-[15rem] text-[10px] font-medium uppercase leading-4 tracking-[0.04em] text-ink  sm:max-w-md  sm:leading-6 md:text-sm">
//               {product.shortDescription}
//             </p>
//           </motion.div>

//           {/* desktop details  */}
//           <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-[min(72vw,72vh)] w-[min(72vw,72vh)] max-h-168 max-w-2xl -translate-x-1/2 -translate-y-1/2 lg:block">
//             <CircularDetail
//               title="Origin"
//               value={product.origin}
//               position="left-[-22%] top-[18%]"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={originReveal}
//             />

//             <CircularDetail
//               title="Altitude"
//               value={`${product.altitude} m`}
//               position="right-[-22%] top-[18%]"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={altitudeReveal}
//             />

//             <CircularDetail
//               title="Process"
//               value={product.process}
//               position="left-[-22%] bottom-[18%]"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={processReveal}
//             />

//             <CircularDetail
//               title="Roast"
//               value={`${product.roastLevel}/5`}
//               position="right-[-22%] bottom-[18%]"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={roastReveal}
//             />

//             <CircularDetail
//               title="Flavour"
//               value={product.flavors.join(" · ")}
//               position="left-[-30%] top-1/2 -translate-y-1/2"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={flavorReveal}
//             />

//             <CircularDetail
//               title="Aroma"
//               value={product.aroma.join(" · ")}
//               position="right-[-30%] top-1/2 -translate-y-1/2"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={aromaReveal}
//             />

//             <CircularDetail
//               title="Caffeine"
//               value={product.caffeine}
//               position="left-[-15%] bottom-[-8%]"
//               linePosition="right-full top-1/2"
//               lineFrom="left"
//               reveal={caffeineReveal}
//             />

//             <CircularDetail
//               title="Type"
//               value={product.type}
//               position="right-[-15%] bottom-[-8%]"
//               linePosition="left-full top-1/2"
//               lineFrom="right"
//               reveal={typeReveal}
//             />
//           </div>

//           {/* mobile details  */}

//           <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[min(88vw,62vh)] w-[min(88vw,62vh)] -translate-x-1/2 -translate-y-1/2 lg:hidden ">
//             {/* Top */}
//             <CircularDetail
//               title="Origin"
//               value={product.origin}
//               position="left-[-2%] top-[5%]"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={originReveal}
//             />

//             <CircularDetail
//               title="Altitude"
//               value={`${product.altitude} m`}
//               position="right-[-2%] top-[5%]"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={altitudeReveal}
//             />

//             {/* Middle */}
//             <CircularDetail
//               title="Flavour"
//               value={product.flavors.join(" · ")}
//               position="left-[-8%] top-1/2 -translate-y-1/2"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={flavorReveal}
//             />

//             <CircularDetail
//               title="Aroma"
//               value={product.aroma.join(" · ")}
//               position="right-[-8%] top-1/2 -translate-y-1/2"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={aromaReveal}
//             />

//             {/* Lower */}
//             <CircularDetail
//               title="Process"
//               value={product.process}
//               position="left-[-2%] bottom-[20%]"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={processReveal}
//             />

//             <CircularDetail
//               title="Roast"
//               value={`${product.roastLevel}/5`}
//               position="right-[-2%] bottom-[20%]"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={roastReveal}
//             />

//             {/* Bottom */}
//             <CircularDetail
//               title="Caffeine"
//               value={product.caffeine}
//               position="left-[5%] bottom-[-2%]"
//               linePosition="left-full top-1/2"
//               lineFrom="left"
//               reveal={caffeineReveal}
//             />

//             <CircularDetail
//               title="Type"
//               value={product.type}
//               position="right-[5%] bottom-[-2%]"
//               linePosition="right-full top-1/2"
//               lineFrom="right"
//               reveal={typeReveal}
//             />
//           </div>
//         </div>
//       </section>

//       {/* PRODUCT DETAILS */}

//       <section className="bg-lightWhite px-6  sm:px-10  lg:px-16 lg:py-24">
//         <div className="mx-auto grid max-w-350 grid-cols-1 gap-20 lg:grid-cols-[1fr_0.72fr] lg:gap-28">
//           {/* STORY */}
//           <div>
//             <h2 className="header font-bold mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4rem)] uppercase leading-[0.82] tracking-[-0.045em] text-ink ">
//               {product.name}.
//             </h2>

//             <p className="mt-5 md:mt-10 max-w-2xl text-xs md:text-sm font-light leading-8 text-ink ">
//               {product.description}
//             </p>

//             <div className="mt-10">
//               <ProductInfoGrid product={product} />
//             </div>
//           </div>

//           {/* PURCHASE PANEL */}
//           <div className="">
//             <div className="relative overflow-hidden border border-ink/15 bg-ivory/35 px-5 sm:px-7">
//               <div className="absolute left-0 top-0 h-1 w-24 bg-red" />

//               <div className="mt-8 space-y-8">
//                 {sizeOptions.length > 1 && (
//                   <div className="">
//                     <span className="text-[10px] uppercase tracking-[0.4em] text-ink font-bold">
//                       Weight
//                     </span>

//                     <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
//                       {sizeOptions.map((option) => {
//                         const active = selectedSize.label === option.label;

//                         return (
//                           <button
//                             key={option.label}
//                             type="button"
//                             onClick={() => setSelectedSize(option)}
//                             className={`flex h-12 items-center justify-center border text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${active ? "border-ink bg-ink text-lightCream" : "border-ink/15 bg-lightWhite/50 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
//                           >
//                             {option.label}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* GRIND */}
//                 {product.grindOptions?.length > 0 && (
//                   <div>
//                     <div className="flex items-end justify-between">
//                       <div>
//                         <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-ink">
//                           Choose your grind
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mt-2 grid grid-cols-2 gap-2">
//                       {product.grindOptions.map((grind, index) => {
//                         const active = selectedGrind === grind;

//                         const config = GRIND_CONFIG[grind];

//                         const Icon = config?.icon || FaMugHot;
//                         const label = config?.label || grind;
//                         const subtitle = config?.subtitle || "Custom grind";

//                         return (
//                           <button
//                             key={grind}
//                             type="button"
//                             onClick={() => setSelectedGrind(grind)}
//                             aria-pressed={active}
//                             className={`group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden border px-4 py-5 text-center transition-all duration-500 ${
//                               active
//                                 ? "border-ink bg-ink text-lightCream"
//                                 : "border-ink/10 bg-lightWhite/40 text-ink hover:border-ink/25 hover:bg-ivory cursor-pointer"
//                             }`}
//                           >
//                             {/* Active indicator */}
//                             <span
//                               className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-all duration-500 ${
//                                 active
//                                   ? "bg-red"
//                                   : "bg-ink/10 group-hover:bg-red/40"
//                               }`}
//                             />

//                             {/* Icon */}
//                             <span
//                               className={`flex h-20 w-20 items-center justify-center transition-all duration-500 ${
//                                 active
//                                   ? "text-lightCream"
//                                   : "text-ink/45 group-hover:text-red"
//                               }`}
//                             >
//                               <Icon
//                                 size={55}
//                                 strokeWidth={1}
//                                 className="transition-transform duration-500 group-hover:scale-105"
//                               />
//                             </span>

//                             {/* Grind */}
//                             <span
//                               className={`mt-3 block text-[9px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 ${
//                                 active ? "text-lightCream" : "text-ink"
//                               }`}
//                             >
//                               {label}
//                             </span>

//                             {/* Active bottom line */}
//                             <span
//                               className={`absolute bottom-0 left-0 h-[2px] bg-red transition-all duration-500 ${
//                                 active ? "w-full" : "w-0 group-hover:w-1/3"
//                               }`}
//                             />
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* PURCHASE */}
//                 <div className="border-t border-ink/25">
//                   {/* Subscription toggle */}
//                   <div
//                     className={`mt-8 flex items-center justify-between border px-8 py-4 transition-all duration-500 rounded-full ${
//                       purchaseType === "subscribe"
//                         ? "border-emerald-700/25 bg-emerald-700/[0.04]"
//                         : "border-red/20 bg-red/[0.025]"
//                     }`}
//                   >
//                     <div>
//                       <AnimatePresence mode="wait">
//                         <motion.div
//                           key={purchaseType}
//                           initial={{ opacity: 0, y: 5 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -5 }}
//                           transition={{ duration: 0.25 }}
//                         >
//                           <span
//                             className={`block text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
//                               purchaseType === "subscribe"
//                                 ? "text-emerald-700"
//                                 : "text-red"
//                             }`}
//                           >
//                             {purchaseType === "subscribe"
//                               ? `Subscription saves ${Math.round(subscriptionDiscount * 100)}%`
//                               : `Subscribe & save ${Math.round(subscriptionDiscount * 100)}%`}
//                           </span>

//                           <span className="mt-2 block text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-ink/85">
//                             Delivered on your schedule · cancel anytime
//                           </span>
//                         </motion.div>
//                       </AnimatePresence>
//                     </div>

//                     <button
//                       type="button"
//                       role="switch"
//                       aria-checked={purchaseType === "subscribe"}
//                       aria-label="Toggle subscription"
//                       onClick={() =>
//                         setPurchaseType((current) =>
//                           current === "subscribe" ? "one-time" : "subscribe",
//                         )
//                       }
//                       className={`relative h-7 w-12 shrink-0 rounded-full border transition-all duration-500 cursor-pointer ${
//                         purchaseType === "subscribe"
//                           ? "border-emerald-700 bg-emerald-700"
//                           : "border-red bg-red"
//                       }`}
//                     >
//                       <motion.span
//                         animate={{
//                           x: purchaseType === "subscribe" ? 20 : 0,
//                         }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                         className="absolute left-[3px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-lightCream shadow-sm"
//                       />
//                     </button>
//                   </div>

//                   {/* Subscription frequency */}
//                   <AnimatePresence initial={false}>
//                     {purchaseType === "subscribe" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, y: -8 }}
//                         animate={{ opacity: 1, height: "auto", y: 0 }}
//                         exit={{ opacity: 0, height: 0, y: -8 }}
//                         transition={{
//                           duration: 0.45,
//                           ease: [0.22, 1, 0.36, 1],
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="pt-4">
//                           <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 px-4">
//                             {(
//                               product.frequencies || [
//                                 "Weekly",
//                                 "Every 2 Weeks",
//                                 "Every 3 Weeks",
//                                 "Every 4 Weeks",
//                               ]
//                             ).map((option) => {
//                               const active = frequency === option;

//                               return (
//                                 <button
//                                   key={option}
//                                   type="button"
//                                   onClick={() => setFrequency(option)}
//                                   aria-pressed={active}
//                                   className={`relative flex min-h-[38px] items-center justify-center border px-3 text-center transition-all duration-300 rounded-full   ${
//                                     active
//                                       ? "border-emerald-700 bg-emerald-700 text-lightCream"
//                                       : "border-ink/10 bg-lightWhite/40 text-ink/50 hover:border-emerald-700/30 hover:bg-emerald-700/[0.03] hover:text-emerald-700"
//                                   }`}
//                                 >
//                                   <span className="text-[10px] font-bold uppercase leading-[1.3] tracking-[0.16em]">
//                                     {option}
//                                   </span>
//                                 </button>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* QUANTITY + CTA */}
//                 <div className="pb-5 ">
//                   <div className="flex items-baseline justify-end gap-5">
//                     <div className="w-[112px] shrink-0">
//                       <div className="flex h-12 w-full items-center justify-between border border-ink/15 bg-lightWhite/70 rounded-full">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setQuantity((value) => Math.max(1, value - 1))
//                           }
//                           aria-label="Decrease quantity"
//                           className="flex h-10 w-10 shrink-0 items-center justify-center text-ink/55 cursor-pointer transition-colors duration-300 hover:text-ink"
//                         >
//                           <Minus size={11} strokeWidth={1.2} />
//                         </button>

//                         <span className="flex w-8 shrink-0 items-center justify-center text-[12px] font-medium tabular-nums text-ink">
//                           {quantity}
//                         </span>

//                         <button
//                           type="button"
//                           onClick={() => setQuantity((value) => value + 1)}
//                           aria-label="Increase quantity"
//                           className="flex h-10 w-10 shrink-0 items-center justify-center text-ink/55 cursor-pointer transition-colors duration-300 hover:text-ink"
//                         >
//                           <Plus size={11} strokeWidth={1.2} />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="text-right">
//                       <p className="header mt-1 text-3xl font-bold tracking-[-0.02em] text-ink">
//                         NPR{" "}
//                         {total.toLocaleString(undefined, {
//                           maximumFractionDigits: 0,
//                         })}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex justify-end">
//                     <div className="relative mt-5">
//                       {/* Ink block behind */}
//                       <span className="absolute inset-0 translate-x-1 translate-y-1 bg-ink rounded-full" />

//                       {/* Red button in front */}
//                       <button
//                         type="button"
//                         onClick={handleAddToCart}
//                         className="relative z-10 flex h-14 max-w-3xl cursor-pointer items-center bg-red px-6 text-lightCream transition-all duration-300 hover:bg-deepRed active:translate-x-1 active:translate-y-1 sm:px-7 rounded-full"
//                       >
//                         <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em]">
//                           Add to cart
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TASTING NOTES */}

//       <section className="relative overflow-hidden bg-hill px-6 py-5 text-lightCream sm:px-10 sm:py-8 lg:px-16 lg:py-8">
//         <div className="mx-auto max-w-[1400px]">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-3xl"
//           >
//             <h2 className="header mt-6 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.84] tracking-[-0.065em]">
//               What You'll
//               <br />
//               <span className="italic text-cream">Get.</span>
//             </h2>
//           </motion.div>

//           {/* TASTING NOTES */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{
//               duration: 1.3,
//               delay: 0.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-8 grid lg:mt-10 lg:grid-cols-3"
//           >
//             {/* AROMA */}
//             <div className="border-b border-lightCream/15 py-8 lg:border-b-0 lg:border-r lg:py-5 lg:pr-12">
//               <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
//                 Aroma
//               </span>

//               <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
//                 {(product.aroma || []).map((item, index) => (
//                   <span
//                     key={`${item}-${index}`}
//                     className="text-[12px] tracking-wide text-lightCream/70 sm:text-[13px]"
//                   >
//                     {item}
//                     {index < product.aroma.length - 1 && (
//                       <span className="ml-3 text-lightCream/25">·</span>
//                     )}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* FLAVOURS */}
//             <div className="border-b border-lightCream/15 py-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-5">
//               <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
//                 Flavours
//               </span>

//               <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
//                 {(product.flavors || []).map((item, index) => (
//                   <span
//                     key={`${item}-${index}`}
//                     className="text-[12px] tracking-wide text-lightCream/70 sm:text-[13px]"
//                   >
//                     {item}
//                     {index < product.flavors.length - 1 && (
//                       <span className="ml-3 text-lightCream/25">·</span>
//                     )}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* CHARACTER */}
//             <div className="py-8 lg:py-5 lg:pl-12">
//               <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
//                 Character
//               </span>

//               <p className="mt-6 max-w-sm text-[12px] leading-6 text-lightCream/70 sm:text-[13px] sm:leading-7">
//                 {product.shortDescription}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}

//       <section className="bg-lightWhite px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
//         <div className="mx-auto max-w-275">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-soil/60 sm:text-[9px]">
//               Good to know
//             </span>

//             <h2 className="header mt-5 max-w-xl text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.84] tracking-[-0.06em] text-ink">
//               Questions,
//               <br />
//               <span className="italic text-red">answered.</span>
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{
//               duration: 1.2,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-14 border-t border-ink/10 sm:mt-16"
//           >
//             {product.faqs?.map((faq, index) => (
//               <FaqItem
//                 key={faq.question}
//                 number={String(index + 1).padStart(2, "0")}
//                 question={faq.question}
//                 answer={faq.answer}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <StickyPurchaseBar
//         product={product}
//         visible={true}
//         sizeOptions={sizeOptions}
//         selectedSize={selectedSize}
//         onSelectSize={setSelectedSize}
//         purchaseType={purchaseType}
//         onChangePurchaseType={setPurchaseType}
//         frequency={frequency}
//         onChangeFrequency={handleFrequencyChange}
//         frequencies={DEFAULT_FREQUENCIES}
//         quantity={quantity}
//         onChangeQuantity={setQuantity}
//         onAddToCart={handleAddToCart}
//       />
//     </main>
//   );
// };

export default ProductDetails;
