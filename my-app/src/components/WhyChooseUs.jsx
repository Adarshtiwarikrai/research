// // import React from 'react';
// // import { motion } from 'framer-motion';

// // // You can also use Framer Motion's useMotionValue and useTransform for count-up,
// // // but for simplicity, we'll just animate opacity and scale here.
// // // For actual count-up, you might need a small helper or a library like react-countup.

// // const statsData = [
// //   { value: '100+', label: 'CLIENTS' },
// //   { value: '35+', label: 'COUNTRIES' },
// //   { value: '8K+', label: 'PROJECTS' },
// //   { value: '3K', label: 'B2B PROJECTS' },
// //   { value: '600K', label: 'SURVEYS COMPLETED' },
// //   { value: '8M', label: 'GLOBAL RESPONDENTS' },
// // ];

// // const WhyChooseUs = () => {
// //   const statItemVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
// //   };

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-blue-50 to-lightGray"> {/* Subtle gradient */}
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           className="text-center mb-16"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-darkGray mb-4">Why Choose Us</h2>
// //           <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed"> {/* leading-relaxed */}
// //             Whether your business is just a startup or has already hit the expansion phase,
// //             Visionvowresearch proprietary panel of more than half a million respondents
// //             can prove vital in understanding your target markets, make better business
// //             decisions, and maintain your company's competitive edge.
// //           </p>
// //         </motion.div>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
// //           {statsData.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               className="p-6 bg-white rounded-lg shadow-lg" // Card-like appearance
// //               variants={statItemVariants}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true, amount: 0.2 }}
// //               transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
// //             >
// //               <div className="text-5xl font-extrabold text-primary mb-2">{stat.value}</div> {/* Bolder value */}
// //               <div className="text-sm text-secondary uppercase tracking-wider font-medium">{stat.label}</div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUs;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from "@/components/ui/card";

// const statsData = [
//   { value: '100+', label: 'CLIENTS' },
//   { value: '35+', label: 'COUNTRIES' },
//   { value: '8K+', label: 'PROJECTS' },
//   { value: '3K', label: 'B2B PROJECTS' },
//   { value: '600K', label: 'SURVEYS COMPLETED' },
//   { value: '8M', label: 'GLOBAL RESPONDENTS' },
// ];

// const WhyChooseUs = () => {
//   const sectionTitleVariants = { /* same as Benefits */ };
//   const statItemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-20 bg-muted/30"> {/* Use muted for a slightly different background */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }} // Simplified for brevity, can use variants
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Whether your business is just a startup or has already hit the expansion phase,
//             Visionvowresearch proprietary panel can prove vital in understanding your target markets, making better business
//             decisions, and maintaining your company's competitive edge.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 text-center"> {/* Slightly adjusted grid */}
//           {statsData.map((stat, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={statItemVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <Card className="p-6 bg-card shadow-lg h-full hover:border-primary transition-all duration-300">
//                 <CardContent className="flex flex-col items-center justify-center p-0">
//                   <div className="text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
//                   <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  { value: '120+', label: 'PARTNERS' },
  { value: '40+', label: 'MARKETS' },
  { value: '7K+', label: 'STUDIES' },
  { value: '2.5K', label: 'B2B INSIGHTS' },
  { value: '500K', label: 'PANELISTS REACHED' },
  { value: '10M', label: 'GLOBAL DATA POINTS' },
];

const WhyChooseUs = () => {
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle Decorative Lines using pseudo-elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full border-r border-border/30 opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full border-l border-border/30 opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-full h-1/3 border-t border-b border-border/20 opacity-30 -translate-y-1/2"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why SolvexResearch?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're scaling a startup or expanding an enterprise, SolvexResearch's extensive panel
            and expert analysis provide the clarity needed to navigate complex markets, make superior decisions,
            and sharpen your competitive edge.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-6 bg-card shadow-xl h-full border-2 border-transparent hover:border-primary/70 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <div className="text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;