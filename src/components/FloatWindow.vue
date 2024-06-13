<script setup>
import { ref } from 'vue';

const list = ref([{
    id: 1,
    title: '标题',
    sentence: '内容',
    img: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
}]);

const isSpread = ref(false);
const showList = () => {
    isSpread.value = true;
}
const hideList = () => {
    isSpread.value = false;
}
const handleDelete = () => {
    this.list.value.splice(index, 1);
}
const clear = () => {
    this.list.value = [];
}
</script>
<template>
    <div class="float-window" align="center" @click="showList">
        <van-icon name="sign" color="#1989fa" />
        <span>2</span>
    </div>

    <div class="wrap-mask" v-show="showList">
        <div class="inner">
            <van-row justify="space-around">
                <van-col span="4">
                    <van-icon name="sign" />
                    <span>2</span>
                </van-col>
                <van-col span="4" class="clear" @click="clear">
                    清空
                </van-col>
            </van-row>
            <div class="item-wrap">
                <div class="float-item" v-for="item in list">
                    <van-row justify="space-around">
                        <van-col span="14">
                            <h3>{{ item.title }}</h3>
                            <p class="sentence">{{ item.sentence }}</p>
                        </van-col>
                        <van-col span="7">
                            <van-image width="100" height="100" radius="5px" :src="item.img" />

                        </van-col>
                        <van-col span="2" offset="1">
                            <van-icon name="cross" @click="handleDelete" color="#555555" />
                        </van-col>
                    </van-row>
                    <van-divider />

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
    height: 40px;
    line-height: 40px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    color: #1989fa;
    font-weight: 700;
    border-radius: 10px 0 0 10px;
}

.wrap-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    color: #2b2b2b;

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

            .sentence {
                font-size: #555555;
                font-size: 10px;
            }
        }
    }
}
</style>
