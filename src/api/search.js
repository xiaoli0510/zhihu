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
//搜索结果页 浮窗
export async function fetchTodoList(params){
    return await service.get('/api/todo');
}
//搜索结果页 小说-目录
export async function fetchCatalogList(params){
    return await service.get('/api/novel/catalog');
}
//搜索结果页 小说-推荐
export async function fetchRecommendList(params){
    return await service.get('/api/novel/recommend');
}
//订单支付页 
export async function fetchPay(params){
    return await service.get('/api/pay');
}
//支付协议页
export async function fetchPayProtocol(){
    return await service.get('/api/pay/protocol');
}
//充值须知页
export async function fetchRechargeProtocol(){
    return await service.get('/api/recharge/protocol');
}
//subject页
export async function fetchSubject(){
    return await service.get('/api/subject');
}
//subject页 讨论
export async function fetchSubjectDiscuss(){
    return await service.get('/api/subject/discuss');
}
//subject页 想法
export async function fetchSubjectOpinion(){
    return await service.get('/api/subject/opinion');
}

