import service from '@/utils/request/index.js';
//想法列表
export async function fetchIdeaList(){
    return await service.get('/api/idea');
}
//主题列表
export async function fetchTopicList(){
    return await service.get('/api/topic');
}
//想法个人主页
export async function fetchProfile(){
    return await service.get('/api/profile/id');
}