import { useEffect, useRef, useState } from "react";

const Terminal = () => {
  const [generatedText, setGeneratedText] = useState<string>("");
  const introduction = `DuysPorfolio ~ % Hello! I’m [Your Name], a passionate [Your Profession, e.g., web developer, graphic designer,
     data analyst] dedicated to creating innovative and effective solutions. With a strong foundation in
   [mention key skills or technologies, e.g., JavaScript, UX design, data visualization],
    I strive to bring ideas to life through clean design and efficient code`;
  const index = useRef(0);
  useEffect(() => {
    if (index.current <= introduction.length) {
      setTimeout(() => {
        setGeneratedText((prev) => prev + introduction.charAt(index.current));
        index.current++;
      }, 10);
    }
  }, [index.current]);
  return <div className="h-screen w-screen bg-black text-white">{generatedText}</div>;
};

export default Terminal;
