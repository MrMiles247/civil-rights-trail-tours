import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import RTJGolfTrailTour from "./pages/RTJGolfTrailTour";
import CivilRightsHistoryTour from "./pages/CivilRightsHistoryTour";
import WashingtonBlackHeritageTour from "./pages/WashingtonBlackHeritageTour";
import Montgomery from "./pages/Montgomery";
import Tuskegee from "./pages/Tuskegee";
import Atlanta from "./pages/Atlanta";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/tours"} component={Tours} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/admin"} component={Admin} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/rtj-golf-trail-tour"} component={RTJGolfTrailTour} />
      <Route path={"/memphis"} component={RTJGolfTrailTour} />
      <Route
        path={"/civil-rights-history-tour"}
        component={CivilRightsHistoryTour}
      />
      <Route path={"/birmingham"} component={CivilRightsHistoryTour} />
      <Route
        path={"/washington-dc-black-heritage-tour"}
        component={WashingtonBlackHeritageTour}
      />
      <Route path={"/selma"} component={WashingtonBlackHeritageTour} />
      <Route path={"/montgomery"} component={Montgomery} />
      <Route path={"/tuskegee"} component={Tuskegee} />
      <Route path={"/atlanta"} component={Atlanta} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
