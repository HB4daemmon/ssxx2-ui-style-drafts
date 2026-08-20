(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&t(g)}).observe(document,{childList:!0,subtree:!0});function r(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerPolicy&&(s.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?s.credentials="include":d.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(d){if(d.ep)return;d.ep=!0;const s=r(d);fetch(d.href,s)}})();const ae=[{id:"difficulty",label:"01 入劫"},{id:"fate",label:"02 择定命格"},{id:"opening-basic",label:"03 选择普攻技"},{id:"battle-opening",label:"04 首战·火巷拦路"},{id:"reward-rage",label:"05 首胜·怒气技"},{id:"journey",label:"06 朝歌·焚册余烬"},{id:"event",label:"07 宫库封门"},{id:"battle-normal",label:"08 普通斗法·灰巷巡兵"},{id:"reward-normal",label:"09 战利结算"},{id:"build",label:"10 整理道藏"},{id:"shop",label:"11 坊市易物"},{id:"rest",label:"12 井栏修整"},{id:"preparation",label:"13 印阵前夜"},{id:"battle-boss",label:"14 Boss 斗法"},{id:"act-result",label:"15 第一幕已定"},{id:"ending",label:"16 选择本世归宿"},{id:"settlement",label:"17 本世封册"},{id:"codex",label:"18 封神录"}],N=[{id:"fate-cangfeng",name:"藏锋·敛刃",tag:"藏锋",body:"刀不出鞘时，旁人只看见你的沉默；真正的锋口藏在你愿意放过哪一步。定局后闪避增加5点",effect:"闪避 +5",sourceKey:"catalog.2.1.fate-cangfeng"},{id:"fate-pojun",name:"破军·劫锋",tag:"破军",body:"刀锋先碰到阵脚；你必须在对手回身前决定要不要追进裂口。定局后外功增加5点",effect:"外功 +5",sourceKey:"catalog.2.1.fate-pojun"},{id:"fate-tianyi",name:"天医·回春",tag:"天医",body:"一口气尚未断尽，草木与血气都在催你伸手；救回来的不只是伤势，还有未说完的话。定局后气血上限增加6点",effect:"气血上限 +6",sourceKey:"catalog.2.1.fate-tianyi"}],_=[{id:"basic-decree-name-sword",name:"敕名剑诀",tag:"凡品 · 普攻技",body:"敕名剑诀·凡品普攻技；生效时外功增加9点。入阵即用的常备手段，占普攻技位。",effect:"外功 +9",sourceKey:"catalog.2.2.basic-decree-name-sword"},{id:"basic-mortal-breath",name:"留凡养气诀",tag:"凡品 · 普攻技",body:"留凡养气诀·凡品普攻技；生效时气血上限增加8点。入阵即用的常备手段，占普攻技位。",effect:"气血上限 +8",sourceKey:"catalog.2.2.basic-mortal-breath"},{id:"basic-sever-contract",name:"断契斩因",tag:"凡品 · 普攻技",body:"断契斩因·凡品普攻技；生效时外功增加11点。入阵即用的常备手段，占普攻技位。",effect:"外功 +11",sourceKey:"catalog.2.2.basic-sever-contract"}],O=[{id:"rage-defy-fate",name:"逆命还真",tag:"凡品 · 怒气技",body:"逆命还真·凡品怒气技；生效时外功增加10点。怒气蓄满时出手，占怒气技位。",effect:"外功 +10",sourceKey:"catalog.2.3.rage-defy-fate"},{id:"rage-investiture",name:"封榜镇灵",tag:"凡品 · 怒气技",body:"封榜镇灵·凡品怒气技；生效时外功增加11点。怒气蓄满时出手，占怒气技位。",effect:"外功 +11",sourceKey:"catalog.2.3.rage-investiture"},{id:"rage-restore-name",name:"还名返照",tag:"凡品 · 怒气技",body:"还名返照·凡品怒气技；生效时法术增加10点。怒气蓄满时出手，占怒气技位。",effect:"法术 +10",sourceKey:"catalog.2.3.rage-restore-name"}],w={"aux-adversity-step":{body:"逆劫步·凡品辅法；生效时身法增加7点。常驻辅法位，不必临阵起手。"},"aux-mandate-guard":{body:"受命护身法·凡品辅法；生效时外防增加6点。常驻辅法位，不必临阵起手。"},"aux-wilds-life":{body:"山野藏生法·凡品辅法；生效时闪避增加6点。常驻辅法位，不必临阵起手。"},"artifact-bronze-charm":{body:"青铜护符·凡品法宝；生效时气血上限增加5点。佩于法宝位，随身生效。"},"artifact-cloud-pendant":{body:"流云佩·灵品法宝；生效时外防增加8点。佩于法宝位，随身生效。"},"artifact-soul-bell":{body:"引魂铃·凡品法宝；生效时气血上限增加7点。佩于法宝位，随身生效。"},"artifact-bailing-banner":{body:"百灵幡·神品法宝；生效时气血上限增加15点。佩于法宝位，随身生效。"},"strategy-causality-counter":{body:"因果反制·凡品战策；生效时命中增加6点。列于战策位，随战策一同生效。"}},me=[{id:"tribulation_0",name:"劫数 0",status:"可选 · 默认",locked:!1,realm:"敌方境界偏移 0",decree:"开局天条 0",risk:"标准",body:"斗法压力不增；开局不附加天条；高风险遭遇按标准资格。",toast:"",sourceKey:"catalog.3.1.tribulation_0"},{id:"tribulation_1",name:"劫数 1",status:"未解锁",locked:!0,realm:"敌方境界偏移 +1",decree:"开局天条 1",risk:"高危",body:"敌方高出一个小境；开局一条天条；高风险遭遇需高危资格。",toast:"完成劫数 0 的成功终局后开放。",sourceKey:"catalog.3.1.tribulation_1"},{id:"tribulation_2",name:"劫数 2",status:"未解锁",locked:!0,realm:"敌方境界偏移 +2",decree:"开局天条 2",risk:"极危",body:"敌方高出两个小境；开局两条天条；高风险遭遇需极危资格。",toast:"完成劫数 1 的成功终局后开放。",sourceKey:"catalog.3.1.tribulation_2"}],J={text:"资源、掉落、修为与灵石所得不随难度增加；三档经济倍率同为 1.0。",sourceKey:"catalog.3.1.economy"},R={opening:{title:"火巷拦路",context:"入劫试锋 / 普通斗法",objective:"击败巡火甲士，打通前往朝歌火场的路。",arena:"ember",player:{name:"榜外无名者",hp:"100 / 100",hpVictory:"85 / 100",rage:"0 / 100",extra:"普攻 敕名剑诀 · 命格 破军·劫锋 · 怒气技 首胜后开启",maxHp:100,maxRage:100},enemy:{name:"巡火甲士",tag:"普通敌手",hp:"42 / 42",hpVictory:"0 / 42",extra:"外功 9 · 外防 3 · 身法 4",maxHp:42},logs:[{text:"第 1 回合 · 敕名剑诀命中巡火甲士，造成 14 点伤害。",sourceKey:"catalog.3.4.log.1",round:1,hit:"enemy"},{text:"第 1 回合 · 巡火甲士反击，榜外无名者失去 8 点气血。",sourceKey:"catalog.3.4.log.2",round:1,hit:"player"},{text:"第 2 回合 · 破军·劫锋撕开阵脚，敕名剑诀造成 15 点伤害。",sourceKey:"catalog.3.4.log.3",round:2,hit:"enemy"},{text:"第 2 回合 · 巡火甲士反击，榜外无名者失去 7 点气血。",sourceKey:"catalog.3.4.log.4",round:2,hit:"player"},{text:"第 3 回合 · 敕名剑诀造成 13 点伤害，巡火甲士倒下。",sourceKey:"catalog.3.4.log.5",round:3,hit:"enemy"}],frames:[{playerHp:100,enemyHp:42,rage:0,round:1,evidence:0,phase:1},{playerHp:100,enemyHp:28,rage:0,round:1,evidence:0,phase:1},{playerHp:92,enemyHp:28,rage:0,round:1,evidence:0,phase:1},{playerHp:92,enemyHp:13,rage:0,round:2,evidence:0,phase:1},{playerHp:85,enemyHp:13,rage:0,round:2,evidence:0,phase:1},{playerHp:85,enemyHp:0,rage:0,round:3,evidence:0,phase:1}],result:"斗法胜利 · 3 回合",attribution:"敕名剑诀稳定压低气血，破军·劫锋在第 2 回合扩大了破阵窗口。",primary:"领取首胜奖励",sourceKey:"catalog.3.4"},normal:{title:"灰巷巡兵",context:"朝歌火线 / 普通斗法",objective:"击败灰巷巡兵，守住从宫库带出的见证。",arena:"ash",player:{name:"榜外无名者",hp:"85 / 100",hpVictory:"58 / 100",rage:"35 / 100",extra:"外功 30 · 敕名剑诀 / 封榜镇灵 / 破军·劫锋",maxHp:100,maxRage:100},enemy:{name:"灰巷巡兵",tag:"普通敌手",hp:"50 / 50",hpVictory:"0 / 50",extra:"外功 12 · 外防 4 · 法防 3 · 身法 5",maxHp:50},logs:[{text:"第 1 回合 · 敕名剑诀命中灰巷巡兵，造成 14 点伤害。",sourceKey:"catalog.3.8.log.1",round:1,hit:"enemy"},{text:"第 1 回合 · 灰巷巡兵反击，榜外无名者失去 11 点气血。",sourceKey:"catalog.3.8.log.2",round:1,hit:"player"},{text:"第 2 回合 · 封榜镇灵发动，造成 15 点伤害，怒气归零。",sourceKey:"catalog.3.8.log.3",round:2,hit:"enemy"},{text:"第 2 回合 · 灰巷巡兵反击，榜外无名者失去 8 点气血。",sourceKey:"catalog.3.8.log.4",round:2,hit:"player"},{text:"第 3 回合 · 敕名剑诀造成 12 点伤害。",sourceKey:"catalog.3.8.log.5",round:3,hit:"enemy"},{text:"第 3 回合 · 灰巷巡兵反击，榜外无名者失去 8 点气血。",sourceKey:"catalog.3.8.log.6",round:3,hit:"player"},{text:"第 4 回合 · 敕名剑诀造成 9 点伤害，灰巷巡兵倒下。",sourceKey:"catalog.3.8.log.7",round:4,hit:"enemy"}],frames:[{playerHp:85,enemyHp:50,rage:35,round:1,evidence:0,phase:1},{playerHp:85,enemyHp:36,rage:35,round:1,evidence:0,phase:1},{playerHp:74,enemyHp:36,rage:35,round:1,evidence:0,phase:1},{playerHp:74,enemyHp:21,rage:0,round:2,evidence:0,phase:1},{playerHp:66,enemyHp:21,rage:0,round:2,evidence:0,phase:1},{playerHp:66,enemyHp:9,rage:0,round:3,evidence:0,phase:1},{playerHp:58,enemyHp:9,rage:0,round:3,evidence:0,phase:1},{playerHp:58,enemyHp:0,rage:0,round:4,evidence:0,phase:1}],result:"斗法胜利 · 4 回合",attribution:"封榜镇灵在第 2 回合压住反攻，敕名剑诀完成收束。",primary:"结算普通奖励",sourceKey:"catalog.3.8"},act1:{title:"第一幕 Boss · 劫印监令",context:"朝歌·焚册余烬 / 印阵核心",objective:"劫印监令会把火场残印钉回封条。护住三处能让旁人指认的证物并击破它的印阵，胜负都以证物是否留存结算。",arena:"seal",player:{name:"榜外无名者",hp:"88 / 100",hpVictory:"41 / 100",rage:"—",extra:"外功 30 · 外防 19 · 敕名剑诀 / 封榜镇灵 / 流云佩 1阶",maxHp:100,maxRage:100},enemy:{name:"劫印监令",tag:"第一幕 Boss",hp:"60 / 60",hpVictory:"0 / 60",extra:"外功 16 · 法术 0 · 外防 6 · 法防 6 · 身法/命中/闪避/机缘 5",maxHp:60},logs:[{text:"第 1 回合 · 劫印监令展开封条，榜外无名者失去 14 点气血。",sourceKey:"catalog.3.14.act1.log.1",round:1,hit:"player"},{text:"第 1 回合 · 活人证词回应，证物进度 1/3。",sourceKey:"catalog.3.14.act1.log.2",round:1,hit:"none"},{text:"第 2 回合 · 封榜镇灵击碎第一道印角，造成 18 点伤害。",sourceKey:"catalog.3.14.act1.log.3",round:2,hit:"enemy"},{text:"第 2 回合 · 封泥拓片显形，证物进度 2/3；榜外无名者失去 16 点气血。",sourceKey:"catalog.3.14.act1.log.4",round:2,hit:"player"},{text:"第 3 回合 · 敕名剑诀造成 17 点伤害，残册空名被护住，证物进度 3/3。",sourceKey:"catalog.3.14.act1.log.5",round:3,hit:"enemy"},{text:"第 3 回合 · 劫印监令压回封条，榜外无名者失去 17 点气血。",sourceKey:"catalog.3.14.act1.log.6",round:3,hit:"player"},{text:"第 4 回合 · 破军·劫锋撕开印阵，造成 25 点伤害，劫印监令倒下。",sourceKey:"catalog.3.14.act1.log.7",round:4,hit:"enemy"}],frames:[{playerHp:88,enemyHp:60,rage:0,round:1,evidence:0,phase:1},{playerHp:74,enemyHp:60,rage:0,round:1,evidence:0,phase:1},{playerHp:74,enemyHp:60,rage:0,round:1,evidence:1,phase:1},{playerHp:74,enemyHp:42,rage:0,round:2,evidence:1,phase:1},{playerHp:58,enemyHp:42,rage:0,round:2,evidence:2,phase:1},{playerHp:58,enemyHp:25,rage:0,round:3,evidence:3,phase:1},{playerHp:41,enemyHp:25,rage:0,round:3,evidence:3,phase:1},{playerHp:41,enemyHp:0,rage:0,round:4,evidence:3,phase:1}],result:"第一幕 Boss 胜利 · 4 回合",attribution:"三处证物依次显形，破军·劫锋在印阵闭合前完成终击。证物 3/3 全部留存。",primary:"查看第一幕结算",sourceKey:"catalog.3.14.act1"},final:{title:"第四幕终战 · 申公豹·断契终战",context:"封神台·断契还名",objective:"断契终战会把四幕证物折成一枚替罪名。按证物次序击破三道回声，并用已经确认的代价守住自己的选择。",arena:"altar",player:{name:"榜外无名者",hp:"90 / 100",hpVictory:"64 / 100",rage:"—",extra:"入场 灵石 140 · 修为 800 · 终局快进镜像",maxHp:100,maxRage:100},enemy:{name:"申公豹·断契终战",tag:"终局 Boss",hp:"60 / 60",hpVictory:"0 / 60",extra:"外功 16 · 法术 0 · 外防 6 · 法防 6 · 身法/命中/闪避/机缘 5",maxHp:60},logs:[{text:"第 1 回合 · 第一相展开，朝歌残册回声被折成替罪名。",sourceKey:"catalog.3.14.final.log.1",round:1,hit:"none"},{text:"第 1 回合 · 敕名剑诀击破朝歌回声，造成 16 点伤害；榜外无名者失去 12 点气血。",sourceKey:"catalog.3.14.final.log.2",round:1,hit:"player"},{text:"第 2 回合 · 封榜镇灵击破陈塘骨灯回声，造成 14 点伤害。",sourceKey:"catalog.3.14.final.log.3",round:2,hit:"enemy"},{text:"阶段转换 · 申公豹显出断契本相，Boss 气血 30/60。",sourceKey:"catalog.3.14.final.log.4",round:2,hit:"none"},{text:"第 3 回合 · 西岐粮契回声反噬，榜外无名者失去 14 点气血。",sourceKey:"catalog.3.14.final.log.5",round:3,hit:"player"},{text:"第 3 回合 · 因果反制把责任推回原处，造成 15 点伤害。",sourceKey:"catalog.3.14.final.log.6",round:3,hit:"enemy"},{text:"第 4 回合 · 已确认的舍财代价封住替罪名，敕名剑诀造成 15 点伤害，申公豹·断契终战倒下。",sourceKey:"catalog.3.14.final.log.7",round:4,hit:"enemy"}],frames:[{playerHp:90,enemyHp:60,rage:0,round:1,evidence:0,phase:1},{playerHp:90,enemyHp:60,rage:0,round:1,evidence:0,phase:1},{playerHp:78,enemyHp:44,rage:0,round:1,evidence:0,phase:1},{playerHp:78,enemyHp:30,rage:0,round:2,evidence:0,phase:1},{playerHp:78,enemyHp:30,rage:0,round:2,evidence:0,phase:2},{playerHp:64,enemyHp:30,rage:0,round:3,evidence:0,phase:2},{playerHp:64,enemyHp:15,rage:0,round:3,evidence:0,phase:2},{playerHp:64,enemyHp:0,rage:0,round:4,evidence:0,phase:2}],result:"终战胜利 · 4 回合 · 两阶段",attribution:"三幕证物依次击破回声，已确认的舍财代价守住了最终选择。灵石 60。",primary:"选择本世归宿",sourceKey:"catalog.3.14.final"}},te=[{id:"r1-event",row:"第 1 行",rowIndex:1,lane:"left",shortName:"宫库",name:"宫库封门",kind:"事件",kindKey:"event",glyph:"事",tone:"steady",hint:"人证/封泥",status:"enterable",summary:"检定 67.32% · 可能保留人证或封泥拓片",cta:"进入宫库封门",sourceKey:"catalog.3.6.r1-event"},{id:"r1-battle",row:"第 1 行",rowIndex:1,lane:"right",shortName:"巡兵",name:"灰巷巡兵",kind:"普通斗法",kindKey:"battle",glyph:"斗",tone:"reward",hint:"石/修",status:"enterable",summary:"固定奖励 灵石 +20 / 修为 +40",cta:"迎战灰巷巡兵",sourceKey:"catalog.3.6.r1-battle"},{id:"r2-shop",row:"第 2 行",rowIndex:2,lane:"left",shortName:"坊市",name:"坊市易物",kind:"商店",kindKey:"shop",glyph:"市",tone:"steady",hint:"法宝/功法",status:"locked",summary:"法宝/功法 · 首次刷新免费",cta:"尚未抵达",sourceKey:"catalog.3.6.r2-shop"},{id:"r2-event",row:"第 2 行",rowIndex:2,lane:"right",shortName:"寻吏",name:"烟梁寻吏",kind:"事件",kindKey:"event",glyph:"事",tone:"steady",hint:"活证人",status:"locked",summary:"寻找活证人",cta:"尚未抵达",sourceKey:"catalog.3.6.r2-event"},{id:"r3-event",row:"第 3 行",rowIndex:3,lane:"left",shortName:"分歧",name:"火路分歧",kind:"幕差异事件",kindKey:"event",glyph:"事",tone:"fate",hint:"见证人",status:"locked",summary:"改变本幕见证人",cta:"尚未抵达",sourceKey:"catalog.3.6.r3-event"},{id:"r3-elite",row:"第 3 行",rowIndex:3,lane:"right",shortName:"烬纹",name:"烬纹力士",kind:"精英斗法",kindKey:"elite",glyph:"斗",tone:"risk",hint:"危",status:"locked",summary:"固定奖励 灵石 +35 / 修为 +70",cta:"尚未抵达",sourceKey:"catalog.3.6.r3-elite"},{id:"r4-clue",row:"第 4 行",rowIndex:4,lane:"left",shortName:"残册",name:"残册空名",kind:"核心线索事件",kindKey:"clue",glyph:"证",tone:"fate",hint:"本世事实",status:"locked",summary:"写入本世事实",cta:"尚未抵达",sourceKey:"catalog.3.6.r4-clue"},{id:"r4-elite",row:"第 4 行",rowIndex:4,lane:"right",shortName:"封泥",name:"封泥阵卒",kind:"精英斗法",kindKey:"elite",glyph:"斗",tone:"risk",hint:"危",status:"locked",summary:"固定奖励 灵石 +35 / 修为 +70",cta:"尚未抵达",sourceKey:"catalog.3.6.r4-elite"},{id:"r5-fate",row:"第 5 行",rowIndex:5,lane:"left",shortName:"空名",name:"空名之誓",kind:"重大命运 · 不可逆",kindKey:"fate",glyph:"命",tone:"fate",hint:"不可逆",status:"locked",summary:"守住空名 / 让活证人落笔",cta:"尚未抵达",sourceKey:"catalog.3.6.r5-fate"},{id:"r5-elite",row:"第 5 行",rowIndex:5,lane:"right",shortName:"校尉",name:"劫火校尉",kind:"精英斗法",kindKey:"elite",glyph:"斗",tone:"risk",hint:"危",status:"locked",summary:"固定奖励 灵石 +35 / 修为 +70",cta:"尚未抵达",sourceKey:"catalog.3.6.r5-elite"},{id:"r6-rest",row:"第 6 行",rowIndex:6,lane:"left",shortName:"井栏",name:"井栏修整",kind:"修整",kindKey:"rest",glyph:"整",tone:"steady",hint:"一次",status:"locked",summary:"调息 / 升功 / 炼宝 / 淬体 · 只能选一次",cta:"尚未抵达",sourceKey:"catalog.3.6.r6-rest"},{id:"r6-battle",row:"第 6 行",rowIndex:6,lane:"right",shortName:"宫门",name:"宫门余党",kind:"普通斗法",kindKey:"battle",glyph:"斗",tone:"reward",hint:"石/修",status:"locked",summary:"固定奖励 灵石 +20 / 修为 +40",cta:"尚未抵达",sourceKey:"catalog.3.6.r6-battle"},{id:"preparation",row:"固定",rowIndex:7,lane:"center",shortName:"前夜",name:"印阵前夜",kind:"Boss 前准备",kindKey:"prep",glyph:"印",tone:"steady",hint:"不回满",status:"locked",summary:"不会自动回满或发放资源",cta:"尚未抵达",sourceKey:"catalog.3.6.preparation"},{id:"boss",row:"Boss",rowIndex:8,lane:"center",shortName:"监令",name:"劫印监令",kind:"Boss",kindKey:"boss",glyph:"劫",tone:"risk",hint:"危",status:"locked",summary:"HP 60 · 外功 16 · 外防 6 · 法防 6",cta:"尚未抵达",sourceKey:"catalog.3.6.boss"}],C={title:"宫库封门",kind:"朝歌事件 · 深度抉择",summary:"宫库落锁的声音从长廊尽头传来，里面的木箱在门后缓慢地挪动，像有人还没来得及逃。",detail:"守库人手里只有一把钥匙，门外却有两条火线：一条通向存档，一条通向被关住的杂役。你必须用时间换一件。",warning:"选择确认后，本事件不能重来。",options:[{id:"assist",title:"砸掉门闩救出杂役",cost:"箱中名册可能失去",check:"属性检定 · 67.32%",confirmTitle:"确认砸掉门闩？",confirmBody:"你会先救出杂役，箱中名册可能失去。",resultTitle:"杂役获救",resultBody:"一个活人会记得谁把他从门后带出来。封泥和人证分别从两条路离开火场；宫库想把一切归成一纸封条；没能做到。",fact:"人证已保留",checkMark:"成功",sourceKey:"catalog.3.7.assist"},{id:"observe",title:"从门缝看清箱上封泥的年份，先取能证明库房存在的封泥拓片",cost:"先取能证明库房存在的封泥拓片",check:"属性检定 · 67.32%",confirmTitle:"确认先取封泥拓片？",confirmBody:"你会把时间用在确认库房存在的证据上。",resultTitle:"拓片留存",resultBody:"先取能证明库房存在的封泥拓片。封泥和人证分别从两条路离开火场；宫库想把一切归成一纸封条；没能做到。",fact:"封泥拓片已保留",checkMark:"未通过",sourceKey:"catalog.3.7.observe"}]},W=[{id:"adversity-step",name:"逆劫步",kind:"辅法",effect:"身法 +7",preview:"辅法位 1：空 → 逆劫步 0阶",toast:"逆劫步已装入辅法位 1。",sourceKey:"catalog.2.4.aux-adversity-step",body:w["aux-adversity-step"].body},{id:"bronze-charm",name:"青铜护符",kind:"法宝",effect:"气血上限 +5",preview:"法宝位 1：空 → 青铜护符 0阶 · 气血上限 100 → 105 · 当前气血仍 58",toast:"青铜护符已装入法宝位 1。",sourceKey:"catalog.2.4.artifact-bronze-charm",body:w["artifact-bronze-charm"].body},{id:"spirit-stones",name:"火场灵石袋",kind:"本世资源",effect:"灵石 +30",preview:"灵石 40 → 70",toast:"火场灵石袋已入囊。",sourceKey:"catalog.3.9.spirit-stones",body:"灰布袋里装着从火场砖缝中捡回的灵石，只在本世使用。"}],V=[{id:"basic",label:"普攻技",name:"敕名剑诀 · 0阶",sourceKey:"catalog.2.2.basic-decree-name-sword",body:_[0].body},{id:"rage",label:"怒气技",name:"封榜镇灵 · 0阶",sourceKey:"catalog.2.3.rage-investiture",body:O[1].body},{id:"aux-1",label:"辅法 1",name:"逆劫步 · 0阶",sourceKey:"catalog.2.4.aux-adversity-step",body:w["aux-adversity-step"].body},{id:"aux-2",label:"辅法 2",name:"受命护身法 · 0阶",sourceKey:"catalog.2.4.aux-mandate-guard",body:w["aux-mandate-guard"].body},{id:"artifact-1",label:"法宝 1",name:"青铜护符 · 1阶 · 已达本品上限",sourceKey:"catalog.2.4.artifact-bronze-charm",body:w["artifact-bronze-charm"].body},{id:"artifact-2",label:"法宝 2",name:"流云佩 · 0阶",sourceKey:"catalog.2.4.artifact-cloud-pendant",body:w["artifact-cloud-pendant"].body},{id:"artifact-3",label:"法宝 3",name:"空",sourceKey:"catalog.3.10.artifact-3",body:"可装入一件法宝"},{id:"strategy",label:"战策",name:"因果反制 · 0阶",sourceKey:"catalog.2.4.strategy-causality-counter",body:w["strategy-causality-counter"].body}],ye=[["气血上限","100"],["外功","30"],["法术","10"],["外防","19"],["法防","5"],["身法","12"],["命中","14"],["闪避","9"],["机缘","10"]],v={candidate:"玄砂印 · 仙品 · 0阶",beforeSlot:"流云佩 · 灵品 · 0阶",afterSlot:"玄砂印 · 仙品 · 0阶",beforeEffect:"外防 +8",afterEffect:"法防 +8",beforeDef:"19",afterDef:"11",beforeMdef:"5",afterMdef:"13"},re=[{id:"wilds-life",name:"山野藏生法",meta:"凡品 · 辅法 · 10 灵石",cta:"需替换辅法",cost:10,kind:"replace",afterStones:"40 → 30",preview:"受命护身法 → 山野藏生法 · 外防 +6 → 闪避 +6",sourceKey:"catalog.2.4.aux-wilds-life",body:w["aux-wilds-life"].body},{id:"adversity-step",name:"逆劫步",meta:"凡品 · 辅法 · 10 灵石 · 已拥有 0阶",cta:"升至 1阶",cost:10,kind:"buy",afterStones:"40 → 30",preview:"逆劫步 0阶 → 1阶",sourceKey:"catalog.2.4.aux-adversity-step",body:w["aux-adversity-step"].body},{id:"soul-bell",name:"引魂铃",meta:"凡品 · 法宝 · 20 灵石 · 法宝位 3 为空",cta:"购买并装备",cost:20,kind:"buy",afterStones:"40 → 20",preview:"法宝位 3：空 → 引魂铃 0阶",sourceKey:"catalog.2.4.artifact-soul-bell",body:w["artifact-soul-bell"].body}],ne=[{id:"basic-up",name:"敕名剑诀",meta:"凡品普攻技 · 20 灵石 · 已拥有 0阶 · 购买后升至 1阶",cta:"升至 1阶",cost:20,kind:"buy",afterStones:"40 → 20",preview:"敕名剑诀 0阶 → 1阶",sourceKey:"catalog.2.2.basic-decree-name-sword",body:_[0].body},{id:"rage-up",name:"封榜镇灵",meta:"凡品怒气技 · 35 灵石 · 已拥有 0阶 · 购买后升至 1阶",cta:"升至 1阶",cost:35,kind:"buy",afterStones:"40 → 5",preview:"封榜镇灵 0阶 → 1阶",sourceKey:"catalog.2.3.rage-investiture",body:O[1].body},{id:"strategy-up",name:"因果反制",meta:"凡品战策 · 35 灵石 · 已拥有 0阶 · 购买后升至 1阶",cta:"升至 1阶",cost:35,kind:"buy",afterStones:"40 → 5",preview:"因果反制 0阶 → 1阶",sourceKey:"catalog.2.4.strategy-causality-counter",body:w["strategy-causality-counter"].body}],P=[{id:"breathe",name:"调息",preview:"恢复最大气血的 30% · 气血 58/100 → 88/100",sourceKey:"catalog.3.12.breathe"},{id:"cultivate",name:"升功",preview:"获得固定修为 · 修为 80 → 120（+40）",sourceKey:"catalog.3.12.cultivate"},{id:"reforge",name:"炼宝",preview:"流云佩 0阶 → 1阶 · 本次不消耗灵石",sourceKey:"catalog.3.12.reforge"},{id:"tempering",name:"淬体",preview:"外防 19 → 22（+3） · 持续到本世结束",sourceKey:"catalog.3.12.tempering"}],T=[{id:"breathe",name:"调息",preview:"气血 88/100 → 100/100 · 理论恢复 30，受气血上限截为 12",sourceKey:"catalog.3.13.breathe"},{id:"cultivate",name:"升功",preview:"修为 80 → 120（+40）",sourceKey:"catalog.3.13.cultivate"},{id:"reforge",name:"炼宝",preview:"流云佩 0阶 → 1阶 · 外防加成仍为 +8，本页只演示阶级变化",sourceKey:"catalog.3.13.reforge"},{id:"tempering",name:"淬体",preview:"外防 19 → 22（+3）",sourceKey:"catalog.3.13.tempering"}],B=[{id:"artifact",name:"舍宝",preview:"流云佩 · 灵品法宝 · 1阶 · 法宝位 2：流云佩 → 空 · 外防 19 → 11 · 已发现记录仍保留",confirmTitle:"确认舍宝？",confirmBody:"法宝位 2：流云佩 → 空 · 外防 19 → 11",sourceKey:"catalog.3.14.final.artifact"},{id:"resource",name:"舍财",preview:"灵石 140 → 60 · 支付 80 灵石",confirmTitle:"确认舍财 80 灵石？",confirmBody:"灵石 140 → 60 · 终战入口：关闭 → 开启",sourceKey:"catalog.3.14.final.resource"},{id:"vitality",name:"舍身",preview:"气血上限 100 → 85 · 当前气血 90 → 85 · 削减持续到本世结束",confirmTitle:"确认舍身？",confirmBody:"气血上限 100 → 85 · 当前气血 90 → 85",sourceKey:"catalog.3.14.final.vitality"}],D=[{id:"listed",name:"名列封神",body:"你接受名册的重量，让一生走过的路在封神台上留下可追的名字。",reason:"历史资格 · 百灵幡曾入手",tag:"可选",sourceKey:"catalog.3.16.listed"},{id:"mortal",name:"台外留凡",body:"你没有借神纹抹掉凡身；湿签、旧鞋和旁听者替这条人间归路作了证。",reason:"历史资格 · 阴阳镜曾入手",tag:"可选",sourceKey:"catalog.3.16.mortal"},{id:"restored",name:"断契还名",body:"断契之后，器物、名位与责任各归其主；你把被挪走的名字送回原处。",reason:"封神台·断契还名保证项 + 已完成断契代价",tag:"可选 · 本幕保证",sourceKey:"catalog.3.16.restored"}],L={restored:{outcome:"断契还名",summary:"四幕已完成，断契代价已支付，被挪走的名字已经归还原处。",achievement:"断契还名"},listed:{outcome:"名列封神",summary:"四幕已完成，你接受名册的重量，让这一世留下可追的名字。",achievement:"名列封神"},mortal:{outcome:"台外留凡",summary:"四幕已完成，你保住凡身，并让湿签、旧鞋和旁听者留下人间归路。",achievement:"台外留凡"},acts:["朝歌·焚册余烬 / 劫印监令 / 让活证人落笔 / 证物 3/3","陈塘关·潮门验骨 / 龙宫验魂使 / 让肉身、魂魄与旧名重新对上 / 已完成","西岐·飞熊粮道 / 申公豹·粮契化身 / 没有让粮契再落到无名者身上 / 已完成","封神台·断契还名 / 申公豹·断契终战 / 舍财 80 灵石 / 两阶段胜利"],build:["普攻技 · 敕名剑诀 · 2阶","怒气技 · 封榜镇灵 · 2阶","辅法 1 · 逆劫步 · 1阶","辅法 2 · 受命护身法 · 1阶","法宝 1 · 青铜护符 · 1阶","法宝 2 · 流云佩 · 1阶","法宝 3 · 百灵幡 · 0阶","战策 · 因果反制 · 1阶"],clears:["气血 64/100 → 清除","境界 真仙·二重 → 清除","灵石 60 → 清除","修为 800 → 清除","命格 破军·劫锋 → 清除","最终 Build 8 槽 → 清除","路线、事件、事实与临时效果 → 清除"],retains:["Codex 条目 18 → 23（+5）","成就 4 → 6（+2）","横向解锁 7 → 9（+2）","成功完成世次 0 → 1","劫数 1 已解锁"]},ge={people:[{id:"shen",name:"申公豹",tag:"终局人物 · 新",body:"他以三重化身把粮契、关印与断契压成同一条替罪链；终战后，三道回声各自归还原主。",sourceKey:"catalog.3.18.people.shen"},{id:"wenzhong",name:"闻仲",tag:"朝歌人物",body:"朝歌军令与封条的旧主人；他的名字留在火场的印背，也留在被撤下的档案库。",sourceKey:"catalog.3.18.people.wenzhong"},{id:"seal-warden",name:"劫印监令",tag:"第一幕 Boss · 新",body:"把火场残印钉回封条的监令化身；你护住三处能让旁人指认的证物，并在印阵闭合前击败了它。",sourceKey:"catalog.3.18.people.seal-warden"}],dao:[{id:"sword",name:"敕名剑诀",tag:"普攻技 · 2阶",body:_[0].body,sourceKey:"catalog.2.2.basic-decree-name-sword"},{id:"investiture",name:"封榜镇灵",tag:"怒气技 · 2阶",body:O[1].body,sourceKey:"catalog.2.3.rage-investiture"},{id:"banner",name:"百灵幡",tag:"神品法宝 · 已发现",body:w["artifact-bailing-banner"].body,sourceKey:"catalog.2.4.artifact-bailing-banner"}],causality:[{id:"nameless",name:"榜外无名",tag:"跨幕事实",body:"火把名籍烧成卷边的灰，活人的指印、口述和残页却仍指向同一个榜外空名；大劫追的是事实，不是纸上的完整。",sourceKey:"catalog.3.18.causality.nameless"},{id:"ledger",name:"残册空名",tag:"朝歌证物",body:"残册最后一页只剩半个墨圈，墨圈中央被人用指甲抠出一个干净的空洞。",sourceKey:"catalog.3.18.causality.ledger"},{id:"restored",name:"断契还名",tag:"终局因果 · 新",body:"断契之后，器物、名位与责任各归其主；你把被挪走的名字送回原处。",sourceKey:"catalog.3.18.causality.restored"}],unlocks:[{id:"unlisted",name:"名不入册",tag:"成就 · 新",body:"朝歌焚册时，你把活人的口述从火里带出来，让榜外空名不随纸灰消失。",sourceKey:"catalog.3.18.unlocks.unlisted"},{id:"listed",name:"名列封神",tag:"终局成就 · 可追",body:"你接受名册的重量，让一生走过的路在封神台上留下可追的名字。",sourceKey:"catalog.3.18.unlocks.listed"},{id:"next",name:"下一劫数",tag:"劫数 1 · 已解锁",body:"敌方高出一个小境；开局一条天条；高风险遭遇需高危资格。资源、掉落、修为与灵石所得仍保持 1.0 倍。",sourceKey:"catalog.3.18.unlocks.next"}],lives:[{id:"life-1",name:"第一世 / 断契还名",tag:"成功 · 劫数 0",body:`封册编号 #0001
四幕全部完成
LifeRunStatus：成功
EndingOutcome：断契还名`,sourceKey:"catalog.3.18.lives.1"}]},ve=[{id:"people",label:"人物",count:3},{id:"dao",label:"道藏",count:3},{id:"causality",label:"因果",count:3},{id:"unlocks",label:"解锁",count:3},{id:"lives",label:"累世封册",count:1}],de={difficulty:[{id:"default-selected",label:"default-selected"},{id:"locked-feedback",label:"locked-feedback"}],fate:[{id:"none-selected",label:"none-selected"},{id:"pojun-selected",label:"pojun-selected"},{id:"confirm-modal",label:"confirm-modal"},{id:"confirmed-readonly",label:"confirmed-readonly"}],"opening-basic":[{id:"none-selected",label:"none-selected"},{id:"sword-selected",label:"sword-selected"},{id:"confirmed",label:"confirmed"}],"battle-opening":[{id:"ready",label:"ready"},{id:"playing-round-2",label:"playing-round-2"},{id:"paused-round-3",label:"paused-round-3"},{id:"skip-modal",label:"skip-modal"},{id:"victory",label:"victory"}],"reward-rage":[{id:"receipt",label:"receipt"},{id:"none-selected",label:"none-selected"},{id:"investiture-selected",label:"investiture-selected"},{id:"confirmed",label:"confirmed"}],journey:[{id:"route-default",label:"route-default"},{id:"event-detail",label:"event-detail"},{id:"battle-detail",label:"battle-detail"},{id:"future-node-detail",label:"future-node-detail"}],event:[{id:"none-selected",label:"none-selected"},{id:"assist-selected",label:"assist-selected"},{id:"observe-selected",label:"observe-selected"},{id:"confirm-modal",label:"confirm-modal"},{id:"assist-result",label:"assist-result"},{id:"observe-result",label:"observe-result"}],"battle-normal":[{id:"ready",label:"ready"},{id:"playing-round-2",label:"playing-round-2"},{id:"paused-round-3",label:"paused-round-3"},{id:"skip-modal",label:"skip-modal"},{id:"victory",label:"victory"}],"reward-normal":[{id:"receipt",label:"receipt"},{id:"none-selected",label:"none-selected"},{id:"adversity-selected",label:"adversity-selected"},{id:"charm-selected",label:"charm-selected"},{id:"stone-selected",label:"stone-selected"},{id:"confirmed",label:"confirmed"}],build:[{id:"board-default",label:"board-default"},{id:"slot-detail",label:"slot-detail"},{id:"replacement-preview",label:"replacement-preview"},{id:"replacement-cancelled",label:"replacement-cancelled"},{id:"replacement-confirmed",label:"replacement-confirmed"}],shop:[{id:"inventory-default",label:"inventory-default"},{id:"purchase-soul-bell-modal",label:"purchase-soul-bell-modal"},{id:"purchase-result",label:"purchase-result"},{id:"refresh-result",label:"refresh-result"},{id:"replacement-modal",label:"replacement-modal"}],rest:[{id:"none-selected",label:"none-selected"},{id:"breathe-selected",label:"breathe-selected"},{id:"confirm-modal",label:"confirm-modal"},{id:"completed",label:"completed"}],preparation:[{id:"none-selected",label:"none-selected"},{id:"reforge-selected",label:"reforge-selected"},{id:"confirm-modal",label:"confirm-modal"},{id:"completed",label:"completed"}],"battle-boss":[{id:"act1-ready",label:"act1-ready"},{id:"act1-playing",label:"act1-playing"},{id:"act1-paused",label:"act1-paused"},{id:"act1-victory",label:"act1-victory"},{id:"final-sacrifice-none",label:"final-sacrifice-none"},{id:"final-sacrifice-resource-selected",label:"final-sacrifice-resource-selected"},{id:"final-sacrifice-modal",label:"final-sacrifice-modal"},{id:"final-ready",label:"final-ready"},{id:"final-phase-1",label:"final-phase-1"},{id:"final-phase-2",label:"final-phase-2"},{id:"final-victory",label:"final-victory"}],"act-result":[{id:"act1-result",label:"act1-result"}],ending:[{id:"none-selected",label:"none-selected"},{id:"listed-selected",label:"listed-selected"},{id:"mortal-selected",label:"mortal-selected"},{id:"restored-selected",label:"restored-selected"},{id:"confirm-modal",label:"confirm-modal"},{id:"confirmed",label:"confirmed"}],settlement:[{id:"restored-settlement",label:"restored-settlement"},{id:"listed-settlement",label:"listed-settlement"},{id:"mortal-settlement",label:"mortal-settlement"},{id:"next-life-modal",label:"next-life-modal"}],codex:[{id:"people-list",label:"people-list"},{id:"dao-list",label:"dao-list"},{id:"causality-list",label:"causality-list"},{id:"unlock-list",label:"unlock-list"},{id:"lives-list",label:"lives-list"},{id:"entry-reader",label:"entry-reader"}]};function z(e,a){const r=e.find(t=>t.id===a);if(!r)throw new Error(`missing fixture card: ${a}`);return r}function E(){return{status:"ready",cursor:0,speed:1}}function he(){return{opening:E(),normal:E(),act1:E(),final:E()}}function M(){return{page:"difficulty",viewport:"750",toast:null,modal:null,openedPanel:null,indexOpen:!1,difficultySelected:"tribulation_0",difficulty1Unlocked:!1,fateSelected:null,fateConfirmed:!1,basicSelected:null,basicConfirmed:!1,rageSelected:null,rageConfirmed:!1,journeyNode:null,journeyReview:!1,eventSelected:null,eventResult:null,rewardSelected:null,rewardConfirmed:!1,buildSlot:"artifact-2",buildReplaced:!1,buildPreviewOpen:!1,shopPurchased:[],shopRefreshed:!1,shopRefreshCount:0,shopItem:null,restSelected:null,restCompleted:!1,prepSelected:null,prepCompleted:!1,bossMode:"act1",sacrificeSelected:null,sacrificeConfirmed:!1,endingSelected:null,endingConfirmed:!1,battles:he(),codexScope:"account",codexCategory:"people",codexReaderId:null,codexReadIds:[]}}function y(e,a){return{...e,toast:a}}function i(e,a,r={}){return{...e,...r,page:a,modal:null,openedPanel:a==="journey"?e.openedPanel:null,toast:r.toast??null}}function x(e){return e.page==="battle-opening"?"opening":e.page==="battle-normal"?"normal":e.bossMode}function $(e,a,r){return{...e,battles:{...e.battles,[a]:{...e.battles[a],...r}}}}function se(e){const a=e.battles[x(e)];switch(e.page){case"difficulty":case"reward-rage":case"journey":case"reward-normal":case"act-result":case"settlement":return!1;case"fate":return!e.fateConfirmed;case"opening-basic":return!0;case"battle-opening":case"battle-normal":return a.status==="ready";case"event":return e.eventResult===null;case"build":case"shop":return!0;case"rest":return!e.restCompleted;case"preparation":return!e.prepCompleted;case"battle-boss":return e.bossMode==="final"&&!e.sacrificeConfirmed?!0:a.status==="ready"&&(e.bossMode==="act1"||e.sacrificeConfirmed);case"ending":return!e.endingConfirmed;case"codex":return!0;default:return!1}}function $e(e){if(!se(e))return null;switch(e.page){case"fate":return"difficulty";case"opening-basic":return"fate";case"battle-opening":return"opening-basic";case"event":return"journey";case"battle-normal":return"event";case"build":return"reward-normal";case"shop":return"build";case"rest":return"shop";case"preparation":return"rest";case"battle-boss":return e.bossMode==="final"?"act-result":"preparation";case"ending":return"battle-boss";case"codex":return"settlement";default:return null}}function le(e){const a=M(),r={...e,modal:null,toast:null,openedPanel:null};switch(e.page){case"difficulty":return{...r,difficultySelected:"tribulation_0"};case"fate":return{...r,fateSelected:null,fateConfirmed:!1};case"opening-basic":return{...r,basicSelected:null,basicConfirmed:!1};case"battle-opening":return $(r,"opening",E());case"reward-rage":return{...r,rageSelected:null,rageConfirmed:!1};case"journey":return{...r,journeyNode:null,openedPanel:null,journeyReview:e.journeyReview};case"event":return{...r,eventSelected:null,eventResult:null};case"battle-normal":return $(r,"normal",E());case"reward-normal":return{...r,rewardSelected:null,rewardConfirmed:!1};case"build":return{...r,buildSlot:"artifact-2",buildReplaced:!1,buildPreviewOpen:!1};case"shop":return{...r,shopPurchased:[],shopRefreshed:!1,shopRefreshCount:0,shopItem:null};case"rest":return{...r,restSelected:null,restCompleted:!1};case"preparation":return{...r,prepSelected:null,prepCompleted:!1};case"battle-boss":return{...$($(r,"act1",E()),"final",E()),bossMode:"act1",sacrificeSelected:null,sacrificeConfirmed:!1};case"ending":return{...r,endingSelected:null,endingConfirmed:!1};case"settlement":return{...r,endingSelected:"restored",endingConfirmed:!0,modal:null};case"codex":return{...r,...we(a,["codexScope","codexCategory","codexReaderId","codexReadIds"])};default:return r}}function we(e,a){const r={};for(const t of a)r[t]=e[t];return r}function Se(e,a){if(!de[e.page].some(s=>s.id===a))return e;let t={...le(e),page:e.page};const d=(s,g,K)=>$(t,s,{status:g,cursor:K,speed:1});switch(`${e.page}:${a}`){case"fate:pojun-selected":return{...t,fateSelected:"fate-pojun"};case"fate:confirm-modal":return{...t,fateSelected:"fate-pojun",modal:{kind:"fate",itemId:"fate-pojun"}};case"fate:confirmed-readonly":return{...t,fateSelected:"fate-pojun",fateConfirmed:!0};case"opening-basic:sword-selected":return{...t,basicSelected:"basic-decree-name-sword"};case"opening-basic:confirmed":return{...t,basicSelected:"basic-decree-name-sword",basicConfirmed:!0};case"battle-opening:playing-round-2":return d("opening","playing",3);case"battle-opening:paused-round-3":return d("opening","paused",4);case"battle-opening:skip-modal":return{...d("opening","playing",1),modal:{kind:"skip",itemId:"opening"}};case"battle-opening:victory":return d("opening","victory",R.opening.logs.length);case"reward-rage:investiture-selected":return{...t,rageSelected:"rage-investiture"};case"reward-rage:confirmed":return{...t,rageSelected:"rage-investiture",rageConfirmed:!0};case"journey:event-detail":return{...t,journeyNode:"r1-event",openedPanel:"r1-event"};case"journey:battle-detail":return{...t,journeyNode:"r1-battle",openedPanel:"r1-battle"};case"journey:future-node-detail":return{...t,journeyNode:"r2-shop",openedPanel:"r2-shop"};case"event:assist-selected":return{...t,eventSelected:"assist"};case"event:observe-selected":return{...t,eventSelected:"observe"};case"event:confirm-modal":return{...t,eventSelected:"assist",modal:{kind:"event",itemId:"assist"}};case"event:assist-result":return{...t,eventSelected:"assist",eventResult:"assist"};case"event:observe-result":return{...t,eventSelected:"observe",eventResult:"observe"};case"battle-normal:playing-round-2":return d("normal","playing",3);case"battle-normal:paused-round-3":return d("normal","paused",4);case"battle-normal:skip-modal":return{...d("normal","playing",1),modal:{kind:"skip",itemId:"normal"}};case"battle-normal:victory":return d("normal","victory",R.normal.logs.length);case"reward-normal:adversity-selected":return{...t,rewardSelected:"adversity-step"};case"reward-normal:charm-selected":return{...t,rewardSelected:"bronze-charm"};case"reward-normal:stone-selected":return{...t,rewardSelected:"spirit-stones"};case"reward-normal:confirmed":return{...t,rewardSelected:"adversity-step",rewardConfirmed:!0};case"build:slot-detail":return{...t,buildSlot:"artifact-2"};case"build:replacement-preview":return{...t,buildPreviewOpen:!0};case"build:replacement-cancelled":return y({...t,buildPreviewOpen:!1},"已取消替换，流云佩保持不变。");case"build:replacement-confirmed":return y({...t,buildReplaced:!0,buildPreviewOpen:!1},"玄砂印已装入法宝位 2，流云佩已退场。");case"shop:purchase-soul-bell-modal":return{...t,shopItem:"soul-bell",modal:{kind:"shop-buy",itemId:"soul-bell"}};case"shop:purchase-result":return y({...t,shopPurchased:["soul-bell"]},"交易完成，本商品已从本次库存移除。");case"shop:refresh-result":return y({...t,shopRefreshed:!0,shopRefreshCount:1},"库存已刷新，本次未消耗灵石。");case"shop:replacement-modal":return{...t,shopItem:"wilds-life",modal:{kind:"shop-replace",itemId:"wilds-life"}};case"rest:breathe-selected":return{...t,restSelected:"breathe"};case"rest:confirm-modal":return{...t,restSelected:"breathe",modal:{kind:"rest",itemId:"breathe"}};case"rest:completed":return{...t,restSelected:"breathe",restCompleted:!0};case"preparation:reforge-selected":return{...t,prepSelected:"reforge"};case"preparation:confirm-modal":return{...t,prepSelected:"reforge",modal:{kind:"prep",itemId:"reforge"}};case"preparation:completed":return{...t,prepSelected:"reforge",prepCompleted:!0};case"battle-boss:act1-playing":return{...d("act1","playing",2),bossMode:"act1"};case"battle-boss:act1-paused":return{...d("act1","paused",3),bossMode:"act1"};case"battle-boss:act1-victory":return{...d("act1","victory",R.act1.logs.length),bossMode:"act1"};case"battle-boss:final-sacrifice-none":return{...t,bossMode:"final",sacrificeSelected:null,sacrificeConfirmed:!1};case"battle-boss:final-sacrifice-resource-selected":return{...t,bossMode:"final",sacrificeSelected:"resource"};case"battle-boss:final-sacrifice-modal":return{...t,bossMode:"final",sacrificeSelected:"resource",modal:{kind:"sacrifice",itemId:"resource"}};case"battle-boss:final-ready":return{...d("final","ready",0),bossMode:"final",sacrificeSelected:"resource",sacrificeConfirmed:!0};case"battle-boss:final-phase-1":return{...d("final","playing",3),bossMode:"final",sacrificeSelected:"resource",sacrificeConfirmed:!0};case"battle-boss:final-phase-2":return{...d("final","playing",5),bossMode:"final",sacrificeSelected:"resource",sacrificeConfirmed:!0};case"battle-boss:final-victory":return{...d("final","victory",R.final.logs.length),bossMode:"final",sacrificeSelected:"resource",sacrificeConfirmed:!0};case"ending:listed-selected":return{...t,endingSelected:"listed"};case"ending:mortal-selected":return{...t,endingSelected:"mortal"};case"ending:restored-selected":return{...t,endingSelected:"restored"};case"ending:confirm-modal":return{...t,endingSelected:"restored",modal:{kind:"ending",itemId:"restored"}};case"ending:confirmed":return{...t,endingSelected:"restored",endingConfirmed:!0};case"settlement:listed-settlement":return{...t,endingSelected:"listed",endingConfirmed:!0};case"settlement:mortal-settlement":return{...t,endingSelected:"mortal",endingConfirmed:!0};case"settlement:restored-settlement":return{...t,endingSelected:"restored",endingConfirmed:!0};case"settlement:next-life-modal":return{...t,endingSelected:"restored",endingConfirmed:!0,modal:{kind:"next-life",itemId:null}};case"codex:dao-list":return{...t,codexCategory:"dao"};case"codex:causality-list":return{...t,codexCategory:"causality"};case"codex:unlock-list":return{...t,codexCategory:"unlocks"};case"codex:lives-list":return{...t,codexCategory:"lives"};case"codex:entry-reader":return{...t,codexCategory:"people",codexReaderId:"shen",codexReadIds:["shen"]};case"difficulty:locked-feedback":return y(t,"完成劫数 0 的成功终局后开放。");default:return t}}function ke(e){switch(e.page){case"difficulty":return i(e,"fate");case"fate":return e.fateConfirmed?i(e,"opening-basic"):e.fateSelected?{...e,modal:{kind:"fate",itemId:e.fateSelected}}:e;case"opening-basic":{if(!e.basicSelected)return e;const a=_.find(r=>r.id===e.basicSelected);return y(i({...e,basicConfirmed:!0},"battle-opening"),`${a?.name??"敕名剑诀"}已装入普攻技位。`)}case"battle-opening":return e.battles.opening.status!=="victory"?e:i(e,"reward-rage");case"reward-rage":{if(e.rageConfirmed)return i(e,"journey");if(!e.rageSelected)return e;const a=O.find(r=>r.id===e.rageSelected);return y(i({...e,rageConfirmed:!0,journeyReview:!1},"journey"),`${a?.name??"封榜镇灵"}已装入怒气技位。`)}case"journey":{const a=e.openedPanel??"r1-event";return{...e,journeyNode:a,openedPanel:a}}case"event":return e.eventResult?i(e,"battle-normal"):e.eventSelected?{...e,modal:{kind:"event",itemId:e.eventSelected}}:e;case"battle-normal":return e.battles.normal.status!=="victory"?e:i(e,"reward-normal");case"reward-normal":{if(e.rewardConfirmed)return i(e,"build");if(!e.rewardSelected)return e;const a=W.find(r=>r.id===e.rewardSelected);return y(i({...e,rewardConfirmed:!0},"build"),a?.toast??"逆劫步已装入辅法位 1。")}case"build":return i({...e,buildPreviewOpen:!1},"shop");case"shop":return i(e,"rest");case"rest":return e.restCompleted?i(e,"preparation"):e.restSelected?{...e,modal:{kind:"rest",itemId:e.restSelected}}:e;case"preparation":return e.prepCompleted?i({...e,bossMode:"act1"},"battle-boss"):e.prepSelected?{...e,modal:{kind:"prep",itemId:e.prepSelected}}:e;case"battle-boss":return e.bossMode==="final"&&!e.sacrificeConfirmed?e.sacrificeSelected?{...e,modal:{kind:"sacrifice",itemId:e.sacrificeSelected}}:e:e.battles[e.bossMode].status!=="victory"?e:e.bossMode==="act1"?i(e,"act-result"):i({...e,bossMode:"final"},"ending");case"act-result":return i({...e,bossMode:"final",sacrificeSelected:null,sacrificeConfirmed:!1,battles:{...e.battles,final:E()}},"battle-boss");case"ending":return e.endingConfirmed?i(e,"settlement"):e.endingSelected?{...e,modal:{kind:"ending",itemId:e.endingSelected}}:e;case"settlement":case"codex":return{...e,modal:{kind:"next-life",itemId:null}};default:return e}}function q(e){const a=e.modal;if(!a)return e;switch(a.kind){case"fate":return i({...e,fateConfirmed:!0,fateSelected:a.itemId},"opening-basic");case"event":return a.itemId!=="assist"&&a.itemId!=="observe"?e:{...e,eventResult:a.itemId,modal:null,toast:null};case"rest":return{...e,restCompleted:!0,modal:null};case"prep":return{...e,prepCompleted:!0,modal:null};case"skip":{const r=x(e),t=R[r].logs.length;return{...$(e,r,{status:"victory",cursor:t}),modal:null}}case"shop-buy":case"shop-replace":{const r=a.itemId??"";return y({...e,shopPurchased:e.shopPurchased.includes(r)?e.shopPurchased:[...e.shopPurchased,r],modal:null,shopItem:null},"交易完成，本商品已从本次库存移除。")}case"build-replace":return y({...e,buildReplaced:!0,buildPreviewOpen:!1,modal:null},"玄砂印已装入法宝位 2，流云佩已退场。");case"sacrifice":return y({...e,sacrificeConfirmed:!0,modal:null},e.sacrificeSelected==="resource"?"代价已定 · 舍财 80 灵石":"代价已定");case"ending":return{...e,endingConfirmed:!0,modal:null};case"next-life":return{...M(),difficulty1Unlocked:!0,viewport:e.viewport};case"reset-flow":return{...M(),viewport:e.viewport,difficulty1Unlocked:e.difficulty1Unlocked};default:return{...e,modal:null}}}function Ee(e,a){switch(a.type){case"JUMP":return{...e,page:a.page,bossMode:a.page==="battle-boss"?"act1":e.bossMode,modal:null,openedPanel:null,toast:null};case"SET_VIEWPORT":return{...e,viewport:a.viewport};case"TOGGLE_INDEX":return{...e,indexOpen:!e.indexOpen};case"CLOSE_INDEX":return{...e,indexOpen:!1};case"BACK":{const r=$e(e);return r?i(e,r,r==="battle-boss"&&e.page==="ending"?{bossMode:"final"}:{}):e}case"PRIMARY":return ke(e);case"RESET_PAGE":return le(e);case"ASK_RESET_FLOW":return{...e,modal:{kind:"reset-flow",itemId:null}};case"RESET_FLOW":return{...M(),viewport:e.viewport};case"DISMISS_TOAST":return{...e,toast:null};case"CLOSE_MODAL":return{...e,modal:null};case"CLOSE_PANEL":return{...e,openedPanel:null};case"SELECT_DIFFICULTY":return a.id==="tribulation_0"?{...e,difficultySelected:"tribulation_0",toast:null}:a.id==="tribulation_1"?e.difficulty1Unlocked?y(e,"效果原型仍默认演示劫数 0。"):y(e,"完成劫数 0 的成功终局后开放。"):y(e,"完成劫数 1 的成功终局后开放。");case"SELECT_FATE":return e.fateConfirmed?e:{...e,fateSelected:a.id};case"SELECT_BASIC":return e.basicConfirmed?e:{...e,basicSelected:a.id};case"SELECT_RAGE":return e.rageConfirmed?e:{...e,rageSelected:a.id};case"OPEN_NODE":return{...e,journeyNode:a.id,openedPanel:a.id};case"ENTER_NODE":return e.openedPanel==="r1-event"?i(e,"event"):e.openedPanel==="r1-battle"?i(e,"battle-normal"):e;case"SELECT_EVENT":return e.eventResult?e:{...e,eventSelected:a.id};case"SELECT_REWARD":return e.rewardConfirmed?e:{...e,rewardSelected:a.id};case"OPEN_SLOT":return{...e,buildSlot:a.id};case"PREVIEW_REPLACE":return{...e,buildPreviewOpen:!0,modal:{kind:"build-replace",itemId:"artifact-2"}};case"CANCEL_REPLACE":return y({...e,buildPreviewOpen:!1,modal:null},"已取消替换，流云佩保持不变。");case"CONFIRM_REPLACE":return y({...e,buildReplaced:!0,buildPreviewOpen:!1,modal:null},"玄砂印已装入法宝位 2，流云佩已退场。");case"OPEN_SHOP":{if(e.shopPurchased.includes(a.id))return e;const r=a.id==="wilds-life"?"shop-replace":"shop-buy";return{...e,shopItem:a.id,modal:{kind:r,itemId:a.id}}}case"SHOP_REFRESH":return e.shopRefreshed?e:y({...e,shopRefreshed:!0,shopRefreshCount:1},"库存已刷新，本次未消耗灵石。");case"CONFIRM_SHOP":return q(e);case"SELECT_REST":return e.restCompleted?e:{...e,restSelected:a.id};case"SELECT_PREP":return e.prepCompleted?e:{...e,prepSelected:a.id};case"SELECT_SACRIFICE":return e.sacrificeConfirmed?e:{...e,sacrificeSelected:a.id};case"SELECT_ENDING":return e.endingConfirmed?e:{...e,endingSelected:a.id};case"CONFIRM_MODAL":return q(e);case"BATTLE_PLAY":{if(e.page==="battle-boss"&&e.bossMode==="final"&&!e.sacrificeConfirmed)return e;const r=x(e),t=e.battles[r];return t.status==="victory"?e:t.status==="playing"?$(e,r,{status:"paused"}):$(e,r,{status:"playing"})}case"BATTLE_SPEED":return $(e,x(e),{speed:a.speed});case"BATTLE_SKIP_ASK":return e.battles[x(e)].status==="victory"||e.page==="battle-boss"&&e.bossMode==="final"&&!e.sacrificeConfirmed?e:{...e,modal:{kind:"skip",itemId:x(e)}};case"BATTLE_REPLAY":return $(e,x(e),E());case"BATTLE_TICK":{const r=x(e),t=e.battles[r];if(t.status!=="playing")return e;const d=t.cursor+1,s=R[r].logs.length;return d>=s?$(e,r,{status:"victory",cursor:s}):$(e,r,{cursor:d})}case"OPEN_CODEX":return i(e,"codex");case"CODEX_SCOPE":return{...e,codexScope:a.scope,codexReaderId:null};case"CODEX_CATEGORY":return{...e,codexCategory:a.category,codexReaderId:null};case"CODEX_OPEN":{const r=e.codexReadIds.includes(a.id)?e.codexReadIds:[...e.codexReadIds,a.id];return{...e,codexReaderId:a.id,codexReadIds:r}}case"CODEX_CLOSE":return{...e,codexReaderId:null};case"RETURN_JOURNEY":return i({...e,journeyReview:!0,openedPanel:null},"journey");case"APPLY_REVIEW_STATE":return Se(e,a.stateId);default:return e}}function Ce(e){return e.shopPurchased.includes("soul-bell")?20:e.shopPurchased.includes("wilds-life")||e.shopPurchased.includes("adversity-step")?30:e.shopPurchased.includes("basic-up")?20:e.shopPurchased.includes("rage-up")||e.shopPurchased.includes("strategy-up")?5:40}function xe(e){return se(e)}function Re(e){const a=e.battles[x(e)];switch(e.page){case"difficulty":return e.toast?"locked-feedback":"default-selected";case"fate":return e.fateConfirmed?"confirmed-readonly":e.modal?.kind==="fate"?"confirm-modal":e.fateSelected==="fate-pojun"?"pojun-selected":"none-selected";case"opening-basic":return e.basicConfirmed?"confirmed":e.basicSelected==="basic-decree-name-sword"?"sword-selected":"none-selected";case"battle-opening":case"battle-normal":return e.modal?.kind==="skip"?"skip-modal":a.status==="victory"?"victory":a.status==="paused"?"paused-round-3":a.status==="playing"?"playing-round-2":"ready";case"reward-rage":return e.rageConfirmed?"confirmed":e.rageSelected==="rage-investiture"?"investiture-selected":e.rageSelected?"none-selected":"receipt";case"journey":return e.openedPanel==="r1-event"?"event-detail":e.openedPanel==="r1-battle"?"battle-detail":e.openedPanel?"future-node-detail":"route-default";case"event":return e.eventResult==="assist"?"assist-result":e.eventResult==="observe"?"observe-result":e.modal?.kind==="event"?"confirm-modal":e.eventSelected==="assist"?"assist-selected":e.eventSelected==="observe"?"observe-selected":"none-selected";case"reward-normal":return e.rewardConfirmed?"confirmed":e.rewardSelected==="adversity-step"?"adversity-selected":e.rewardSelected==="bronze-charm"?"charm-selected":e.rewardSelected==="spirit-stones"?"stone-selected":"receipt";case"build":return e.buildReplaced?"replacement-confirmed":e.buildPreviewOpen||e.modal?.kind==="build-replace"?"replacement-preview":e.buildSlot?"slot-detail":"board-default";case"shop":return e.modal?.kind==="shop-replace"?"replacement-modal":e.modal?.kind==="shop-buy"&&e.shopItem==="soul-bell"?"purchase-soul-bell-modal":e.shopPurchased.length>0?"purchase-result":e.shopRefreshed?"refresh-result":"inventory-default";case"rest":return e.restCompleted?"completed":e.modal?.kind==="rest"?"confirm-modal":e.restSelected==="breathe"?"breathe-selected":"none-selected";case"preparation":return e.prepCompleted?"completed":e.modal?.kind==="prep"?"confirm-modal":e.prepSelected==="reforge"?"reforge-selected":"none-selected";case"battle-boss":return e.bossMode==="final"?a.status==="victory"?"final-victory":a.cursor>=4?"final-phase-2":a.status==="playing"?"final-phase-1":e.sacrificeConfirmed?"final-ready":e.modal?.kind==="sacrifice"?"final-sacrifice-modal":e.sacrificeSelected==="resource"?"final-sacrifice-resource-selected":"final-sacrifice-none":a.status==="victory"?"act1-victory":a.status==="paused"?"act1-paused":a.status==="playing"?"act1-playing":"act1-ready";case"act-result":return"act1-result";case"ending":return e.endingConfirmed?"confirmed":e.modal?.kind==="ending"?"confirm-modal":e.endingSelected==="listed"?"listed-selected":e.endingSelected==="mortal"?"mortal-selected":e.endingSelected==="restored"?"restored-selected":"none-selected";case"settlement":return e.modal?.kind==="next-life"?"next-life-modal":e.endingSelected==="listed"?"listed-settlement":e.endingSelected==="mortal"?"mortal-settlement":"restored-settlement";case"codex":return e.codexReaderId?"entry-reader":e.codexCategory==="dao"?"dao-list":e.codexCategory==="causality"?"causality-list":e.codexCategory==="unlocks"?"unlock-list":e.codexCategory==="lives"?"lives-list":"people-list";default:return"default-selected"}}function n(e){return e.replace(/[&<>"']/g,a=>a==="&"?"&amp;":a==="<"?"&lt;":a===">"?"&gt;":a==='"'?"&quot;":"&#39;")}function o(...e){return e.filter(Boolean).join(" ")}function f(e){return`<div class="kicker">${n(e)}</div>`}function b(e){return`<h1 class="page-title">${n(e)}</h1>`}function G(e){return`<p class="lede">${n(e)}</p>`}function S(e,a=!1){return xe(e)?`<button type="button" class="${o("btn ghost back-btn",a&&"on-dark")}" data-player-back>返回</button>`:""}function p(e,a=!1){return`<button type="button" class="btn primary" data-primary-action ${a?'disabled aria-disabled="true"':""}>${n(e)}</button>`}function m(e){return`<div class="scene-stamp" aria-hidden="true">${n(e)}</div>`}function Ke(e){return e.page==="ending"||e.page==="settlement"||e.page==="codex"||e.page==="battle-boss"&&e.bossMode==="final"?"第四幕 / 四幕":"第一幕 / 四幕"}function h(e,a=[]){const r=e.fateConfirmed?z(N,e.fateSelected??"fate-pojun").name:"命格未定";return`<div class="resource-bar" data-resource-bar>${["<span data-life-label>第一世</span>","<span data-difficulty-label>劫数 0</span>",`<span data-fate-label>${n(r)}</span>`,`<span data-act-position>${n(Ke(e))}</span>`,...a.map(d=>`<span>${d}</span>`)].join('<span class="pip"></span>')}</div>`}function Q(e){return e==="wanderer"?'<svg viewBox="0 0 120 200" aria-hidden="true"><path d="M60 18c10 0 18 9 18 20s-8 20-18 20-18-9-18-20 8-20 18-20z" fill="#1a1612"/><path d="M42 62c18-8 38-6 50 8 4 22-6 48-10 70-8 16-6 32 8 42-22 4-44 6-62 0 8-14 10-30 4-46-8-22-10-48 10-74z" fill="#2a2420"/><path d="M86 78c18 10 28 34 22 58-20-8-34-28-36-52z" fill="#c45a4a"/><path d="M28 118c-18 22-20 48-8 64 16-18 28-40 32-62z" fill="#1a1612"/></svg>':e==="ember-guard"?'<svg viewBox="0 0 120 200" aria-hidden="true"><path d="M60 16c12 0 22 10 22 24 0 10-6 18-14 22l8 10H44l8-10c-8-4-14-12-14-22 0-14 10-24 22-24z" fill="#6a2218"/><path d="M28 72h64l8 96H22z" fill="#3a2018"/><path d="M36 88h48v12H36z" fill="#c45a4a"/><path d="M40 72c-18 18-22 48-10 70" stroke="#e8c9a0" stroke-width="4" fill="none"/><path d="M18 40c12-18 40-22 58-8" stroke="#9c2a1e" stroke-width="6" fill="none"/></svg>':e==="ash-guard"?'<svg viewBox="0 0 120 200" aria-hidden="true"><rect x="38" y="14" width="44" height="36" rx="6" fill="#2c2620"/><path d="M30 56h60l10 108H22z" fill="#3c342c"/><path d="M46 70h28v70H46z" fill="#1a1612"/><circle cx="60" cy="32" r="8" fill="#9c2a1e"/></svg>':e==="warden"?'<svg viewBox="0 0 120 200" aria-hidden="true"><path d="M60 10 92 42 60 74 28 42z" fill="#9c2a1e"/><path d="M40 70h40v96H40z" fill="#2a1a16"/><path d="M24 86h72v12H24z" fill="#e8c9a0"/><path d="M60 74v92" stroke="#f3ead4" stroke-width="2"/></svg>':'<svg viewBox="0 0 120 200" aria-hidden="true"><path d="M36 22c20-16 52-8 60 16 4 12-2 22-12 28 16 8 24 28 18 50-10 28-34 40-54 44-22-18-32-48-24-74 2-18 8-34 12-64z" fill="#2a1612"/><path d="M86 48c18 6 28 24 22 42" stroke="#c45a4a" stroke-width="5" fill="none"/><circle cx="72" cy="40" r="6" fill="#e8c9a0"/></svg>'}function Ie(e){return e==="opening"?"ember-guard":e==="normal"?"ash-guard":e==="act1"?"warden":"leopard"}function Pe(e){return e.page==="battle-opening"?"opening":e.page==="battle-normal"?"normal":e.bossMode}function Te(e){if(e.page==="battle-boss"&&e.bossMode==="final"&&!e.sacrificeConfirmed)return _e(e);const a=Pe(e),r=R[a],t=e.battles[a],d=r.frames[t.cursor]??r.frames[0],s=r.logs.slice(0,t.cursor),g=s.slice(-3).map(I=>`<li data-source-key="${I.sourceKey}">${n(I.text)}</li>`).join(""),K=t.status==="playing",A=t.status==="paused",H=t.status==="victory",j=s.at(-1)?.hit,c=K?"暂停":A?"继续":a==="final"?"开始断契终战":"开始自动斗法",X=a==="act1"?`证物 ${["0/3","1/3 活人证词","2/3 封泥拓片","3/3 残册空名"][d.evidence]}`:"",Y=a==="final"?d.phase===2?"第二相 · 断契本相":"第一相 · 借名回声":"",pe=Math.round(d.playerHp/r.player.maxHp*100),fe=Math.round(d.enemyHp/r.enemy.maxHp*100),be=r.player.maxRage?Math.round(d.rage/r.player.maxRage*100):0;return`${S(e,!0)}
    <section class="battle-surface" data-game-surface="battle" data-battle-arena data-battle-status="${t.status}" data-arena="${r.arena}">
      <div class="battle-hud" data-battle-hud>
        <div class="round-seal" data-battle-round="${d.round}">第 ${d.round} 回合</div>
        ${Y?`<p class="phase-row" data-battle-phase="${d.phase}">${n(Y)}</p>`:""}
        <p class="objective-strip" data-battle-objective data-source-key="${r.sourceKey}">${n(r.objective)}</p>
        <div class="vitals">
          <div class="vital" data-player-panel>
            <div class="who">${n(r.player.name)}</div>
            <div class="meter"><span style="width:${pe}%"></span></div>
            <div class="meter-label">气血 ${d.playerHp} / ${r.player.maxHp}</div>
            <div class="meter rage"><span style="width:${be}%"></span></div>
            <div class="meter-label">怒气 ${n(r.player.rage==="—"?"—":`${d.rage} / ${r.player.maxRage}`)}</div>
          </div>
          <div class="vital" data-enemy-panel>
            <div class="who">${n(r.enemy.tag)} · ${n(r.enemy.name)}</div>
            <div class="meter"><span style="width:${fe}%"></span></div>
            <div class="meter-label">气血 ${d.enemyHp} / ${r.enemy.maxHp}</div>
            <div class="meter-label">${n(r.enemy.extra)}</div>
          </div>
        </div>
        ${X?`<p class="evidence-row" data-battle-evidence="${d.evidence}">${n(X)}</p>`:""}
      </div>
      <div class="arena-floor">
        <div class="${o("fighter player",j==="player"&&"is-hit")}">
          <div class="figure">${Q("wanderer")}</div>
          <div class="who-name">${n(r.player.name)}</div>
        </div>
        <div class="${o("fighter enemy",j==="enemy"&&"is-hit")}">
          <div class="figure">${Q(Ie(a))}</div>
          <div class="who-name">${n(r.enemy.name)}</div>
        </div>
      </div>
      <ol class="battle-feed" data-battle-log>${g}</ol>
      <div class="action-rail" data-action-rail>
        ${H?"":`<button type="button" class="btn primary" data-battle-play>${n(c)}</button>`}
        ${[1,2,4].map(I=>`<button type="button" class="${o("chip",t.speed===I&&"is-on")}" data-battle-speed="${I}">${I}×</button>`).join("")}
        ${H?'<button type="button" class="btn ghost" data-battle-replay>重播斗法</button>':'<button type="button" class="btn ghost" data-battle-skip>跳至结果</button>'}
      </div>
      ${H?`<div class="victory-layer">
        <div class="seal">${n(r.result)}</div>
        <p class="body">${n(r.attribution)}</p>
        ${p(r.primary)}
      </div>`:""}
    </section>`}function _e(e){const a=B.map(t=>`<button type="button" class="${o("choice",e.sacrificeSelected===t.id&&"is-selected")}"
    data-sacrifice="${t.id}" data-source-key="${t.sourceKey}">
    <span class="tag">断契</span>
    <span class="name">${n(t.name)}</span>
    <span class="body">${n(t.preview)}</span>
  </button>`).join(""),r=B.find(t=>t.id===e.sacrificeSelected);return`${S(e)}
    ${m("契")}
    <div data-game-surface="ritual">
      ${f("终局快进镜像 · 中间两幕以固定时间线带过")}
      ${b("断契代价")}
      ${G("普攻技、怒气技和命格不能作为舍宝目标。代价确认后与开启终战同时生效，不可撤回。")}
      ${h(e,["气血 90/100","灵石 140","修为 800"])}
      <div class="choice-list">${a}</div>
      <div class="btn-row">${p(r?`确认${r.name}`:"请先选择断契代价",!r)}</div>
    </div>`}function ie(e){return e.journeyReview?"boss":e.eventResult?"r1-battle":"r1-event"}function oe(e,a,r){return e.journeyReview?a==="boss"?"current":"walked":e.eventResult&&a==="r1-event"||e.battles.normal.status==="victory"&&a==="r1-battle"?"walked":a===ie(e)?"current":r?"reachable":"locked"}function Oe(e){const a=ie(e),r=new Map;for(const d of te){const s=r.get(d.rowIndex)??[];s.push(d),r.set(d.rowIndex,s)}const t=[8,7,6,5,4,3,2,1].map(d=>{const s=r.get(d)??[],g=s.length===1,K=s.some(c=>c.id===a),A=c=>{if(!c)return"<span></span>";const U=oe(e,c.id,c.status==="enterable");return`<button type="button"
        class="${o("seal-node",`is-${U}`,c.kindKey==="boss"&&"is-boss",e.openedPanel===c.id&&"is-selected")}"
        data-route-node="${c.id}"
        data-node-status="${U}"
        data-node-kind="${c.kindKey}"
        data-source-key="${c.sourceKey}"
        ${c.id===a?`data-current-node="${c.id}"`:""}>
        <span class="glyph">${n(c.glyph)}</span>
        <span class="seal-name">${n(c.shortName)}</span>
        <span class="tone">${n(c.hint)}</span>
      </button>`};if(g)return`<div class="tower-center" data-route-row="${d}">
        ${A(s[0])}
      </div>`;const H=s.find(c=>c.lane==="left"),j=s.find(c=>c.lane==="right");return`<div class="tower-row" data-route-row="${d}">
      <div class="lane-left">${A(H)}</div>
      <div class="row-hub ${K?"has-marker":""}">${K?'<span class="traveler" data-player-marker></span>':""}</div>
      <div class="lane-right">${A(j)}</div>
    </div>`}).join("");return`<section class="tower-surface" data-game-surface="tower">
      <div class="tower-head">
        ${f("第一幕 / 四幕")}
        ${b("朝歌·焚册余烬")}
        ${h(e,["气血 85 / 100","灵石 20","修为 40"])}
        <p class="meta" data-route-progress>起点已完成 · 第 1 行待选择 · Boss 尚未抵达</p>
      </div>
      <div class="tower-map" data-tower-map data-current-node="${n(a)}">
        <div class="tower-spine" data-route-path></div>
        ${t}
        <div class="tower-base">起点</div>
      </div>
      <div class="btn-row">${p("查看宫库封门")}</div>
    </section>`}function Ae(e){const a=me.map(r=>{const t=r.id==="tribulation_0"||r.id==="tribulation_1"&&e.difficulty1Unlocked,d=r.id===e.difficultySelected,s=r.id==="tribulation_1"&&e.difficulty1Unlocked?"可选":r.status;return`<button type="button" class="${o("slip",d&&"is-selected",!t&&"is-locked")}"
      data-difficulty-card="${r.id}" data-source-key="${r.sourceKey}">
      <span class="tag">${n(s)}</span>
      <span class="name">${n(r.name)}</span>
      <span class="meta">${n(r.realm)} · ${n(r.decree)} · ${n(r.risk)}</span>
      <span class="body">${n(r.body)}</span>
    </button>`}).join("");return`${S(e)}
    ${m("劫")}
    <div data-game-surface="scroll">
      ${f("封神 · 第一季")}
      ${b("入劫")}
      ${G("先定这一世要承受的劫数。")}
      <hr class="brush" />
      <div class="slip-list">${a}</div>
      <p class="notice" data-economy-notice data-source-key="${J.sourceKey}">${n(J.text)}</p>
      <div class="btn-row">${p("踏入劫数 0")}</div>
    </div>`}function He(e){const a=N.map(d=>`<button type="button" class="${o("slip",e.fateSelected===d.id&&"is-selected")}"
    data-fate-card="${d.id}" data-source-key="${d.sourceKey}" ${e.fateConfirmed?"disabled":""}>
    <span class="tag">${n(d.tag)}</span>
    <span class="name">${n(d.name)}</span>
    <span class="meta">${n(d.effect)}</span>
    <span class="body">${n(d.body)}</span>
  </button>`).join(""),r=N.find(d=>d.id===e.fateSelected),t=e.fateConfirmed?"继续选择普攻技":r?`确认${r.name}`:"请先选择命格";return`${S(e)}
    ${m("命")}
    <div data-game-surface="scroll">
      ${f("本世一次")}
      ${b("择定命格")}
      ${G("命格将陪你走完这一世。确认后不可更改。")}
      ${h(e)}
      <p class="notice" data-selection-hint>${e.fateSelected?"本次选择将在确认后锁定。":"尚未选择命格"}</p>
      <div class="slip-list">${a}</div>
      ${e.fateConfirmed?`<div class="seal" data-confirmed-seal>命格已定 · ${n(r?.name??"破军·劫锋")}</div>`:""}
      <div class="btn-row">${p(t,!e.fateSelected&&!e.fateConfirmed)}</div>
    </div>`}function Le(e){const a=_.map(t=>`<button type="button" class="${o("slip",e.basicSelected===t.id&&"is-selected")}"
    data-basic-card="${t.id}" data-source-key="${t.sourceKey}" ${e.basicConfirmed?"disabled":""}>
    <span class="tag">${n(t.tag)}</span>
    <span class="name">${n(t.name)}</span>
    <span class="meta">${n(t.effect)}</span>
    <span class="body">${n(t.body)}</span>
  </button>`).join(""),r=_.find(t=>t.id===e.basicSelected);return`${S(e)}
    ${m("剑")}
    <div data-game-surface="scroll">
      ${f("开局三选一")}
      ${b("选择普攻技")}
      ${h(e)}
      <p class="meta" data-slot-summary>普攻技位 ${e.basicSelected?"1":"0"} / 1</p>
      <p class="notice" data-offer-rule>本轮固定三选一 · 不可刷新 · 不可跳过</p>
      <div class="slip-list">${a}</div>
      <p class="notice" data-selected-effect>${r?n(r.effect):"选择一门功法查看生效属性"}</p>
      <div class="btn-row">${p(r?`确认${r.name}`:"请先选择普攻技",!r)}</div>
    </div>`}function Me(e){const a=O.find(t=>t.id===e.rageSelected),r=O.map(t=>`<button type="button" class="${o("slip",e.rageSelected===t.id&&"is-selected")}"
    data-rage-card="${t.id}" data-source-key="${t.sourceKey}" ${e.rageConfirmed?"disabled":""}>
    <span class="tag">${n(t.tag)}</span>
    <span class="name">${n(t.name)}</span>
    <span class="meta">${n(t.effect)}</span>
    <span class="body">${n(t.body)}</span>
  </button>`).join("");return`${m("怒")}
    <div data-game-surface="scroll">
      ${f("首战胜利 · 普通奖励")}
      ${b("首胜·怒气技")}
      ${h(e,["气血 85/100"])}
      <div class="receipts">
        <div class="receipt" data-receipt="spirit-stone" data-source-key="catalog.3.5.spirit-stone">灵石 +20<br />0 → 20</div>
        <div class="receipt" data-receipt="cultivation" data-source-key="catalog.3.5.cultivation">修为 +40<br />0 → 40</div>
      </div>
      <p class="notice" data-offer-rule>首胜怒气技替代本场普通额外奖励 · 不可刷新 · 不可跳过</p>
      <p class="meta" data-slot-summary>怒气技位 ${e.rageSelected?"1":"0"} / 1</p>
      <div class="slip-list">${r}</div>
      <div class="btn-row">${p(e.rageConfirmed?"前往朝歌":a?`确认${a.name}`:"请先选择怒气技",!a&&!e.rageConfirmed)}</div>
    </div>`}function je(e){if(e.eventResult){const t=z(C.options,e.eventResult);return`${m("证")}
      <div data-game-surface="scroll">
        ${f("已落定")}
        ${b(t.resultTitle)}
        <span class="seal">${n(t.checkMark)}</span>
        <p class="lede" data-source-key="${t.sourceKey}">${n(t.resultBody)}</p>
        <p class="meta">${n(t.fact)}</p>
        <div class="btn-row">${p("前往灰巷巡兵")}</div>
      </div>`}const a=C.options.map(t=>`<button type="button" class="${o("choice",e.eventSelected===t.id&&"is-selected")}"
    data-event-option="${t.id}" data-source-key="${t.sourceKey}">
    <span class="name">${n(t.title)}</span>
    <span class="meta">${n(t.check)}</span>
    <span class="body">公开代价：${n(t.cost)}</span>
  </button>`).join(""),r=C.options.find(t=>t.id===e.eventSelected);return`${S(e)}
    ${m("门")}
    <div data-game-surface="scroll">
      ${f(C.kind)}
      ${b(C.title)}
      ${h(e,["气血 85/100"])}
      <p class="lede" data-event-summary>${n(C.summary)}</p>
      <p class="body" data-event-detail>${n(C.detail)}</p>
      <p class="notice" data-event-warning>${n(C.warning)}</p>
      <div class="choice-list">${a}</div>
      <div class="btn-row">${p(r?r.id==="assist"?"确认救出杂役":"确认拓取封泥":"请先选择行动",!r)}</div>
    </div>`}function Ne(e){const a=W.find(t=>t.id===e.rewardSelected),r=W.map(t=>`<button type="button" class="${o("slip",e.rewardSelected===t.id&&"is-selected")}"
    data-reward-card="${t.id}" data-source-key="${t.sourceKey}" ${e.rewardConfirmed?"disabled":""}>
    <span class="tag">${n(t.kind)}</span>
    <span class="name">${n(t.name)}</span>
    <span class="meta">${n(t.effect)}</span>
    <span class="body">${n(t.body)}</span>
    ${e.rewardSelected===t.id?`<span class="notice">${n(t.preview)}</span>`:""}
  </button>`).join("");return`${m("利")}
    <div data-game-surface="scroll">
      ${f("灰巷巡兵 · 普通奖励")}
      ${b("战利结算")}
      ${h(e,["气血 58/100"])}
      <div class="receipts">
        <div class="receipt" data-receipt="spirit-stone">灵石 +20<br />20 → 40</div>
        <div class="receipt" data-receipt="cultivation">修为 +40<br />40 → 80</div>
      </div>
      <p class="notice" data-offer-rule>额外奖励三选一 · 至少两种类别 · 不可刷新 · 不可跳过</p>
      <div class="slip-list">${r}</div>
      <div class="btn-row">${p(a?`确认${a.name}`:"请先选择额外奖励",!a&&!e.rewardConfirmed)}</div>
    </div>`}function Be(e){const a=V.find(t=>t.id===e.buildSlot)??V[5];if(!a)throw new Error("missing build slot fixture");const r=V.map(t=>`<button type="button" class="${o("slot",e.buildSlot===t.id&&"is-selected")}"
    data-build-slot="${t.id}" data-source-key="${t.sourceKey}">
    <span class="tag">${n(t.label)}</span>
    <span class="name">${n(t.id==="artifact-2"&&e.buildReplaced?v.afterSlot:t.name)}</span>
  </button>`).join("");return`${S(e)}
    ${m("藏")}
    <div data-game-surface="scroll">
      ${f("替换演示镜像")}
      ${b("整理道藏")}
      ${h(e,["气血 58/100","灵石 40","修为 80"])}
      <div class="slot-list">${r}</div>
      <div class="reader">
        <span class="tag">${n(a.label)}</span>
        <div class="name">${n(a.id==="artifact-2"&&e.buildReplaced?v.afterSlot:a.name)}</div>
        <p class="body">${n(a.id==="artifact-2"&&e.buildReplaced?"玄砂印·仙品法宝；生效时法防增加8点。佩于法宝位，随身生效。":a.body)}</p>
      </div>
      <div class="stats">${ye.map(([t,d])=>{let s=d;return e.buildReplaced&&t==="外防"&&(s=v.afterDef),e.buildReplaced&&t==="法防"&&(s=v.afterMdef),`<div class="stat"><small>${n(t)}</small><b>${n(s)}</b></div>`}).join("")}</div>
      <p class="notice">待处理法宝 · ${n(v.candidate)}</p>
      <button type="button" class="btn ghost" data-preview-replace>预览替换</button>
      <div class="btn-row">${p("前往坊市")}</div>
    </div>`}function De(e){const a=(e.shopRefreshed?ne:re).map(r=>{const t=e.shopPurchased.includes(r.id);return`<button type="button" class="${o("shop-item",t&&"is-sold")}" data-shop-item="${r.id}" data-source-key="${r.sourceKey}" ${t?"disabled":""}>
      <span class="tag">${t?"已售罄":n(r.cta)}</span>
      <span class="name">${n(r.name)}</span>
      <span class="meta">${n(r.meta)}</span>
      <span class="body">${n(r.body)}</span>
    </button>`}).join("");return`${S(e)}
    ${m("市")}
    <div data-game-surface="scroll">
      ${f("朝歌火线外的临时摊位")}
      ${b("坊市易物")}
      ${h(e,[`灵石 ${Ce(e)}`,`刷新 ${e.shopRefreshCount} / 5`])}
      <p class="notice">只售本世法宝与功法 · 不售修为、境界或传奇物品</p>
      <div class="shop-list">${a}</div>
      <button type="button" class="btn ghost" data-shop-refresh ${e.shopRefreshed?"disabled":""}>${e.shopRefreshed?"再次刷新 · 10 灵石":"免费刷新"}</button>
      <p class="notice">${e.shopRefreshed?"本效果原型只演示首次免费刷新；正式规则每幕最多 5 次。":"本幕首次刷新免费，最多刷新 5 次。"}</p>
      <div class="btn-row">${p("离开坊市，前往修整")}</div>
    </div>`}function ze(e){if(e.restCompleted){const t=P.find(d=>d.id===e.restSelected)??P[0];return`${m("息")}
      <div data-game-surface="scroll">
        ${f("已结算")}
        ${b(`${t.name}完成`)}
        <p class="lede" data-source-key="${t.sourceKey}">${n(t.preview)}</p>
        <p class="notice">本节点已经结算，不能再选择其他动作。</p>
        <div class="btn-row">${p("前往印阵前夜")}</div>
      </div>`}const a=P.map(t=>`<button type="button" class="${o("choice",e.restSelected===t.id&&"is-selected")}"
    data-rest-action="${t.id}" data-source-key="${t.sourceKey}">
    <span class="name">${n(t.name)}</span>
    <span class="body">${n(t.preview)}</span>
  </button>`).join(""),r=P.find(t=>t.id===e.restSelected);return`${S(e)}
    ${m("井")}
    <div data-game-surface="scroll">
      ${f("第六行 · 修整节点")}
      ${b("井栏修整")}
      ${h(e,["气血 58/100","灵石 20","修为 80"])}
      <p class="notice">本节点只能执行 1 个动作 · 不消耗灵石或修为</p>
      <div class="choice-list">${a}</div>
      <div class="btn-row">${p(r?`确认${r.name}`:"请先选择修整动作",!r)}</div>
    </div>`}function Fe(e){if(e.prepCompleted){const t=T.find(d=>d.id===e.prepSelected)??T[2];return`${m("印")}
      <div data-game-surface="scroll">
        ${f("准备已定")}
        ${b(`${t.name}完成`)}
        <p class="lede" data-source-key="${t.sourceKey}">${n(t.preview)}</p>
        <p class="meta">气血仍 88/100 · 灵石仍 20 · 修为仍 80</p>
        <div class="btn-row">${p("迎战劫印监令")}</div>
      </div>`}const a=T.map(t=>`<button type="button" class="${o("choice",e.prepSelected===t.id&&"is-selected")}"
    data-prep-action="${t.id}" data-source-key="${t.sourceKey}">
    <span class="name">${n(t.name)}</span>
    <span class="body">${n(t.preview)}</span>
  </button>`).join(""),r=T.find(t=>t.id===e.prepSelected);return`${S(e)}
    ${m("夜")}
    <div data-game-surface="scroll">
      ${f("Boss 前固定准备")}
      ${b("印阵前夜")}
      ${h(e,["气血 88/100","灵石 20","修为 80"])}
      <p class="lede">劫印监令会把火场残印钉回封条。护住三处能让旁人指认的证物并击破它的印阵。</p>
      <p class="notice">进入准备节点不会自动回满气血，不会发放灵石或修为；只能执行 1 个动作。</p>
      <div class="choice-list">${a}</div>
      <div class="btn-row">${p(r?`确认${r.name}`:"请先选择准备动作",!r)}</div>
    </div>`}function Ue(){const e=[{name:"朝歌·焚册余烬",detail:"已完成 · 劫印监令",done:!0},{name:"陈塘关·潮门验骨",detail:"固定带过 · 龙宫验魂使",done:!0},{name:"西岐·飞熊粮道",detail:"固定带过 · 申公豹·粮契化身",done:!0},{name:"封神台·断契还名",detail:"待预览 · 申公豹·断契终战",done:!1}];return`${m("定")}
    <div data-game-surface="acts">
      ${f("朝歌·焚册余烬")}
      ${b("第一幕已定")}
      <p class="meta" data-act-result-boss>劫印监令 · 已击败</p>
      <p class="lede" data-act-result-objective>三处证物全部留存 · 3/3</p>
      <div class="receipts">
        <div class="receipt" data-receipt="spirit-stone">灵石 +60<br />20 → 80</div>
        <div class="receipt" data-receipt="cultivation">修为 +120<br />80 → 200</div>
      </div>
      <p data-major-fate><b>让活证人落笔</b><br />活人的口述成为本世事实，并将“榜外无名”线索带入下一幕。</p>
      <ul class="list-plain" data-evidence-list>
        <li>活人证词 · 已保留</li><li>封泥拓片 · 已保留</li><li>残册空名 · 已保留</li>
      </ul>
      <p class="notice" data-carry-list>跨幕保留：气血 41/100 · 灵石 80 · 修为 200 · Build 与命格 · 榜外无名事实</p>
      <p class="notice" data-clear-list>幕结清除：朝歌路线选择 · 本幕临时效果 · 已结算节点状态</p>
      <p class="notice" data-prototype-skip-note>为集中评审终局页面，本效果原型将第二、三幕压缩为固定封册时间线；不模拟真实路线推进。</p>
      <div class="act-spine" data-tower-map data-act-spine>
        ${e.map((a,r)=>`<div class="${o("act-bead",a.done&&"is-done",!a.done&&"is-next")}">
          <span class="dot"></span>
          <div><b>${r+1} · ${n(a.name)}</b><div class="meta">${n(a.detail)}</div></div>
        </div>`).join("")}
      </div>
      <div class="btn-row">
        ${p("预览第四幕终战")}
        <button type="button" class="btn ghost" data-return-journey>返回劫图</button>
      </div>
    </div>`}function Ve(e){const a=D.find(t=>t.id===e.endingSelected),r=D.map(t=>`<button type="button" class="${o("slip",e.endingSelected===t.id&&"is-selected")}"
    data-ending="${t.id}" data-source-key="${t.sourceKey}" ${e.endingConfirmed?"disabled":""}>
    <span class="tag">${n(t.tag)}</span>
    <span class="name">${n(t.name)}</span>
    <span class="body">${n(t.body)}</span>
    <span class="meta">${n(t.reason)}</span>
  </button>`).join("");return`${S(e)}
    ${m("归")}
    <div data-game-surface="scroll">
      ${f("终战已定 · 申公豹·断契终战已击败")}
      ${b("选择本世归宿")}
      ${h(e,["灵石 60"])}
      <p class="notice">断契代价：舍财 80 灵石 · 已完成。最终合法集合 3 / 3。</p>
      <div class="slip-list">${r}</div>
      ${e.endingConfirmed?`<div class="seal">${n(a?.name??"断契还名")} · 已确认</div>`:""}
      <div class="btn-row">${p(e.endingConfirmed?"封存本世":a?`确认${a.name}`:"请先选择归宿",!a&&!e.endingConfirmed)}</div>
    </div>`}function We(e){const a=e.endingSelected==="listed"||e.endingSelected==="mortal"?e.endingSelected:"restored",r=L[a];return`${m("册")}
    <div data-game-surface="scroll">
      ${f("第一世 · 劫数 0")}
      ${b("本世封册")}
      ${h(e)}
      <p data-life-run-status><span class="tag">LifeRunStatus</span> <b>成功</b></p>
      <p data-ending-outcome><span class="tag">EndingOutcome</span> <b>${n(r.outcome)}</b></p>
      <p class="lede" data-settlement-summary>${n(r.summary)}</p>
      <div class="act-spine" data-act-spine>
        ${L.acts.map((t,d)=>`<div class="act-bead is-done">
          <span class="dot"></span>
          <div><b>${d+1} 幕</b><div class="meta">${n(t)}</div></div>
        </div>`).join("")}
      </div>
      <h2 class="name">最终 Build</h2>
      <ul class="list-plain">${L.build.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
      <h2 class="name">本世清除</h2>
      <ul class="list-plain">${L.clears.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
      <h2 class="name">账号保留</h2>
      <ul class="list-plain">${L.retains.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
      <p class="notice">账号保留不会增加下一世基础九维、掉落倍率、初始品阶或永久装备。本世新增：名不入册、${n(r.achievement)}、人物：劫印监令、人物：申公豹、因果：断契还名。</p>
      <div class="btn-row">
        <button type="button" class="btn ghost" data-open-codex>查看封神录</button>
        ${p("开启下一世")}
      </div>
    </div>`}function Ge(e){const a=ge[e.codexCategory],r=a.find(d=>d.id===e.codexReaderId),t=a.map(d=>{const s=e.codexReadIds.includes(d.id)?d.tag.replace("新","已读"):d.tag;return`<button type="button" class="${o("choice",e.codexReaderId===d.id&&"is-selected")}" data-codex-entry="${d.id}" data-source-key="${d.sourceKey}">
      <span class="tag">${n(s)}</span>
      <span class="name">${n(d.name)}</span>
    </button>`}).join("");return`${S(e)}
    ${m("录")}
    <div data-game-surface="scroll">
      ${f(e.codexScope==="life"?"本世发现示例 12 条":"累世已收录 23")}
      ${b("封神录")}
      <p class="notice">只显示已公开条目；本效果原型不读取账号。</p>
      <div class="scope-row">
        <button type="button" class="${o("chip",e.codexScope==="life"&&"is-on")}" data-codex-scope="life">本世 · 12</button>
        <button type="button" class="${o("chip",e.codexScope==="account"&&"is-on")}" data-codex-scope="account">累世 · 23</button>
      </div>
      <div class="cat-row">${ve.map(d=>`<button type="button" class="${o("chip",e.codexCategory===d.id&&"is-on")}" data-codex-category="${d.id}">${n(d.label)} ${d.count}</button>`).join("")}</div>
      <div class="choice-list">${t}</div>
      ${r?`<div class="reader" data-codex-reader>
        <span class="tag">${n(e.codexReadIds.includes(r.id)?r.tag.replace("新","已读"):r.tag)}</span>
        <div class="name">${n(r.name)}</div>
        <p class="body">${n(r.body)}</p>
        <button type="button" class="btn ghost" data-codex-close>关闭条目</button>
      </div>`:""}
      <div class="btn-row">
        <button type="button" class="btn ghost" data-player-back>返回本世封册</button>
        ${p("开启下一世")}
      </div>
    </div>`}function Xe(e){switch(e.page){case"difficulty":return Ae(e);case"fate":return He(e);case"opening-basic":return Le(e);case"battle-opening":case"battle-normal":case"battle-boss":return Te(e);case"reward-rage":return Me(e);case"journey":return Oe(e);case"event":return je(e);case"reward-normal":return Ne(e);case"build":return Be(e);case"shop":return De(e);case"rest":return ze(e);case"preparation":return Fe(e);case"act-result":return Ue();case"ending":return Ve(e);case"settlement":return We(e);case"codex":return Ge(e);default:return""}}function Ye(e){return e.page==="journey"?"is-tower":e.page==="battle-opening"||e.page==="battle-normal"||e.page==="battle-boss"&&(e.bossMode==="act1"||e.sacrificeConfirmed)?"is-arena":""}function Je(e){const a=e.modal;if(!a)return"";if(a.kind==="fate"){const r=z(N,a.itemId??"fate-pojun");return k("命格一经确认，本世不可更改",`你将以“${r.name}”开始第一世。`,"再想想","确认命格","fate")}if(a.kind==="event"){const r=z(C.options,a.itemId??"assist");return k(r.confirmTitle,r.confirmBody,"返回选择","确认行动","event")}if(a.kind==="rest"){const r=P.find(t=>t.id===a.itemId)??P[0];return k("确认本次修整？",`每个修整节点只能执行一个动作。
${r.preview}`,"返回选择","确认执行","rest")}if(a.kind==="prep"){const r=T.find(t=>t.id===a.itemId)??T[2];return k("此准备完成后将迎战劫印监令",`本节点只能执行一个动作，确认后不可返回重选。
${r.preview}`,"返回选择","确认准备","prep")}if(a.kind==="skip")return k("跳过回放？","斗法结果不会改变。","继续观看","跳至结果","skip");if(a.kind==="shop-buy"||a.kind==="shop-replace"){const t=[...re,...ne].find(s=>s.id===a.itemId);if(!t)return"";const d=a.kind==="shop-replace"?`支付 ${t.cost} 灵石并替换？`:`购买${t.name}？`;return k(d,`${t.preview}
灵石 ${t.afterStones}`,"取消",`支付 ${t.cost} 灵石${a.kind==="shop-replace"?"并替换":""}`,"shop")}if(a.kind==="build-replace")return`<div class="overlay" data-overlay><div class="modal" data-confirm-modal="build">
      <h2>预览替换</h2>
      <p>法宝位 2：${n(v.beforeSlot)} → ${n(v.afterSlot)}</p>
      <p>主要效果：${n(v.beforeEffect)} → ${n(v.afterEffect)}</p>
      <p>总外防 ${n(v.beforeDef)} → ${n(v.afterDef)} · 总法防 ${n(v.beforeMdef)} → ${n(v.afterMdef)}</p>
      <p>旧物去向：确认后，流云佩与其阶数一并退场。</p>
      <div class="btn-row">
        <button type="button" class="btn ghost" data-cancel-replace>保留流云佩</button>
        <button type="button" class="btn primary" data-confirm-replace>确认替换</button>
      </div>
    </div></div>`;if(a.kind==="sacrifice"){const r=B.find(t=>t.id===a.itemId)??B[1];return k(r.confirmTitle,r.confirmBody,"返回选择","确认代价并开启终战","sacrifice")}if(a.kind==="ending"){const r=D.find(t=>t.id===a.itemId)??D[2];return k("归宿确认后，本世将进入结算",`你选择“${r.name}”。该选择不会改变 LifeRunStatus；本世状态与归宿会分别记录。`,"返回选择","确认归宿","ending")}return a.kind==="next-life"?k("开启下一世？","本地原型将清除本世 fixture，并回到入劫页面。Codex、成就和横向解锁的展示计数保留。","暂不开始","开启下一世","next-life"):a.kind==="reset-flow"?k("重置完整流程","重置后将回到“入劫”，所有本地选择都会清除。","取消","确认重置","reset-flow"):""}function k(e,a,r,t,d){return`<div class="overlay" data-overlay><div class="modal" data-confirm-modal="${n(d)}">
    <h2>${n(e)}</h2>
    <p class="body">${n(a)}</p>
    <div class="btn-row">
      <button type="button" class="btn ghost" data-modal-cancel>${n(r)}</button>
      <button type="button" class="btn primary" data-modal-confirm>${n(t)}</button>
    </div>
  </div></div>`}function qe(e){if(e.page!=="journey"||!e.openedPanel)return"";const a=te.find(s=>s.id===e.openedPanel);if(!a)return"";const r=oe(e,a.id,a.status==="enterable"),t=a.status==="enterable"&&r!=="walked"&&!e.journeyReview,d=r==="walked"?"已走过":a.cta;return`<div class="overlay" data-overlay><div class="sheet" data-node-sheet>
    <span class="tag">${n(a.kind)}</span>
    <h2>${n(a.name)}</h2>
    <p class="body">${n(a.summary)}</p>
    <p class="meta">${t?"可进入":r==="walked"?"已走过":"尚未抵达"}</p>
    <div class="btn-row">
      <button type="button" class="btn ghost" data-close-panel>关闭</button>
      <button type="button" class="btn primary" data-enter-node ${t?"":"disabled"}>${n(t?a.cta:d)}</button>
    </div>
  </div></div>`}function Qe(e){const a=de[e.page],r=Re(e);return`<div class="studio">
    <header class="review-shell" data-review-shell>
      <strong class="brand">Gameplay UI Web 效果原型</strong>
      <span class="badge" data-prototype-badge>效果原型 · 本地固定内容</span>
      <span class="badge rule" data-network-badge>不接接口 / 不读存档</span>
      <span class="badge" data-review-fixture>固定演示：第一世 · 劫数 0 · 破军·劫锋</span>
      <span class="shell-spacer"></span>
      <button type="button" class="shell-btn ${e.viewport==="390"?"is-on":""}" data-viewport="390" aria-pressed="${e.viewport==="390"}">390×844</button>
      <button type="button" class="shell-btn ${e.viewport==="750"?"is-on":""}" data-viewport="750" aria-pressed="${e.viewport==="750"}">750×1334</button>
      <button type="button" class="shell-btn ${e.viewport==="desktop"?"is-on":""}" data-viewport="desktop" aria-pressed="${e.viewport==="desktop"}">桌面适配</button>
      <button type="button" class="shell-btn" data-review-reset-page>重置当前页</button>
      <button type="button" class="shell-btn danger" data-review-reset-flow>重置完整流程</button>
      <label data-review-state>页面状态
        <select data-review-state-select>
          ${a.map(t=>`<option value="${t.id}" ${t.id===r?"selected":""}>${n(t.label)}</option>`).join("")}
        </select>
      </label>
      <button type="button" class="shell-btn" data-scene-index-toggle>页面索引 · 18</button>
    </header>
    ${e.indexOpen?`<aside class="index-drawer" data-scene-index>
      <h2>页面索引 · 18</h2>
      <p class="notice" data-review-note>页面索引用于评审直达；玩家主 CTA 仍按固定主链推进。</p>
      ${ae.map(t=>`<button type="button" class="${t.id===e.page?"is-on":""}" data-scene-jump="${t.id}">${n(t.label)}</button>`).join("")}
    </aside>`:""}
    <div class="stage-host" data-canvas-host data-viewport-mode="${e.viewport}">
      <div class="stage-sizer" data-stage-sizer>
        <main class="canvas ${Ye(e)}" data-player-canvas data-page-id="${e.page}">
          <div class="scroll-inner">${Xe(e)}</div>
          ${e.toast?`<div class="toast" data-toast>${n(e.toast)}</div>`:""}
        </main>
      </div>
    </div>
    ${qe(e)}
    ${Je(e)}
  </div>`}const F=document.querySelector("#app");if(!F)throw new Error("missing #app");let u=M(),Z=0,ee=0;function l(e){u=Ee(u,e),ue()}function Ze(){return u.page==="battle-opening"?u.battles.opening.speed:u.page==="battle-normal"?u.battles.normal.speed:u.battles[u.bossMode].speed}function ea(){return u.page==="battle-opening"?u.battles.opening.status==="playing":u.page==="battle-normal"?u.battles.normal.status==="playing":u.page==="battle-boss"?u.battles[u.bossMode].status==="playing":!1}function aa(){if(window.clearTimeout(Z),!ea())return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches?40:Math.round(900/Ze());Z=window.setTimeout(()=>l({type:"BATTLE_TICK"}),a)}function ce(){const e=document.querySelector("[data-canvas-host]"),a=document.querySelector("[data-stage-sizer]"),r=document.querySelector("[data-player-canvas]");if(!e||!a||!r)return;const t=u.viewport,d=e.clientWidth||window.innerWidth,s=Math.min(t==="390"?390:750,d),g=Math.min(1,s/750);r.style.transform=`scale(${g})`,a.style.width=`${750*g}px`,a.style.height=`${r.offsetHeight*g}px`}function ue(){F.innerHTML=Qe(u),ce(),aa(),window.clearTimeout(ee),u.toast&&(ee=window.setTimeout(()=>l({type:"DISMISS_TOAST"}),2400))}function ta(e){return ae.some(a=>a.id===e)?e:null}F.addEventListener("click",e=>{const a=e.target?.closest("[data-viewport], [data-scene-jump], [data-scene-index-toggle], [data-review-reset-page], [data-review-reset-flow], [data-player-back], [data-primary-action], [data-modal-cancel], [data-modal-confirm], [data-difficulty-card], [data-fate-card], [data-basic-card], [data-rage-card], [data-route-node], [data-enter-node], [data-close-panel], [data-event-option], [data-reward-card], [data-build-slot], [data-preview-replace], [data-cancel-replace], [data-confirm-replace], [data-shop-item], [data-shop-refresh], [data-rest-action], [data-prep-action], [data-sacrifice], [data-ending], [data-battle-play], [data-battle-speed], [data-battle-skip], [data-battle-replay], [data-open-codex], [data-codex-scope], [data-codex-category], [data-codex-entry], [data-codex-close], [data-return-journey], [data-overlay]");if(a){if(a.dataset.viewport){l({type:"SET_VIEWPORT",viewport:a.dataset.viewport});return}if(a.dataset.sceneJump){const r=ta(a.dataset.sceneJump);r&&l({type:"JUMP",page:r});return}if(a.hasAttribute("data-scene-index-toggle")){l({type:"TOGGLE_INDEX"});return}if(a.hasAttribute("data-review-reset-page")){l({type:"RESET_PAGE"});return}if(a.hasAttribute("data-review-reset-flow")){l({type:"ASK_RESET_FLOW"});return}if(a.hasAttribute("data-player-back")){l({type:"BACK"});return}if(a.hasAttribute("data-primary-action")){l({type:"PRIMARY"});return}if(a.hasAttribute("data-modal-cancel")){l({type:"CLOSE_MODAL"});return}if(a.hasAttribute("data-modal-confirm")){l({type:"CONFIRM_MODAL"});return}if(a.dataset.difficultyCard){l({type:"SELECT_DIFFICULTY",id:a.dataset.difficultyCard});return}if(a.dataset.fateCard){l({type:"SELECT_FATE",id:a.dataset.fateCard});return}if(a.dataset.basicCard){l({type:"SELECT_BASIC",id:a.dataset.basicCard});return}if(a.dataset.rageCard){l({type:"SELECT_RAGE",id:a.dataset.rageCard});return}if(a.dataset.routeNode){l({type:"OPEN_NODE",id:a.dataset.routeNode});return}if(a.hasAttribute("data-enter-node")){l({type:"ENTER_NODE"});return}if(a.hasAttribute("data-close-panel")){l({type:"CLOSE_PANEL"});return}if(a.dataset.eventOption==="assist"||a.dataset.eventOption==="observe"){l({type:"SELECT_EVENT",id:a.dataset.eventOption});return}if(a.dataset.rewardCard){l({type:"SELECT_REWARD",id:a.dataset.rewardCard});return}if(a.dataset.buildSlot){l({type:"OPEN_SLOT",id:a.dataset.buildSlot});return}if(a.hasAttribute("data-preview-replace")){l({type:"PREVIEW_REPLACE"});return}if(a.hasAttribute("data-cancel-replace")){l({type:"CANCEL_REPLACE"});return}if(a.hasAttribute("data-confirm-replace")){l({type:"CONFIRM_REPLACE"});return}if(a.dataset.shopItem){l({type:"OPEN_SHOP",id:a.dataset.shopItem});return}if(a.hasAttribute("data-shop-refresh")){l({type:"SHOP_REFRESH"});return}if(a.dataset.restAction){l({type:"SELECT_REST",id:a.dataset.restAction});return}if(a.dataset.prepAction){l({type:"SELECT_PREP",id:a.dataset.prepAction});return}if(a.dataset.sacrifice){l({type:"SELECT_SACRIFICE",id:a.dataset.sacrifice});return}if(a.dataset.ending){l({type:"SELECT_ENDING",id:a.dataset.ending});return}if(a.hasAttribute("data-battle-play")){l({type:"BATTLE_PLAY"});return}if(a.dataset.battleSpeed){l({type:"BATTLE_SPEED",speed:Number(a.dataset.battleSpeed)});return}if(a.hasAttribute("data-battle-skip")){l({type:"BATTLE_SKIP_ASK"});return}if(a.hasAttribute("data-battle-replay")){l({type:"BATTLE_REPLAY"});return}if(a.hasAttribute("data-open-codex")){l({type:"OPEN_CODEX"});return}if(a.dataset.codexScope==="life"||a.dataset.codexScope==="account"){l({type:"CODEX_SCOPE",scope:a.dataset.codexScope});return}if(a.dataset.codexCategory){l({type:"CODEX_CATEGORY",category:a.dataset.codexCategory});return}if(a.dataset.codexEntry){l({type:"CODEX_OPEN",id:a.dataset.codexEntry});return}if(a.hasAttribute("data-codex-close")){l({type:"CODEX_CLOSE"});return}if(a.hasAttribute("data-return-journey")){l({type:"RETURN_JOURNEY"});return}a.hasAttribute("data-overlay")&&e.target===a&&u.openedPanel&&!u.modal&&l({type:"CLOSE_PANEL"})}});F.addEventListener("change",e=>{const a=e.target;a?.hasAttribute("data-review-state-select")&&l({type:"APPLY_REVIEW_STATE",stateId:a.value})});window.addEventListener("resize",ce);ue();
