import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-scroll sm:overflow-auto">
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
