import image from "/Images/Start.png";
import Card from "./Card";

function Start() {
  return (
    <div className="p-6">
      <h1 className="title">Hi Name!</h1>
      <img className="image" src={image} alt="woman doing a workout" />
      <h2>Dein Workout heute</h2> <a>Trainingsplan</a>
      <Card className="bg-[#3A4151] p-12">
        <h3>Tag 2</h3>
        <h2>Titel des Programms</h2>
        <label htmlFor="">26 Min. · Beweglichkeit </label>
      </Card>
    </div>
  );
}

export default Start;
