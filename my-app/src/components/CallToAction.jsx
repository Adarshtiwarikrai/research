// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const CallToAction = () => {
// //   return (
// //     <section className="py-24 bg-gradient-to-r from-primary to-blue-600 text-white"> {/* Gradient bg */}
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <motion.h2
// //           className="text-5xl font-bold mb-6 text-shadow"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           VisionVow
// //         </motion.h2>
// //         <motion.p
// //           className="text-xl md:text-2xl mb-3 max-w-3xl mx-auto" // Increased max-width
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //         >
// //           At VisionVow, we strive to dig out accurate data for our clients.
// //         </motion.p>
// //         <motion.p
// //           className="text-xl md:text-2xl max-w-3xl mx-auto"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //         >
// //           Without reliable, actionable information, a business is just a bunch of people
// //           shooting new ideas on a blank wall.
// //         </motion.p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CallToAction;
// import React from 'react';
// import { motion } from 'framer-motion';

// const CallToAction = () => {
//   const sharedAnimationProps = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.5 },
//   };

//   return (
//     <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.h2
//           {...sharedAnimationProps}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold mb-6"
//         >
//           VisionVow
//         </motion.h2>
//         <motion.p
//           {...sharedAnimationProps}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-xl md:text-2xl mb-3 max-w-3xl mx-auto opacity-90"
//         >
//           At VisionVow, we strive to dig out accurate data for our clients.
//         </motion.p>
//         <motion.p
//           {...sharedAnimationProps}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
//         >
//           Without reliable, actionable information, a business is just a bunch of people
//           shooting new ideas on a blank wall.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const sharedAnimationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
  };

  return (
    <section className="py-24 bg-gradient-to-tr from-primary via-primary/80 to-secondary text-primary-foreground relative overflow-hidden">
       {/* Subtle pattern with CSS conic gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-conic-gradient(from 0deg, hsl(var(--primary-foreground)/0.2) 0deg 10deg, transparent 10deg 20deg),
            repeating-conic-gradient(from 90deg, hsl(var(--primary-foreground)/0.1) 0deg 5deg, transparent 5deg 15deg)
          `,
          backgroundSize: '100px 100px, 50px 50px',
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          {...sharedAnimationProps}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 drop-shadow-md"
        >
          SolvexResearch
        </motion.h2>
        <motion.p
          {...sharedAnimationProps}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-3 max-w-3xl mx-auto opacity-90"
        >
          At SolvexResearch, we are dedicated to unearthing precise, impactful data for our partners.
        </motion.p>
        <motion.p
          {...sharedAnimationProps}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
        >
          Without clear, actionable intelligence, strategic decisions become guesswork. We provide the clarity.
        </motion.p>
      </div>
    </section>
  );
};

export default CallToAction;