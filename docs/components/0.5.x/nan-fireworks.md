# 放烟花

fx67llNanFireworks 是一个基于 fireworks-js 的 Vue 烟花特效组件，提供丰富的可视化烟花效果和高度可定制化的配置选项。

::: demo​ 大家一起来放烟花吧 (*^▽^*)

```vue
<template>
    <div :style="{height: '444px', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden'}">
        <fx67ll-nan-fireworks />
    </div>
</template>

<script>
    export default {
        name: 'fx67llDemo',
        data() {
            return {}
        },
        methods: {}
    };
</script>

<style>
</style>
```
:::

## 快速上手

### 基本使用

```vue
<template>
  <fx67ll-nan-fireworks />
</template>
```

### 设置背景和自动发射

```vue
<template>
  <div style="height: 500px; width: 100%;">
    <fx67ll-nan-fireworks 
      :bg-style-config="{
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        blur: true
      }"
      :is-auto-launch="true"
      :auto-launch-interval="1500"
      :launch-count="3"
    />
  </div>
</template>
```

## 核心功能

### 1. 自定义发射按钮

组件提供了高度灵活的自定义按钮系统，支持多种方式来定义按钮样式和行为：

#### 使用默认按钮配置

```vue
<fx67ll-nan-fireworks
  :launch-btn-config="{
    position: {
      top: '20px',
      right: '20px',
      fixed: true
    },
    style: {
      size: 'large',
      color: 'gradient',
      emoji: '✨',
      text: '发射烟花',
      pulse: true,
      clickEffect: 'combined'
    }
  }"
/>
```

#### 完全自定义按钮（插槽）

组件提供了一个名为 `button` 的插槽，允许您完全自定义按钮的外观和行为：

```vue
<fx67ll-nan-fireworks>
  <!-- 完全自定义按钮 -->
  <template #button="{ launchFireworks, fireworksRunning, stopFireworks, clearFireworks }">
    <div class="custom-controls">
      <button 
        class="custom-launch-btn"
        @click="launchFireworks"
        :disabled="fireworksRunning"
      >
        🚀 发射
      </button>
      
      <button 
        class="custom-stop-btn"
        @click="stopFireworks"
        v-if="fireworksRunning"
      >
        ⏹️ 停止
      </button>
      
      <button 
        class="custom-clear-btn"
        @click="clearFireworks"
      >
        🧹 清空
      </button>
    </div>
  </template>
</fx67ll-nan-fireworks>

<style>
.custom-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  display: flex;
  gap: 10px;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.custom-launch-btn, .custom-stop-btn, .custom-clear-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.custom-launch-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.custom-launch-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.custom-launch-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

#### 插槽作用域参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `launchFireworks` | `Function` | 发射烟花的方法 |
| `fireworksRunning` | `Boolean` | 烟花是否正在运行 |
| `stopFireworks` | `Function` | 停止烟花的方法 |
| `clearFireworks` | `Function` | 清空烟花的方法 |
| `startFireworks` | `Function` | 开始连续发射烟花的方法 |
| `updateFireworksConfig` | `Function` | 更新烟花配置的方法 |

### 2. 丰富的烟花配置

```vue
<fx67ll-nan-fireworks
  :fireworks-config="{
    // 基础参数
    opacity: 0.8,
    particles: 150,
    explosion: 8,
    intensity: 80,
    
    // 颜色配置
    hue: { min: 0, max: 360 },
    brightness: { min: 70, max: 100 },
    
    // 物理效果
    gravity: 1.5,
    acceleration: 1.1,
    friction: 0.93,
    
    // 鼠标交互
    mouse: {
      click: true,
      move: true,
      max: 5
    }
  }"
/>
```

### 3. 多种背景样式

```vue
<fx67ll-nan-fireworks
  :bg-style-config="{
    // 纯色背景
    color: 'rgba(10, 20, 40, 0.95)',
    
    // 或渐变背景
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    // 或图片背景
    image: 'https://example.com/background.jpg',
    
    // 毛玻璃效果
    blur: true,
    
    // 透明度
    opacity: 0.9
  }"
/>
```

### 4. 事件系统

```vue
<template>
  <fx67ll-nan-fireworks
    @fireworks-launched="handleLaunched"
    @fireworks-started="handleStarted"
    @fireworks-stopped="handleStopped"
    @fireworks-cleared="handleCleared"
    @fireworks-config-updated="handleConfigUpdated"
  />
</template>

<script>
export default {
  methods: {
    handleLaunched(event) {
      console.log('烟花发射:', {
        count: event.count,
        timestamp: event.timestamp,
        config: event.config
      })
    },
    handleStarted() {
      console.log('烟花开始连续发射')
    },
    handleStopped() {
      console.log('烟花停止')
    },
    handleCleared() {
      console.log('烟花已清空')
    },
    handleConfigUpdated(newConfig) {
      console.log('烟花配置已更新:', newConfig)
    }
  }
}
</script>
```

### 5. 编程式控制

```vue
<template>
  <div>
    <fx67ll-nan-fireworks ref="fireworks" />
    
    <div class="controls">
      <button @click="launch">🚀 单次发射</button>
      <button @click="start">▶️ 开始连续发射</button>
      <button @click="stop">⏹️ 停止发射</button>
      <button @click="clear">🧹 清空烟花</button>
      <button @click="updateConfig">⚙️ 更新配置</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    launch() {
      this.$refs.fireworks.launchFireworks()
    },
    start() {
      this.$refs.fireworks.startFireworks()
    },
    stop() {
      this.$refs.fireworks.stopFireworks()
    },
    clear() {
      this.$refs.fireworks.clearFireworks()
    },
    updateConfig() {
      this.$refs.fireworks.updateFireworksConfig({
        particles: 200,
        explosion: 10,
        hue: { min: 180, max: 240 } // 蓝色调
      })
    },
    setBackground() {
      this.$refs.fireworks.setBackground({
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        blur: true
      })
    }
  }
}
</script>
```

## 属性说明

### 基础属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| `bgStyleConfig` | 容器背景配置 | String/Object | - | `rgba(0, 0, 0, 0.97)` |
| `bgPreventZoom` | 是否启用容器背景防缩放功能 | Boolean | true/false | true |
| `isShowLaunchBtn` | 是否显示发射按钮 | Boolean | true/false | true |
| `isAutoLaunch` | 是否启用自动发射 | Boolean | true/false | false |
| `autoLaunchInterval` | 自动发射间隔(毫秒) | Number | - | 2333 |
| `launchCount` | 每次自动发射的烟花数量 | Number | - | 1 |
| `isShowLaunchTip` | 是否显示发射提示 | Boolean | true/false | false |

### 发射按钮配置 (launchBtnConfig)

```javascript
launchBtnConfig: {
  // 按钮位置
  position: {
    top: 'auto',     // 上边距
    right: '20px',   // 右边距
    bottom: '20px',  // 下边距
    left: 'auto',    // 左边距
    fixed: false,    // 是否固定定位
  },
  
  // 按钮样式
  style: {
    size: 'medium',          // 尺寸: small, medium, large, xlarge, custom
    width: null,             // 自定义宽度（custom时使用）
    height: null,            // 自定义高度（custom时使用）
    color: 'gradient',       // 颜色方案: gradient, primary, secondary, custom, transparent
    customColor: null,       // 自定义颜色（color为custom时使用）
    rounded: true,           // 是否圆形按钮
    shadow: true,            // 是否有阴影
    emoji: '✨',             // 按钮图标
    text: '',                // 按钮文字
    showText: true,          // 是否显示文字
    tooltip: '',             // 按钮提示
    border: false,           // 是否显示边框
    borderColor: 'rgba(255, 255, 255, 0.2)', // 边框颜色
    hoverEffect: true,       // 是否启用悬停效果
    pulse: false,            // 是否启用脉冲动画
    clickEffect: 'ripple',   // 点击效果: ripple(波纹), glow(发光), bounce(弹跳), combined(组合效果)
    rippleColor: 'rgba(255, 255, 255, 0.5)', // 波纹颜色
    clickScale: 0.92,        // 点击时缩放比例
  }
}
```

### 烟花配置 (fireworksConfig)

```javascript
fireworksConfig: {
  // 基础参数
  opacity: 0.7,           // 透明度
  acceleration: 1.05,     // 加速度
  friction: 0.95,         // 摩擦力
  gravity: 1.2,           // 重力
  particles: 100,         // 粒子数量
  traceLength: 3,         // 轨迹长度
  traceSpeed: 8,          // 轨迹速度
  explosion: 5,           // 爆炸强度
  intensity: 50,          // 强度
  flickering: 30,         // 闪烁效果

  // 颜色与外观
  hue: { min: 0, max: 360 },          // 色相范围
  brightness: { min: 60, max: 90 },   // 亮度范围
  lineStyle: 'round',                 // 线条样式

  // 物理效果
  decay: { min: 0.015, max: 0.025 },  // 衰减

  // 发射控制
  delay: { min: 30, max: 60 },        // 延迟
  rocketsPoint: { min: 50, max: 50 }, // 发射点

  // 线条宽度
  lineWidth: {
    explosion: { min: 1, max: 3 },    // 爆炸线条宽度
    trace: { min: 0.5, max: 1 }       // 轨迹线条宽度
  },

  // 鼠标交互
  mouse: {
    click: true,     // 是否响应鼠标点击
    move: false,     // 是否响应鼠标移动
    max: 3           // 最大同时发射数量
  },

  // 高级设置
  sound: false,                      // 声音效果（暂不支持）
  autoresize: true,                  // 自动调整大小
  boundaries: {                      // 边界
    x: 50,
    y: 50,
    width: 50,
    height: 50
  },
  minHeight: 0,                      // 最小高度
  maxHeight: 0                       // 最大高度
}
```

#### 🎮 烟花配置在线实时测试

在完全理解了各项参数后，你可以访问 **[烟花配置实时测试页面](https://three.fx67ll.com/fireworks-complete-config-test)**。

在这个基于 Three.js 的独立页面中，你可以：
*   **直观地调整** 上文提到的所有烟花参数（如粒子数量、重力、颜色范围等）。
*   **实时查看** 参数调整对烟花效果的直接影响。
*   通过**交互式操作**，快速找到最适合你当前场景的完美配置组合，然后再应用到 Vue 组件中。

这个测试工具能帮助你更高效地探索和驾驭烟花的所有视觉效果。


## 方法 API

通过 `ref` 可以调用组件的方法：

```javascript
// 在模板中定义 ref
<fx67ll-nan-fireworks ref="fireworks" />

// 在代码中调用方法
this.$refs.fireworks.launchFireworks()      // 发射烟花
this.$refs.fireworks.startFireworks()       // 开始连续发射
this.$refs.fireworks.stopFireworks()        // 停止发射
this.$refs.fireworks.clearFireworks()       // 清空烟花
this.$refs.fireworks.updateFireworksConfig(config) // 更新配置
this.$refs.fireworks.setBackground(config)  // 设置背景
```

## 事件 API

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| `fireworks-launched` | 烟花发射时触发 | `{ count, timestamp, config }` |
| `fireworks-started` | 开始连续发射时触发 | - |
| `fireworks-stopped` | 停止发射时触发 | - |
| `fireworks-cleared` | 清空烟花时触发 | - |
| `fireworks-config-updated` | 配置更新时触发 | `newConfig` |

## 样式定制

### 自定义样式类名

组件提供了以下 CSS 类名供自定义样式：

```css
/* 整个烟花容器 */
.fireworks-box {}

/* 默认按钮 */
.fireworks-button {}

/* 按钮图标 */
.button-emoji {}

/* 按钮文字 */
.button-text {}

/* 波纹效果 */
.ripple-effect {}

/* 发光效果 */
.glow-effect {}

/* 画布容器 */
.canvas-container {}

/* 反馈消息 */
.feedback-message {}
```

### 按钮样式示例

```vue
<fx67ll-nan-fireworks>
  <template #button="{ launchFireworks }">
    <button 
      class="my-custom-btn"
      @click="launchFireworks"
    >
      <span class="my-icon">🎇</span>
      <span class="my-text">自定义按钮</span>
    </button>
  </template>
</fx67ll-nan-fireworks>

<style>
.my-custom-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 24px;
  background: linear-gradient(45deg, #FF512F, #DD2476);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 20px rgba(255, 81, 47, 0.3);
  transition: all 0.3s;
}

.my-custom-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 81, 47, 0.4);
}

.my-icon {
  font-size: 20px;
}

.my-text {
  font-size: 14px;
}
</style>
```

## 高级用法

### 动态切换主题

```vue
<template>
  <div>
    <fx67ll-nan-fireworks ref="fireworks" />
    
    <div class="theme-controls">
      <button @click="setTheme('default')">默认主题</button>
      <button @click="setTheme('blue')">蓝色主题</button>
      <button @click="setTheme('rainbow')">彩虹主题</button>
      <button @click="setTheme('neon')">霓虹主题</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setTheme(theme) {
      const themes = {
        default: {
          fireworksConfig: {
            hue: { min: 0, max: 360 },
            brightness: { min: 60, max: 90 }
          },
          bgStyleConfig: {
            color: 'rgba(0, 0, 0, 0.97)'
          }
        },
        blue: {
          fireworksConfig: {
            hue: { min: 200, max: 240 },
            brightness: { min: 70, max: 100 }
          },
          bgStyleConfig: {
            gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
          }
        },
        rainbow: {
          fireworksConfig: {
            hue: { min: 0, max: 360 },
            brightness: { min: 80, max: 100 },
            particles: 150
          },
          bgStyleConfig: {
            color: 'rgba(10, 10, 20, 0.95)'
          }
        },
        neon: {
          fireworksConfig: {
            hue: { min: 120, max: 160 },
            brightness: { min: 90, max: 100 },
            flickering: 50
          },
          bgStyleConfig: {
            gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
          }
        }
      }
      
      if (this.$refs.fireworks && themes[theme]) {
        this.$refs.fireworks.updateFireworksConfig(themes[theme].fireworksConfig)
        this.$refs.fireworks.setBackground(themes[theme].bgStyleConfig)
      }
    }
  }
}
</script>
```

### 响应式配置

```vue
<template>
  <fx67ll-nan-fireworks
    :launch-btn-config="btnConfig"
    :fireworks-config="fireworksConfig"
  />
</template>

<script>
export default {
  data() {
    return {
      isMobile: window.innerWidth < 768
    }
  },
  
  computed: {
    btnConfig() {
      return {
        position: {
          [this.isMobile ? 'bottom' : 'right']: '20px',
          [this.isMobile ? 'right' : 'bottom']: '20px',
          fixed: true
        },
        style: {
          size: this.isMobile ? 'large' : 'medium',
          text: this.isMobile ? '' : '发射烟花'
        }
      }
    },
    
    fireworksConfig() {
      return {
        particles: this.isMobile ? 80 : 120,
        explosion: this.isMobile ? 4 : 6
      }
    }
  },
  
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768
    }
  }
}
</script>
```

## 常见问题

### 1. 为什么我的按钮不显示？

确保：
- `isShowLaunchBtn` 属性设置为 `true`
- 没有使用自定义插槽覆盖按钮
- 组件有足够的高度（建议设置父容器高度）

### 2. 如何移除默认按钮使用完全自定义的按钮？

有三种方式：
1. 设置 `isShowLaunchBtn` 为 `false`
2. 使用 `button` 插槽提供自定义按钮
3. 使用 CSS 隐藏默认按钮

### 3. 烟花效果卡顿怎么办？

尝试：
- 减少 `particles` 数量
- 降低 `explosion` 强度
- 检查浏览器硬件加速是否开启
- 确保在性能较好的设备上运行

### 4. 如何让烟花响应鼠标点击？

确保 `fireworksConfig.mouse.click` 设置为 `true`，并设置适当的 `boundaries`。

### 5. 组件高度不正确的解决办法

由于烟花画布需要具体的高度值，请确保：
- 父容器有明确的高度（如 `height: 500px`）
- 或者使用固定定位（如 `position: fixed; top: 0; left: 0; width: 100%; height: 100vh;`）

## 版本说明

> 0.5.0 版本以上支持放烟花组件，其他版本支持情况请自行查看版本历史

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 不支持 IE 浏览器

## 性能优化建议

1. **粒子数量控制**：在移动设备上建议将 `particles` 设置为 50-80
2. **自动清理**：长时间运行时定期调用 `clearFireworks()` 清理残留效果
3. **暂停机制**：页面不可见时暂停烟花效果以节省资源
4. **按需加载**：如果不需要烟花效果，可以考虑条件渲染组件

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交 `issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件 github 仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***