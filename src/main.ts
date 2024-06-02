import { getJsonData } from "./large-json"

declare global {
  var THIRD_PARTY_JS: {
      data: any,
      timeoutFlag?: boolean;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const mainFunction  = async() => {
  console.log('hello, vite with IIFE')
  // 
  const data = getJsonData()
  window.THIRD_PARTY_JS = {
    data: data
  }

  await sleep(5000);
  window.THIRD_PARTY_JS.timeoutFlag = true;
}

mainFunction()