import AddContact from "../components/Contact/AddContact";
import ContactList from "../components/Contact/ContactList";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main className="min-w-screen min-h-screen relative bg-gradient-to-tr to-red-100 from-blue-100 flex flex-col items-center">
      <AddContact />
      <ContactList />
      <Footer />
    </main>
  );
};

export default Home;
