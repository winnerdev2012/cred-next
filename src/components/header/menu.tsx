"use client"


import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"
import MenuType from "../../types/menuType";
import { useRef } from "react";

interface Props {
  data: MenuType;
}
const Menu: React.FC<Props> = ({ data }) => {
  const ref = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const hrefParam = searchParams.get('href');
  const isActive = hrefParam ? hrefParam === data.href : false;
  const color = isActive ? data.color : "#ffffff80";

  const onMouseEnter = () => {
    const element: any = ref.current;
    element.style.color = data.color;
  };
  const onMouseLeave = () => {
    const element: any = ref.current;
    element.style.color = color;
  };
  return (
    <Link
      href={data.href}
      className={`flex items-center ${isActive ? "font-bold" : ""
        } hover:font-bold whitespace-nowrap`}
      style={{ color }}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={(e) => onMouseLeave()}
      ref={ref}
    >
      {data.label}
    </Link>
  );
};

export default Menu;
