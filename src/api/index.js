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
//评论列表
export async function fetchCommentList(params){
    return await service.get('/api/comment/id');
}
//评论的子评论
export async function fetchCommentReply(params){
    return await service.get('/api/commentReply/id');
}
//关注页
export async function fetchInterest(){
    return await service.get('/api/interest/id');
}
//关注-热门页
export async function fetchInterestHot(){
    return await service.get('/api/interest/hot');
}

