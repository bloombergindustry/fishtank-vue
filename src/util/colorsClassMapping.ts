import * as colors from '@fishtank/colors/dist/index.common'
export type ftColors = { [key: string]: string }
export default function (){
  const newColors:ftColors = {}
  Object.keys(colors).map((key, index)=>{
    newColors[key+'Bg'] = key+'Bg'
  })
 return newColors
}
