---
sidebar_position: 3
sidebar_label: '3. LangChain 入门'
---

# LangChain 入门

## 什么是 LangChain？

**LangChain** 是最流行的 AI Agent 开发框架之一，提供了一套完整的工具和 API 来构建基于大语言模型的应用。

## 核心概念

### Chains（链）

将多个组件串联起来形成工作流：

```python
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    template="用中文翻译以下英文：{text}",
    input_variables=["text"]
)
chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run("Hello, World!")
```

### Agents（智能体）

LangChain 的 Agent 可以根据用户输入自主选择工具：

```python
from langchain.agents import AgentExecutor, create_react_agent

agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
```

### Tools（工具）

为 Agent 提供外部能力：

```python
from langchain.tools import Tool

def search(query):
    return f"搜索结果：关于'{query}'的信息"

search_tool = Tool(
    name="Search",
    func=search,
    description="搜索互联网信息"
)
```

### Memory（记忆）

让 Agent 记住对话历史：

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)
```

## 快速开始

```bash
# 安装 LangChain
pip install langchain langchain-openai

# 设置 API Key
export OPENAI_API_KEY="your-api-key"
```

## 构建你的第一个 Agent

```python
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_react_agent
from langchain.tools import Tool

# 初始化 LLM
llm = ChatOpenAI(model="gpt-4")

# 定义工具
tools = [
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="执行数学计算"
    )
]

# 创建 Agent
prompt = """你是一个助手，使用工具帮助用户完成任务。
可用工具：{tools}
思考过程：{thought}
行动：{action}
观察结果：{observation}"""

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# 运行
result = executor.invoke({"input": "计算 25 * 4"})
print(result)
```

## 下一步

了解 LangChain 基础后，可以尝试创建更复杂的 Agent 应用。
