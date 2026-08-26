import
{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Landing from "./pages/home/HeroLanding";
import MainLayout from "./layouts/MainLayout";
import Support from "./pages/contact/Support";
import About from "./pages/about/About";

function App()
{
  return (
    <BrowserRouter>
      <Routes>

        {/* =================================
            MAIN WEBSITE
        ================================= */}

        <Route element={<MainLayout />}>

          {/* Home */}
          <Route
            path="/"
            element={<Landing />}
          />

          {/* Shop */}
          <Route
            path="/shop"
            element={
              <div className="p-10">
                Shop
              </div>
            }
          />

          <Route
            path="/shop/coffee"
            element={
              <div className="p-10">
                Coffee
              </div>
            }
          />

          <Route
            path="/shop/tea"
            element={
              <div className="p-10">
                Tea
              </div>
            }
          />

          {/* Explore */}
          <Route
            path="/explore"
            element={
              <div className="p-10">
                Explore
              </div>
            }
          />

          <Route
            path="/explore/origins"
            element={
              <div className="p-10">
                Origins
              </div>
            }
          />

          <Route
            path="/explore/farmers"
            element={
              <div className="p-10">
                Farmers
              </div>
            }
          />

          <Route
            path="/explore/processes"
            element={
              <div className="p-10">
                Our Processes
              </div>
            }
          />

          <Route
            path="/explore/why-laali-hills"
            element={
              <div className="p-10">
                Why Laali Hills
              </div>
            }
          />

          <Route
            path="/explore/nepal-coffee"
            element={
              <div className="p-10">
                Nepal Coffee
              </div>
            }
          />

          {/* Stories */}
          <Route
            path="/stories"
            element={
              <div className="p-10">
                Stories
              </div>
            }
          />

          <Route
            path="/stories/farm"
            element={
              <div className="p-10">
                Farm Stories
              </div>
            }
          />

          <Route
            path="/stories/coffee"
            element={
              <div className="p-10">
                Coffee Blog
              </div>
            }
          />

          <Route
            path="/stories/tea"
            element={
              <div className="p-10">
                Tea Blog
              </div>
            }
          />

          <Route
            path="/stories/culture"
            element={
              <div className="p-10">
                Culture
              </div>
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Support */}
          <Route
            path="/support"
            element={<Support />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;