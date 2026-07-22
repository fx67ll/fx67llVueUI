import Vue from 'vue';

// 引入网站页脚组件
import { fx67llFooter } from '@c/pageCom/fx67ll-footer/index.js';

// 引入加载进度条组件
import { loadingProgress } from '@c/pageCom/loading-progress/index.js';

// 引入加载动画组件
import { fx67llLoading } from '@c/pageCom/loading/index.js';

// 引入形状组件合集
import { shapeInfinity } from '@c/objectCom/shape/infinity/infinity.js';
import { shapeStarFive } from '@c/objectCom/shape/star-five/star-five.js';
import { shapeTriangle } from '@c/objectCom/shape/triangle/triangle.js';
import { shapeHeart } from '@c/objectCom/shape/heart/heart.js';
import { shapeSpaceInvader } from '@c/objectCom/shape/space-invader/space-invader.js';
import { shapeEgg } from '@c/objectCom/shape/egg/egg.js';
import { shapePacMan } from '@c/objectCom/shape/pac-man/pac-man.js';
import { shapeDiamond } from '@c/objectCom/shape/diamond/diamond.js';
import { shapeYinyang } from '@c/objectCom/shape/yinyang/yinyang.js';
import { shapeCross } from '@c/objectCom/shape/cross/cross.js';
import { shapeMoon } from '@c/objectCom/shape/moon/moon.js';
import { shapeStarSix } from '@c/objectCom/shape/star-six/star-six.js';
import { shapeTalkBubble } from '@c/objectCom/shape/talk-bubble/talk-bubble.js';

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
    Vue.use(loadingProgress);

    // 注册加载动画组件
    Vue.use(fx67llLoading);

    // 注册形状组件合集
    Vue.use(shapeInfinity);
    Vue.use(shapeStarFive);
    Vue.use(shapeTriangle);
    Vue.use(shapeHeart);
    Vue.use(shapeSpaceInvader);
    Vue.use(shapeEgg);
    Vue.use(shapePacMan);
    Vue.use(shapeDiamond);
    Vue.use(shapeYinyang);
    Vue.use(shapeCross);
    Vue.use(shapeMoon);
    Vue.use(shapeStarSix);
    Vue.use(shapeTalkBubble);

    // 注册二进制时钟组件
    Vue.use(fx67llBinaryClock);

    // 注册随机马赛克头像组件
    Vue.use(fx67llRandomMosaicAvatar);

    // 注册放烟花组件
    Vue.use(fx67llNanFireworks);
  },
};
