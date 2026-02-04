import Link from "next/link";

interface NavList {
    label: string;
    href: string;
}

interface NavLinkProps {
    list: NavList[];
}

export default function NavLink({ list, }: NavLinkProps) {
  return (
    <>
        {list.map((item) => (
            <Link key={item.label} href={item.href} className="group flex items-center gap-1">
                    <span className="
                        cursor-pointer px-2 py-.05
                        bg-[linear-gradient(to_right,#39FF14_50%,transparent_50%)]
                        bg-size-[200%_100%]
                        bg-position-[100%_0%]
                        
                        transition-all duration-500 ease-out
                        hover:bg-left 
                        ">
                        {item.label}
                    </span>
            </Link>
        ))}
    </>
)};