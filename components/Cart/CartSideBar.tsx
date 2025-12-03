import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { removeItem, addItem } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartSideBar = ({ cartItems }) => {
  const dispatch = useDispatch();
  // remove item from cart
  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  // plus quanity in cart
  const handleAdd = (id: number) => {
    dispatch(addItem(id));
  };

  return (
    <div className="mt-6 mb-6 h-full">
      {/* Heading  -  Your Cart */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/* if number of items is empty  - Your cart is empty */}
      {cartItems.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[80%]">
          <Image
            src="/cart.svg"
            alt="empty-cart"
            width={0}
            height={0}
            className="w-[60%] h-1/2 object-contain"
          />
          <h1 className="text-2xl font-semibold mt-4">Your cart is empty</h1>
        </div>
      )}
      {/* Cart items displayed */}
      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => (
            <div
              className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              key={item.id}
            >
              {/* Cart item Image */}
              <Image
                src={item?.image}
                alt={item?.title}
                width={0}
                height={0}
                sizes="100vh"
                className="w-[60px] h-[60px] object-contain"
              />
              <div>
                {/* title of product */}
                <h1 className="text-sm w-4/5 font-semibold truncate">
                  {item?.title}
                </h1>
                {/* price x quantity =  */}
                <h1 className="text-base text-blue-950 font-bold">{`$${
                  item?.price?.toFixed(2) * item?.quantity
                }`}</h1>
                {/* quantity */}
                <h1 className="font-bold text-base mb-2">
                  Quantity: {item?.quantity}
                </h1>
                {/* add or remove button */}
                <div className="flex items-center space-x-4">
                  <Button
                    size={"sm"}
                    variant={"destructive"}
                    onClick={() => handleRemove(item?.id)}
                  >
                    Remove
                  </Button>
                  <Button size={"sm"} onClick={() => handleAdd(item?.id)}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* goto cart page */}
      <div className="w-full flex justify-center items-center bg-blue-50 h-[50px] my-4">
        <Link href={"/cart"}>
          <SheetClose asChild>
            <Button>View All Cart</Button>
          </SheetClose>
        </Link>
      </div>
    </div>
  );
};

export default CartSideBar;
