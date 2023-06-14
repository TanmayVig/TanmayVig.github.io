import {ButtonProp} from '../interfaces/Interfaces'

export default function Button({property, onClick, children}: ButtonProp) {
  return (
    <button className={!!property ? property : ''} onClick={onClick}>
      {children}
    </button>
  )
}
