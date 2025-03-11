import { IJob } from "./interfaces";

export class MainProcess {
    private jobs: any[] = [];
    async createJobs(job: IJob) {
        const newJobs = { id: String(Math.random()), ...job }
        this.jobs.push(newJobs)
        return { message: "succesful", statusCode: "200", description: newJobs }
    }
    getAllJobs() {
        return this.jobs
    }
    async findIdJobs(id: string) {
        return this.jobs.find((job: IJob) => job.id === id)
    }
}
