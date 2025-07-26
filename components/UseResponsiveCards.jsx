import { useEffect, useState } from "react";

export default function useResponsiveCards() {
  const [cards, setCards] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCards(1); // Mobile
      else if (width < 1024) setCards(2); // Tablet
      else setCards(3); // Desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  return cards;
}
