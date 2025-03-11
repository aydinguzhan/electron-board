export { };

declare global {
    interface Window {
        electronAPI: {
            getAllJob: () => Promise<any>;
            createJob: (values: IJobs) => Promise<any>;
            findJob: () => Promise<any>;
        };
    }
}
