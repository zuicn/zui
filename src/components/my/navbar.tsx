"use client";
import { ComponentIcon, BlocksIcon, BookTemplateIcon } from "lucide-react";
import { FaQuinscape } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavMenuItem {
  name: string;
  icon?: React.ReactNode;
  href: string;
  selected?: boolean;
  onClick?: () => void;
}

const NavMenus: NavMenuItem[] = [
  {
    name: "Components",
    icon: <ComponentIcon />,
    href: "/components",
  },
  {
    name: "Blocks",
    icon: <BlocksIcon />,
    href: "/blocks",
  },
  {
    name: "Templates",
    icon: <BookTemplateIcon />,
    href: "/templates",
  },
];

function NavMenuItem({ name, icon, href, selected, onClick }: NavMenuItem) {
  return (
    <Button className="shadow-none" variant="link" onClick={onClick}>
      <Link
        href={href}
        className={cn(
          "flex flex-row gap-2 font-bold",
          selected && "shadow-xl shadow-red-500"
        )}
      >
        {icon}
        {name}
      </Link>
    </Button>
  );
}

export default function Navbar() {
  // 获取当前路径
  const pathname = usePathname();
  const selectedMenu = NavMenus.find((item) => item.href === pathname);
  return (
    <menu className="flex flex-row w-full gap-4 p-2 border-b-2 border-primary-100">
      <div className="flex flex-row gap-2 items-center ml-6">
        <Link href="/" className="flex flex-row gap-2 items-center">
          <FaQuinscape className="text-2xl" />
          <span className="text-xl font-bold ">Zuicn</span>
        </Link>
      </div>
      <div className="flex flex-row gap-4 flex-grow">
        {NavMenus.map((item) => (
          <NavMenuItem
            key={item.name}
            {...item}
            selected={selectedMenu?.name === item.name}
            // onClick={() => setSelectedMenu(item.name)}
          />
        ))}
      </div>
      <ThemeToggle />
    </menu>
  );
}
