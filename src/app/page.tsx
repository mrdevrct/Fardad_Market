import MotionWrapper from "@/components/wrappers/MotionWrapper";

const homeVariants = {
  initial: { opacity: 0, y: 100 }, 
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export default function Home() {
  return (
    <MotionWrapper variants={homeVariants} className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">خوش آمدید به صفحه اصلی</h1>
      <p>این یک نمونه صفحه هوم با Next.js، Tailwind CSS و shadcn-ui است.</p>
    </MotionWrapper>
  );
}
