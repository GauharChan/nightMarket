<template>
  <div class="box">
    <div class="hello">
      <div class="bgm">
        <p class="spanFont">
          店名：来啦,老弟
          <span class="fristImg">
            <img src="./img/biaoqing1.png" alt>
          </span>
          <br>
        </p>
        <audio controls="controls">
          <!--   autoplay="autoplay"自动播放    -->
          <source src="./music/钟一宪 - 明明_clip.mp3" type="audio/mpeg">
        </audio>
        <p>距离鼎湖理工夜市还有：</p>
        <div class="card">
          <div>
            <span>{{date}}天</span>
          </div>
          <p>Today:{{today}}</p>
        </div>
        <div class="Pcontent">
          <p>
            <span class="spanFont">美食广场前，14号帐篷(即53、54、55、56号摊位)</span>☜一家专卖小吃的小铺
            <br>特推出价格美丽的
            <span class="spanFont">毛巾卷，</span>
            <br>本铺有巧克力🍩抹茶☜两种口味
            <br>
          </p>
          <p>
            <img class="maoImg" src="./img/毛巾卷.jpg" alt>
          </p>
          <span class="spanFont">板栗:</span> 小编走访了高要最好吃的板栗店 :
          <br>
          <span class="spanFont">'中华板栗王'</span> ，并和老板谈好合作。
          <div>
            <img class="LiImg" src="./img/栗子2.jpg" alt>
          </div>作为一个辣妹子，怎么能少了微辣小吃呢（考虑到广东人），本店有
          <span class="spanFont">青瓜、海带、鸭锁骨。</span>说起鸭锁骨小编都要流口水了。。。
          <br>
          <p>
            <img class="maoImg" src="./img/鸭锁骨.jpg" alt>
          </p>当然了，我们鼎湖校区这么多美女，
          <span class="spanFont">棉花糖</span>这个东西是必须有的。
          <br>（偷偷告诉你：棉花糖有惊喜哟）
          <br>
          <img class="maoImg" :src="mianhuatang" alt="此图片13号才显示">
        </div>
      </div>
      <div class="top">
        <p>你得到了一个金蛋，对，你没有看错</p>
        <img src="./img/dan.gif" alt="photo">
      </div>
      <div class="main">
        <p>有点不耐烦了？稳住小伙子，往下看，活动内容太过于真实，我怕你受不了。</p>
        <img class="maoImg" src="./img/转盘.jpg" alt="转盘">
        <p>看，这位小哥已经等不及了</p>
        <div>
          <p>
            首先，非常感谢
            <span class="spanFont">LeoCar</span> 的独家赞助，共享汽车，共享出行。
            <span>
              <img class="woshou" src="./img/合作握手.png" alt>
            </span>
          </p>
          <img class="leoImg" src="./img/leo.jpg" alt>
        </div>
        <div class="bor">
          <p>活动规则</p>
          <p>
            <span class="spanFont">毛巾卷:</span>
            在开业前预定并转发此链接到朋友圈
            <span class="spanFont">并</span>集满8个赞，即可减免2元。
          </p>
          <p>
            凡是到本店购买东西满
            <span class="spanFont">23元</span>即可获得一次转盘抽奖的机会。
            <br>一等奖：LeoCar雨伞
            <br>二等奖：LeoCar杯子
            <br>三等奖：LeoCar礼品
          </p>
        </div>
        <div class="bor">
          <p>注意事项</p>
          <p id="sp">
            作为LeoCar的用户，我想不用我多说都知道优惠券是多难得了吧
            <br>也正因为如此，所以本次活动的奖品有限，送完即止哦（快做笔记，这点要考的哦）
            <br>还有优惠券只针对
            <span class="spanFont">LeoCar的用户哟</span>(如果你是普通学生，则抽到的优惠券会转换成本店送出的一份小吃！)
            <br>本次活动所有的奖励有限，
            <span class="spanFont">送完即止！！</span>
          </p>
        </div>
        <p class="bottom">
          你还在等什么？冲鸭！
          <span>
            <img class="woshou" src="./img/鸭子.png" alt>
          </span>
        </p>
        <p style="font-weight:600;">
          提前预定毛巾卷
          <span class="spanFont">(需交一半定金)</span>、或者你有什么疑问的，请识别下面的二维码！
        </p>
        <img class="leoImg" src="./img/二维码.jpg" alt>
        <div>
          <p>{{count}}</p>
          <p>{{doneTodosCount}}</p>
          <p>{{todoId}}</p>

          <button @click="change">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      title: "xx号摊位",
      date: 1,
      today: 5,
      mianhuatang: "",
      
    };
  },
  computed: {
   count(){
     return this.$store.state.count
   },
   doneTodosCount(){
     return this.$store.getters.doneTodosCount
   },
   todoId(){
     return this.$store.getters.getId(1)
   }
  
   },
  created() {
    let d = new Date();
    let r = d.getDate()<10?'0'+d.getDate():d.getDate();
    let m = parseInt(d.getMonth())+1<10?'0'+(parseInt(d.getMonth())+1):parseInt(d.getMonth())+1
    let sum = 13 - r;
    this.today = d.getFullYear() + "-" + m + "-" + r;
    if (r >= 13) {
      this.mianhuatang = require("./img/棉花糖.jpg");
    }
    if (sum >= 0) {
      this.date = sum;
    } else {
      this.date = 0;
    }
    console.log(`
    Author:Gauhar
⊂_ヽ
　 ＼＼  Λ＿Λ
　　 ＼( 'ㅅ' )
　　　 >　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|`);
  },
  methods: {
   change(){
     this.$store.commit('changeName')
     console.log(this.$store.state.count);
     
   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background-color: #fff;
  overflow: hidden;
}
p {
  margin: 10px 0;
}
.fristImg {
  position: relative;
  top: 7px;
}
.hello {
  width: 78%;
  margin: auto;
  text-align: center;
}
h2 {
  padding: 10px;
}
.top img,
.maoImg {
  width: 300px;
  margin: auto;
}
.LiImg {
  height: 301px;
  width: 300px;
  margin: auto;
}
.card div:first-child {
  margin: 25px;
}
.card span {
  font-size: 25px;
  padding: 10px;
  border: 2px solid rgb(247, 192, 192);
}
.Pcontent {
  line-height: 30px;
}
.woshou {
  width: 25px;
  height: 20px;
  position: relative;
  top: 5px;
  left: -6px;
}
.bor {
  border: 1px solid rgb(247, 192, 192);
  margin: 10px;
}
.bor p {
  padding: 0 10px;
  line-height: 25px;
}
#sp {
  text-align: left;
}
.leoImg {
  width: 170px;
  margin: auto;
}

.bottom {
  color: rgb(245, 133, 89);
  margin-bottom: 20px;
  font-weight: 600;
}
.spanFont {
  font-weight: 600;
  font-size: 15px;
  color: rgb(245, 133, 89);
}
audio {
  width: 210px;
}
@media screen and (max-width: 370px) {
  .top img,
  .maoImg {
    width: 175px;
    margin: auto;
  }
  .LiImg {
    width: 175px;
    height: auto;
    margin: auto;
  }
}
</style>
