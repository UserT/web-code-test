const Footer = ({ cartTotal }) => {
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartTotal);

  return (
    <div className="text-right font-semibold text-lg mt-4">
      Total:
      <span className="text-xl ml-2">{amount}</span>
    </div>
  );
};

export default Footer;
