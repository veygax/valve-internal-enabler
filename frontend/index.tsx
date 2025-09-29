import { findModuleExport, Millennium } from "@steambrew/client";

export default async function PluginMain() {
  Millennium.AddWindowCreateHook(async () => {
    findModuleExport(m => m.m_Settings).m_Settings.bIsValveEmail = true;
    findModuleExport(m => typeof m.DEV_MODE !== 'undefined').DEV_MODE = true;
  });
}