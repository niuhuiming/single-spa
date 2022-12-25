import React, { useEffect, useState } from 'react';

// 自定义钩子函数
function useUtilsModule() {
  const [utilsModule, setUtilsModule] = useState();
  useEffect(() => {
    System.import("@ncwu/utils").then(setUtilsModule);
  }, []);
  return utilsModule;
}

export default function About() {

  const utilsModule = useUtilsModule();
  if (utilsModule) {
    const res = utilsModule.logMsg('React');
    console.log(res);
  }

  return (
    <div>
      About<br />
      The page you see uses the conMsg method located in utils, please check the information in the console.
    </div>
  )
}
