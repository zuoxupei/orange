
export interface IBase {
  name:string,
  ts:boolean
  projectDir:string,
  css:string,
  config? :string,
  configData ?:any
  isConfig ? :boolean
}

export type IVueComponent = {
  pug:boolean
} & IBase

export type IReactComponent = {

} & IBase