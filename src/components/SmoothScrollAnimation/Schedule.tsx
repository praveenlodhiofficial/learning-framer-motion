// Schedule.tsx
import { motion } from "framer-motion";
import { ScheduleItem } from './ScheduleItem';  // Import ScheduleItem

export const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="Gaganyaan Mission" date="December 2024" location="Sriharikota, India" />
      <ScheduleItem title="Aditya-L1" date="January 2024" location="Sriharikota, India" />
      <ScheduleItem title="Chandrayaan-3 (Lunar Mission)" date="TBD 2024" location="Sriharikota, India" />
      <ScheduleItem title="PSLV-C56" date="February 2024" location="Sriharikota, India" />
      <ScheduleItem title="GSAT-30" date="March 2024" location="Sriharikota, India" />
      <ScheduleItem title="NavIC (Navigation Satellite)" date="April 2024" location="Sriharikota, India" />
      <ScheduleItem title="INSAT Series Satellite" date="May 2024" location="Sriharikota, India" />
    </section>
  );
};