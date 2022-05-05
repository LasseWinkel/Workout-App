import Card from "./Card";

function Programs() {
  const cards = [
    {
      background: "bg-gradient-to-tl from-[#FF99C3] to-[#FFD162]",
      content: "Titel des Programms",
    },
    {
      background: "bg-gradient-to-tl from-[#F5FFA0] to-[#3EF3E8]",
      content: "100 Push-Ups Challenge",
    },
    {
      background: "bg-gradient-to-tl from-[#3A4AE4] to-[#3EF3E8]",
      content: "Titel des Programms",
    },
    {
      background: "bg-gradient-to-tl from-[#FF99C3] to-[#FFD162]",
      content: "Stretch and Relax",
    },
    {
      background: "bg-gradient-to-tl from-[#F5FFA0] to-[#3EF3E8]",
      content: <h2>Titel des Programms</h2>,
    },
  ];

  return (
    <div className="p-6">
      <h2>Browse</h2>
      <Card className={cards[0].background + " p-12"}>{cards[0].content}</Card>
      <Card className={cards[1].background + " p-12"}>{cards[1].content}</Card>
      <Card className={cards[2].background + " p-12"}>{cards[2].content}</Card>
      <Card className={cards[3].background + " p-12"}>{cards[3].content}</Card>
      <Card className={cards[4].background + " p-12"}>{cards[4].content}</Card>
    </div>
  );
}

export default Programs;
