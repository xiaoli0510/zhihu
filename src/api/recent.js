import service  from "@/utils/request/index.js";

export async function fetchScanList(){
    return await service.get('/api/recent/scan')
}