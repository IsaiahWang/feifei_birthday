// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的菲菲",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日!",
        "这段时间，我见过你",
        "可爱的样子",
        "焦虑的样子",
        "都是我喜欢的样子",
        "虽然你总说些丧气话",
        "但在我心里",
        "你也是颗暖暖的小太阳哦",
        "一起加油吧!",
        "幸运会眷顾我们的！",
        "对了，礼物收到了吗？",
        "今年要吃好好的",
        "然后才有力气学习",
        "和想我!",
        "生日快乐~~"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给": "./imgs/flower.jpg",
        "心爱的菲菲": "./imgs/feifei.png",
        "今天是你的生日": "./imgs/cake.jpg",
        "这是我们在一起的": "./imgs/together.gif",
        "第一个生日!": "./imgs/first.jpg",
        "这段时间，我见过你": "./imgs/look.gif",
        "可爱的样子": "./imgs/happy.gif",
        "焦虑的样子": "./imgs/angry.gif",
        "都是我喜欢的样子": "./imgs/project_heart.jpg",
        "虽然你总说些丧气话": "./imgs/sad.jpg",
        "但在我心里": "./imgs/shy.gif",
        "你也是颗暖暖的小太阳哦": "./imgs/sun.jpg",
        "一起加油吧!": "./imgs/work.jpg",
        "幸运会眷顾我们的！": "./imgs/good.jpg",
        "对了，礼物收到了吗？": "./imgs/gift.jpg",
        "今年要吃好好的": "./imgs/eat.jpg",
        "然后才有力气学习": "./imgs/study.jpeg",
        "和想我!": "./imgs/me.jpg",
        "生日快乐~~": "./imgs/birthday.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "菲菲的生日礼物",
        play: "这是啥呀",
        bannar_coming: "不确定，我再看看",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "想对菲菲说"
    },

    // 结束语
    loveText: '爱你的海东~'
};
