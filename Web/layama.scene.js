// Created with Motiva Layama v1.6 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama_Atico0000", a: "Cam_Atico-Salon_Layama002", p: new BABYLON.Vector3(11032.5, 2089.86, 1509.39), l: new BABYLON.Vector3(11032.6, 2089.86, 1509.39)});
   layamaCameras.push({n: "Layama_Atico0001", a: "Cam_Atico-Salon_Layama003", p: new BABYLON.Vector3(11119.3, 2089.86, 1728.86), l: new BABYLON.Vector3(11119.4, 2089.86, 1728.86)});
   layamaCameras.push({n: "Layama_Atico0002", a: "Cam_Atico-Salon_Layama005", p: new BABYLON.Vector3(11032.5, 2089.86, 1297.32), l: new BABYLON.Vector3(11032.6, 2089.86, 1297.32)});
   layamaCameras.push({n: "Layama_Atico0003", a: "Cam_Atico-Salon_Layama006", p: new BABYLON.Vector3(10702.9, 2089.86, 1297.32), l: new BABYLON.Vector3(10703, 2089.86, 1297.32)});
   layamaCameras.push({n: "Layama_Atico0004", a: "Cam_Atico-Salon_Layama007", p: new BABYLON.Vector3(10702.9, 2089.86, 1535.68), l: new BABYLON.Vector3(10703, 2089.86, 1535.68)});
   layamaCameras.push({n: "Layama_Atico0005", a: "Cam_Atico-Salon_Layama008", p: new BABYLON.Vector3(11119.3, 2089.86, 2031.28), l: new BABYLON.Vector3(11119.4, 2089.86, 2031.28)});
   layamaCameras.push({n: "Layama_Atico0006", a: "Cam_Atico-Salon_Layama01", p: new BABYLON.Vector3(10702.8, 2089.86, 1509.39), l: new BABYLON.Vector3(10702.9, 2089.86, 1509.39)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 0;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

