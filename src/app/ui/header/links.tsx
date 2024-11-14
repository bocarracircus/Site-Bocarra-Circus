'use client'
import Link from "next/link";

interface LinkProps {
  label: string;
  to: string;
  onClick?: () => void;
  local: string
}

const Links = ({ label, to, onClick, local }: LinkProps) => {
  return (
    <Link onClick={onClick} href={to} className={`text-[white] text-2xl rounded-lg px-4 py-2 font-medium xl:hover:bg-red-default hover:text-[white] active:bg-red-600 active:text-[white] ${local === `${to}` ? 'bg-red-default' : ''}`}>
      {label}
    </Link>
  )
}

export default Links