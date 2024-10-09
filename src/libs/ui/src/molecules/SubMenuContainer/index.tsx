import { SubMenuItem } from '@ui/atoms/SubMenuItem'

interface SubMenuConatinerProp {
    options: string[]
}

export const SubMenuConatiner: React.FC<SubMenuConatinerProp> = ({ options }) => {
  return (
    <ul>
      {options.map((option, index) => <SubMenuItem key={index}>{option}</SubMenuItem>)}
    </ul>
  )
}