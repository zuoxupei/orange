export const patchTimeout =(handler: TimerHandler, timeout?: number, ...arg: any[]):number =>{
  console.error('测试重写setTimeout')
  setInterval(handler,timeout,...arg);
  return 1;
}