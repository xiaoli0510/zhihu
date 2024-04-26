import service from '@/utils/request/index.js';
//想法列表
export async function fetchIdeaList(){
    return await service.get('/api/idea');
}
//想法详情页
export async function fetchIdeaDetail(){
    return await service.get('/api/idea/id');
}