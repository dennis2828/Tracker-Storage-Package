export type TrackerStorageResponse = {
    ok: boolean;
    data: any;
}
export type TrackerStorageChunkProps = {
    name: string;
    type: "SUCCESS" | "FAIL" | "OTHER";
}