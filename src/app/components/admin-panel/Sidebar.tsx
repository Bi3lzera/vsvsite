"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Produtos",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Contas",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transações",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Dados",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Configurações",
    icon: <IoSettings />,
    href: "#",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4 max-h-[80px] max-w-[80px]">
        <img className="size-12 rounded" src="/logo3.jpeg" alt="logo" />
        <h2 className="text-[15px] font-semibold text-black">
          Painel de Administrador
        </h2>
      </div>

      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-greenMenus hover:text-white ${
              pathName === menu.href
                ? "bg-greenMenus text-white"
                : "bg-gray-200"
            }`}
          >
            <div className="text-20px">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
