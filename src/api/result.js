import service from "@/utils/request";

export async function fetchResultList(params){
    return await service.get('/api/result/list',params)
}