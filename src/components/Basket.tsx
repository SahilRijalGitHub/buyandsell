import { useState } from "react";
import "../styles/Basket.css";

function checkLength(list: string | any[]) {
  if (list.length === 0) {
    return (
      <div className="alert alert-light" role="alert">
        No items found, please add an item to your basket.
      </div>
    );
  } else {
    return (
      <div id="basket-checkout-button-div">
        <button className="btn btn-primary" id="basket-checkout-button">
          Checkout
        </button>
      </div>
    );
  }
}

function Basket() {
  let [basketList, setBasketList] = useState([
    {
      ID: crypto.randomUUID(),
      itemName: "PC",
      price: "$1000",
      picture:
        "https://m.media-amazon.com/images/I/61qplm+4S3L._AC_UF1000,1000_QL80_.jpg",
      details: "Brand new\nMemory: 16GB\nProcessor: AMD Ryzen",
      count: 1,
    },
    {
      ID: crypto.randomUUID(),
      itemName: "PS5",
      price: "$500",
      picture:
        "https://assetsio.reedpopcdn.com/ps5-pre-order-header.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      details:
        "Brand new\nCPU: x86-64-AMD Ryzen “Zen 2” | 8 Cores / 16 Threads | Variable frequency, up to 3.5 GHz\nProcessor: AMD Ryzen",
      count: 1,
    },
  ]);

  function deleteButton(index: number) {
    let newBasketList = basketList;
    newBasketList.splice(index, 1);
    setBasketList([...newBasketList]);
  }

  function addCount(index: number) {
    let newBasketList = basketList;
    newBasketList[index].count++;
    setBasketList([...newBasketList]);
  }

  function subCount(index: number) {
    if (basketList[index].count > 1) {
      let newBasketList = basketList;
      newBasketList[index].count--;
      setBasketList([...newBasketList]);
    }
  }

  return (
    <div className="container" id="basket">
      {checkLength(basketList)}
      <ul className="list-group">
        {basketList.map(function (item, index) {
          return (
            <li
              className="list-group-item basket-list-group-item"
              key={item.ID}
            >
              <div className="card-basket">
                <img src={item.picture} className="card-img-top" alt="..." />
              </div>
              <div className="card-body" id="basket-details">
                <h5 className="card-text">{item.itemName}</h5>
                <pre>
                  <p className="card-text">{item.details}</p>
                </pre>
                <p className="card-text">{item.price}</p>
                <button
                  onClick={() => deleteButton(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <div id="counter-div">
                  <button
                    className="btn btn-primary button-counter"
                    onClick={() => subCount(index)}
                  >
                    -
                  </button>
                  <span id="counter-number-span">{item.count}</span>
                  <button
                    className="btn btn-primary button-counter"
                    onClick={() => addCount(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Basket;
