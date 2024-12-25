import "./App.css";
import { Footer, Navbar } from "./components/Molcules";
import {
  Contact,
  Home,
  AboutUs,
  Blogs,
  Testimonials,
  HiringDetails,
  Projects,
  FindJob,
  PrivacyPolicy,
} from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-sans h-auto body max-w-[1800px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/:events" element={<HiringDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      {/* <PaginatedItems itemsPerPage={12} /> */}
      <Footer />
    </div>
  );
}

export default App;

// import "./App.css";
// import { Footer, Navbar } from "./components/Molcules";
// import {
//   Contact,
//   Home,
//   AboutUs,
//   Blogs,
//   Testimonials,
//   HiringDetails,
//   Projects,
//   FindJob,
// } from "./pages";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="font-sans  h-auto body border max-w-[1800px] mx-auto">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/:events" element={<HiringDetails />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/findjob" element={<FindJob />} />
//       </Routes>
//       {/* <PaginatedItems itemsPerPage={12} /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
