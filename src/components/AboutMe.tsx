import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import MePicture from "@/assets/img.png"
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx"
export default function AboutMe() {
  return (
    <Card id="about" className={"mx-auto md:h-120 w-full max-w-7xl bg-card-alt  flex md:flex-row md:justify-center p-2 rounded-xl items-center md:px-2"}>
      <div className={"flex flex-col justify-center md:items-start items-center order-2 md:order-2 md:ml-10"}>
        <CardTitle>
          Your trusted developer
        </CardTitle>
        <br/>
        <CardDescription className={"md:text-left sm:text-left text-center"}>
          <p className="md:max-w-md ">
            Hi. I'm Cristian. Web designer and mobile app developer.
            I specialize in turning your ideas into beautifully-designed web applications.
            Focusing on quality. <span>Let's make it happen.</span>
          </p>
          <Button className={"w-fit my-10"}>
            <a href={"https://github.com/cristian9751"}>Github</a>
          </Button>
        </CardDescription>
      </div>
      <Avatar className={"size-50 md:ml-15 mb-1 order-1 md:order-1"}>
        <AvatarImage
          className={"object-cover"}
          src={MePicture}
        ></AvatarImage>
      </Avatar>
    </Card>
  )
}


