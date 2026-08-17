"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

interface HeaderProps {
  menuItems: { name: string; link: string }[];
}

export function Header({ menuItems }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Navbar className="rounded-full">
      <NavBody>
        <NavbarLogo />
        <NavItems items={menuItems} />
        <NavbarButton href="/contact">تماس با ما</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        >
          <NavItems
            items={menuItems}
            variant="mobile"
            onItemClick={() => setIsMobileOpen(false)}
          />
          <NavbarButton href="/contact" className="mt-4 w-full">
            تماس با ما
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
