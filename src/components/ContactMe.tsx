import { Card, CardDescription, CardTitle } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"

export default function ContactMe() {
  return <Card id="about" className={"mx-auto  w-full max-w-7xl bg-card flex flex-col  items-center  rounded-xl p-10 gap-4 "}>
    <CardTitle>
        <p>Ready to build your ideas?</p>
    </CardTitle>
    <CardDescription>
      <p className={"text-center"}>You can book a meeting or commission me through fiver</p>
      <br/>
      <div className={"flex flex-col md:flex-row space-x-15 space-y-5 md:space-y-0 w-full justify-center md:items-center"}>
        <Button className={"md:w-fit  md:text-center w-full"}>
          Book a meeting
        </Button>
        <Button className={"md:w-fit  md:text-center w-full"}>
            Fiverr
        </Button>
      </div>

    </CardDescription>
  </Card>
}