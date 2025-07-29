// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import BusinessDashboard from "./pages/BusinessDashboard";
// import CreatorDashboard from "./pages/CreatorDashboard";
// import ClipperPage from "./pages/ClipperPage";
// import NotFound from "./pages/NotFound";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <div className="min-h-screen flex flex-col">
//           <Navbar />
//           <main className="flex-1">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/business-dashboard" element={<BusinessDashboard />} />
//               <Route path="/creator-dashboard" element={<CreatorDashboard />} />
//               <Route path="/clipper" element={<ClipperPage />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import BusinessDashboard from "./pages/BusinessDashboard";
// import CreatorDashboard from "./pages/CreatorDashboard";
// import ClipperPage from "./pages/ClipperPage";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         {/* GitHub Pages ke liye basename set kiya */}
//         <BrowserRouter basename="/creator-connect-demo">
//           <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-1">
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route
//                   path="/business-dashboard"
//                   element={<BusinessDashboard />}
//                 />
//                 <Route
//                   path="/creator-dashboard"
//                   element={<CreatorDashboard />}
//                 />
//                 <Route path="/clipper" element={<ClipperPage />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HashRouter,   // <<-- yaha import karo
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BusinessDashboard from "./pages/BusinessDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import ClipperPage from "./pages/ClipperPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* <<-- BrowserRouter ki jagah HashRouter */}
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/business-dashboard" element={<BusinessDashboard />} />
              <Route path="/creator-dashboard" element={<CreatorDashboard />} />
              <Route path="/clipper" element={<ClipperPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



