<script setup>
import { ref } from 'vue';
const isReport = ref(true);
const checkedWord = ref('');
const message = ref('');
const isStep1=ref(true);
const isStep2=ref(false);
const list = ref([]);
const  props = defineProps(['list','isReport']);
list.value = props.list;
console.log(list.value)
isReport.value=props.isReport;
const onSubmitStep1 = (values) => {
    console.log('submit', values);
    isStep1.value = false;
    isStep2.value = true;
};
const fileList = ref([
    { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' }
]);

//选择举报类型
const activeReport = ref({
    typeName:'',
    reasonName:'',
});
const activeTypeIndex = ref(-1);
const typeList = ref([
    {id:1,name:'涉政有害1',reasonList:[{id:1,name:'其他1'}]},
    {id:2,name:'涉政有害2',reasonList:[{id:2,name:'其他2'}]},
    {id:3,name:'涉政有害3',reasonList:[{id:3,name:'其他3'}]},
    {id:4,name:'涉政有害4',reasonList:[{id:4,name:'其他4'}]},
    {id:5,name:'涉政有害5',reasonList:[{id:5,name:'其他5'}]},
])
const selectType = (value,index)=>{
    activeReport.value.typeName=value;
    activeTypeIndex.value=index;
}
const selectReason = (value)=>{
    activeReport.value.reasonName=value;
}
</script>
<template>
    <!-- 举报弹框 -->
    <van-popup class="report-popup" v-model:show="isReport" round closeable close-icon="close" position="bottom"
        :style="{ height: '90%' }">
        <h3>举报</h3>

        <van-form @submit="onSubmitStep1" v-show="isStep1">
            <div class="txt-tips">
                <span class="tip-icon">*</span>哪些搜索词属于不适内容
            </div>
            <van-radio-group v-model="checkedWord">
                <van-cell-group inset>
                    <van-cell :title="item.word" clickable v-for="(item,index) in list" :key="index">
                        <template #right-icon>
                            <van-radio :name="item.id" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>

            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" :disabled="!checkedWord">
                    提交
                </van-button>
            </div>
        </van-form>

        <div class="report-content" v-show="isStep2">
            <div class="report-item">
                <div class="type-tips">
                    <span class="tip-icon">*</span>请选择举报类型
                </div>
                <div class="wrap">
                    <div class="item" :class="{'active':activeReport.typeName==item.name}" @click="selectType(item.name,index)" v-for="(item,index) in typeList" :key="index">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="report-item" v-if="activeTypeIndex!=-1">
                <div class="type-tips">
                    <span class="tip-icon">*</span>请选择具体原因
                </div>
                <div class="wrap">
                    <div class="item" :class="{'active':activeReport.reasonName==item.name}" @click="selectReason(item.name)" v-for="(item,index) in typeList[activeTypeIndex].reasonList" :key="index">{{ item.name }}</div>
                </div>
            </div>
            <div class="report-item">
                <div class="type-tips">
                    请填写举报信息
                </div>
                <van-cell-group inset class="detail">
                    <van-field v-model="message" rows="2" autosize type="textarea" maxlength="500"
                        placeholder="您可以提供详细的举报说明，便于我们更快处理，如：哪部分的文字/图片存在[设置关键字]。（选填）" show-word-limit />
                </van-cell-group>
            </div>

            <div class="report-item">
                <van-uploader v-model="fileList" multiple />
                <div class="edit-tips">
                    您可以提交能证明该内容存在相关违规点的截图或证据材料。（选填）
                </div>
            </div>
            <div class="report-item">
                <div class="rule-tips">了解更多社区规则，请点击：《知乎社区规范》</div>
            </div>
            <div class="submit-report-wrap">
                <van-button round block type="primary" native-type="submit" :disabled="activeReport.typeName&&activeReport.reasonName">
                    提交举报
                </van-button>
            </div>
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
.report-popup {
    padding: 10px 10px 0 10px;

    .txt-tips {
        font-size: 12px;
        color: #838282;
        width: 84%;
        margin: 0 auto;
        line-height: 40px;
        .tip-icon{
            margin-right:4px;
        }
    }

    .type-tips {
        font-size: 16px;
        line-height: 50px;
        font-weight: 700;


        .tip-icon {
            color: red;
            vertical-align: middle;
            margin-right: 7px;
        }
    }

    .report-content {
        padding-bottom: 120px;

        .report-item {
            margin-top: 24px;

            .edit-tips {
                font-size: 12px;
                color: #838282;
            }

            .wrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;

                .item {
                    background: #eeeded;
                    line-height: 40px;
                    border-radius: 7px;
                    width: 47%;
                    text-align: center;
                    color: #000;
                    margin-bottom: 10px;
                    font-size: 14px;

                    &.active {
                        background: #ddf5fa;
                        color: rgb(26, 80, 228);
                        font-weight: 700;
                    }
                }
            }

            .detail {
                background: #999898;
            }

            .rule-tips {
                font-size: 13px;
            }
        }

        .submit-report-wrap {
            width: 100%;
            position: fixed;
            left: 0%;
            bottom: 0;
            z-index: 999;
            background:#fff;
            padding:10px 10px 30px 10px;
        }
    }
}
</style>
