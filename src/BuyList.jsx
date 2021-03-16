import ListItem from "./ListItem.jsx";
import Footer from "./Footer.jsx";

const BuyList = (props) => {
  let cartTotal = 0;
  if (props.items) {
    props.items.forEach((item) => {
      cartTotal += item.price * item.qty;
    });
    console.log(props.items);
    console.log(cartTotal);
  }

  return (
    <div className="mt-4">
      <h1 className="font-semibold text-2xl">Buy List</h1>

      <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
        {props.items.map((item) => (
          <ListItem
            key={item.itemNumber}
            onProductRemove={() => props.removeSeleted(item)}
            onQtyChange={props.updateQTY}
            itemNumber={item.itemNumber}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            qty={item.qty}
          />
        ))}

        <Footer cartTotal={cartTotal} />
      </div>
    </div>
  );
};
export default BuyList;
