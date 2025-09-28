import { Millennium, modules } from "@steambrew/client";

export default async function PluginMain() {
  Millennium.AddWindowCreateHook(async () => {
    modules.get("34792").rV.m_Settings.bIsValveEmail = true;
    modules.get("72476").TS.DEV_MODE = true;
  });
}