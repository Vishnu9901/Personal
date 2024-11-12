import { SubMenuItem } from '@ui/atoms/SubMenuItem'

interface SubMenuConatinerProp {
  options: string[]
  onClick:(name:string)=> void
}

export const SubMenuConatiner: React.FC<SubMenuConatinerProp> = ({ options , onClick}) => {
  // const linkClicked = (name: string) => {
  //   console.log('name linkClicked', name)
  // }
  return (
    <ul>
      {options.map((option, index) => <SubMenuItem key={index} onClick={onClick}>{option}</SubMenuItem>)}
    </ul>
  )
}