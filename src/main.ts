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
  console.log('execed thirdparty-js')

  const p = document.createElement("p")
  p.innerText = "thirdparty-js 読み込み完了"
  window.document.body.appendChild(p)


  const data = getJsonData()
  window.THIRD_PARTY_JS = {
    data: data
  }

  await sleep(5000);
  console.log('5000 sleeped');
  window.THIRD_PARTY_JS.timeoutFlag = true;
}

mainFunction()