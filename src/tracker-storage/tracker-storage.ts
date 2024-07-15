import { TrackerStorageResponse, TrackerStorageChunkProps } from "../types";

export class TrackerStorageInitializer {
    private API_KEY: string="";

    constructor(API_KEY: string) {
        this.API_KEY = API_KEY;
    }

    track = async (chunk: Record<string, any>, options: TrackerStorageChunkProps): Promise<TrackerStorageResponse> => {
        try{
            const res = await fetch("http://localhost:3000/api/track", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.API_KEY}`
                },
                body: JSON.stringify({chunk, options})
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const jsonData = await res.json();
            return {ok: true, data:jsonData}
        }catch(err) {
            return {ok: false, data: err};
        }
    }
}