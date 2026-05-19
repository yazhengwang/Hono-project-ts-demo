# Hono-project-ts-demo

> 项目简介

## 技术栈

- TypeScript
- Hono
- Node.js 20+

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 http://localhost:3000

## 接口

| 方法 | 路径 | 描述 |
|---|---|---|
| GET | / | Hello world |
| GET | /health | 健康检查 |

## License

MIT

前缀	用途	示例
feat:	新功能	feat: add health check endpoint
fix:	修 bug	fix: resolve cors issue
docs:	文档变更	docs: update README
chore:	杂事 (依赖更新等)	chore: bump hono to v4.x
refactor:	重构	refactor: extract route handlers
test:	测试相关	test: add unit tests for routes
style:	格式化 (无逻辑变更)	style: format code with prettier
