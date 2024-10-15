import { Image } from '../Image'

interface ValidationCheckMarkProps {
    className?: string
}

export const ValidationCheckMark: React.FC<ValidationCheckMarkProps> = ({ className }) => {
  return <Image src={'/src/libs/ui/assets/checkmarkValid.png'}
    alt=''
    className={`w-[15px] h-[15px] absolute top-[28px] right-2 ${className}`}
  >
  </Image>
}