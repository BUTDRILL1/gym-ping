import Header from "./components/Header";
import { Outlet, Navigate } from "react-router-dom";
import {useUser} from "@clerk/clerk-react";
import Footer from "./components/Footer";

export default function App() {

  const {user, isLoaded, isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded){
    return <Navigate to="/auth/sign-in" />
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}