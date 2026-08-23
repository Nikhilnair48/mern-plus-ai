import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type PackingItem = {
  id: string;
  name: string;
  quantity: number;
};
// { id: "P-101", name: "T-shirts", quantity: 4 }
const initialPackingItems: PackingItem[] = [
  { id: "P-101", name: "T-shirts", quantity: 3 },
  { id: "P-102", name: "Socks", quantity: 4 },
  { id: "P-103", name: "Water bottle", quantity: 1 },
];

export default function PackingList() {
    // state variable will receive initialPackingItems as the initialValue
    const [items, setItems] = useState(initialPackingItems);
    
    function handleRemove(itemId: string) {
        // array based method -> filter
        // return ALL elements that're NOT equal to itemId
        // setItems(items.filter((item) => item.id !== itemId));
        const nextItems = items.filter((item) => item.id !== itemId);
        setItems(nextItems);
    }

    function handleAddOne(itemId: string) {
        // These won't work in the conext of React
        // items[0].quantity += 1;
        // items = [];

        // map will return a new array, which'll have a new reference
        const nextItems = items.map((item) => {
            // Can you rewrite this using a ternary operator?
            if(item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1   
                };
            }
            return item;
        });

        setItems(nextItems);
    }

    return (
        <section className="example-section">
            {/*  Header */}
            <div className="section-heading">
                <h2>Trip Packing List</h2>
                <p>Total items: ___</p>
            </div>
            {/*  UL -> LI */}
            <ul className="simple-list">
                {
                    items.map((item) => {
                        const quantity = item.quantity * 2;
                        return (
                            <li key={item.id} className="simple-row">
                                <div>
                                    <strong>{item.name}</strong>
                                    <span className="row-meta">{item.id}</span>
                                </div>

                                <div className="row-actions">
                                    <span className="quantity">Quantity: {quantity}</span>
                                    <button className="button" onClick={() => handleAddOne(item.id)}>Add</button>
                                    <button className="button" onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}
