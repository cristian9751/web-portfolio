import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx"
import type { ReactNode } from "react"
import type { MenuItem} from "@/types/MenuItem.ts"
import HamburgerMenu from "@/components/ui/HamburgerMenu.tsx"

const MenuItems : MenuItem[] = [
  {
    label: "About me",
    href: "#about"
  },
  {
    label: "My projects",
    href: "#projects"
  },
  {
    label: "Contact me",
    href: "#contact"
  }
]

type LayoutProps = {
  children: ReactNode
}
export default function Layout({children} : LayoutProps ) {
  return (
    <>
      <HamburgerMenu menuItems={MenuItems} className={"md:hidden"}></HamburgerMenu>
      <NavigationMenu className={" fixed w-full max-w-none bg-sidebar md:p-4 md:flex hidden md:z-[200]"}>
        <NavigationMenuList>
          {MenuItems.map((item : MenuItem) => (
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() }
                render={<a href={item.href}>{item.label}</a>}
              >
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <main className={"flex flex-col py-5  md:py-40 gap-20 md:gap-30 md:z-[100]"}>
        {children}
      </main>
    </>

  )
}