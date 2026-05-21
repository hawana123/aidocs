---
sidebar_position: 8
sidebar_label: '8. AutoGPT 实战'
---

# AutoGPT 实战

## 什么是 AutoGPT？

**AutoGPT** 是最早开源的自主 AI Agent 项目之一。它能够根据设定的目标，自主规划并执行一系列任务，无需人工干预。

## 安装配置

```bash
# 克隆项目
git clone https://github.com/Significant-Gravitas/AutoGPT.git
cd AutoGPT

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.template .env
# 编辑 .env 文件，填入 API Key
```

## 核心配置

### .env 文件

```bash
# OpenAI API 配置
OPENAI_API_KEY=sk-your-api-key
OPENAI_API_MODEL=gpt-4-turbo

# 内存配置
MEMORY_BACKEND=chroma
MEMORY_INDEX=auto-gpt

# 其他配置
ALLOWLISTED_PLUGINS=example-plugin1,example-plugin2
DISABLED_PLUGINS=example-plugin3
```

## 使用方式

### 命令行模式

```bash
# 交互式模式
python -m autogpt

# 连续模式（自动执行）
python -m autogpt --continuous
```

### 编程模式

```python
from autogpt.agents.agent import Agent
from autogpt.config import Config

config = Config()
config.openai_api_key = "your-api-key"

agent = Agent(
    ai_name="AI助手",
    ai_role="完成用户指定的任务",
    ai_goals=["研究 AI Agent 的发展趋势"],
    config=config
)

agent.start_interaction_loop()
```

## 自定义 Agent

### 创建自定义 Prompt

```python
# config/ai_settings.yaml
ai_name: 数据分析助手
ai_role: 帮助用户分析数据并生成报告
ai_goals:
  - 收集相关数据
  - 分析数据趋势
  - 生成可视化报告
```

### 添加自定义技能

```python
from autogpt.commands.command import Command
from autogpt.commands.command import CommandParameter

class CustomSkill:
    def get_commands(self) -> list[Command]:
        return [
            Command(
                name="analyze_data",
                description="分析数据文件",
                method=self.analyze_data,
                parameters=[
                    CommandParameter(
                        name="file_path",
                        type="string",
                        description="数据文件路径",
                        required=True
                    )
                ]
            )
        ]
    
    def analyze_data(self, file_path: str) -> str:
        # 实现数据分析逻辑
        pass
```

## 实战示例：市场研究 Agent

```python
# ai_settings.yaml
ai_name: MarketResearcher
ai_role: 市场研究专家
ai_goals:
  - 调研目标市场的规模和发展趋势
  - 分析主要竞争对手
  - 识别市场机会和威胁
  - 生成研究报告

# 启动后 Agent 会自主：
# 1. 搜索市场信息
# 2. 分析竞争对手
# 3. 整理数据
# 4. 撰写报告
```

## 注意事项

1. **费用控制**：连续模式可能产生较高 API 费用
2. **安全设置**：谨慎开启文件操作和网络权限
3. **监控运行**：建议开启日志记录以便追踪
4. **目标明确**：设定清晰具体的目标，避免 Agent 偏离方向
