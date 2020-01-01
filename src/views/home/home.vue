<template>
  <div id="home">
    <header class="mui-bar mui-bar-nav head">
      <strong class="mui-icon mui-icon-bars"></strong>
      <div class="search">
        <div class="search-left00"></div>
        <div class="search-left02">
          <span class="mui-icon mui-icon-pengyouquan search_eye"></span>
          <span class="v_line">|</span>
          <span class="mui-icon mui-icon-search search_icon"></span>
        </div>
        <div class="search-middle">
          <input placeholder="搜索" value=""/>
        </div>
        <div class="search-right"></div>
      </div>
      <router-link class="login" tag="div" :to="userInfo._id? '/mine' : '/login'">
        <span class="header_login_text" v-if="userInfo._id">
          <i class="iconfont icon-person"></i>
        </span>
        <a href="javascript:;" v-else>登录</a>
      </router-link>
    </header>
    <mt-swipe :auto="2500">
      <mt-swipe-item><img
        src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/52605/34/16435/123239/5dd79b26Ebef35a70/f051d02148a990bc.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      />
      </mt-swipe-item>
      <mt-swipe-item><img
        src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/87547/20/4829/99138/5de9be86Ee2a94572/180a9874d66e6a84.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      /></mt-swipe-item>
      <mt-swipe-item><img
        src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/90522/6/4257/85090/5de5ca84Eeb5c5079/0f645821ef19c9a5.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      /></mt-swipe-item>
      <mt-swipe-item><img
        src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/24046/10/6380/94217/5c511b9dEcc9ba39c/7913173ae5ed0617.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      /></mt-swipe-item>
    </mt-swipe>
    <div class="mall_nav">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
            />
              <span>超市</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp"
            />
              <span>数码电器</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp"
            />
              <span>服饰</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp"
            />
              <span>生鲜</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp"
            />
              <span>1小时到家</span>
            </li>
          </ul>
          <ul>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp"
            />
              <span>充值缴费</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp"
            />
              <span>9.9元拼购</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp"
            />
              <span>领券</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp"
            />
              <span>赚钱</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp"
            />
              <span>PLUS会员</span>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
            />
              <span>超市</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp"
            />
              <span>数码电器</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp"
            />
              <span>服饰</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp"
            />
              <span>生鲜</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp"
            />
              <span>1小时到家</span>
            </li>
          </ul>
          <ul>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp"
            />
              <span>充值缴费</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp"
            />
              <span>9.9元拼购</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp"
            />
              <span>领券</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp"
            />
              <span>赚钱</span>
            </li>
            <li><img
              src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp"
            />
              <span>PLUS会员</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination">
        <div v-for="(value,index) in 2" :key="value" :class="{current: swiperCurrent===index}"></div>
      </div>
    </div>
    <div class="show_img">
      <img
        src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/89114/40/4818/77250/5de9bf90E57fc7448/08a206dbfa135965.jpg!q70.jpg.dpg"/>
      <img src="//m.360buyimg.com/mobilecms/jfs/t1/97400/34/4870/76405/5de9bfd8E58cc229b/8ee7725674f5d2df.gif"/>
      <img
        src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/104688/13/4870/81159/5de9c020Eaab62bb4/55ebc8e27f17e0bb.jpg!q70.jpg.dpg"/>
    </div>
    <div class="seckill">
      <div class="seckill_content">
        <div class="seckill_top">
          <div class="top_left">
            <img src="../../assets/images/seckill_20191210024652.png"/>
            <strong>0点场</strong>
            <div class="seckill_time">10</div>
            <span>:</span>
            <div class="seckill_time">00</div>
            <span>:</span>
            <div class="seckill_time">00</div>
          </div>
          <div class="top_right">
            <a>更多抢购</a>
            <span class="mui-icon mui-icon-arrowright"></span>
          </div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="seckill_goods">
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/31624/11/14623/110411/5cbee9a3E956ab4c4/bd040c6a29865ed7.jpg.dpg"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>69.9</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/22746/35/11162/104085/5c8b6a19Eb8e8f34e/9cd57e3a481c7160.jpg.dpg"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>1099</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/104320/7/8339/91512/5e043ceaE0203cbf1/9b75869426b47311.png.webp"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>4698</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t25414/218/1808081205/295383/a90c9502/5bbd6dc3N97b57fd6.jpg.dpg"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>99.9</strong>
                </div>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="seckill_goods">
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/96534/3/5552/115872/5dedf106Ecc7e0de6/98ee839605e6ff9d.png.webp"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>1868</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/106757/20/5063/87510/5deb41ceE973a9095/82cbac4ece4dc3bd.png.webp"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>2896</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/71863/23/16317/116197/5ddb7074E6e8f48a0/7f07361204e18081.jpg.dpg"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>2468</strong>
                </div>
              </li>
              <li @click="$router.push('/goods/huawei')">
                <img
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/98020/11/5428/54593/5deda3d1E5c3020b7/ff3e3dde3cdd26e4.jpg.dpg"/>
                <div class="seckill_price">
                  <strong>￥</strong>
                  <strong>498</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="coupon">
      <div class="coupon_images">
        <img
          src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"/>
        <img
          src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"/>
      </div>
    </div>
    <div class="market_banner">
      <img
        src="//m.360buyimg.com/mobilecms/s750x200_jfs/t1/91992/11/5530/88892/5dee11b7E46e12087/df7ce9f0857e22fc.png!q70.webp"/>
    </div>
    <div class="market_goods">
      <ul class="goods_list">
        <li><img src="../../assets/images/goods_background.jpg">
          <img
            src="//m.360buyimg.com/babel/s220x220_jfs/t1/27769/10/15158/282788/5caed3f0E8f1983b0/b0c7ec6557809628.jpg!q70.dpg"/>
          <span>满599减100</span>
          <strong>品质钟表</strong>
        </li>
        <li><img src="../../assets/images/goods_background.jpg">
          <img
            src="//m.360buyimg.com/babel/s209x209_jfs/t1/91392/24/3990/176853/5de47ca6E3983a414/d4d9c74e6e945ab9.jpg!q70.dpg"/>
          <span>满199减100</span>
          <strong>宠物生活</strong>
        </li>
        <li><img src="../../assets/images/goods_background.jpg">
          <img
            src="//m.360buyimg.com/babel/s230x230_jfs/t28612/353/1366638202/110099/11848a24/5cde14a9Nb193bf1c.jpg!q70.dpg"/>
          <span>满199减100</span>
          <strong>家居盛典</strong>
        </li>
        <li><img src="../../assets/images/goods_background.jpg">
          <img src="//m.360buyimg.com/babel/jfs/t1/93298/1/4503/148588/5de75bc5E8759ae92/1d198eb3468ee583.png"/>
          <span>满300享9折</span>
          <strong>时尚服饰</strong>
        </li>
      </ul>
    </div>
    <div class="yard_title">
      <img
        src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"/>
    </div>
    <div class="yard_goods">
      <div class="list">
        <ul class="list_top">
          <li>
            <h4>包你喜欢</h4>
            <span>女生都喜欢闪闪亮的</span>
            <div class="top_images">
              <img
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/35938/26/11000/65888/5cfce239E7b939fd2/500e285060259e2f.jpg!q70.jpg.dpg"/>
              <img
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71507/39/1620/133465/5cff1291E5d5e84c3/1e561b0cd5ee54f8.jpg!q70.jpg.dpg"/>
            </div>
          </li>
          <li>
            <h4>海尔家电</h4>
            <span>科技领先海尔智慧家电</span>
            <div class="top_images">
              <img
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/78823/1/12449/86295/5d9c46c0Ee8ad1943/ee6b07c91bf4b20c.jpg!q70.jpg.dpg"/>
              <img
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/77310/37/7013/70780/5d50e360E37b8743a/8527ebdb3f118259.jpg!q70.jpg.dpg"/>
            </div>
          </li>
        </ul>
        <ul class="list_bottom">
          <li>
            <h4>好奇宝贝</h4>
            <span>陪你成长</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/59913/13/16203/198901/5ddb97ffEb253c1a6/42bc901e2eae6cfc.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>史话密书</h4>
            <span>安抚小情绪</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t2470/190/733146502/164951/8e9aa164/5626055aN9393c268.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>演绎酷感</h4>
            <span>引领新时尚</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/62428/16/14864/215843/5dc3fd1eEf7460b2e/e4d8d783b14909d8.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>急塑健身</h4>
            <span>健身达人</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/86230/8/5282/372295/5debcf2eE13866aa8/44c60d1be26ec1b7.jpg!q70.jpg.dpg"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="yard_title">
      <img
        src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/83520/33/13546/23804/5dcc2979E64764662/4654df31323ded7c.png!q70.jpg.dpg"/>
    </div>
    <div class="yard_goods">
      <div class="list">
        <ul class="list_bottom01 list_bottom">
          <li>
            <h4>免息星球</h4>
            <span>白条免息购</span>
            <img
              src="//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>品牌闪购</h4>
            <span>汇大牌好价</span>
            <img
              src="//m.360buyimg.com/n1/s150x150_jfs/t18337/154/150031047/10921/90aecefc/5a60384dN46bf2eac.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>品牌秒杀</h4>
            <span>低价抢大牌</span>
            <img
              src="//m.360buyimg.com/n1/s150x150_jfs/t1/87906/23/4477/130790/5de78aa3E27ba85bb/fc18e84971892fd1.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>京东直播</h4>
            <span>边看边买</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/79087/9/714/26464/5cef9636Ea4fe2ba8/90f1c44b1b1f6e2e.png!q70.jpg.dpg"/>
          </li>
        </ul>
        <ul class="list_bottom02 list_bottom">
          <li>
            <h4>排行榜</h4>
            <span>专属购物指南</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t10675/97/2254709219/9497/6ba245fd/59f14a23N0594b89c.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>拍拍好物</h4>
            <span>二手优品</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>新品首发</h4>
            <span>京东小魔方</span>
            <img
              src="//m.360buyimg.com/n1/s150x150_jfs/t11128/25/2817168750/9187/72b53c/5cdaa568N8f652eb8.jpg!q70.jpg.dpg"/>
          </li>
          <li>
            <h4>发现好货</h4>
            <span>发现品质生活</span>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend_title">
      <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"/>
    </div>
    <div class="recommend_goods">
      <ul class="child_list">
        <router-link tag="li" to="/goods/huawei">
          <img
            src="//gw2.alicdn.com/bao/uploaded/i4/2838892713/O1CN01PHLyre1Vub6TsMpDU_!!0-item_pic.jpg_210x210.jpg"/>
          <span>【5G新品上市】12期免息</span><br/>
          <span>Huawei/华为nova 6 5G/4G</span>
          <div class="bottom_price">
            <span>￥3199</span>
            <span>找相似</span>
          </div>
        </router-link>
        <router-link tag="li" to="/goods/huawei">
          <img
            src="//gw3.alicdn.com/bao/uploaded/i4/1714128138/O1CN01DmyAZP29zFlCvdIFf_!!0-item_pic.jpg_210x210.jpg"/>
          <span>【新品享6期免息】红米k30 </span><br/>
          <span>索尼大电量120Hz智能</span>
          <div class="bottom_price">
            <span>￥1699</span>
            <span>找相似</span>
          </div>
        </router-link>
      </ul>
      <ul class="child_list">
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/99940/16/5619/223313/5dee5fdbEaa3fb166/f1bcf4c35c1ce114.jpg!q70.dpg.webp"/>
          <span>男士公文包真皮2019年</span><br/>
          <span>新款手提包商务休闲</span>
          <div class="bottom_price">
            <span>￥459</span>
            <span>找相似</span>
          </div>
        </li>
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/18026/21/4530/159447/5c32bd70E2ba4e125/7cea8f457f694083.jpg!q70.dpg.webp"/>
          <span>【专柜正品原装直邮】加绒</span><br/>
          <span>品牌直营限量定制典藏版</span>
          <div class="bottom_price">
            <span>￥199</span>
            <span>找相似</span>
          </div>
        </li>
      </ul>
      <ul class="child_list">
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/5674/7/16692/408122/5be244a0Ec0718b02/625989961e082605.jpg!q70.dpg.webp"/>
          <span>斯进口 KDV巧克力味</span><br/>
          <span>（代可可脂）紫皮糖</span>
          <div class="bottom_price">
            <span>￥99</span>
            <span>找相似</span>
          </div>
        </li>
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/88082/28/5097/126013/5deb4d51E418b5c27/b1c03ee99f5cfbcd.jpg!q70.dpg.webp"/>
          <span>vivo Z5x 极点全面屏 </span><br/>
          <span>骁龙710 5000mAh电池</span>
          <div class="bottom_price">
            <span>￥1499</span>
            <span>找相似</span>
          </div>
        </li>
      </ul>
      <ul class="child_list">
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/1013/27/8173/457069/5ba7b0ceE9363d546/0ac0db84ddd2cc4a.jpg!q70.dpg.webp"/>
          <span>束身衣美体产后塑身衣连体</span><br/>
          <span>活力燃脂瘦身衣连体</span>
          <div class="bottom_price">
            <span>￥298</span>
            <span>找相似</span>
          </div>
        </li>
        <li @click="$router.push('/goods/huawei')">
          <img
            src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t25465/197/995867055/448059/725140a1/5b84bf38N92c1b29c.jpg!q70.dpg.webp"/>
          <span>土耳其进口 麦维他</span><br/>
          <span>巧粒脆 麦丽素</span>
          <div class="bottom_price">
            <span>￥399</span>
            <span>找相似</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min'

export default {
  name: 'home',
  data () {
    return {
      swiperCurrent: 0
    }
  },
  mounted () {
    const swiperContainer = new Swiper('.mall_nav')
    swiperContainer.on('slideChangeTransitionEnd', () => {
      this.swiperCurrent = swiperContainer.activeIndex
    })
    /* eslint-disable */
    new Swiper('.seckill_content')
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    // getSwipe () {
    //   this.axios.get('/api/movieOnInfoList?cityId=10').then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #home {
    .head {
      width: 100%;
      background-color: #cf2d28;
      color: #ececec;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search {
        display: flex;
        align-items: center;
        .search-left00 {
          width: 30px;
          height: 30px;
          background-color: #ffffff;
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
        }
        .search-left02 {
          margin-left: -9px;
          display: flex;
          align-items: center;
          width: 60px;
          height: 30px;
          background-color: #ffffff;
          color: #a9a9a9;
          .search_eye {
            color: #cf2d28;
            font-size: 20px;
          }
          .v_line {
            color: #cecece;
            background-color: #ffffff;
            margin: auto 4px;
          }
          .search_icon {
            font-size: 20px;
          }
        }
        .search-middle {
          height: 30px;
          background-color: #ffffff;
          input {
            margin-left: -1px;
            padding: 0 4px;
            width: 160px;
            font-size: 15px;
            line-height: 30px;
            border: 0px;
            color: #3a3a3a;
          }
          input::-webkit-input-placeholder { /* WebKit browsers */
            color: #CCCCCC;
          }
          input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #CCCCCC;
          }
          input::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #CCCCCC;
          }
          input:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #CCCCCC;
          }
        }
        .search-right {
          width: 30px;
          height: 30px;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          background-color: #ffffff;
        }
      }
      .login {
        a {
          color: #ececec;
          font-size: 15px;
        }
      }

    }
    .mint-swipe {
      height: 150px;
      .mint-swipe-item {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .mall_nav {
      width: 100%;
      margin: 12px 0;
      overflow: hidden;
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0px 20px;
        li {
          text-align: center;
          color: #828282;
          font-size: 10px;
          height: 75px;
          width: 75px;
          img {
            margin: 0 auto;
            width: 40px;
            height: 40px;
            margin-bottom: 5px;
          }
        }
      }
      .swiper-pagination {
        display: flex;
        position: absolute;
        /*justify-content: space-between;*/
        top: 353px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        div {
          background: #000;
          opacity: 40%;
          width: 8px;
          height: 8px;
          margin: 0 2px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          &.current {
            width: 16px;
            background: #d53522;
            opacity: 75%;
          }
        }
      }
    }
    .show_img {
      width: 100%;
      margin-bottom: -1px;
      display: flex;
      overflow: hidden;
      img:nth-child(1) {
        margin-left: -1px;
        width: 33%;
      }
      img:nth-child(3) {
        margin-left: -1px;
        width: 33%;
      }
      img:nth-child(2) {
        margin-left: -1px;
        width: 36%;
      }
    }
    .seckill {
      width: 100%;
      height: 175px;
      padding: 10px;
      background-color: #cf2d28;
      .seckill_content {
        width: 100%;
        height: 155px;
        background-color: #ffffff;
        border-radius: 5px;
        overflow: hidden;
        .seckill_top {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          .top_left {
            display: flex;
            line-height: 24px;
            margin-left: 7px;
            margin-top: -2px;
            strong {
              font-size: 12px;
              margin: 0 5px;
            }
            .seckill_time {
              text-align: center;
              margin-top: 4px;
              width: 20px;
              height: 16px;
              line-height: 16px;
              border: 1px solid #d8d8dd;
              font-size: 12px;
            }
            span {
              font-size: 11px;
              line-height: 24px;
            }
          }
          .top_right {
            font-size: 10px;
            color: #cf2d28;
            a {
              color: #cf2d28;
            }
            span {
              font-size: 10px;
            }
          }
        }
        .seckill_goods {
          display: flex;
          text-align: center;
          width: 100%;
          li {
            width: 25%;
            img {
              width: 66px;
              height: 66px;
              margin: 5px auto;
            }
            .seckill_price {
              color: #cf2d28;
              strong:nth-child(1) {
                font-size: 5px;
              }
              strong:nth-child(2) {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
    .coupon {
      width: 100%;
      height: 130px;
      margin: -1px 0;
      background-color: #cf2d28;
      padding: 10px;
      .coupon_images {
        display: flex;
        img {
          width: 50%;
          &:nth-child(1) {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &:nth-child(2) {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
    .market_banner {
      width: 100%;
      background: #cf2d28;
      img {
        width: 100%;
      }
    }
    .market_goods {
      width: 100%;
      height: 130px;
      background: #cf2d28;
      padding: 0 10px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 87px;
          height: 120px;
          position: relative;
          img:nth-child(1) {
            width: 100%;
            height: 100%;
            z-index: 1;
          }
          img:nth-child(2) {
            width: 63px;
            height: 62px;
            position: absolute;
            left: 12px;
            bottom: 49px;
            z-index: 0;
          }
          span {
            position: absolute;
            color: #ffffff;
            font-size: 9px;
            left: 12px;
            bottom: 28px;
          }
          strong {
            position: absolute;
            color: #ffffff;
            font-size: 14px;
            left: 15px;
            bottom: 7px;
          }
        }
      }
    }
    .yard_title {
      margin: -1px 0;
      width: 100%;
      height: 35px;
      background: #cf2d28;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .yard_goods {
      width: 100%;
      height: 260px;
      background-color: #cf2d28;
      padding: 0 10px;
      .list_top {
        display: flex;
        justify-content: space-around;
        li {
          width: 49%;
          height: 132px;
          padding: 6px 3px;
          background: #ffffff;
          &:nth-child(1) {
            border-top-left-radius: 5px;
          }
          &:nth-child(2) {
            border-top-right-radius: 5px;
          }
          h4 {
            color: #978aff;
            margin-left: 4px;
          }
          span {
            color: #85858a;
            font-size: 12px;
            margin-left: 4px;
          }
          .top_images {
            width: 150px;
            height: 65px;
            display: flex;
            justify-content: center;
            img {
              margin: 8px;
              width: 60px;
              height: 60px;
            }
          }
        }
      }
      .list_bottom {
        display: flex;
        justify-content: space-around;
        margin-top: 2px;
        li {
          width: 86px;
          height: 118px;
          background-color: #ffffff;
          /*padding: 5px 10px;*/
          padding-top: 5px;
          padding-left: 10px;
          &:nth-child(1) {
            border-bottom-left-radius: 5px;
          }
          &:nth-child(4) {
            border-bottom-right-radius: 5px;
          }
          h4 {
            font-size: 16px;
            margin-top: 4px;
            margin-bottom: 0px;
          }
          span {
            font-size: 10px;
            color: #78787d;
          }
          img {
            width: 63px;
            height: 63px;
          }
        }
      }
      .list {
        .list_bottom01 {
          margin: 0px;
          li {
            h4 {
              color: #cc8ecf;
            }
            &:nth-child(1) {
              border-top-left-radius: 5px;
              border-bottom-left-radius: 0px;
            }
            &:nth-child(4) {
              border-top-right-radius: 5px;
              border-bottom-right-radius: 0px;
            }
          }
        }
        .list_bottom02 {
          li {
            h4 {
              color: #cf5592;
            }
            &:nth-child(2) {
              h4 {
                color: #9397d9;
              }
            }
            &:nth-child(4) {
              h4 {
                color: #47d94b;
              }
            }
          }
        }
      }
    }
    .recommend_title {
      margin: 5px 10px 1px 10px;
      box-shadow: 2px 4px 6px #eaeaea;
      img {
        width: 100%;
      }
    }
    .recommend_goods {
      .child_list {
        display: flex;
        justify-content: space-between;
        margin: 4px 10px;
        li {
          width: 175px;
          height: 267px;
          background-color: #ffffff;
          box-shadow: 2px 4px 6px #eaeaea;
          img {
            width: 175px;
            height: 175px;
          }
          span {
            font-size: 13px;
            margin-left: 4px;
          }
          .bottom_price {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 3px 5px;
            span:nth-child(1) {
              font-size: 15px;
              color: #cf2d28;
            }
            span:nth-child(2) {
              font-size: 12px;
              margin-right: 5px;
              color: #828282;
              border: 1px solid #d4d4d9;
              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              border-radius: 2px;
              padding: 0px 4px;
            }
          }
        }
      }
    }
  }
</style>
