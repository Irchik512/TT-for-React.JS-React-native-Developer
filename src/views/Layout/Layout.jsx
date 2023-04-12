import Navigation from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
return(
  <>
    <header>
    <Navigation/>
    </header>
    <main>
      <Suspense fallback={"almost done..."}>
        <Outlet/>
      </Suspense>
    </main>
    <footer>
      <p>
        Develop by Irchik!
      </p>
    </footer>
  </>
)
};
