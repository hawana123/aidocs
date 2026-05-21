---
sidebar_position: 5
sidebar_label: '5. OpenAI Assistants API'
---

# OpenAI Assistants API

## 概述

OpenAI 的 **Assistants API** 是构建 AI Agent 最便捷的方式之一。它内置了代码解释器、文件搜索和函数调用等功能。

## 快速开始

### 安装

```bash
pip install openai
```

### 创建 Assistant

```python
from openai import OpenAI

client = OpenAI()

assistant = client.beta.assistants.create(
    name="数据分析助手",
    instructions="你是一个数据分析专家，帮助用户分析和可视化数据",
    model="gpt-4-turbo",
    tools=[{"type": "code_interpreter"}]
)

print(f"Assistant ID: {assistant.id}")
```

### 创建 Thread 和消息

```python
# 创建对话线程
thread = client.beta.threads.create()

# 发送消息
message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="帮我分析一下这份销售数据"
)
```

### 运行 Assistant

```python
# 启动运行
run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id
)

# 等待完成
while run.status not in ["completed", "failed"]:
    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id
    )

# 获取回复
messages = client.beta.threads.messages.list(thread_id=thread.id)
for msg in messages.data:
    print(f"{msg.role}: {msg.content[0].text.value}")
```

## 内置工具

### Code Interpreter

```python
tools=[{"type": "code_interpreter"}]
```

- 可以执行 Python 代码
- 支持数据分析和可视化
- 文件上传和下载

### File Search

```python
tools=[{"type": "file_search"}]
```

- 基于向量搜索的文件检索
- 支持 PDF、Word 等格式
- 自动创建和搜索 vector store

### Function Calling

```python
tools=[
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "获取指定城市的天气",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "城市名称"
                    }
                },
                "required": ["city"]
            }
        }
    }
]
```

## 完整示例

```python
from openai import OpenAI
import time

client = OpenAI()

# 1. 创建 Assistant
assistant = client.beta.assistants.create(
    name="编程助手",
    instructions="你是一位编程专家，帮助用户解决代码问题",
    model="gpt-4-turbo",
    tools=[{"type": "code_interpreter"}]
)

# 2. 创建 Thread
thread = client.beta.threads.create()

# 3. 发送消息
client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="用 Python 写一个快速排序算法"
)

# 4. 运行
run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id
)

# 5. 轮询状态
while True:
    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id, run_id=run.id
    )
    if run.status == "completed":
        break
    time.sleep(1)

# 6. 获取结果
messages = client.beta.threads.messages.list(thread_id=thread.id)
print(messages.data[0].content[0].text.value)
```

## 注意事项

- Assistant 创建后不能直接修改，需要删除重建
- Thread 可以持续对话，保留上下文
- 注意 API 调用费用
- 建议添加错误处理和重试逻辑
