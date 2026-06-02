import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Memphis from "./pages/Memphis";
import Birmingham from "./pages/Birmingham";
import Selma from "./pages/Selma";
import Montgomery from "./pages/Montgomery";
import Tuskegee from "./pages/Tuskegee";
import Atlanta from "./pages/Atlanta";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/tours"} component={Tours} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/memphis"} component={Memphis} />
      <Route path={"/birmingham"} component={Birmingham} />
      <Route path={"/selma"} component={Selma} />
      <Route path={"/montgomery"} component={Montgomery} />
      <Route path={"/tuskegee"} component={Tuskegee} />
      <Route path={"/atlanta"} component={Atlanta} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
