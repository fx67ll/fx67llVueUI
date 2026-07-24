import Vue from 'vue';

// 引入网站页脚组件
import { fx67llFooter } from '@c/pageCom/fx67ll-footer/index.js';

// 引入加载进度条组件
import { fx67llLoadingProgress } from '@c/pageCom/loading-progress/index.js';

// 引入加载动画组件
import { fx67llLoading } from '@c/pageCom/loading/index.js';

// 引入加载动画场景式组件
import { fx67llLoadingScreen } from '@c/pageCom/loading-screen/index.js';

// 引入形状组件合集
import { fx67llShapeInfinity } from '@c/objectCom/shape/infinity/infinity.js';
import { fx67llShapeStarFive } from '@c/objectCom/shape/star-five/star-five.js';
import { fx67llShapeTriangle } from '@c/objectCom/shape/triangle/triangle.js';
import { fx67llShapeHeart } from '@c/objectCom/shape/heart/heart.js';
import { fx67llShapeSpaceInvader } from '@c/objectCom/shape/space-invader/space-invader.js';
import { fx67llShapeEgg } from '@c/objectCom/shape/egg/egg.js';
import { fx67llShapePacMan } from '@c/objectCom/shape/pac-man/pac-man.js';
import { fx67llShapeDiamond } from '@c/objectCom/shape/diamond/diamond.js';
import { fx67llShapeYinyang } from '@c/objectCom/shape/yinyang/yinyang.js';
import { fx67llShapeCross } from '@c/objectCom/shape/cross/cross.js';
import { fx67llShapeMoon } from '@c/objectCom/shape/moon/moon.js';
import { fx67llShapeStarSix } from '@c/objectCom/shape/star-six/star-six.js';
import { fx67llShapeTalkBubble } from '@c/objectCom/shape/talk-bubble/talk-bubble.js';

// 二进制时钟组件
import { fx67llBinaryClock } from '@c/objectCom/clock/binary-clock/binary-clock.js';

// 随机马赛克头像组件
import { fx67llRandomMosaicAvatar } from '@c/divCom/mosaic-avatar/index.js';

// 放烟花组件
import { fx67llNanFireworks } from '@c/divCom/nan-fireworks/index.js';

export default {
  install(Vue) {
    // 注册网站页脚组件
    Vue.use(fx67llFooter);

    // 注册加载进度条组件
    Vue.use(fx67llLoadingProgress);

    // 注册加载动画组件
    Vue.use(fx67llLoading);

    // 注册加载动画场景式组件
    Vue.use(fx67llLoadingScreen);

    // 注册形状组件合集
    Vue.use(fx67llShapeInfinity);
    Vue.use(fx67llShapeStarFive);
    Vue.use(fx67llShapeTriangle);
    Vue.use(fx67llShapeHeart);
    Vue.use(fx67llShapeSpaceInvader);
    Vue.use(fx67llShapeEgg);
    Vue.use(fx67llShapePacMan);
    Vue.use(fx67llShapeDiamond);
    Vue.use(fx67llShapeYinyang);
    Vue.use(fx67llShapeCross);
    Vue.use(fx67llShapeMoon);
    Vue.use(fx67llShapeStarSix);
    Vue.use(fx67llShapeTalkBubble);

    // 注册二进制时钟组件
    Vue.use(fx67llBinaryClock);

    // 注册随机马赛克头像组件
    Vue.use(fx67llRandomMosaicAvatar);

    // 注册放烟花组件
    Vue.use(fx67llNanFireworks);
  },
};
