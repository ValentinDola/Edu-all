import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navigation from "./navigation";

const NavigationIndex = async () => {
  return <Navigation />;
};

export default NavigationIndex;
