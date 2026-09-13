import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/home/HeroLanding";
import MainLayout from "./layouts/MainLayout";
import Support from "./pages/contact/Support";
import About from "./pages/about/About";
import Coffee from "./pages/shop/Coffee";
import Tea from "./pages/shop/Tea";
import Shop from "./pages/shop/Shop";
import ScrollManager from "./components/ScrollManager";
import ProductDetails from "./pages/shop/ProductDetails";
import { coffeeProducts, teaProducts } from "./data/products";
import CartDrawer from "./layouts/CartDrawer";
import FloatingCartButton from "./layouts/FloatingCartButton";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./components/NotFound";
import CanonicalUrl from "./components/CanonicalUrl";
import HelpMeChoose from "./components/HelpMeChoose";
import PageViewTracker from "./components/PageViewTracker";
import SmoothScroll from "./components/SmoothScroll";
import Trending from "./pages/trending/Trending";
import TopTrending from "./pages/trending/TopTrending";
import NewestTrending from "./pages/trending/NewestTrending";
import HotTrending from "./pages/trending/HotTrending";

function App() {
  return (
    <>
      <BrowserRouter>
        <CanonicalUrl />
        <PageViewTracker />
        <ScrollManager />
        <SmoothScroll />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-lightCream text-[9px] uppercase tracking-[0.3em] text-ink/50">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route element={<MainLayout />}>
              {/* Home */}
              <Route path="/" element={<Landing />} />

              {/* Shop */}
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/shop/coffee/:slug"
                element={<ProductDetails products={coffeeProducts} />}
              />
              <Route
                path="/shop/tea/:slug"
                element={<ProductDetails products={teaProducts} />}
              />
              <Route path="/shop/help-me-choose" element={<HelpMeChoose />} />
              <Route path="/shop/coffee" element={<Coffee />} />
              <Route path="/shop/tea" element={<Tea />} />

              {/* Trending  */}

              <Route path="/trending" element={<Trending />} />
              <Route path="/trending/top" element={<TopTrending />} />
              <Route path="/trending/newest" element={<NewestTrending />} />
              <Route path="/trending/hot" element={<HotTrending />} />

              {/* Explore */}
              <Route
                path="/explore"
                element={<div className="p-10">Explore</div>}
              />
              <Route
                path="/explore/origins"
                element={<div className="p-10">Origins</div>}
              />
              <Route
                path="/explore/farmers"
                element={<div className="p-10">Farmers</div>}
              />
              <Route
                path="/explore/processes"
                element={<div className="p-10">Our Processes</div>}
              />
              <Route
                path="/explore/why-laali-hills"
                element={<div className="p-10">Why Laali Hills</div>}
              />
              <Route
                path="/explore/nepal-coffee"
                element={<div className="p-10">Nepal Coffee</div>}
              />

              {/* Stories */}
              <Route
                path="/stories"
                element={<div className="p-10">Stories</div>}
              />
              <Route
                path="/stories/farm"
                element={<div className="p-10">Farm Stories</div>}
              />
              <Route
                path="/stories/coffee"
                element={<div className="p-10">Coffee Blog</div>}
              />
              <Route
                path="/stories/tea"
                element={<div className="p-10">Tea Blog</div>}
              />
              <Route
                path="/stories/culture"
                element={<div className="p-10">Culture</div>}
              />

              {/* About */}
              <Route path="/about" element={<About />} />
              <Route path="/aboutLaaliHills" element={<About />} />

              {/* Support */}
              <Route path="/support" element={<Support />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>

        <FloatingCartButton />
        <CartDrawer />
      </BrowserRouter>
    </>
  );
}

export default App;
