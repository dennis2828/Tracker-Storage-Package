import { TrackerStorageResponse, TrackerStorageChunkProps } from "../types";

export class TrackerStorageInitializer {
    private API_KEY: string="";

    constructor(API_KEY: string) {
        this.API_KEY = API_KEY;
    }

    track = async (chunk: Record<string, any>, options: TrackerStorageChunkProps): Promise<TrackerStorageResponse> => {
        try{
            const res = await fetch("https://tracker-storage.vercel.app/api/chunks", {
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
    getChunks = async(): Promise<TrackerStorageResponse> => {
        try{
            const res = await fetch("https://tracker-storage.vercel.app/api/chunks", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.API_KEY}`
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const jsonData = await res.json();

            return {ok: true, data:jsonData}
        }catch(err){
            return {ok: false, data: err};
        }
    }
    getChunk = async(id: string): Promise<TrackerStorageResponse> => {
        try{
            const res = await fetch(`https://tracker-storage.vercel.app/api/chunks/${id.toString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.API_KEY}`
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const jsonData = await res.json();
            
            return {ok: true, data:jsonData}
        }catch(err){
            return {ok: false, data: err};
        }
    }
}