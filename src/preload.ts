import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    createJob: (job: any) => ipcRenderer.invoke("create:job", job), // ✅ job parametresi eklendi
    getAllJob: () => ipcRenderer.invoke('getAll:job'),
    findJob: (id: any) => ipcRenderer.invoke("findJob:job", id), // ✅ id parametresi eklendi
})