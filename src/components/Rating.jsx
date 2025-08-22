import { Star } from "lucide-react";
import { useState } from "react";

function Rating({ onRating }) {
  const [starFill1, setStarFill1] = useState(false);
  const [starFill2, setStarFill2] = useState(false);
  const [starFill3, setStarFill3] = useState(false);

  const handleStarClick = (star) => {
    if (star == 1) setStarFill1(true);
    if (star == 2) setStarFill2(true);
    if (star == 3) setStarFill3(true);

    setTimeout(() => {
      onRating();
    }, 1000);
  };

  return (
    <div className="flex gap-6">
      <Star
        size={32}
        stroke={starFill1 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill1 ? "#ff6b6b" : "none"}
        onClick={() => handleStarClick(1)}
        className="cursor-pointer hover:scale-110"
      />
      <Star
        size={32}
        stroke={starFill2 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill2 ? "#ffff00" : "none"}
        onClick={() => handleStarClick(2)}
        className="cursor-pointer hover:scale-110"
      />
      <Star
        size={32}
        stroke={starFill3 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill3 ? "#00ff7f" : "none"}
        onClick={() => handleStarClick(3)}
        className="cursor-pointer hover:scale-110"
      />
    </div>
  );
}

export default Rating;
