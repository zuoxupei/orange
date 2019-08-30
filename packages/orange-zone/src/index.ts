import { zoneAwareAddEventListener } from "./core/zoneAwareAddEventListener";
import { patchTimeout } from "./core/patchTimeout";

export const zoneInit=()=>{
  Window.prototype.addEventListener = zoneAwareAddEventListener;
  Window.prototype.setTimeout = patchTimeout;
}