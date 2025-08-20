import { Star } from "lucide-react";
import { useState } from "react";

function Rating() {
  const [starFill1, setStarFill1] = useState(false);
  const [starFill2, setStarFill2] = useState(false);
  const [starFill3, setStarFill3] = useState(false);

  return (
    <div className="flex gap-6">
      <Star
        size={32}
        stroke={starFill1 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill1 ? "#ff6b6b" : "none"}
        onClick={() => setStarFill1(!starFill1)}
        className="cursor-pointer hover:scale-110"
      />
      <Star
        size={32}
        stroke={starFill2 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill2 ? "gold" : "none"}
        onClick={() => setStarFill2(!starFill2)}
        className="cursor-pointer hover:scale-110"
      />
      <Star
        size={32}
        stroke={starFill3 ? "none" : "white"}
        strokeWidth={0.5}
        fill={starFill3 ? "#00ff7f" : "none"}
        onClick={() => setStarFill3(!starFill3)}
        className="cursor-pointer hover:scale-110"
      />
    </div>
  );
}

export default Rating;
