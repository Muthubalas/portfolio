import React from 'react'
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
     {
       title: "MEAN Billing Software",
       tags: ["MongoDB", "Express", "Angular", "Node"],
       description:
         "A customized billing and inventory management system built for salons and textile stores. It supports fast customer billing, product-based inventory tracking, and automated WhatsApp sharing of invoices as PDFs. Designed with a clean UI, real-time updates, and role-based access.",
       link: "https://billitnow.in/",
     },
     {
       title: "MERN Dashboard",
       tags: ["MongoDB", "Express", "React", "Node"],
       description: "A full-featured admin dashboard built with the MERN stack, including product listing and management, dynamic blog updates, cart functionality, and a seamless Razorpay checkout flow. Designed for fast performance, clean UI, and smooth user experience.",
  link: "https://admin.marvelsalon.in/login",
     },
     {
       title: "Laravel + Vue CRM",
       tags: ["PHP", "Laravel", "Vue.js"],
       description:
         "Customer management system built with Laravel APis and Vue frontend.",
       link: "https://shop.vcaretrichology.com/login",
     },
   ];
 
   const skills = [
     "React.js",
     "Node.js/Express",
     
     "MongoDB",
     "Angular",
     "TypeScript",
     "Laravel",
     "Vue.js",
     "MySQL",
      "Basics of JAVA",
     "Git / CI",
   ];
 
   return (
     <div className="min-h-screen text-gray-100 bg-black scroll-smooth">
       {/* Decorative background */}
       <div className="fixed inset-0 pointer-events-none">
         <svg className="absolute -top-10 -right-20 opacity-10 w-1/2 h-1/2" viewBox="0 0 600 600">
           <defs>
             <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#222" />
               <stop offset="100%" stopColor="#000" />
             </linearGradient>
           </defs>
           <circle cx="300" cy="300" r="300" fill="url(#g1)" />
         </svg>
       </div>
 
       <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-sm border-b border-gray-800">
         <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-black font-bold">MK</div>
             <div>
               <a href="#home" className="text-xl font-semibold tracking-tight">
                 Muthu Bala
               </a>
               <div className="text-xs text-gray-400">Full‑Stack (MERN / MEAN) • Laravel / Vue</div>
             </div>
           </div>
 
           <div className="hidden md:flex items-center gap-6">
             <a href="#about" className="hover:text-white/80">About</a>
             <a href="#skills" className="hover:text-white/80">Skills</a>
             <a href="#projects" className="hover:text-white/80">Projects</a>
             <a href="#contact" className="hover:text-white/80">Contact</a>
             <a href="#" className="ml-4 px-4 py-2 border border-gray-700 rounded hover:bg-white/5">Resume</a>
           </div>
 
           <div className="md:hidden">
             <a href="#contact" className="px-3 py-2 border border-gray-700 rounded">Hire</a>
           </div>
         </nav>
       </header>
 
       <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
         {/* HERO */}
         <section id="home" className="pt-8 pb-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <motion.h1
                 initial={{ x: -40, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.6 }}
                 className="text-4xl md:text-6xl font-extrabold leading-tight"
               >
                Transforms Ideas Into   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Impact</span> With Me
               </motion.h1>
 
               <motion.p
                 initial={{ x: -20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.1, duration: 0.6 }}
                 className="mt-6 text-gray-300 max-w-xl"
               >
                 I build production web applications primarily with MERN and MEAN stacks. Also currently working with PHP (Laravel) and Vue.js. Clean code, scalable architecture, and ship‑ready features.<br></br>
                 My focus is simple: clean code, scalable systems, and real-world impact.
               </motion.p>
 
               <div className="mt-8 flex gap-3">
                 <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-black font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                   View Projects
                 </a>
 
                 <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-700 text-gray-200 hover:bg-white/5">
                   Contact Me
                 </a>
               </div>
 
               <div className="mt-10 text-gray-500 text-sm">Currently: <span className="text-white">Laravel + Vue — building a CRM</span></div>
             </div>
 
             <div className="relative">
               <motion.div
                 initial={{ scale: 0.95, rotate: -3, opacity: 0 }}
                 animate={{ scale: 1, rotate: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 shadow-2xl"
               >
                 <div className="text-sm text-gray-400 mb-3">Quick summary</div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white/3 rounded">
                     <div className="text-2xl font-bold">8+</div>
                     <div className="text-xs text-gray-400">Years Experience</div>
                   </div>
                   <div className="p-4 bg-white/3 rounded">
                     <div className="text-2xl font-bold">20+</div>
                     <div className="text-xs text-gray-400">Projects Delivered</div>
                   </div>
                 </div>
 
                 <div className="mt-6 text-xs text-gray-400">Tech highlights</div>
                 <div className="mt-3 flex flex-wrap gap-2">
                   <span className="px-3 py-1 border border-gray-700 rounded text-xs">React</span>
                   <span className="px-3 py-1 border border-gray-700 rounded text-xs">Node</span>
                   <span className="px-3 py-1 border border-gray-700 rounded text-xs">MongoDB</span>
                   <span className="px-3 py-1 border border-gray-700 rounded text-xs">Angular</span>
                   <span className="px-3 py-1 border border-gray-700 rounded text-xs">Laravel</span>
                    <span className="px-3 py-1 border border-gray-700 rounded text-xs">Vue</span>
                     <span className="px-3 py-1 border border-gray-700 rounded text-xs">Mysql</span>
                 </div>
               </motion.div>
 
               {/* subtle floating card */}
               <motion.div
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="absolute -bottom-16 right-6 w-56 p-3 rounded-xl bg-black/60 border border-gray-800 shadow-lg"
               >
                 <div className="text-xs text-gray-400">Open to</div>
                 {/* <div className="font-semibold">Freelance / Full‑time</div> */}
                 <div className="mt-2 text-xs text-gray-400">Available for immediate join — remote friendly</div>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* ABOUT */}
         <section id="about" className="py-12">
           <motion.h2
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="text-2xl font-bold"
           >
             About Me
           </motion.h2>
 
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mt-4 text-gray-300 max-w-3xl"
           >
             Passionate full‑stack developer with a focus on scalable JavaScript stacks (MERN / MEAN). I design APIs, build interactive single page apps, and ship polished backends. Lately working on Laravel APIs and Vue.js frontends for enterprise apps.
           </motion.div>
         </section>
 
         {/* SKILLS */}
         <section id="skills" className="py-12">
           <h3 className="text-xl font-bold">Skills</h3>
           <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
             {skills.map((s) => (
               <motion.div whileHover={{ scale: 1.04 }} key={s} className="p-3 bg-white/5 rounded border border-gray-800 text-center text-sm">
                 {s}
               </motion.div>
             ))}
           </div>
         </section>
 
         {/* PROJECTS */}
         <section id="projects" className="py-12">
           <h3 className="text-xl font-bold">Projects</h3>
 
           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
             {projects.map((p) => (
               <motion.article
                 key={p.title}
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="p-5 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow"
               >
                 <div className="flex items-center justify-between">
                   <h4 className="font-semibold">{p.title}</h4>
                   <div className="text-xs text-gray-400">MEAN</div>
                 </div>
                 <p className="text-sm text-gray-400 mt-3">{p.description}</p>
                 <div className="mt-4 flex flex-wrap gap-2">
                   {p.tags.map((t) => (
                     <span key={t} className="px-2 py-1 bg-white/3 rounded text-xs">{t}</span>
                   ))}
                 </div>
 
                 <div className="mt-4 flex justify-between items-center">
                   <a href={p.link} className="text-sm border border-gray-700 px-3 py-2 rounded hover:bg-white/5">View</a>
                   {/* <a href="#contact" className="text-sm text-gray-300">Get Quote</a> */}
                 </div>
               </motion.article>
             ))}
           </div>
         </section>
 
         {/* CONTACT */}
         <section id="contact" className="py-16">
           <motion.h3 className="text-xl font-bold">Contact</motion.h3>
 
           <motion.div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="p-6 rounded-xl bg-white/3 border border-gray-800">
               <h4 className="font-semibold">Let’s build something together</h4>
               <p className="mt-2 text-sm text-gray-300">Email: <span className="text-gray-100">muthubala894@gmail.com</span></p>
               <p className="mt-2 text-sm text-gray-300">Location: India (Remote)</p>
 
               <div className="mt-6 flex gap-3">
                 <a href="https://www.linkedin.com/in/muthubala-selvam-8636a7319" className="px-4 py-2 border border-gray-700 rounded">LinkedIn</a>
                 {/* <a href="#" className="px-4 py-2 border border-gray-700 rounded">GitHub</a> */}
               </div>
             </div>
 
             <form className="p-6 rounded-xl bg-black/60 border border-gray-800">
               <label className="block text-sm text-gray-400">Name</label>
               <input className="w-full mt-1 p-2 rounded bg-transparent border border-gray-700" />
 
               <label className="block text-sm text-gray-400 mt-4">Email</label>
               <input className="w-full mt-1 p-2 rounded bg-transparent border border-gray-700" />
 
               <label className="block text-sm text-gray-400 mt-4">Message</label>
               <textarea className="w-full mt-1 p-2 rounded bg-transparent border border-gray-700" rows={4}></textarea>
 
               <button type="button" className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-600 text-black font-semibold">Send</button>
             </form>
           </motion.div>
         </section>
 
         <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Muthu Bala — Full‑Stack Developer</footer>
       </main>
 
       {/* small floating nav for quick scroll on the right */}
       <div className="fixed right-6 bottom-10 hidden md:flex flex-col gap-2">
         <a href="#home" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-gray-800">Home</a>
         <a href="#projects" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-gray-800">P</a>
         <a href="#contact" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-black">✉</a>
       </div>
     </div>
   );
}

export default Portfolio