
interface IBase {
  name:string,
  ts:boolean
  projectDir:string
}

export type IVueComponent = {
  pug:boolean
} & IBase

export type IReactComponent = {

} & IBase