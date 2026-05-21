---
sidebar_position: 10
sidebar_label: '10. Agent 开发最佳实践'
---

# Agent 开发最佳实践

## 概述

开发可靠的 AI Agent 需要考虑多个方面。本文总结了实用的开发经验和最佳实践。

## 1. Prompt 设计

### 结构化 Prompt

```python
SYSTEM_PROMPT = """
你是一个专业的编程助手。

## 角色
你是一位经验丰富的全栈工程师，擅长 Python、JavaScript 和系统架构。

## 能力
- 编写高质量的代码
- 调试和修复 Bug
- 设计系统架构
- 编写技术文档

## 约束
- 只提供准确的建议
- 如果不确定，明确说明
- 代码需要包含注释
- 遵循最佳实践

## 工具
你可以使用以下工具：
- code_executor: 执行代码
- file_reader: 读取文件
- web_search: 搜索信息
"""
```

### Few-Shot 示例

```python
prompt = """
任务：将用户描述转换为 SQL 查询

示例 1:
输入：查询所有年龄大于 25 岁的用户
输出：SELECT * FROM users WHERE age > 25

示例 2:
输入：统计每个部门的员工数量
输出：SELECT department, COUNT(*) FROM employees GROUP BY department

当前任务：
输入：{user_input}
输出：
"""
```

## 2. 错误处理

### 重试机制

```python
import time
from functools import wraps

def retry(max_attempts=3, delay=1):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"尝试 {attempt + 1} 失败: {e}")
                    time.sleep(delay * (2 ** attempt))  # 指数退避
            return None
        return wrapper
    return decorator
```

### 超时控制

```python
import signal

class TimeoutError(Exception):
    pass

def timeout(seconds=30):
    def decorator(func):
        def handler(signum, frame):
            raise TimeoutError(f"操作超时 ({seconds}秒)")
        
        @wraps(func)
        def wrapper(*args, **kwargs):
            signal.signal(signal.SIGALRM, handler)
            signal.alarm(seconds)
            try:
                result = func(*args, **kwargs)
            finally:
                signal.alarm(0)
            return result
        return wrapper
    return decorator
```

## 3. 安全考虑

### 输入验证

```python
import re

def validate_input(user_input: str) -> bool:
    """验证用户输入是否安全"""
    # 检查长度
    if len(user_input) > 10000:
        return False
    
    # 检查危险模式
    dangerous_patterns = [
        r'<script>',
        r'javascript:',
        r'eval\(',
        r'__import__'
    ]
    
    for pattern in dangerous_patterns:
        if re.search(pattern, user_input, re.IGNORECASE):
            return False
    
    return True
```

### 权限控制

```python
class ToolPermission:
    READ = "read"
    WRITE = "write"
    EXECUTE = "execute"
    
    def __init__(self):
        self.permissions = set()
    
    def grant(self, permission: str):
        self.permissions.add(permission)
    
    def check(self, permission: str) -> bool:
        return permission in self.permissions

# 使用
permissions = ToolPermission()
permissions.grant(ToolPermission.READ)

if permissions.check(ToolPermission.WRITE):
    execute_write_operation()
else:
    raise PermissionError("没有写入权限")
```

## 4. 性能优化

### 缓存策略

```python
import hashlib
import json

class AgentCache:
    def __init__(self):
        self.cache = {}
    
    def get_key(self, prompt: str) -> str:
        return hashlib.md5(prompt.encode()).hexdigest()
    
    def get(self, prompt: str):
        key = self.get_key(prompt)
        return self.cache.get(key)
    
    def set(self, prompt: str, result: str):
        key = self.get_key(prompt)
        self.cache[key] = result
```

### 批量处理

```python
def batch_process(items, batch_size=10):
    """批量处理项目，提高效率"""
    for i in range(0, len(items), batch_size):
        batch = items[i:i + batch_size]
        yield batch

# 使用
for batch in batch_process(tasks, batch_size=5):
    results = agent.process_batch(batch)
```

## 5. 监控与日志

```python
import logging
import time

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

class AgentMonitor:
    def __init__(self):
        self.logger = logging.getLogger("AgentMonitor")
        self.metrics = {}
    
    def start_task(self, task_id: str):
        self.metrics[task_id] = {"start_time": time.time()}
        self.logger.info(f"开始任务: {task_id}")
    
    def end_task(self, task_id: str, status: str):
        duration = time.time() - self.metrics[task_id]["start_time"]
        self.logger.info(f"任务完成: {task_id}, 状态: {status}, 耗时: {duration:.2f}s")
```

## 6. 测试策略

```python
import unittest

class TestAgent(unittest.TestCase):
    def setUp(self):
        self.agent = MyAgent()
    
    def test_simple_query(self):
        result = self.agent.run("什么是 AI Agent？")
        self.assertIn("AI", result)
    
    def test_tool_usage(self):
        result = self.agent.run("计算 2 + 2")
        self.assertEqual(result.strip(), "4")
    
    def test_error_handling(self):
        with self.assertRaises(TimeoutError):
            self.agent.run("这是一个超时任务", timeout=1)
```

## 检查清单

- [ ] Prompt 是否清晰明确？
- [ ] 是否有完善的错误处理？
- [ ] 是否考虑了安全性？
- [ ] 是否有性能优化？
- [ ] 是否有监控和日志？
- [ ] 是否有测试覆盖？
- [ ] 文档是否完善？
