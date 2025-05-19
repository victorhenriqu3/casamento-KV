import { useEffect, useState } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-06-28T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    Dias: "00",
    Horas: "00",
    Minutos: "00",
    Segundos: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        Dias: days.toString().padStart(2, "0"),
        Horas: hours.toString().padStart(2, "0"),
        Minutos: minutes.toString().padStart(2, "0"),
        Segundos: seconds.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown flex justify-center gap-6 my-12">
      {["Dias", "Horas", "Minutos", "Segundos"].map((unit) => (
        <div
          key={unit}
          className="countdown-item bg-white rounded-lg p-4 min-w-[100px] text-center shadow"
        >
          <div className="number text-3xl font-semibold text-gold">
            {timeLeft[unit as keyof typeof timeLeft]}
          </div>
          <div className="label text-sm text-dark-gray capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
