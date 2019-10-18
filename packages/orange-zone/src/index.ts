import { zoneAwareAddEventListener } from "./core/zoneAwareAddEventListener";

export const zoneInit=()=>{
  window.addEventListener = zoneAwareAddEventListener;
}