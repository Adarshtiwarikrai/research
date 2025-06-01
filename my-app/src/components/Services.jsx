// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { DocumentChartBarIcon, CircleStackIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

// // const servicesData = [
// //   { icon: DocumentChartBarIcon, title: 'Research Design', description: 'Most problems in the field of marketing research are complex in nature and require primary data collection. In such cases, a questionnaire becomes a crucial tool for collecting primary data....' },
// //   { icon: CircleStackIcon, title: 'Data Collection', description: 'Visionvowresearch conduct a range of Quantitative Research, Qualitative, CATI, CAPI, CAWI, F2F, PAPI, and Mystery Shopping services, through which an informed decision can be taken and obtain reliable statistical results....' },
// //   { icon: CodeBracketSquareIcon, title: 'Data Coding & Charting', description: 'Open Ends Coding or Verbatim Coding is a systematic process of transforming textual or open-ended comments and responses to numeric codes for intelligent data processing & understanding the importance of coding....' },
// // ];

// // const Services = () => {
// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
// //     }),
// //   };

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           className="text-center mb-16"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-darkGray mb-4">Our Services</h2>
// //           <p className="text-xl text-secondary max-w-3xl mx-auto">
// //             VisionVowResearch service specialists are adept in gathering hard-to-find
// //             information from primary as well as secondary sources, such as social media sites,
// //             business directories, forums, online portals, websites, etc.
// //           </p>
// //         </motion.div>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap */}
// //           {servicesData.map((service, index) => {
// //             const Icon = service.icon;
// //             return (
// //             <motion.div
// //               key={index}
// //               className="bg-lightGray p-8 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300" // More padding, rounded-xl
// //               custom={index}
// //               variants={cardVariants}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true, amount: 0.2 }}
// //             >
// //               <Icon className="h-12 w-12 text-primary mb-6 self-start"/>
// //               <h3 className="text-2xl font-semibold text-darkGray mb-4">{service.title}</h3>
// //               <p className="text-secondary text-base flex-grow mb-6">{service.description}</p>
// //               <motion.a
// //                 href="#"
// //                 className="text-primary font-semibold self-start group"
// //                 whileHover={{ x: 5 }} // Move right on hover
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 Learn More <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
// //               </motion.a>
// //             </motion.div>
// //           )})}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { DocumentChartBarIcon, CircleStackIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
// import { Button } from '@/components/ui/button';

// const servicesData = [
//   { icon: DocumentChartBarIcon, title: 'Research Design', description: 'Most problems in marketing research are complex and require primary data collection. A questionnaire becomes a crucial tool....' },
//   { icon: CircleStackIcon, title: 'Data Collection', description: 'We conduct Quantitative, Qualitative, CATI, CAPI, CAWI, F2F, PAPI, and Mystery Shopping services for informed decisions....' },
//   { icon: CodeBracketSquareIcon, title: 'Data Coding & Charting', description: 'Open Ends Coding transforms textual responses to numeric codes for intelligent data processing and understanding....' },
// ];

// const Services = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             VisionVowResearch specialists adeptly gather hard-to-find information from primary and secondary sources.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;
//             return (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               className="h-full"
//             >
//               <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
//                 <CardHeader>
//                   <Icon className="h-12 w-12 text-primary mb-4"/>
//                   <CardTitle className="text-2xl">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <CardDescription className="text-base leading-relaxed text-muted-foreground">{service.description}</CardDescription>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="link" asChild className="p-0 text-primary hover:text-primary/80">
//                     <a href="#">Learn More <span className="ml-1">→</span></a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           )})}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { MegaphoneIcon, ChartBarSquareIcon, CogIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const servicesData = [
  { icon: MegaphoneIcon, title: 'Market Opportunity Analysis', description: 'Identify and evaluate new market potentials with our in-depth research methodologies and design expertise.' },
  { icon: ChartBarSquareIcon, title: 'Advanced Data Synthesis', description: 'We employ diverse data collection techniques – quantitative, qualitative, and digital – to deliver robust insights.' },
  { icon: CogIcon, title: 'Strategic Insight Application', description: 'Transform raw data into actionable strategies with our comprehensive coding, charting, and interpretation services.' },
];

const Services = () => {
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SolvexResearch analysts excel at uncovering critical information from diverse primary and secondary data streams.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border-2 border-transparent hover:border-secondary/50 transform hover:scale-[1.02]">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mb-4"/>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 text-primary hover:text-primary/80 text-base">
                    <a href="#">Explore Service <span className="ml-1 font-semibold">→</span></a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Services;