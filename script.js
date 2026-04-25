const characters = [
    {
        name: "阿格莱雅",
        title: "浪漫的统御者",
        emoji: "👑",
        description: "你是天生的指挥者。在别人还在权衡利弊时，你已经开始推动局势向你想要的方向发展。你习惯站在更高维度看问题——不是“做不做”，而是“如何让它发生”。",
        traits: ["浪漫", "领袖", "坚定", "信任"]
    },
    {
        name: "缇宝",
        title: "活泼热情的三重圣女",
        emoji: "🌟",
        description: "你是那种让世界变得更温暖的人。你对情绪极其敏感，也极其真诚。你不只是“活着”，你是在用全部感受去体验世界。",
        traits: ["活泼", "热情", "勇敢", "聪明"]
    },
    {
        name: "万敌",
        title: "背负宿命枷锁的无畏战士",
        emoji: "⚔️",
        description: "你不是来思考的，你是来行动的。你享受对抗、挑战和未知。越危险的局面，你越清醒。",
        traits: ["勇敢",  "忠诚", "坚韧", "反思"]
    },
    {
        name: "遐蝶",
        title: "温柔守护亡者的幽蝶",
        emoji: "🦋",
        description: "你不是在生活，你是在探索一切可能性。你思维跳跃、直觉敏锐，总能看到别人看不到的路径。但你从不急着停下来，因为你更在意“可能”，而不是“答案”。",
        traits: ["温柔", "细腻", "独立",  "坚定"]
    },
    {
        name: "风堇",
        title: "以歌声疗愈英雄史诗的诗人",
        emoji: "🎵",
        description: "你是人群中的“稳定点”。你在意关系，在意情感，也在意每一个人的状态。很多人能撑下去，是因为你在。",
        traits: ["自由", "治愈","体贴", "艺术"]
    },
    {
        name: "那刻夏",
        title: "挑战神谕的求知者",
        emoji: "✨",
        description: "你不只是聪明，你是危险的聪明。你习惯把一切拆解成结构，再推导出结果。你看到的不是现在，而是未来的走向。",
        traits: ["理性", "求知", "叛逆", "深邃"]
    },
    {
        name: "白厄",
        title: "承载众人愿望的轮回者",
        emoji: "❄️",
        description: "你思考的深度，常常让你远离世界。你不轻易表达，但一旦思考，就会走到极端。你不是冷，而是太深。",
        traits: ["牺牲", "成熟",  "责任", "坚定"]
    },
    {
        name: "刻律德菈",
        title: "以胜率为准则的棋手",
        emoji: "🛡️",
        description: "你相信秩序，并且愿意成为秩序本身。在你眼里，世界应该是清晰、稳定、可控的。你不需要认同，你需要“正确”。",
        traits: ["冷静", "策略", "果断", "决心",]
    },
    {
        name: "海瑟音",
        title: "深海中来以剑为琴的乐师",
        emoji: "💙",
        description: "你是情绪的容器，也是情绪的放大器。你用感受理解世界，用表达回应世界。你不是不理性，你只是更相信“感觉”。",
        traits: ["深沉", "内敛","热情", "矛盾"]
    },
    {
        name: "长夜月",
        title: "为守护而堕入黑暗的影之守护者",
        emoji: "🌙",
        description: "你不参与，你在看。你习惯在边缘位置观察一切。当别人混乱时，你反而最清醒。",
        traits: ["神秘", "守护",  "极端", "诗意"]
    },
    {
        name: "昔涟",
        title: "栽种爱之花的浪漫少女",
        emoji: "📜",
        description: "你不属于任何固定形态。你追求内心的真实，而不是外界的定义。你可以温柔，也可以远离。",
        traits: [ "温柔", "天真", "包容", "梦幻"]
    },
    {
        name: "赛飞儿",
        title: "随心所欲的诈术大师",
        emoji: "⚙️",
        description: "你的人生像一场游戏，而你是最会玩的那种人。你不喜欢规则，你喜欢“利用规则”。你不是混乱，而是有意识地打破秩序。",
        traits: ["狡黠", "自由",  "自信", "独立"]
    },
    {
        name: "丹恒·腾荒",
        title: "背负文明命运的行者",
        emoji: "🐉",
        description: "你是那种“不会倒下的人”。你不张扬，但你始终在承担。你可以压住情绪，只为了让一切继续运转。",
        traits: ["沉稳", "责任", "可靠", "坚毅"]
    }
];

const questions = [
    {
        text: "周末朋友突然约你出去玩，但你已经很累了，你会？",
        options: [
            { text: "虽然累，但还是会一起去", characters: ["缇宝", "风堇", "阿格莱雅"] },
            { text: "婉拒，在家好好休息", characters: ["遐蝶", "长夜月", "白厄"] },
            { text: "建议换个时间，主动约下次", characters: ["刻律德菈", "丹恒·腾荒"] },
            { text: "看是谁约的再决定", characters: ["赛飞儿", "那刻夏", "万敌"] }
        ]
    },
    {
        text: "在网上看到一部很想看的电影，但评价两极分化，你会？",
        options: [
            { text: "自己去看，不在意评价", characters: ["那刻夏", "赛飞儿", "万敌"] },
            { text: "等口碑稳定了再看", characters: ["白厄", "海瑟音", "刻律德菈"] },
            { text: "约上朋友一起去支持", characters: ["缇宝", "风堇", "阿格莱雅"] },
            { text: "问问朋友圈的看法再决定", characters: ["长夜月", "昔涟", "遐蝶"] }
        ]
    },
    {
        text: "点外卖时，你更在意什么？",
        options: [
            { text: "价格实惠，分量足", characters: ["白厄", "万敌", "丹恒·腾荒"] },
            { text: "口味好吃最重要", characters: ["缇宝", "风堇", "赛飞儿"] },
            { text: "店铺评分和评价", characters: ["阿格莱雅", "刻律德菈"] },
            { text: "包装精美，有仪式感", characters: ["长夜月", "昔涟", "遐蝶"] }
        ]
    },
    {
        text: "和朋友聊天时，你通常是？",
        options: [
            { text: "倾听为主，给予回应", characters: ["遐蝶", "白厄", "海瑟音"] },
            { text: "主导话题，分享趣事", characters: ["缇宝", "阿格莱雅", "风堇"] },
            { text: "深入讨论，交换观点", characters: ["那刻夏", "刻律德菈", "丹恒·腾荒"] },
            { text: "调侃打趣，气氛轻松", characters: ["赛飞儿", "长夜月", "昔涟"] }
        ]
    },
    {
        text: "你的房间通常是什么风格？",
        options: [
            { text: "整洁有序，一尘不染", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "温馨舒适，有生活气息", characters: ["风堇", "缇宝", "昔涟"] },
            { text: "随性自然，有点乱但有秩序", characters: ["赛飞儿", "那刻夏", "万敌"] },
            { text: "简约冷淡，不拘小节", characters: ["白厄", "海瑟音", "长夜月", "遐蝶"] }
        ]
    },
    {
        text: "面对选择困难时，你通常会？",
        options: [
            { text: "快速做决定，不纠结", characters: ["万敌", "缇宝", "那刻夏"] },
            { text: "列出利弊表，理性分析", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "让别人帮忙选", characters: ["赛飞儿", "风堇", "长夜月"] },
            { text: "随缘，相信命运的安排", characters: ["遐蝶", "昔涟", "白厄"] }
        ]
    },
    {
        text: "你更愿意为什么花大钱？",
        options: [
            { text: "旅行和体验新鲜事物", characters: ["缇宝", "赛飞儿", "长夜月"] },
            { text: "投资自己，学习技能", characters: ["那刻夏", "阿格莱雅", "刻律德菈"] },
            { text: "给家人朋友买礼物", characters: ["风堇", "遐蝶", "昔涟"] },
            { text: "购置实用的生活用品", characters: ["白厄", "万敌", "丹恒·腾荒", "海瑟音"] }
        ]
    },
    {
        text: "你更喜欢哪种出行方式？",
        options: [
            { text: "提前规划好一切", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "说走就走，随心所欲", characters: ["赛飞儿", "风堇", "缇宝"] },
            { text: "一个人安静地走", characters: ["遐蝶", "白厄", "长夜月"] },
            { text: "和朋友们一起热闹地走", characters: ["万敌", "那刻夏", "昔涟"] }
        ]
    },
    {
        text: "你在学生时代是什么类型？",
        options: [
            { text: "学霸，成绩名列前茅", characters: ["那刻夏", "阿格莱雅", "丹恒·腾荒"] },
            { text: "人缘好，朋友遍天下", characters: ["缇宝", "风堇", "赛飞儿"] },
            { text: "默默无闻，安静低调", characters: ["遐蝶", "白厄", "海瑟音"] },
            { text: "有个性，不走寻常路", characters: ["万敌", "刻律德菈", "长夜月", "昔涟"] }
        ]
    },
    {
        text: "当你生气时，你会？",
        options: [
            { text: "默默消化，不表现出来", characters: ["白厄", "海瑟音", "丹恒·腾荒"] },
            { text: "当场发泄出来", characters: ["万敌", "缇宝", "那刻夏"] },
            { text: "找朋友倾诉", characters: ["风堇", "昔涟", "长夜月"] },
            { text: "转移注意力，做别的事", characters: ["阿格莱雅", "赛飞儿", "遐蝶"] }
        ]
    },
    {
        text: "你更prefer什么样的社交方式？",
        options: [
            { text: "和人面对面聊天", characters: ["缇宝", "阿格莱雅", "风堇"] },
            { text: "通过文字消息交流", characters: ["长夜月", "赛飞儿", "那刻夏"] },
            { text: "打电话或发语音", characters: ["万敌", "刻律德菈"] },
            { text: "其实不太需要社交", characters: ["遐蝶", "白厄", "海瑟音", "丹恒·腾荒"] }
        ]
    },
    {
        text: "你倾向于穿什么风格的衣服？",
        options: [
            { text: "简约大方，百搭实用", characters: ["白厄", "丹恒·腾荒", "海瑟音"] },
            { text: "精致时尚，追求潮流", characters: ["长夜月", "阿格莱雅", "刻律德菈"] },
            { text: "舒适随性，怎么舒服怎么穿", characters: ["赛飞儿", "风堇", "缇宝"] },
            { text: "有个性，不撞款", characters: ["万敌", "那刻夏", "昔涟"] }
        ]
    },
    {
        text: "当你听到八卦新闻时，你会？",
        options: [
            { text: "兴致勃勃地听完", characters: ["缇宝", "长夜月", "风堇"] },
            { text: "听听而已，不评价", characters: ["阿格莱雅", "白厄", "海瑟音"] },
            { text: "不感兴趣，直接略过", characters: ["那刻夏", "赛飞儿", "丹恒·腾荒"] },
            { text: "理性分析，不盲从", characters: ["刻律德菈", "遐蝶", "万敌"] }
        ]
    },
    {
        text: "你在团队项目中通常扮演什么角色？",
        options: [
            { text: "领导者，统筹全局", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "执行者，完成任务", characters: ["白厄", "万敌", "缇宝"] },
            { text: "创意担当，提出想法", characters: ["赛飞儿", "风堇", "那刻夏"] },
            { text: "协调者，调解矛盾", characters: ["遐蝶", "昔涟", "长夜月", "海瑟音"] }
        ]
    },
    {
        text: "你更喜欢在什么环境工作/学习？",
        options: [
            { text: "安静咖啡厅或图书馆", characters: ["遐蝶", "白厄", "那刻夏"] },
            { text: "热闹的公共场所", characters: ["缇宝", "风堇", "长夜月"] },
            { text: "在家，舒适自由", characters: ["赛飞儿", "昔涟", "海瑟音"] },
            { text: "办公室或教室，有氛围", characters: ["阿格莱雅", "刻律德菈", "万敌", "丹恒·腾荒"] }
        ]
    },
    {
        text: "你通常怎么规划你的一天？",
        options: [
            { text: "提前计划好每个时段", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "有大致的方向，随机应变", characters: ["缇宝", "风堇", "万敌"] },
            { text: "完全看心情", characters: ["赛飞儿", "长夜月", "昔涟"] },
            { text: "列个清单，但经常打乱", characters: ["那刻夏", "白厄", "遐蝶", "海瑟音"] }
        ]
    },
    {
        text: "你更prefer什么样的音乐？",
        options: [
            { text: "节奏感强，动感十足", characters: ["缇宝", "万敌", "风堇"] },
            { text: "舒缓放松，治愈心灵", characters: ["遐蝶", "昔涟", "海瑟音"] },
            { text: "有深度，值得品味", characters: ["那刻夏", "阿格莱雅", "丹恒·腾荒"] },
            { text: "小众独特，不随大流", characters: ["赛飞儿", "长夜月", "刻律德菈", "白厄"] }
        ]
    },
    {
        text: "当朋友向你倾诉烦恼时，你会？",
        options: [
            { text: "认真倾听，给予安慰", characters: ["遐蝶", "风堇", "昔涟"] },
            { text: "给出具体的建议", characters: ["阿格莱雅", "刻律德菈", "那刻夏"] },
            { text: "转移话题，让他开心", characters: ["缇宝", "赛飞儿", "长夜月"] },
            { text: "默默陪伴，不多说话", characters: ["白厄", "海瑟音", "万敌", "丹恒·腾荒"] }
        ]
    },
    {
        text: "你更看重朋友的什么特质？",
        options: [
            { text: "真诚坦率", characters: ["万敌", "缇宝", "那刻夏"] },
            { text: "温柔体贴", characters: ["遐蝶", "风堇", "昔涟"] },
            { text: "有趣有料", characters: ["赛飞儿", "长夜月"] },
            { text: "可靠稳重", characters: ["白厄", "阿格莱雅", "刻律德菈", "丹恒·腾荒", "海瑟音"] }
        ]
    },
    {
        text: "你希望在别人眼中是什么样的形象？",
        options: [
            { text: "值得信赖的依靠", characters: ["阿格莱雅", "白厄", "丹恒·腾荒"] },
            { text: "有趣开朗的开心果", characters: ["缇宝", "风堇", "赛飞儿"] },
            { text: "神秘有魅力的人", characters: ["长夜月", "那刻夏", "万敌"] },
            { text: "温柔善良的好人", characters: ["遐蝶", "昔涟", "海瑟音", "刻律德菈"] }
        ]
    },
    
    // 社交场景
    {
        text: "朋友聚会时，你通常会？",
        options: [
            { text: "主动活跃气氛，带动大家", characters: ["缇宝", "风堇", "赛飞儿"] },
            { text: "安静地坐在一边观察", characters: ["遐蝶", "白厄", "海瑟音"] },
            { text: "和熟悉的人深度交流", characters: ["阿格莱雅", "丹恒·腾荒", "刻律德菈"] },
            { text: "随机和不同的人聊天", characters: ["那刻夏", "万敌", "长夜月"] }
        ]
    },
    {
        text: "当你遇到陌生人主动搭话时，你会？",
        options: [
            { text: "热情回应，积极交流", characters: ["缇宝", "风堇", "昔涟"] },
            { text: "保持礼貌但有所保留", characters: ["阿格莱雅", "丹恒·腾荒", "海瑟音"] },
            { text: "敷衍几句后离开", characters: ["白厄", "遐蝶", "刻律德菈"] },
            { text: "看心情决定如何回应", characters: ["赛飞儿", "那刻夏", "长夜月"] }
        ]
    },
    
    // 工作场景
    {
        text: "工作中遇到困难时，你会？",
        options: [
            { text: "独立解决，不轻易求助", characters: ["万敌", "丹恒·腾荒", "刻律德菈"] },
            { text: "向同事或上级寻求帮助", characters: ["缇宝", "风堇", "阿格莱雅"] },
            { text: "分析问题，制定详细计划", characters: ["那刻夏", "海瑟音", "白厄"] },
            { text: "换个角度思考，寻找新方法", characters: ["赛飞儿", "长夜月", "遐蝶"] }
        ]
    },
    {
        text: "你更倾向于什么样的工作环境？",
        options: [
            { text: "充满挑战和变化", characters: ["万敌", "赛飞儿", "那刻夏"] },
            { text: "稳定有序，按部就班", characters: ["白厄", "刻律德菈", "丹恒·腾荒"] },
            { text: "团队合作，氛围和谐", characters: ["缇宝", "风堇", "阿格莱雅"] },
            { text: "相对独立，自由发挥", characters: ["遐蝶", "长夜月", "海瑟音"] }
        ]
    },
    
    // 生活场景
    {
        text: "周末在家，你通常会？",
        options: [
            { text: "宅在家，好好休息", characters: ["白厄", "遐蝶", "海瑟音"] },
            { text: "约朋友出去活动", characters: ["缇宝", "风堇", "赛飞儿"] },
            { text: "学习或工作，提升自己", characters: ["那刻夏", "阿格莱雅", "刻律德菈"] },
            { text: "做自己喜欢的事情", characters: ["长夜月", "昔涟", "万敌"] }
        ]
    },
    {
        text: "当你收到一份意外的礼物时，你会？",
        options: [
            { text: "非常开心，立刻表达感谢", characters: ["缇宝", "风堇", "昔涟"] },
            { text: "平静接受，礼貌致谢", characters: ["阿格莱雅", "丹恒·腾荒", "海瑟音"] },
            { text: "好奇礼物的价值和意义", characters: ["那刻夏", "赛飞儿", "刻律德菈"] },
            { text: "思考对方的意图", characters: ["长夜月", "万敌", "遐蝶"] }
        ]
    },
    
    // 情感场景
    {
        text: "当你喜欢上一个人时，你会？",
        options: [
            { text: "直接表白，大胆追求", characters: ["万敌", "缇宝", "赛飞儿"] },
            { text: "默默关心，等待时机", characters: ["白厄", "遐蝶", "海瑟音"] },
            { text: "理性分析，制定计划", characters: ["那刻夏", "刻律德菈", "丹恒·腾荒"] },
            { text: "暗示对方，希望对方主动", characters: ["阿格莱雅", "风堇", "长夜月"] }
        ]
    },
    {
        text: "当你和朋友发生矛盾时，你会？",
        options: [
            { text: "主动沟通，解决问题", characters: ["阿格莱雅", "风堇", "昔涟"] },
            { text: "冷静一段时间，再处理", characters: ["白厄", "海瑟音", "丹恒·腾荒"] },
            { text: "坚持自己的观点，不妥协", characters: ["万敌", "那刻夏", "刻律德菈"] },
            { text: "避免冲突，选择和解", characters: ["缇宝", "赛飞儿", "遐蝶"] }
        ]
    },
    
    // 兴趣爱好场景
    {
        text: "你更喜欢哪种类型的电影？",
        options: [
            { text: "动作冒险，刺激热血", characters: ["万敌", "赛飞儿", "缇宝"] },
            { text: "文艺剧情，深刻感人", characters: ["风堇", "昔涟", "海瑟音"] },
            { text: "科幻悬疑，烧脑思考", characters: ["那刻夏", "刻律德菈", "丹恒·腾荒"] },
            { text: "奇幻魔幻，充满想象", characters: ["长夜月", "遐蝶", "阿格莱雅"] }
        ]
    },
    {
        text: "你平时喜欢做什么来放松自己？",
        options: [
            { text: "运动健身，释放压力", characters: ["万敌", "缇宝", "风堇"] },
            { text: "阅读听音乐，安静独处", characters: ["遐蝶", "白厄", "海瑟音"] },
            { text: "逛街购物，享受生活", characters: ["赛飞儿", "昔涟", "长夜月"] },
            { text: "学习新技能，充实自己", characters: ["那刻夏", "阿格莱雅", "刻律德菈"] }
        ]
    },
    
    // 价值观场景
    {
        text: "你认为人生中最重要的是什么？",
        options: [
            { text: "家庭和亲情", characters: ["白厄", "遐蝶", "昔涟"] },
            { text: "事业和成就", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "自由和快乐", characters: ["赛飞儿", "风堇", "缇宝"] },
            { text: "知识和智慧", characters: ["那刻夏", "海瑟音", "万敌"] }
        ]
    },
    {
        text: "当你面对不公时，你会？",
        options: [
            { text: "挺身而出，维护正义", characters: ["万敌", "阿格莱雅", "刻律德菈"] },
            { text: "理性分析，寻找解决方案", characters: ["那刻夏", "丹恒·腾荒", "海瑟音"] },
            { text: "避免冲突，保持中立", characters: ["白厄", "遐蝶", "昔涟"] },
            { text: "灵活应对，保护自己", characters: ["赛飞儿", "长夜月", "风堇"] }
        ]
    },
    
    // 日常场景
    {
        text: "当你排队时有人插队，你会？",
        options: [
            { text: "直接制止，维护秩序", characters: ["万敌", "刻律德菈", "阿格莱雅"] },
            { text: "默默忍受，不与人争执", characters: ["白厄", "遐蝶", "海瑟音"] },
            { text: "调侃对方，化解尴尬", characters: ["赛飞儿", "风堇", "缇宝"] },
            { text: "看情况决定是否干预", characters: ["那刻夏", "长夜月", "丹恒·腾荒"] }
        ]
    },
    {
        text: "你更喜欢哪种天气？",
        options: [
            { text: "阳光明媚，充满活力", characters: ["缇宝", "风堇", "昔涟"] },
            { text: "细雨绵绵，宁静舒适", characters: ["遐蝶", "白厄", "海瑟音"] },
            { text: "狂风暴雨，充满力量", characters: ["万敌", "赛飞儿", "那刻夏"] },
            { text: "雪飘如絮，浪漫诗意", characters: ["长夜月", "阿格莱雅", "刻律德菈"] }
        ]
    },
    
    // 思维方式场景
    {
        text: "当你需要做重要决定时，你会？",
        options: [
            { text: "凭直觉快速决定", characters: ["万敌", "缇宝", "赛飞儿"] },
            { text: "收集信息，理性分析", characters: ["那刻夏", "刻律德菈", "丹恒·腾荒"] },
            { text: "咨询他人意见", characters: ["风堇", "阿格莱雅", "昔涟"] },
            { text: "权衡利弊，谨慎选择", characters: ["白厄", "海瑟音", "遐蝶"] }
        ]
    },
    {
        text: "你如何看待失败？",
        options: [
            { text: "失败是成功之母，从中学习", characters: ["阿格莱雅", "那刻夏", "丹恒·腾荒"] },
            { text: "暂时的挫折，继续努力", characters: ["万敌", "缇宝", "风堇"] },
            { text: "接受现实，调整方向", characters: ["白厄", "海瑟音", "刻律德菈"] },
            { text: "视为成长的机会", characters: ["遐蝶", "昔涟", "长夜月"] }
        ]
    },
    
    // 消费观念场景
    {
        text: "你购物时更看重什么？",
        options: [
            { text: "品质和实用性", characters: ["白厄", "丹恒·腾荒", "海瑟音"] },
            { text: "品牌和外观", characters: ["阿格莱雅", "长夜月", "刻律德菈"] },
            { text: "价格和性价比", characters: ["万敌", "那刻夏", "风堇"] },
            { text: "冲动购买，喜欢就买", characters: ["缇宝", "赛飞儿", "昔涟"] }
        ]
    },
    {
        text: "你会为了什么而熬夜？",
        options: [
            { text: "工作或学习", characters: ["阿格莱雅", "刻律德菈", "丹恒·腾荒"] },
            { text: "娱乐活动", characters: ["缇宝", "赛飞儿", "风堇"] },
            { text: "思考问题", characters: ["那刻夏", "长夜月", "遐蝶"] },
            { text: "很少熬夜，按时休息", characters: ["白厄", "海瑟音", "万敌"] }
        ]
    }
];

let currentQuestion = 0;
let scores = {};
let userSelections = [];

characters.forEach(char => {
    scores[char.name] = 0;
});

for (let i = 0; i < questions.length; i++) {
    userSelections[i] = null;
}

function startQuiz() {
    const book = document.getElementById('magic-book');
    book.classList.add('open');
    
    setTimeout(() => {
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
        // 初始化答题卡和导航按钮
        initQuestionScreen();
        showQuestion();
    }, 800);
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-number').textContent = `问题 ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question-text').textContent = question.text;
    
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = () => selectOption(option, index);
        optionsContainer.appendChild(btn);
    });
    
    // 更新答题卡
    updateAnswerCard();
}

function selectOption(option, index) {
    // Reset scores for this question if previously answered
    if (userSelections[currentQuestion] !== null) {
        const prevOption = questions[currentQuestion].options[userSelections[currentQuestion]];
        prevOption.characters.forEach(charName => {
            scores[charName]--;
        });
    }
    
    // Add scores for current selection
    option.characters.forEach(charName => {
        scores[charName]++;
    });
    
    // Save selection
    userSelections[currentQuestion] = index;
    
    // Trigger page flip animation
    const pageFlip = document.getElementById('page-flip');
    pageFlip.classList.add('flipping');
    
    // Auto advance to next question after animation
    setTimeout(() => {
        pageFlip.classList.remove('flipping');
        
        // 检查是否还有未回答的问题
        const hasUnansweredQuestions = userSelections.some(selection => selection === null);
        
        // 如果当前是最后一题且所有问题都已回答，才显示结果
        if (currentQuestion === questions.length - 1 && !hasUnansweredQuestions) {
            showResult();
        } else if (currentQuestion < questions.length - 1) {
            // 否则，继续下一题
            nextQuestion();
        }
        // 如果是最后一题但还有未回答的问题，不做任何操作，让用户继续回答
    }, 600);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        const pageFlip = document.getElementById('page-flip');
        pageFlip.classList.add('flipping');
        
        setTimeout(() => {
            pageFlip.classList.remove('flipping');
            currentQuestion++;
            showQuestion();
        }, 600);
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        const pageFlip = document.getElementById('page-flip');
        pageFlip.classList.add('flipping');
        
        setTimeout(() => {
            pageFlip.classList.remove('flipping');
            currentQuestion--;
            showQuestion();
        }, 600);
    }
}

// 初始化答题卡
function initAnswerCard() {
    const answerCardGrid = document.getElementById('answer-card-grid');
    answerCardGrid.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        const item = document.createElement('div');
        item.className = 'answer-card-item';
        item.textContent = i + 1;
        item.onclick = () => goToQuestion(i);
        answerCardGrid.appendChild(item);
    }
    
    // 添加点击事件处理
    const answerCardButton = document.getElementById('answer-card-button');
    answerCardButton.addEventListener('click', function() {
        this.classList.toggle('active');
    });
    
    // 点击其他地方关闭答题卡
    document.addEventListener('click', function(event) {
        const answerCardButton = document.getElementById('answer-card-button');
        const answerCardDropdown = document.getElementById('answer-card-dropdown');
        
        if (!answerCardButton.contains(event.target) && !answerCardDropdown.contains(event.target)) {
            answerCardButton.classList.remove('active');
        }
    });
}

// 更新答题卡状态
function updateAnswerCard() {
    const items = document.querySelectorAll('.answer-card-item');
    items.forEach((item, index) => {
        item.classList.remove('active', 'answered');
        
        if (index === currentQuestion) {
            item.classList.add('active');
        }
        
        if (userSelections[index] !== null) {
            item.classList.add('answered');
        }
    });
}

// 跳转到指定问题
function goToQuestion(questionIndex) {
    if (questionIndex >= 0 && questionIndex < questions.length) {
        const pageFlip = document.getElementById('page-flip');
        pageFlip.classList.add('flipping');
        
        setTimeout(() => {
            pageFlip.classList.remove('flipping');
            currentQuestion = questionIndex;
            showQuestion();
        }, 600);
    }
}

// 初始化导航按钮
function initNavButtons() {
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function showResult() {
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    let maxScore = -1;
    let secondMaxScore = -1;
    let resultChar = characters[0];
    let secondChar = characters[1];
    
    characters.forEach(char => {
        if (scores[char.name] > maxScore) {
            secondMaxScore = maxScore;
            secondChar = resultChar;
            maxScore = scores[char.name];
            resultChar = char;
        } else if (scores[char.name] > secondMaxScore && scores[char.name] < maxScore) {
            secondMaxScore = scores[char.name];
            secondChar = char;
        }
    });
    
    // 如果没有第二人格（所有分数相同），选择第二个角色作为默认
    if (secondMaxScore === -1) {
        secondChar = characters[1];
    }
    
    // 计算各维度命中情况
    const dimensions = {
        '社交型': 0,
        '工作型': 0,
        '生活型': 0,
        '情感型': 0,
        '理性型': 0
    };
    
    // 根据用户选择统计各维度
    for (let i = 0; i < userSelections.length; i++) {
        if (userSelections[i] !== null) {
            const selectedOption = questions[i].options[userSelections[i]];
            const chars = selectedOption.characters;
            
            // 统计命中角色所属的维度
            chars.forEach(charName => {
                const char = characters.find(c => c.name === charName);
                if (char) {
                    const traits = char.traits;
                    if (traits.includes('活泼') || traits.includes('热情') || traits.includes('狡黠')) {
                        dimensions['社交型']++;
                    }
                    if (traits.includes('领袖') || traits.includes('冷静') || traits.includes('策略')) {
                        dimensions['工作型']++;
                    }
                    if (traits.includes('浪漫') || traits.includes('自由') || traits.includes('神秘')) {
                        dimensions['生活型']++;
                    }
                    if (traits.includes('温柔') || traits.includes('细腻') || traits.includes('包容')) {
                        dimensions['情感型']++;
                    }
                    if (traits.includes('理性') || traits.includes('求知') || traits.includes('深邃')) {
                        dimensions['理性型']++;
                    }
                }
            });
        }
    }
    
    // 找出最突出的维度
    const topDimensions = Object.entries(dimensions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .filter(([dim, count]) => count > 0);
    
    // 显示角色头像（如果有图片）
    const avatarContainer = document.getElementById('character-avatar');
    const avatarPath = `image/${resultChar.name}.PNG`;
    
    // 检查图片是否存在
    const img = new Image();
    img.onload = function() {
        avatarContainer.innerHTML = `<img src="${avatarPath}" alt="${resultChar.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    };
    img.onerror = function() {
        // 如果图片不存在，显示emoji
        avatarContainer.innerHTML = `<span style="font-size: 5rem;">${resultChar.emoji}</span>`;
    };
    img.src = avatarPath;
    
    // 显示第二人格
    const matchScoreContainer = document.getElementById('match-score');
    const secondAvatarPath = `image/${secondChar.name}.PNG`;
    
    matchScoreContainer.innerHTML = `
        <div class="score-label">你的第二黄金裔人格是</div>
        <div class="second-avatar-container">
            <div class="second-avatar" id="second-avatar"></div>
        </div>
    `;
    
    // 检查第二人格图片是否存在
    const secondImg = new Image();
    secondImg.onload = function() {
        document.getElementById('second-avatar').innerHTML = `<img src="${secondAvatarPath}" alt="${secondChar.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    };
    secondImg.onerror = function() {
        // 如果图片不存在，显示emoji
        document.getElementById('second-avatar').innerHTML = `<span style="font-size: 3rem;">${secondChar.emoji}</span>`;
    };
    secondImg.src = secondAvatarPath;
    
    document.getElementById('character-title').textContent = resultChar.title;
    document.getElementById('result-description').textContent = resultChar.description;

    const traitsContainer = document.getElementById('character-traits');
    traitsContainer.innerHTML = '';
    resultChar.traits.forEach(trait => {
        const tag = document.createElement('span');
        tag.className = 'trait-tag';
        tag.textContent = trait;
        traitsContainer.appendChild(tag);
    });
    
    // 显示命中维度
    const dimensionContainer = document.getElementById('dimension-analysis');
    if (topDimensions.length > 0) {
        let dimensionHTML = '<div class="dimension-title">命中维度分析</div><div class="dimension-tags">';
        topDimensions.forEach(([dim, count]) => {
            const barWidth = Math.round((count / 40) * 100);
            dimensionHTML += `
                <div class="dimension-item">
                    <span class="dimension-name">${dim}</span>
                    <div class="dimension-bar">
                        <div class="dimension-bar-fill" style="width: ${barWidth}%"></div>
                    </div>
                </div>
            `;
        });
        dimensionHTML += '</div>';
        dimensionContainer.innerHTML = dimensionHTML;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    characters.forEach(char => {
        scores[char.name] = 0;
    });
    
    for (let i = 0; i < questions.length; i++) {
        userSelections[i] = null;
    }
    
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('progress-fill').style.width = '0%';
}

function init() {
    document.getElementById('magic-book').addEventListener('click', startQuiz);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

// 在显示问题屏幕时初始化答题卡和导航按钮
function initQuestionScreen() {
    initAnswerCard();
    initNavButtons();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
