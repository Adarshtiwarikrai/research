// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For mobile menu

// // const navLinks = [
// //   { href: "#home", label: "Home" },
// //   { href: "#about", label: "About" },
// //   { href: "#dashboard", label: "Dashboard" },
// //   { href: "#contact", label: "Contact Us" },
// // ];

// // const Navbar = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const navVariants = {
// //     hidden: { y: -100, opacity: 0 },
// //     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// //   };

// //   const linkVariants = {
// //     hover: { scale: 1.1, color: "#007bff", transition: { duration: 0.2 } }, // #007bff is primary color
// //     tap: { scale: 0.95 },
// //   };

// //   return (
// //     <motion.nav
// //       className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
// //       variants={navVariants}
// //       initial="hidden"
// //       animate="visible"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20"> {/* Increased height slightly */}
// //           <div className="flex-shrink-0">
// //             <a href="/" className="text-3xl font-bold text-primary hover:text-brand-dark transition-colors">
// //               VisionVow
// //             </a>
// //           </div>
// //           <div className="hidden md:block">
// //             <div className="ml-10 flex items-baseline space-x-6">
// //               {navLinks.map((link) => (
// //                 <motion.a
// //                   key={link.label}
// //                   href={link.href}
// //                   className="text-gray-700 px-3 py-2 rounded-md text-base font-medium" // Increased font size
// //                   variants={linkVariants}
// //                   whileHover="hover"
// //                   whileTap="tap"
// //                 >
// //                   {link.label}
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="-mr-2 flex md:hidden">
// //             <button
// //               type="button"
// //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //               className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
// //               aria-controls="mobile-menu"
// //               aria-expanded={mobileMenuOpen}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {mobileMenuOpen ? (
// //                 <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
// //               ) : (
// //                 <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       <motion.div
// //         className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}
// //         initial={{ height: 0, opacity: 0 }}
// //         animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
// //         transition={{ duration: 0.3, ease: "easeOut" }}
// //       >
// //         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //           {navLinks.map((link) => (
// //             <a
// //               key={link.label}
// //               href={link.href}
// //               onClick={() => setMobileMenuOpen(false)} // Close menu on click
// //               className="text-gray-700 hover:bg-gray-50 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
// //             >
// //               {link.label}
// //             </a>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Button } from '@/components/ui/button'; // Shadcn Button
// import { cn } from '@/lib/utils';

// const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#dashboard", label: "Dashboard" },
//   { href: "#contact", label: "Contact Us" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const linkVariants = {
//     hover: { scale: 1.05, color: "hsl(var(--primary))", transition: { duration: 0.2 } },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <motion.nav
//       className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50"
//       variants={navVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex-shrink-0">
//             <a href="/" className="text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
//               VisionVow
//             </a>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-6">
//               {navLinks.map((link) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   className="text-foreground/80 px-3 py-2 rounded-md text-base font-medium"
//                   variants={linkVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-controls="mobile-menu"
//               aria-expanded={mobileMenuOpen}
//               className="text-muted-foreground hover:text-primary"
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       <motion.div
//         className={cn("md:hidden border-t", mobileMenuOpen ? 'block' : 'hidden')}
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-popover"> {/* Added bg-popover for mobile menu */}
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-popover-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#dashboard", label: "Insights" },
  { href: "#contact", label: "Contact Us" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "hsl(var(--primary))", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
              SolvexResearch
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 px-3 py-2 rounded-md text-base font-medium"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className={cn("md:hidden border-t", mobileMenuOpen ? 'block' : 'hidden')}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-popover">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-popover-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;