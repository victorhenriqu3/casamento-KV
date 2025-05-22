import "./App.css";
import EventDetails from "./Components/EventDetails ";
import Footer from "./Components/Footer";
import GiftList from "./Components/GiftList";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RSVPForm from "./Components/RSVPForm";
import Separator from "./Components/Separator";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Separator />
        <EventDetails />
        <Separator />
        <GiftList />
        <Separator />
        <RSVPForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
