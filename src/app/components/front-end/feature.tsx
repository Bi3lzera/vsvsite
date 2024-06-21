import { MdSupport, MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Entrega Gratis",
    desc: "Para pedidos acima de 300,00 R$",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Devolução e Extorno",
    desc: "Para todos os itens",
  },
  {
    icon: <TbDiscount className="text-4xl" />,
    title: "Ofertas Especiais",
    desc: "Para Região de Ipaussu",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Suporte",
    desc: "12 Horas por dia",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
