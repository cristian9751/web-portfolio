import { Button } from "@base-ui/react/button"
import type { ReactNode } from "react"


type ProjectImageProps = {
  children : ReactNode,
  highContrast: boolean
}
export default function ProjectImage({ children} : ProjectImageProps) {
  return <div className={"project-image"}>
    {children}
    <div className="project-image-overlay">
      <Button className={"font-extrabold bg-muted"}>Click image to visit website</Button>
    </div>
  </div>
}

