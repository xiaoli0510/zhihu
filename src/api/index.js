import service from '@/utils/request/index.js';

export async function fetchIdeaList(){
    return await service.get('/api/user');
}