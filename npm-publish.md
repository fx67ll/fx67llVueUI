# 解决 npm 发布的 403 2FA 验证问题

## 发布流程
```shell
npm run docs:build
npm login --->>> 输入账号+密码+邮箱 --->>> qq邮箱输入验证码
npm config set registry https://registry.npmjs.org/
npm config set //registry.npmjs.org/:_authToken=<你的细粒度令牌>
npm whoami
npm publish
```

### 核心前提说明
npm的Security Key（硬件/生物识别密钥）仅支持**官网网页端的操作验证**，**终端命令行不支持直接调用Security Key**做2FA验证，这也是你用Security Key后发布仍报403的根本原因——终端无法触发Security Key的验证流程，所以必须通过「网页端辅助」或「细粒度令牌」绕开终端的2FA验证要求。

### 生成「开启bypass 2fa的细粒度令牌」（长期方案，终端直接发布）
这是**npm官方推荐的Security Key用户终端发布方案**：在npm官网生成「细粒度访问令牌（Granular Access Token）」并开启`Bypass 2FA`，将令牌配置到本地npm后，终端直接执行`npm publish`即可，无需触发任何2FA验证（包括Security Key和验证码），适合频繁发布包的场景。

### 操作步骤（核心：开启Bypass 2FA，适配Security Key）
1. **npm官网登录（Security Key验证）**：
   登录[npm官网](https://www.npmjs.com/)，通过Security Key（指纹/面容/硬件密钥）完成验证登录。

2. **进入细粒度令牌生成页面**：
   点击右上角**个人头像 → Access Tokens → Generate New Token → Granular Access Token**（必须选细粒度，经典令牌已作废）。

3. **配置令牌信息（关键步骤，缺一不可）**：
   - **Token name**：自定义令牌名称（如`fx67ll-publish-security-key`，方便后续识别）；
   - **Expiration**：令牌有效期（默认90天，可按需选择，到期后重新生成即可）；
   - **Package access**：选择**Only select packages**（仅对自己的包生效，更安全），然后搜索并勾选`fx67ll-vue-ui`（若未创建包，可先选`All packages`）；
   - **Permissions**：勾选**Publish**和**Read and write**（发布包的核心权限，缺一不可）；
   - ✅ **Bypass 2FA**：**必须开启这个开关！**（绕开2FA验证的核心，开启后终端发布无需任何Security Key/验证码验证）；

4. **生成并复制令牌**：
   点击**Generate token**，生成后**立即复制完整的令牌字符串**（仅显示一次，丢了需重新生成，务必保存好！）。

5. **配置令牌到本地npm（终端执行）**：
   先确保npm源是官方源（发布必须用），再执行命令配置令牌（替换`<你的细粒度令牌>`为刚复制的内容）：
   ```bash
   # 切回npm官方源（前提）
   npm config set registry https://registry.npmjs.org/
   # 配置令牌到npm全局配置
   npm config set //registry.npmjs.org/:_authToken=<你的细粒度令牌>
   ```

6. **终端直接发布（无需任何验证）**：
   回到你的`fx67ll-vue-ui`项目根目录，直接执行发布命令，**不会再报403，也无需任何验证**：
   ```bash
   npm publish
   ```
   终端输出`+ fx67ll-vue-ui@1.0.0`即发布成功！

### 验证令牌是否生效
终端执行以下命令，能输出你的npm用户名，说明令牌配置成功：
```bash
npm whoami
```