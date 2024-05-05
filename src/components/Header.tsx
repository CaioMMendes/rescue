import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PhoneIcon } from "lucide-react"
import Link from "next/link"

function Header() {
  return (
    <Card className="bg-primary text-primary-foreground border-none rounded-none">
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="font-medium text-base">
          Pedido de resgate
        </CardTitle>

        <CardDescription className="flex gap-4">
          <Link href="tel:193" className="flex gap-1 items-center text-primary rounded-md p-2 bg-primary-foreground">
            <PhoneIcon size={16} /> Bombeiros
          </Link>

          <Link href="tel:199" className="flex gap-1 items-center text-center text-primary rounded-md p-2 bg-primary-foreground">
            <PhoneIcon size={16} /> Defesa civil
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export { Header }