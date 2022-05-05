import FullCircle from "./FullCircle";
import EmptyCircle from "./EmptyCircle";
import Card from "./Card";

function Profile() {
  return (
    <div className="flex flex-col p-6">
      <h2>Name</h2>
      <FullCircle className="mt-40 self-center bg-gradient-to-tl from-[#3A4AE4] to-[#3EF3E8] w-20 h-20 rounded-full"></FullCircle>
      <p className="self-center">Profil bearbeiten</p>
      <p>Aktueller Trainingsplan</p>
      <Card className="p-4 bg-[#3A4151] flex">
        <EmptyCircle className="bg-red w-10 h-10 mr-6 rounded-full border-2 border-solid border-white flex">
          <div className="self-center justify-self-center ml-0.5">40%</div>
        </EmptyCircle>
        <div>
          <p>Titel des Programms</p>
          <label htmlFor="">1 von 8 geschafft</label>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
