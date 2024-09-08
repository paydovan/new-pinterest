import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SearchPhoto({ setUserSearch }) {

  const [localUserSearch, setLocalUserSearch] = useState("");

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
        type="text" 
        placeholder="Digite sua pesquisa."
        value={localUserSearch}
        onChange={(e) => setLocalUserSearch(e.target.value)}
      />
      <Button type="submit" onClick={() => setUserSearch(localUserSearch)} >Pesquisar</Button>
    </div>
  )
}
