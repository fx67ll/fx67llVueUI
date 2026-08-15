// 复杂配置可以查阅下方的官方示例
// https://calebman.github.io/vuepress-plugin-demo-container/zh/complex.html#%E7%BB%93%E5%90%88%E7%BB%84%E4%BB%B6%E5%BA%93%E7%A4%BA%E4%BE%8B

// 所有组件均通过实际运行代码演示（0.6.2 起页面/头像组件也改为实际运行 demo）

// 引入网站页脚组件
import { fx67llFooter } from '../../src/components/pageCom/fx67ll-footer/index.js';

// 引入加载进度条组件（progress 文档页用 iframe 演示，但组件已改名，此处注册不影响）
import { fx67llLoadingProgress } from '../../src/components/pageCom/loading-progress/index.js';

// 引入形状组件合集
import { fx67llShapeInfinity } from '../../src/components/objectCom/shape/infinity/infinity.js';
import { fx67llShapeStarFive } from '../../src/components/objectCom/shape/star-five/star-five.js';
import { fx67llShapeTriangle } from '../../src/components/objectCom/shape/triangle/triangle.js';
import { fx67llShapeHeart } from '../../src/components/objectCom/shape/heart/heart.js';
import { fx67llShapeSpaceInvader } from '../../src/components/objectCom/shape/space-invader/space-invader.js';
import { fx67llShapeEgg } from '../../src/components/objectCom/shape/egg/egg.js';
import { fx67llShapePacMan } from '../../src/components/objectCom/shape/pac-man/pac-man.js';
import { fx67llShapeDiamond } from '../../src/components/objectCom/shape/diamond/diamond.js';
import { fx67llShapeYinyang } from '../../src/components/objectCom/shape/yinyang/yinyang.js';
import { fx67llShapeCross } from '../../src/components/objectCom/shape/cross/cross.js';
import { fx67llShapeMoon } from '../../src/components/objectCom/shape/moon/moon.js';
import { fx67llShapeStarSix } from '../../src/components/objectCom/shape/star-six/star-six.js';
import { fx67llShapeTalkBubble } from '../../src/components/objectCom/shape/talk-bubble/talk-bubble.js';

// 引入二进制时钟组件
import { fx67llBinaryClock } from '../../src/components/objectCom/clock/binary-clock/binary-clock-for-demo.js';

// 引入数字时钟组件
import { fx67llDigitalClock } from '../../src/components/objectCom/clock/digital-clock/digital-clock.js';

// 引入放烟花组件
import { fx67llNanFireworks } from '../../src/components/divCom/nan-fireworks/index.js';

// 引入加载动画组件
import { fx67llLoading } from '../../src/components/pageCom/loading/index.js';

// 引入加载动画场景式组件
import { fx67llLoadingScreen } from '../../src/components/pageCom/loading-screen/index.js';

export default ({ Vue }) => {
  Vue.use(fx67llFooter);
  Vue.use(fx67llLoadingProgress);
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
  Vue.use(fx67llBinaryClock);
  Vue.use(fx67llDigitalClock);
  Vue.use(fx67llNanFireworks);
  Vue.use(fx67llLoading);
  Vue.use(fx67llLoadingScreen);
};
