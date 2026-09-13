import type {MenuItem } from "@/types/MenuItem.ts"
import { useState } from "react"
import { Button } from "@/components/ui/button.tsx"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx"
import { cn } from "cn"


type HamburgerMenuProps = {
  menuItems : MenuItem[]
  className?: string;
}
export default function HamburgerMenu({menuItems, className} : HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={className}>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary">
                {isOpen ? (
                  <RiCloseLine className="h-4 w-4" />
                ) : (
                  <RiMenuLine className="h-4 w-4" />
                )}
              </Button>
            }>

            </SheetTrigger>
            <SheetContent side="top" className={"p-5 mt-50 w-full max-w-xs mx-auto border-none bg-transparent"}>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a onClick={() => {
                    setIsOpen(false)
                  }}
                    href={item.href}
                    className={cn(
                      "block py-2 text-lg font-medium transition-colors hover:text-primary",
                      item.href === "/" && "text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
    )
}