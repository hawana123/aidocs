---
sidebar_position: 3
---

# AI 辅助测试编写

测试是保证软件质量的关键环节。AI 正在让测试编写变得更加高效。

## 为什么用 AI 辅助测试

传统测试编写的痛点：

- **耗时**：编写测试用例通常比编写功能代码更耗时
- **覆盖率不足**：手动编写容易遗漏边界情况
- **维护成本**：代码变更后需要同步更新测试
- **思维盲区**：开发者容易忽略自己不熟悉的异常场景

AI 的优势：

- 快速生成大量测试用例
- 自动覆盖边界情况
- 根据代码变更自动更新测试
- 发现开发者可能遗漏的测试场景

## 单元测试生成

### JavaScript/Jest 示例

**原始代码**：

```javascript
function calculateDiscount(price, userType) {
  if (price <= 0) throw new Error('价格必须大于0');
  const discounts = { normal: 0, vip: 0.1, svip: 0.2 };
  return price * (discounts[userType] || 0);
}
```

**Prompt**：

```
请为以下 JavaScript 函数编写完整的 Jest 单元测试：
- 覆盖正常场景
- 覆盖边界情况
- 覆盖异常情况
- 包含描述性测试用例名称

代码：[粘贴上方代码]
```

**AI 生成的测试**：

```javascript
describe('calculateDiscount', () => {
  test('normal user should have no discount', () => {
    expect(calculateDiscount(100, 'normal')).toBe(0);
  });

  test('VIP user should get 10% discount', () => {
    expect(calculateDiscount(100, 'vip')).toBe(10);
  });

  test('SVIP user should get 20% discount', () => {
    expect(calculateDiscount(100, 'svip')).toBe(20);
  });

  test('should throw error when price is zero', () => {
    expect(() => calculateDiscount(0, 'normal')).toThrow('价格必须大于0');
  });

  test('should throw error when price is negative', () => {
    expect(() => calculateDiscount(-10, 'normal')).toThrow('价格必须大于0');
  });

  test('unknown user type should return 0 discount', () => {
    expect(calculateDiscount(100, 'unknown')).toBe(0);
  });
});
```

## 集成测试生成

### API 接口测试

**Prompt 模板**：

```
请为以下 API 接口编写集成测试：
- 接口：POST /api/users
- 请求体：{ name, email, age }
- 成功返回：{ id, name, email, age }
- 验证规则：name 必填，email 格式，age 大于 0
- 使用工具：Jest + Supertest
- 覆盖：成功创建、参数验证错误、重复邮箱

代码：[粘贴路由代码]
```

## 测试覆盖率提升

### AI 辅助识别未覆盖的代码路径

```
请分析以下代码，找出所有未被测试覆盖的代码路径和边界情况：
1. 列出所有分支
2. 指出哪些分支已有测试
3. 为缺失的测试用例编写测试代码

代码：[粘贴代码]
测试文件：[粘贴现有测试文件]
```

## 常见测试场景的 AI Prompt

### 前端组件测试

```
请为以下 React 组件编写测试：
- 测试工具：Jest + React Testing Library
- 测试点：渲染是否正确、交互是否正常工作、边界情况
- 模拟：API 调用和子组件

组件代码：[粘贴代码]
```

### 数据库操作测试

```
请为以下数据库操作编写测试：
- 测试框架：JUnit + H2 内存数据库
- 测试点：CRUD 操作是否正确、事务是否生效、异常情况处理
- 注意：测试后需要清理数据

代码：[粘贴 Repository 代码]
```

## AI 测试工具推荐

### CodiumAI

- 专为测试生成设计的 AI 工具
- 分析代码行为，自动生成全面测试
- 支持多种语言和测试框架
- IDE 插件直接使用

### GitHub Copilot

- 通过对话式交互生成测试代码
- 理解项目上下文，生成适配的测试
- 适合在日常编码中快速生成测试

### TestGen-LLM

- 专注于 Java 单元测试生成
- 与 JUnit、TestNG 等框架集成
- 适合企业级 Java 项目

## 最佳实践

1. **AI 生成 + 人工审核**：AI 生成的测试需要人工确认正确性
2. **从关键功能开始**：优先为业务核心逻辑生成测试
3. **保持测试可读性**：确保测试名称和结构清晰易懂
4. **定期更新**：代码变更后及时更新测试
5. **不要过度测试**：AI 可能生成冗余测试，需要人工筛选

## 总结

AI 辅助测试编写可以大幅提升测试覆盖率提升速度，减少手动编写测试的时间。一个合理的流程是：AI 快速生成基础测试覆盖，开发者在此基础上补充业务特定的测试场景，并进行审核和优化。这种方式可以让测试覆盖率在更短的时间内达到更高水平，同时保证测试质量。
