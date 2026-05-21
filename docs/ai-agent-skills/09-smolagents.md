---
sidebar_position: 9
sidebar_label: '9. Smolagents 轻量级 Agent'
---

# Smolagents 轻量级 Agent

## 什么是 Smolagents？

**Smolagents** 是 Hugging Face 推出的轻量级 Agent 框架，设计理念是**小而美**。它不依赖复杂的外部库，仅用纯 Python 实现核心功能，非常适合学习和快速原型开发。

## 安装

```bash
pip install smolagents
```

## 快速开始

### 最简单的 Agent

```python
from smolagents import CodeAgent, HfApiModel

# 初始化模型
model = HfApiModel()

# 创建 Agent
agent = CodeAgent(model=model)

# 运行
result = agent.run("计算 2 的 10 次方")
print(result)
```

### 添加自定义工具

```python
from smolagents import tool

@tool
def search_web(query: str) -> str:
    """
    搜索互联网获取信息
    
    Args:
        query: 搜索关键词
    
    Returns:
        搜索结果摘要
    """
    # 这里可以调用实际的搜索 API
    return f"关于'{query}'的搜索结果..."

# 使用工具
agent = CodeAgent(model=model, tools=[search_web])
result = agent.run("搜索最新的 AI 技术进展")
```

## 核心特性

### Code Agent

使用代码来执行任务：

```python
from smolagents import CodeAgent

agent = CodeAgent(model=model)

# Agent 会生成并执行 Python 代码来完成任务
result = agent.run("""
查询北京明天的天气，然后计算如果我有 3 个朋友要来北京，
人均 500 元预算，总共需要多少钱？
""")
```

### Tool Calling Agent

使用工具调用来执行任务：

```python
from smolagents import ToolCallingAgent

agent = ToolCallingAgent(model=model, tools=[search_web, calculator])
result = agent.run("搜索 Python 最新版本并计算其发布天数")
```

## 自定义模型

支持多种模型后端：

```python
from smolagents import HfApiModel, LiteLLMModel, TransformersModel

# Hugging Face API
model = HfApiModel(model_id="meta-llama/Llama-2-70b-chat-hf")

# LiteLLM (支持 OpenAI 兼容接口)
model = LiteLLMModel(model_id="gpt-4")

# 本地 Transformers
model = TransformersModel(model_id="HuggingFaceH4/zephyr-7b-beta")
```

## 实战示例

```python
from smolagents import CodeAgent, HfApiModel, tool
import requests

@tool
def get_exchange_rate(currency: str) -> float:
    """获取汇率"""
    response = requests.get(
        f"https://api.exchangerate-api.com/v4/latest/{currency}"
    )
    return response.json()["rates"]["CNY"]

@tool
def search_wikipedia(query: str) -> str:
    """搜索维基百科"""
    response = requests.get(
        "https://zh.wikipedia.org/api/rest_v1/page/summary/" + query
    )
    return response.json().get("extract", "未找到结果")

model = HfApiModel()
agent = CodeAgent(
    model=model,
    tools=[get_exchange_rate, search_wikipedia]
)

result = agent.run("""
帮我查询一下：
1. 100 美元等于多少人民币？
2. 维基百科上关于人工智能的介绍是什么？
""")
print(result)
```

## 优势

1. **轻量**：无复杂依赖，安装简单
2. **透明**：代码清晰，易于理解原理
3. **灵活**：支持多种模型后端
4. **学习友好**：适合入门 AI Agent 开发

## 适用场景

- 学习和理解 Agent 原理
- 快速原型验证
- 轻量级自动化任务
- 教学和演示
