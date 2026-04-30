"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const SPRING = { type: "spring" as const, stiffness: 200, damping: 50 };

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-[100] w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px) saturate(140%)" : "none",
        width: visible ? "min(60rem, 90%)" : "100%",
        y: visible ? 12 : 0,
      }}
      transition={SPRING}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-5 py-2.5 lg:flex",
        visible
          ? "tw-light-leak bg-[#050505]/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center text-sm font-medium text-white/65 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="tw-focus relative px-4 py-2 transition-colors duration-200 hover:text-white"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hovered"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 rounded-full bg-white/[0.06]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px) saturate(140%)" : "none",
        width: visible ? "calc(100% - 1.5rem)" : "100%",
        y: visible ? 12 : 0,
        borderRadius: visible ? "9999px" : "0px",
      }}
      transition={SPRING}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2.5 lg:hidden",
        visible ? "tw-light-leak bg-[#050505]/60" : "bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "tw-glass tw-light-leak absolute inset-x-2 top-16 z-50 flex flex-col items-start gap-4 rounded-2xl px-5 py-7",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <X className="text-white" onClick={onClick} />
  ) : (
    <Menu className="text-white" onClick={onClick} />
  );

export const NavbarLogo = () => (
  <a
    href="/"
    className="tw-focus relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm font-medium text-white"
  >
    <Image src="/wolf.png" alt="The Tech Wolves logo" width={26} height={26} priority />
    <span className="text-lg font-medium tracking-[-0.02em] sm:text-xl">The Tech Wolves</span>
  </a>
);

export function NavbarButton({
  href,
  children,
  className,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    "tw-focus inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-white text-[#050505] hover:shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]",
    secondary: "border border-white/10 bg-white/[0.02] text-white/80 hover:text-white",
  };
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}
