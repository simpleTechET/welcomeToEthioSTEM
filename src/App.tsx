import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Promo from "./pages/Promo";
import CountEggs4 from "./pages/3CountEggs4";
import CountArrays5 from "./pages/3CountArrays5";
import ComposeSix6 from "./pages/3ComposeSix6";
import ComposeSeven7 from "./pages/3ComposeSeven7";
import CircleCount8 from "./pages/3CircleCount8";
import ArrangeCount9 from "./pages/3ArrangeCount9";
import Tally10 from "./pages/3Tally10";
import CountOut11 from "./pages/3CountOut11";
import Introduce8Lesson12 from "./pages/3Introduce8Lesson12";
import LinearCount13 from "./pages/3LinearCount13";
import FingerCount14 from "./pages/3FingerCount14";
import ArrayCount15 from "./pages/3ArrayCount15";
import Compose8Lesson16 from "./pages/3Compose8Lesson16";
import CircularCount17 from "./pages/3CircularCount17";
import ArrangeCount18 from "./pages/3ArrangeCount18";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/learning" element={<Index />} />
          <Route path="/3-count-eggs-4" element={<CountEggs4 />} />
          <Route path="/3-count-arrays-5" element={<CountArrays5 />} />
          <Route path="/3-compose-six-6" element={<ComposeSix6 />} />
          <Route path="/3-compose-seven-7" element={<ComposeSeven7 />} />
          <Route path="/3-circle-count-8" element={<CircleCount8 />} />
          <Route path="/3-arrange-count-9" element={<ArrangeCount9 />} />
          <Route path="/3-tally-10" element={<Tally10 />} />
          <Route path="/3-count-out-11" element={<CountOut11 />} />
          <Route path="/3-introduce-8-12" element={<Introduce8Lesson12 />} />
          <Route path="/3-linear-count-13" element={<LinearCount13 />} />
          <Route path="/3-finger-count-14" element={<FingerCount14 />} />
          <Route path="/3-array-count-15" element={<ArrayCount15 />} />
          <Route path="/3-compose-8-16" element={<Compose8Lesson16 />} />
          <Route path="/3-circular-count-17" element={<CircularCount17 />} />
          <Route path="/3-arrange-count-18" element={<ArrangeCount18 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
