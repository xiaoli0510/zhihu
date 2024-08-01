<script setup>

</script>
<template>

    <van-row justify="space-between" class="gray-font sort">
        <van-col>
            全部内容
        </van-col>
        <van-col class="sort-wrap">
            <span class="active">精华</span>
            <span>|</span>
            <span>最热</span>
            <span>|</span>
            <span>最新</span>
        </van-col>
    </van-row>

    <div class="subject-discuss-list">
        <div class="subject-discuss-item">
            <van-row justify="start" align="center">
                <van-col>
                    <van-image round width="22px" height="22px"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                </van-col>
                <van-col offset="1">
                    <span class="name">张三</span>
                </van-col>
            </van-row>
            <div class="img-list">
                <van-image width="5rem" height="2rem" radius="4px" class="img-detail"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                <van-image width="5rem" height="2rem" radius="4px" class="img-detail"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                <van-image width="5rem" height="2rem" radius="4px" class="img-detail"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                <van-image width="5rem" height="2rem" radius="4px" class="img-detail"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            </div>
            <h3>zheshizeger</h3>
            <p class="sentence">22222222</p>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.sort {
    width: 97%;
    margin: 2% 0;
    .sort-wrap {
        span {
            margin: 0 2px;

            &.active {
                color: #000;
            }
        }
    }
}


.subject-discuss-item {
    width: 97%;
    margin: 2% 0;
    border: 1px solid red;

    .name {
        font-size: 10px;
    }

    .img-list {
        width: 100%;
        white-space: nowrap;
        border: 1px soli d #000;
        overflow: hidden;
        overflow-x: scroll;

        .img-detail {
            margin: 0 1%;
        }
    }

    .sentence {
        color: #666666;
    }
}
</style>
