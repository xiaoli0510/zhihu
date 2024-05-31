import service from '@/utils/request/index.js';
//历史搜索
export async function fetchRecordList(){
    return await service.get('/api/search/record');
}
//猜你想搜
export async function fetchGuessList(){
    return await service.get('/api/search/guess');
}
//搜索发现
export async function fetchHotList(){
    return await service.get('/api/search/hot');
}
//搜索结果页 综合tab 大家常搜
export async function fetchCommonList(){
    return await service.get('/api/search/common');
}
//搜索结果页 用户tab 
export async function fetchUserList(params){
    return await service.get('/api/search/user');
}
//搜索结果页 小说tab 
export async function fetchNovelList(params){
    return await service.get('/api/search/novel');
}
//搜索结果页 小说详情页
export async function fetchNovelDetail(params){
    return await service.get('/api/search/novel/detail');
}

