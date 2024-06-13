<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { fetchTodoList } from '@/api/search.js';
import {useTodoStore} from '@/stores/todo.js';
const todo = useTodoStore();
const list = ref([]);
fetchTodoList()
    .then(res => {
        list.value = res.data.list;
    })
    .catch(err => {
        console.log(err);
    })

watch(list,()=>{
    todo.initList(list.value);
},{
    immediate:true
})

const total = computed(() => {
    return list.value.length;
})

const isSpread = ref(false);
const showList = () => {
    isSpread.value = true;
}
const hideList = () => {
    isSpread.value = false;
}
const handleDelete = (id) => {
    todo.delete(id);
}

const isSure = ref(false);
const clear = () => {
    isSure.value = true;
}
const sureClear = () => {
    list.value = [];
}

const router = useRouter();
const enterDetail = (id) => {
    isSpread.value = false;
    router.push(`/novel/detail/${id}`);
}
</script>
<template>
    <div class="float-window" align="center" @click="showList" v-if="todo.total > 0">
        <van-icon name="sign" color="#1989fa" size="25px" />
        <span>{{ todo.total }}</span>
    </div>

    <div class="wrap-mask" v-if="isSpread && total > 0" @click.self="hideList">
        <div class="inner">
            <van-row justify="space-between">
                <van-col span="3" offset="1">
                    <van-icon name="sign" size="20px" />
                    <span>{{ total }}</span>
                </van-col>
                <van-col span="3" class="clear" @click.stop="clear" v-if="!isSure">
                    清空
                </van-col>
                <van-col span="6" class="clear" @click.stop="sureClear" v-else>
                    <van-icon name="cross" color="#1989fa" />
                    确认清空
                </van-col>
            </van-row>
            <div class="item-wrap">
                <div class="item" v-for="item in todo.watchList" @click="enterDetail(item.id)">
                    <van-row align="center" justify="space-around">
                        <van-col span="21" class="item-left">
                            <van-row>
                                <van-col span="19" class="txt-wrap">
                                    <h3>{{ item.title }}</h3>
                                    <van-text-ellipsis class="sentence" :content="item.sentence" />
                                </van-col>
                                <van-col span="4">
                                    <van-image width="60" height="60" radius="5px" :src="item.avatar" />
                                </van-col>
                            </van-row>
                        </van-col>
                        <van-col span="2" offset="1">
                            <van-icon name="cross" @click.stop="handleDelete(item.id)" color="#555555" />
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.float-window {
    position: fixed;
    right: 0;
    top: 34%;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #1989fa;
    font-weight: 700;
    border-radius: 20px 0 0 20px;
    width: 67px;
    background: #fff;

    >span {
        vertical-align: top;
    }
}

.wrap-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    color: #2b2b2b;
    z-index: 999;

    .inner {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translate(0, -50%);

        .clear {
            color: #1989fa;
        }

        .item-wrap {
            background: #fff;
            padding: 7px 10px;
            margin-top: 10px;

            .item {

                &:not(:last-child) {
                    .item-left {
                        border-bottom: 1px solid #eeebeb;
                    }
                }

                .item-left {

                    padding: 10px 0;

                    .txt-wrap {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .sentence {
                            color: #797777;
                            font-size: 15px;
                        }
                    }

                }

            }
        }
    }
}
</style>
