---
sidebar_position: 4
sidebar_label: '4. CrewAI 多 Agent 协作'
---

# CrewAI 多 Agent 协作

## 什么是 CrewAI？

**CrewAI** 是一个专注于 Multi-Agent 协作的框架，让你能够轻松创建多个专业 Agent，让它们像团队一样协同工作。

## 核心概念

### Crew（团队）

一组共同完成目标的 Agent 集合：

```python
from crewai import Crew

crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    verbose=True
)
result = crew.kickoff()
```

### Agent（成员）

团队中的每个 Agent 有独特的角色和能力：

```python
from crewai import Agent

researcher = Agent(
    role="高级研究员",
    goal="深入研究指定主题",
    backstory="你是一位经验丰富的研究员，擅长收集和分析信息",
    tools=[search_tool, analysis_tool],
    allow_delegation=False
)
```

### Task（任务）

每个 Agent 负责的具体工作：

```python
from crewai import Task

research_task = Task(
    description="研究 AI Agent 的最新发展趋势",
    agent=researcher,
    expected_output="一份详细的研究报告"
)
```

## 实战示例：创建内容创作团队

```python
from crewai import Agent, Task, Crew
from langchain_openai import ChatOpenAI

# 初始化 LLM
llm = ChatOpenAI(model="gpt-4")

# 创建研究员 Agent
researcher = Agent(
    role="技术研究员",
    goal="收集和分析最新技术趋势",
    backstory="你是一位资深技术研究员，专注于 AI 领域",
    llm=llm,
    allow_delegation=False
)

# 创建作家 Agent
writer = Agent(
    role="内容作家",
    goal="根据研究结果撰写高质量文章",
    backstory="你是一位经验丰富的科技作家",
    llm=llm,
    allow_delegation=False
)

# 创建编辑 Agent
editor = Agent(
    role="主编",
    goal="审核和优化文章内容",
    backstory="你是一位资深主编，负责内容质量把控",
    llm=llm,
    allow_delegation=False
)

# 定义任务
research = Task(
    description="研究 2024 年 AI Agent 的发展趋势",
    agent=researcher,
    expected_output="研究笔记"
)

write = Task(
    description="根据研究笔记撰写一篇博客文章",
    agent=writer,
    expected_output="博客文章"
)

edit = Task(
    description="审核并优化博客文章",
    agent=editor,
    expected_output="最终文章"
)

# 创建团队并执行
crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research, write, edit],
    verbose=True
)

result = crew.kickoff()
print(result)
```

## 高级功能

### 层次化处理

```python
crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.hierarchical,  # 层次化处理
    manager_llm=llm  # 管理 Agent 使用的 LLM
)
```

### 缓存机制

```python
crew = Crew(
    agents=[...],
    tasks=[...],
    cache=True  # 启用缓存，避免重复查询
)
```

## 最佳实践

1. **明确分工**：每个 Agent 应该有清晰的角色定位
2. **任务独立**：任务之间尽量减少依赖
3. **质量控制**：使用编辑类 Agent 进行结果审核
4. **错误处理**：为关键任务添加重试机制
