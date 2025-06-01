// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'; // Solid icons for contact

// // const Contact = () => {
// //   const itemVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
// //   };

// //   return (
// //     <section className="py-20 bg-lightGray">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           className="text-center mb-16"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-darkGray">Contact Us</h2>
// //         </motion.div>
// //         <motion.div
// //           className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-2xl" // More padding, rounded-xl, stronger shadow
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //           transition={{ staggerChildren: 0.2 }}
// //         >
// //           <motion.div className="flex items-center text-lg text-secondary mb-6" variants={itemVariants}>
// //             <PhoneIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
// //             <div>
// //               <strong>Phone:</strong> <a href="tel:+919953981772" className="text-primary hover:underline">+91 (995) 3981-772</a>
// //             </div>
// //           </motion.div>
// //           <motion.div className="flex items-center text-lg text-secondary mb-6" variants={itemVariants}>
// //             <EnvelopeIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
// //             <div>
// //               <strong>Email:</strong> <a href="mailto:vision@visionvowresearch.com" className="text-primary hover:underline">vision@visionvowresearch.com</a>
// //             </div>
// //           </motion.div>
// //           <motion.div className="flex items-start text-lg text-secondary" variants={itemVariants}> {/* items-start for address */}
// //             <MapPinIcon className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0"/> {/* mt-1 for alignment */}
// //             <div>
// //               <strong>Address:</strong> C-1/63 Sanjay enclave Uttam nagar New Delhi 110059
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
// import { Card, CardContent } from "@/components/ui/card";

// const Contact = () => {
//   const titleVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           variants={titleVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h2>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ staggerChildren: 0.2 }}
//           className="max-w-2xl mx-auto"
//         >
//           <Card className="p-8 sm:p-12 shadow-xl bg-card">
//             <CardContent className="p-0 space-y-8">
//               <motion.div className="flex items-center text-lg text-card-foreground/90" variants={itemVariants}>
//                 <PhoneIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
//                 <div>
//                   <strong>Phone:</strong> <a href="tel:+919953981772" className="text-primary hover:underline">+91 (995) 3981-772</a>
//                 </div>
//               </motion.div>
//               <motion.div className="flex items-center text-lg text-card-foreground/90" variants={itemVariants}>
//                 <EnvelopeIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
//                 <div>
//                   <strong>Email:</strong> <a href="mailto:vision@visionvowresearch.com" className="text-primary hover:underline">vision@visionvowresearch.com</a>
//                 </div>
//               </motion.div>
//               <motion.div className="flex items-start text-lg text-card-foreground/90" variants={itemVariants}>
//                 <MapPinIcon className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0"/>
//                 <div>
//                   <strong>Address:</strong> C-1/63 Sanjay enclave Uttam nagar New Delhi 110059
//                 </div>
//               </motion.div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 sm:p-12 shadow-xl bg-card border-2 border-transparent hover:border-primary/30 transition-colors duration-300">
            <CardContent className="p-0 space-y-8">
              <motion.div className="flex items-center text-lg text-card-foreground/90" variants={itemVariants}>
                <PhoneIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
                <div>
                  <strong>Phone:</strong> <a href="tel:+18005550123" className="text-primary hover:underline">+1 (800) 555-0123</a>
                </div>
              </motion.div>
              <motion.div className="flex items-center text-lg text-card-foreground/90" variants={itemVariants}>
                <EnvelopeIcon className="h-7 w-7 text-primary mr-4 flex-shrink-0"/>
                <div>
                  <strong>Email:</strong> <a href="mailto:contact@solvexresearch.com" className="text-primary hover:underline">contact@solvexresearch.com</a>
                </div>
              </motion.div>
              <motion.div className="flex items-start text-lg text-card-foreground/90" variants={itemVariants}>
                <MapPinIcon className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0"/>
                <div>
                  <strong>Address:</strong> 123 Insight Avenue, Data City, DS 45678
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;