// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const Footer = () => {
// //   const linkHover = { color: "#007bff", x: 3 }; // primary color

// //   return (
// //     <footer className="bg-darkGray text-gray-400 py-16">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center md:text-left">
// //           <motion.div initial={{ opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
// //             <h3 className="text-2xl font-semibold text-white mb-5">VisionVow</h3>
// //             <p className="text-sm leading-relaxed">
// //               Your partner in insightful market research and strategic business growth. We transform data into decisions.
// //             </p>
// //           </motion.div>
// //           <motion.div initial={{ opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
// //             <h4 className="text-xl font-semibold text-white mb-5">Quick Links</h4>
// //             <ul className="space-y-3">
// //               <li><motion.a href="#home" className="hover:text-primary transition-colors" whileHover={linkHover}>Home</motion.a></li>
// //               <li><motion.a href="#about" className="hover:text-primary transition-colors" whileHover={linkHover}>About</motion.a></li>
// //               <li><motion.a href="#dashboard" className="hover:text-primary transition-colors" whileHover={linkHover}>Dashboard</motion.a></li>
// //               <li><motion.a href="#contact" className="hover:text-primary transition-colors" whileHover={linkHover}>Contact Us</motion.a></li>
// //             </ul>
// //           </motion.div>
// //           <motion.div initial={{ opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3}}>
// //             <h4 className="text-xl font-semibold text-white mb-5">Contact Info</h4>
// //             <ul className="space-y-3 text-sm">
// //               <li><motion.a href="tel:+919953981772" className="hover:text-primary transition-colors" whileHover={linkHover}>+91 (995) 3981-772</motion.a></li>
// //               <li><motion.a href="mailto:vision@visionvowresearch.com" className="hover:text-primary transition-colors" whileHover={linkHover}>vision@visionvowresearch.com</motion.a></li>
// //               <li className="leading-relaxed">C-1/63 Sanjay enclave, Uttam nagar, New Delhi 110059</li>
// //             </ul>
// //           </motion.div>
// //         </div>
// //         <motion.div
// //             className="border-t border-gray-700 pt-10 text-center text-sm"
// //             initial={{ opacity:0 }}
// //             whileInView={{ opacity:1 }}
// //             viewport={{once:true}}
// //             transition={{delay:0.4, duration: 0.8}}
// //         >
// //           <p>© Copyright {new Date().getFullYear()} VisionVow. All rights reserved.</p>
// //           <p className="mt-1">Crafted with ❤️ and data.</p>
// //         </motion.div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const linkHover = { color: "hsl(var(--primary))", x: 3, transition: {duration: 0.15} };
//   const sectionVariant = {
//     hidden: { opacity:0, y:20},
//     visible: (i) => ({opacity:1, y:0, transition:{delay: i * 0.1, duration: 0.5}})
//   };

//   return (
//     <footer className="bg-foreground text-background/70 py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center md:text-left">
//           <motion.div custom={0} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
//             <h3 className="text-2xl font-semibold text-background mb-5">VisionVow</h3>
//             <p className="text-sm leading-relaxed">
//               Your partner in insightful market research and strategic business growth. We transform data into decisions.
//             </p>
//           </motion.div>
//           <motion.div custom={1} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
//             <h4 className="text-xl font-semibold text-background mb-5">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><motion.a href="#home" className="hover:text-primary" whileHover={linkHover}>Home</motion.a></li>
//               <li><motion.a href="#about" className="hover:text-primary" whileHover={linkHover}>About</motion.a></li>
//               <li><motion.a href="#dashboard" className="hover:text-primary" whileHover={linkHover}>Dashboard</motion.a></li>
//               <li><motion.a href="#contact" className="hover:text-primary" whileHover={linkHover}>Contact Us</motion.a></li>
//             </ul>
//           </motion.div>
//           <motion.div custom={2} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
//             <h4 className="text-xl font-semibold text-background mb-5">Contact Info</h4>
//             <ul className="space-y-3 text-sm">
//               <li><motion.a href="tel:+919953981772" className="hover:text-primary" whileHover={linkHover}>+91 (995) 3981-772</motion.a></li>
//               <li><motion.a href="mailto:vision@visionvowresearch.com" className="hover:text-primary" whileHover={linkHover}>vision@visionvowresearch.com</motion.a></li>
//               <li className="leading-relaxed">C-1/63 Sanjay enclave, Uttam nagar, New Delhi 110059</li>
//             </ul>
//           </motion.div>
//         </div>
//         <motion.div
//             className="border-t border-background/20 pt-10 text-center text-sm"
//             initial={{ opacity:0 }}
//             whileInView={{ opacity:1 }}
//             viewport={{once:true}}
//             transition={{delay:0.3, duration: 0.8}} // Delayed slightly more
//         >
//           <p>© Copyright {new Date().getFullYear()} VisionVow. All rights reserved.</p>
//           <p className="mt-1 opacity-80">Crafted with ❤️ and data.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const linkHover = { color: "hsl(var(--primary))", x: 3, transition: {duration: 0.15} };
  const sectionVariant = {
    hidden: { opacity:0, y:20},
    visible: (i) => ({opacity:1, y:0, transition:{delay: i * 0.1, duration: 0.5}})
  };

  return (
    <footer className="bg-foreground text-background/80 py-16 border-t-4 border-primary/50"> {/* Added border top accent */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <motion.div custom={0} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <h3 className="text-2xl font-semibold text-background mb-5">SolvexResearch</h3>
            <p className="text-sm leading-relaxed">
              Pioneering market intelligence solutions for informed business strategies and sustainable growth.
            </p>
          </motion.div>
          <motion.div custom={1} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <h4 className="text-xl font-semibold text-background mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><motion.a href="#home" className="hover:text-primary" whileHover={linkHover}>Home</motion.a></li>
              <li><motion.a href="#about" className="hover:text-primary" whileHover={linkHover}>Our Approach</motion.a></li>
              <li><motion.a href="#dashboard" className="hover:text-primary" whileHover={linkHover}>Insights</motion.a></li>
              <li><motion.a href="#contact" className="hover:text-primary" whileHover={linkHover}>Contact</motion.a></li>
            </ul>
          </motion.div>
          <motion.div custom={2} variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <h4 className="text-xl font-semibold text-background mb-5">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><motion.a href="tel:+18005550123" className="hover:text-primary" whileHover={linkHover}>+1 (800) 555-0123</motion.a></li>
              <li><motion.a href="mailto:contact@solvexresearch.com" className="hover:text-primary" whileHover={linkHover}>contact@solvexresearch.com</motion.a></li>
              <li className="leading-relaxed">123 Insight Avenue, Data City, DS 45678</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
            className="border-t border-background/20 pt-10 text-center text-sm"
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{once:true}}
            transition={{delay:0.3, duration: 0.8}}
        >
          <p>© Copyright {new Date().getFullYear()} SolvexResearch. All rights reserved.</p>
          <p className="mt-1 opacity-80">Illuminating paths with data.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;