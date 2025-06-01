// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const Hero = () => {
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
// //   };

// //   const buttonVariants = {
// //     hover: { scale: 1.05, boxShadow: "0px 0px 8px rgb(0,123,255)" }, // primary color glow
// //     tap: { scale: 0.95 },
// //   };

// //   return (
// //     <motion.header
// //       id="home"
// //       className="bg-gradient-to-br from-lightGray via-white to-blue-100 py-24 md:py-40 min-h-[80vh] flex items-center" // Gradient bg, increased padding
// //       variants={containerVariants}
// //       initial="hidden"
// //       animate="visible"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <motion.h1
// //           className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-shadow-sm"
// //           variants={itemVariants}
// //         >
// //           🔥 BEST MARKETING AGENCY 2024 IN INDIA
// //         </motion.h1>
// //         <motion.h2
// //           className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-darkGray mb-6 text-shadow"
// //           variants={itemVariants}
// //         >
// //           Welcome to Visionvowresearch
// //         </motion.h2>
// //         <motion.p
// //           className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-10" // Increased max-width
// //           variants={itemVariants}
// //         >
// //           Marketing is more powerful, effective and efficient for your business growth with Marketplus.
// //         </motion.p>
// //         <motion.div className="space-x-2 sm:space-x-4" variants={itemVariants}>
// //           <motion.a
// //             href="#about"
// //             className="bg-primary text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-lg shadow-md hover:bg-brand-dark transition-colors duration-300"
// //             variants={buttonVariants}
// //             whileHover="hover"
// //             whileTap="tap"
// //           >
// //             About Us
// //           </motion.a>
// //           <motion.a
// //             href="#dashboard"
// //             className="bg-secondary text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
// //             variants={buttonVariants}
// //             whileHover="hover"
// //             whileTap="tap"
// //           >
// //             Dashboard
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </motion.header>
// //   );
// // };

// // export default Hero;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button'; // Shadcn Button

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   const buttonHover = { scale: 1.05, transition: {type: 'spring', stiffness: 300} };

//   return (
//     <motion.header
//       id="home"
//       className="bg-gradient-to-br from-background via-card to-primary/10 py-24 md:py-40 min-h-[80vh] flex items-center"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight"
//           variants={itemVariants}
//         >
//           🔥 BEST MARKETING AGENCY 2024 IN INDIA
//         </motion.h1>
//         <motion.h2
//           className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6"
//           variants={itemVariants}
//         >
//           Welcome to Visionvowresearch
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
//           variants={itemVariants}
//         >
//           Marketing is more powerful, effective and efficient for your business growth with Marketplus.
//         </motion.p>
//         <motion.div className="space-x-2 sm:space-x-4" variants={itemVariants}>
//           <motion.div whileHover={buttonHover} className="inline-block">
//             <Button asChild size="lg" className="py-6 px-10 text-lg shadow-md">
//               <a href="#about">About Us</a>
//             </Button>
//           </motion.div>
//           <motion.div whileHover={buttonHover} className="inline-block">
//             <Button asChild variant="secondary" size="lg" className="py-6 px-10 text-lg shadow-md">
//               <a href="#dashboard">Dashboard</a>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonHover = { scale: 1.05, transition: {type: 'spring', stiffness: 300} };

  return (
    <motion.header
      id="home"
      className="bg-gradient-to-br from-background via-primary/10 to-secondary/5 py-24 md:py-40 min-h-[90vh] flex items-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle Abstract Background Shapes using CSS Gradients & Opacity */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -bottom-1/4 -left-1/4 w-3/5 h-3/5 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -top-1/4 -right-1/4 w-3/5 h-3/5 bg-gradient-radial from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight"
          variants={itemVariants}
        >
          🚀 LEADING INSIGHTS AGENCY 2024
        </motion.h1>
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6"
          variants={itemVariants}
        >
          Welcome to SolvexResearch
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          Unlock powerful market intelligence and drive your business forward with SolvexData.
        </motion.p>
        <motion.div className="space-x-2 sm:space-x-4" variants={itemVariants}>
          <motion.div whileHover={buttonHover} className="inline-block">
            <Button asChild size="lg" className="py-6 px-10 text-lg shadow-lg hover:shadow-primary/30 transition-shadow">
              <a href="#about">Our Approach</a>
            </Button>
          </motion.div>
          <motion.div whileHover={buttonHover} className="inline-block">
            <Button asChild variant="secondary" size="lg" className="py-6 px-10 text-lg shadow-lg hover:shadow-secondary/30 transition-shadow">
              <a href="#dashboard">View Insights</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Hero;