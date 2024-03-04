import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (secondsLeft === 0) {
    navigate("/bitcoin");
  }

  return (
    <div className="flex gap-4 flex-col">
      <div>
        This is the home page for the website.
        <div>
          You will be redirected to Bitcoin Page in {secondsLeft} seconds.
        </div>
      </div>

      <div className="text-blue-500 underline text-xl">
        <Link to="bitcoin">Go Now</Link>
      </div>

      <div>
        This is developed By
        <a href="https://gajendraakagajju.vercel.app/" target="_blank">
          Gajendra Sahu
        </a>
      </div>
    </div>
  );
}
