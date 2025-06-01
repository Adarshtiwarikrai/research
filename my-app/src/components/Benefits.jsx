// // import React from 'react';

// // const benefitsData = [
// //   { icon: '💼', value: '$30', title: 'More profitable', description: 'Achieve more profits using marketing and expand your business.' },
// //   { icon: '👥', value: '10X', title: 'More customer', description: 'Expand your business by attracting more customers through impactful marketing strategies.' },
// //   { icon: '🔧', value: '20X', title: 'More effective', description: 'With many service options, you are free to choose according to your needs.' },
// //   { icon: '📚', value: '18X', title: 'More practical', description: 'Visionvowresearch provide special guidance to guide marketing services for each business unit.' },
// // ];

// // const Benefits = () => {
// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-3">BENEFITS</h2>
// //           <p className="text-lg text-secondary max-w-xl mx-auto">
// //             Build lasting relationships with our complete customer.
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {benefitsData.map((benefit, index) => (
// //             <div key={index} className="bg-lightGray p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
// //               <div className="text-5xl mb-4">{benefit.icon}</div>
// //               <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
// //               <h3 className="text-xl font-semibold text-darkGray mb-2">{benefit.title}</h3>
// //               <p className="text-sm text-secondary">{benefit.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Benefits;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { BriefcaseIcon, UserGroupIcon, WrenchScrewdriverIcon, BookOpenIcon } from '@heroicons/react/24/outline';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const benefitsData = [
//   { icon: BriefcaseIcon, value: '$30', title: 'More profitable', description: 'Achieve more profits using marketing and expand your business.' },
//   { icon: UserGroupIcon, value: '10X', title: 'More customer', description: 'Expand your business by attracting more customers through impactful marketing strategies.' },
//   { icon: WrenchScrewdriverIcon, value: '20X', title: 'More effective', description: 'With many service options, you are free to choose according to your needs.' },
//   { icon: BookOpenIcon, value: '18X', title: 'More practical', description: 'Visionvowresearch provide special guidance to guide marketing services for each business unit.' },
// ];

// const Benefits = () => {
//   const sectionTitleVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };
//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (i) => ({ // Pass index for staggered delay
//       y: 0,
//       opacity: 1,
//       transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           variants={sectionTitleVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">BENEFITS</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Build lasting relationships with our complete customer.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefitsData.map((benefit, index) => {
//             const Icon = benefit.icon;
//             return (
//               <motion.div
//                 key={index}
//                 custom={index} // For staggered delay
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
//                 className="h-full" // Ensure motion.div takes full height for card
//               >
//                 <Card className="text-center h-full flex flex-col bg-card hover:bg-primary/5 transition-colors shadow-lg hover:shadow-xl">
//                   <CardHeader className="items-center pt-8"> {/* Centering icon */}
//                     <Icon className="h-16 w-16 text-primary mb-4" />
//                     <CardTitle className="text-3xl font-bold text-primary">{benefit.value}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex-grow pb-8">
//                     <h3 className="text-2xl font-semibold text-card-foreground mb-3">{benefit.title}</h3>
//                     <p className="text-base text-muted-foreground">{benefit.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon, UsersIcon, WrenchScrewdriverIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefitsData = [
  { icon: ArrowTrendingUpIcon, value: '30%+', title: 'Higher ROI', description: 'Maximize returns with data-driven strategies and targeted insights.' },
  { icon: UsersIcon, value: '10X', title: 'Deeper Engagement', description: 'Connect with your audience effectively through precise market understanding.' },
  { icon: WrenchScrewdriverIcon, value: '20X', title: 'Optimized Efficiency', description: 'Streamline operations with our tailored research solutions and tools.' },
  { icon: AcademicCapIcon, value: 'Expert', title: 'Actionable Wisdom', description: 'SolvexResearch delivers expert guidance for every business unit.' },
];

const Benefits = () => {
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">CORE ADVANTAGES</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Forge lasting connections and achieve superior results with our comprehensive research.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                className="h-full"
              >
                <Card className="text-center h-full flex flex-col bg-card hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader className="items-center pt-8">
                    <Icon className="h-16 w-16 text-primary mb-4" />
                    <CardTitle className="text-3xl font-bold text-primary">{benefit.value}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-8">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;