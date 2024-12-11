import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Suspense } from "react";
import CirculerLoader from "../components/loader";

const RootLayout = () => {
    return ( 
        <div>
           <Navbar />
           <Suspense fallback={<CirculerLoader />}>
               <Outlet />
            </Suspense>
        </div>
     );
}
 
export default RootLayout;