import Link from "next/link";
import Image from "next/image";

export default function Menu({
  name, 
  icon, 
  path,
  onMenuClick
}: {
  name: string;
  icon: string;
  path: string;
  onMenuClick?: () => void;
}) {
  return (
    <Link 
      href={path} 
      key={name} 
      className="w-[270px] h-[40px] flex items-center justify-start gap-2 pl-2 rounded-lg hover:bg-[#E5E7E9]"
      onClick={onMenuClick}
    >
      <div className="w-[30px] h-[30px] flex items-center justify-center">
        <Image src={icon} alt={name} width={30} height={30}/>
      </div>
      <span>{name}</span>
    </Link>
  );
}
