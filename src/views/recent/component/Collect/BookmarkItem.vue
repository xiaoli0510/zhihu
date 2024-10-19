<template>
   <div class="content-item">
            <h4>我的收藏 <van-tag color="#faf7f7" text-color="#a09f9f">默认</van-tag></h4>
            <van-row justify="space-between" class="gray-font">
                <van-col>
                    2个内容.仅自己可见
                </van-col>
                <van-col>
                    <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
                        <template #reference>
                            <van-icon name="ellipsis" />
                        </template>
                    </van-popover>
                </van-col>
            </van-row>
            <div class="line"></div>
        </div>
</template>
<script setup>
    
</script>
<style scoped lang='scss'>
    .content-item {
        padding: 10px 9px;

        .line {
            width: 100%;
            height: 1px;
            background: #a09f9f;
            margin-top: 4px;
        }
    }
</style>
