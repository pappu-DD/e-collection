import type { Metadata } from "next";
import Dashboard from "./event-dashboard/page";
import Footer from "./component/footer";
import LocationTrack from "./component/locationTrack";
import Team from "./component/team";

export const metadata: Metadata = {
  title: "E-collection",
  description: "Make a great event and controls",
};
export default function Home() {
  return (
    <div>
      <Dashboard />
      <LocationTrack />
      <Team />
      <Footer />
    </div>
  );
}
