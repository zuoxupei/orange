import { zoneAwareAddEventListener } from "./core/zoneAwareAddEventListener";

const zoneInit=()=>{
  (window as any).prototype.addEventListener = zoneAwareAddEventListener
}