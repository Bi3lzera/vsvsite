import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import toast from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

interface PropsType {
  id: string;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, img, category, title, price }: PropsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      category,
      title,
      price,
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Produto Adicionado ao Carrinho!!");
  };

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img className="inline-block" src={img} alt={title} />
      </div>

      <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{title}</h2>

        <div className="mt-3 flex text-[#FFB21D] items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 text-[14px] ml-2">(avaliação)</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">R$ {price}</h2>
          <div
            className="flex gap-2 items-center bg-greenMain text-white px-4 py-2 cursor-pointer hover:bg-greenMenus"
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart /> Adicionar ao Carrinho
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
