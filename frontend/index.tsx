import { Millennium } from "@steambrew/client";

export default async function PluginMain() {
  Millennium.AddWindowCreateHook(async () => {
    (window as any).webpackChunksteamui.push([[Math.random()], {}, (__webpack_require__: any) => {
      __webpack_require__(34792).rV.m_Settings.bIsValveEmail = true;
      (window as any).SteamClient._internal?.SetDevMode(true);
    }]);
  });
}