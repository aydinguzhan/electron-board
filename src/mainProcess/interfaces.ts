export interface IJob {
    id?: string;
    jobTitle: string;
    jobDescription: string;
    jobStory: number;
    topic: {
        value: string;
        label: string;
    };
}
