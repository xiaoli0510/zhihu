<template>
    <div class="follow-item" v-for="item in list" :key="item.id">
        <div @click="enterDetail(item.id)">
            <h3>
                <slot name="title-icon">
                </slot>
                {{ item.title }}
            </h3>
            <van-row justify="space-between">
                <van-col class="gray-font">
                    {{ formatPeopleNumber(item.scan) }} 浏览.{{ formatPeopleNumber(item.answer) }}回答
                </van-col>
                <van-col class="time">
                    {{ formatTimeStamp(item.updateTime) }}更新
                </van-col>
            </van-row>
        </div>
        <MatterTopicItem :list="item.answerList" />
    </div>
</template>
<script setup>
import MatterTopicItem from '@/views/recent/component/Follow/MatterTopicItem.vue';
const formatTimeStamp = getCurrentInstance().proxy.$utils.formatTimeStamp;
const formatPeopleNumber = getCurrentInstance().proxy.$utils.formatPeopleNumber;
import { getCurrentInstance, ref } from 'vue';
const list = ref([
    {
        title: '知识就是培根',
        id: 1,
        scan: 1211110,
        answer: 4,
        updateTime: 1721506660000,//时间戳
        answerList: [{
            author: '刘勇',
            id: 2,
            detail: '质消被易而满美名选定响性形发长部。酸平果增热几非候组任织家书确公引安。开起构化王名听己所放置命种消积品。查科文进当相步米干准广织强月派在把制。被间少住放铁这斗商便采决问路今出连。世状值所信不民长命了非根前于步它象。解完家公合便南写到以属毛什从较思。什取革做石样快作划深代决存不月格质原。农节决根得活当元志五当无商何精干行。马县月光持提传观同算面样验工支心。术正层能公走织把农劳分边。进程美器照战拉局最每备识金传值百。图第原西广很十思段前海六必派走克。元实调作压打布分合复级等干身队。海团江放心素领候给二列场角。具增美族该今专温他生五们件开连往。片十确从级到具色消开国常果事龙反花。理华认由者府有再些手性委场展。处气制地龙取织省太律内消数必她个。义面四就角候一金结省程正。调安车区通是专包别先争厂然她快。治建个况反用布始什性历收历金群。何地线听走着前造飞方并不候种。声入年变持记示利工之是才法。门情思保较地就叫什商通能气难话间。格眼重活又很政然例准五心任角位。相方根向列例正二住研住委龙。名国公队边体被律则气立达都和回克集。单委如动知手和值积并白难实。指听造无响情江队农正长由去。百备西是广民感价有理属达议样府认日。阶快电走对身领各造论持准管技要。战和北风须民反除数更节样们发得不。公己律门量外五出半积照风周达二二整。连人院军说条提百经家色角快见。例必见万得看心验省方无示。低世飞样做马市验便部题商么际形。织它打应放阶华间十达保任造六过。交体何又话动都立下圆张江和且传。构时米利面共想共联通团每设劳才真政。后由族究十为线际验在国全应亲。越那队地位族各便相交老基。两拉设路先确决美又重组非种委引。月往空九听她本极极学又高好。及用立原想其时定立按也权社力人三三有。料高养低验层土面天商须干光构。思此别整类强节直局道广太。响派统整山队算况效力院去书阶记第着。三号相系及八劳地众当改物段社节有总。会按受劳一照节走下进其值研白十。家求家委术利率南形书装好干何低广备近。与局养需候质里对常声为提山气采。水同件团而五思想些林活产。无精各状我具着节期表准值委解。理任命日查构什取油民社委平热。做每解构火确队方严时究式质极西。子除组个都果片样强论验专离非关。的强改儿联老之研前部行先马却质亲海。就白新争表候和张律那机达。那取管应六和南党阶太层交法记而率任。龙规安存断解知京展群即路利。听元北群果安今计图统南今亲按。组却共成任通片响果起变们从备往常效平。者计发度集院向术常上片边导光。适重入治出没技六正看律快。斗角件任感心信须体商速组般使花。上重交果立它白思阶报持常具风。动矿目己明行矿级资织向照里。住马团值价强传任红战县气越些调。按花数工光公易和小连术干段步起术再。装八查以率状以位象半重维状山命将展。低结回保系五百们斗月且术而业造门。由万有平图能际压米门学积备求国基。物党低以由温单电给点况华真各眼。器看事示之受老格具了示何标。千几广火法日新备成经料复音更。法条安构决细活展太分近海点。较风火她构格院土权集最名产把入。元统管打市间快先没即统里太。一于议统算始青又成单些经争元本。出石示接定步集花养酸习国等生。且政方表直维断员属压把公路包业后。七界约她多二日再前交育方养。片她五识这称于其学示究听准着。府证青走发如最车已治现飞局到来。万证果白些金精程影任至接化电。它红布则但七统院从各织志报图以质。七张近义府果单细米还社品利满命。采地许想究周张算确应层社。形本只团单出压事深华色红大。参存克国分出求步听动六开济亲适快山。局器以严每属位心传据下立外只层。资何许片路得其政米通近将对。业行况角石所产专交选现低。做装斯易少得金强严许车增定年放两科。较它飞该委活东名才务与广照作构。调过育广斯老广至动活转厂海。就变他北起积海青八用身引声性多。按派律龙广通解象平原多手而节常。下深经根复油不它约实前争例。图验济育面会采公量组建走求以什张于。省难容里内王始发手段速圆得到计。最还青她子争过者变口式广米建指头。信热机花算转切省革员气水长题。京始流规委政色油备利太族共说院准本南。色相感万而近主条都给年西。度四道次设日置时东世酸理老什管五。可标名具委没三知至便北利家织局行。研社照包生百你近精状治军张铁。规元研越保完存最火手目此内制场算。必接音价基花声色专它别至或。清完海单单着们具器增易低型联市议特难。收书战直保证根识日火美列包观育它代。过形效经按属参白形住五任电他正。手们历边后采么国际总至由低感可切。史然集气集马地王保能农况包西题步。派流流了事原问持回任民当铁只县任支。酸主却小情情条美平放指越六。还适龙她即况养作想先内达构。最调非线证划争每物响打候象料月认消。人物量天五者节东口角规府完研提格往国。问风及半须济增叫所马连县头除度在相。政来办金称近意资高和叫响阶这也。平需们术个再西计是立准细名装利说正书。后干认造增主走论西生算入没此教。风万老与系由写广一天省证北状。具质但千向并细维其只包受重。党展务才下把政革族离参里看号值会何。委目报毛精价每型发目地七约做。转例到把火内改六难认员经听她。流照育取现计以天查派教斗张。集江斯队红进观酸达路列导圆。标目么员算飞都市构但年张八算值断后。况心委单两深从组广之己上院精非只位。专风变金斯一眼问立接形等信那书打务每。明往造场成这着认民情加她建。放上素子性号持规响志实领备变才周。声记热手结约次平教化厂据相。见很究资五者书生亲为志自。热层对术必常前数问成划又。实联权步几南平身整色道给省。走造结根七效造规建群包西圆你构山例。亲效公进个亲候况通安复史直题八局听划。性经族酸开张行且百头但我省。二确装少小们火断理复产容气约求更。何现于族公开毛积高效步家。主列矿转再严计有矿题要率则花经。究运联两同指江族府快保严称。十片金公过道从示包系构路毛引。院中对细又统观各美即质共期商目压山自。样心设构团工员识号验造己度山质产民。山向本思习众气后还用志使家你计。律容机易全真出建装关许报受。那明别政积情数种军物造学直矿合回头。类满通毛律反格线全整交水之格路务划。积约主八经组当热给需接龙系期。权省山发更院满都国图划还定先每步它着。世影厂际圆理断近究名便能行白民线结。真老写会料年历县定听府千石际级把。般可满为该型青基走领学须况现大他难。管月度素那酸存铁年步任边导。外取斯置花深据因增建领办片眼。华处子利阶有专体该人团根写政。查飞质验结是海回一养本方更中。每带清直列子合毛称器技斗南温学。话之议们型周日给观员院林样而元。格听龙出报主共被白风府低作京你队。',
            scan: 4,
            agree: 2,
            comment: 100,
            collect: 0,
            updateTime: 1731495015788,//minutes
        }]
    }]);
</script>
<style>
.follow-item {
    padding: 0 8px;

    .time {
        color: var(--color-blue-text);
        font-size: 10px;
    }
}
</style>
