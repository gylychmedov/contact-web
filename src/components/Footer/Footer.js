const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="fixed bottom-2 left-2/4">
      &copy; Powered by Dagdan {year}
    </footer>
  );
};

export default Footer;
