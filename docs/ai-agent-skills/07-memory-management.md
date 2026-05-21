---
sidebar_position: 7
sidebar_label: '7. 记忆系统详解'
---

# 记忆系统详解

## 为什么需要记忆？

AI Agent 需要记忆来：
- 保持对话的连贯性
- 从历史交互中学习
- 积累领域知识和经验
- 提供个性化的用户体验

## 记忆类型

### 1. 短期记忆（Short-term Memory）

存储当前会话的上下文信息：

```python
from langchain.memory import ConversationBufferMemory

# 对话缓冲记忆
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True,
    max_token_limit=2000  # 最大 token 数
)

memory.save_context(
    {"input": "你好"},
    {"output": "你好！有什么我可以帮你的？"}
)
```

### 2. 长期记忆（Long-term Memory）

持久化存储重要信息：

```python
from langchain.memory import ConversationSummaryMemory

# 对话摘要记忆
memory = ConversationSummaryMemory(
    llm=llm,
    memory_key="summary"
)

# 自动总结对话内容
memory.save_context(
    {"input": "今天天气怎么样？"},
    {"output": "今天北京晴天，气温 25 度"}
)
```

### 3. 向量记忆（Vector Memory）

使用向量数据库存储和检索信息：

```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

# 创建向量存储
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(
    collection_name="agent_memory",
    embedding_function=embeddings,
    persist_directory="./memory"
)

# 添加记忆
vectorstore.add_texts([
    "用户喜欢 Python 编程",
    "用户正在学习 AI Agent 开发"
])

# 检索相关记忆
results = vectorstore.similarity_search("编程", k=2)
```

## 记忆管理策略

### 遗忘机制

定期清理不重要的记忆，避免上下文爆炸：

```python
class MemoryManager:
    def __init__(self, max_memories=100):
        self.memories = []
        self.max_memories = max_memories
    
    def add(self, memory, importance=0.5):
        self.memories.append({
            "content": memory,
            "importance": importance,
            "timestamp": time.time()
        })
        
        # 超出限制时清理低重要性记忆
        if len(self.memories) > self.max_memories:
            self.memories.sort(key=lambda x: x["importance"])
            self.memories = self.memories[-self.max_memories:]
    
    def retrieve(self, query, k=5):
        # 检索相关记忆
        pass
```

### 重要性评分

```python
def calculate_importance(message: str) -> float:
    """计算记忆的重要性分数"""
    score = 0.0
    
    # 包含关键词增加分数
    important_keywords = ["项目", "需求", "偏好", "密码", "地址"]
    for keyword in important_keywords:
        if keyword in message:
            score += 0.2
    
    # 用户明确标记的重要信息
    if "记住" in message or "重要" in message:
        score += 0.3
    
    return min(score, 1.0)
```

## 最佳实践

1. **分层存储**：短期记忆用缓存，长期记忆用数据库
2. **定期清理**：设置记忆过期和清理策略
3. **相关检索**：使用向量搜索找到最相关的记忆
4. **隐私保护**：敏感信息加密存储
5. **增量更新**：只存储变化的部分，节省空间
