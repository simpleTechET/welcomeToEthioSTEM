import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CountEggs4 from "./pages/3CountEggs4";
import CountArrays5 from "./pages/3CountArrays5";
import ComposeSix6 from "./pages/3ComposeSix6";
import ComposeSeven7 from "./pages/3ComposeSeven7";
import CircleCount8 from "./pages/3CircleCount8";
import ArrangeCount9 from "./pages/3ArrangeCount9";
import Tally10 from "./pages/3Tally10";
import CountOut11 from "./pages/3CountOut11";
import LinearCount13 from "./pages/3LinearCount13";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/3-count-eggs-4" element={<CountEggs4 />} />
          <Route path="/3-count-arrays-5" element={<CountArrays5 />} />
          <Route path="/3-compose-six-6" element={<ComposeSix6 />} />
          <Route path="/3-compose-seven-7" element={<ComposeSeven7 />} />
          <Route path="/3-circle-count-8" element={<CircleCount8 />} />
          <Route path="/3-arrange-count-9" element={<ArrangeCount9 />} />
          <Route path="/3-tally-10" element={<Tally10 />} />
          <Route path="/3-count-out-11" element={<CountOut11 />} />
          <Route path="/3-linear-count-13" element={<LinearCount13 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
