'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import styles from './styles/Home.module.css'

export default function Home() {
	const aiTools = useMemo(() => {
		const isDev = process.env.NODE_ENV === 'development'
		const basePath = isDev ? '' : 'app://./out'

		return [
			{ name: 'ChatGPT', url: 'https://chat.openai.com', icon: `${basePath}/icons/chat-gpt.png` },
			{ name: 'Claude', url: 'https://claude.ai', icon: `${basePath}/icons/claude.png` },
			{
				name: 'Midjourney',
				url: 'https://www.midjourney.com',
				icon: `${basePath}/icons/midjourney.png`,
			},
			{
				name: 'Perplexity',
				url: 'https://www.perplexity.ai',
				icon: `${basePath}/icons/perplexity.png`,
			},
			{ name: 'DALL-E', url: 'https://labs.openai.com', icon: `${basePath}/icons/dalle.png` },
			{ name: 'Gemini', url: 'https://gemini.google.com', icon: `${basePath}/icons/gemini.png` },
			{
				name: 'DeepSeek',
				url: 'https://chat.deepseek.com',
				icon: `${basePath}/icons/deepseek.png`,
			},
			{
				name: 'Mistral AI',
				url: 'https://chat.mistral.ai',
				icon: `${basePath}/icons/mistral-ai.png`,
			},
			{
				name: 'MS Copilot',
				url: 'https://copilot.microsoft.com',
				icon: `${basePath}/icons/ms-copilot.png`,
			},
			{ name: 'Grok', url: 'https://grok.x.ai', icon: `${basePath}/icons/grok.png` },
			{
				name: 'Colab',
				url: 'https://colab.research.google.com',
				icon: `${basePath}/icons/colab.png`,
			},
			{
				name: 'HuggingFace',
				url: 'https://huggingface.co',
				icon: `${basePath}/icons/huggingface.png`,
			},
			{
				name: 'Azure AI',
				url: 'https://azure.microsoft.com/en-us/products/ai-services',
				icon: `${basePath}/icons/azure-ai.png`,
			},
			{
				name: 'Bedrock',
				url: 'https://aws.amazon.com/bedrock',
				icon: `${basePath}/icons/bedrock.png`,
			},
			{
				name: 'LangChain',
				url: 'https://www.langchain.com',
				icon: `${basePath}/icons/langchain.png`,
			},
			{ name: 'Flux', url: 'https://flux.ai', icon: `${basePath}/icons/flux.png` },
			{ name: 'Gemma', url: 'https://ai.google.dev/gemma', icon: `${basePath}/icons/gemma.png` },
			{
				name: 'GitHub Copilot',
				url: 'https://github.com/features/copilot',
				icon: `${basePath}/icons/githubcopilot.png`,
			},
			{ name: 'Haiper', url: 'https://haiper.ai', icon: `${basePath}/icons/haiper.png` },
			{ name: 'Hedra', url: 'https://hedra.dev', icon: `${basePath}/icons/hedra.png` },
			{
				name: 'Ideogram',
				url: 'https://ideogram.ai',
				icon: `${basePath}/icons/ideogram.png`,
			},
			{ name: 'Kling', url: 'https://kling.ai', icon: `${basePath}/icons/kling.png` },
			{
				name: 'Lighttricks',
				url: 'https://www.lighttricks.com',
				icon: `${basePath}/icons/lighttricks.png`,
			},
			{ name: 'Llava', url: 'https://llava.hliu.cc', icon: `${basePath}/icons/llava.png` },
			{ name: 'LM Studio', url: 'https://lmstudio.ai', icon: `${basePath}/icons/lm-studio.png` },
			{ name: 'Ollama', url: 'https://ollama.ai', icon: `${basePath}/icons/ollama.png` },
			{
				name: 'Replicate',
				url: 'https://replicate.com',
				icon: `${basePath}/icons/replicate.png`,
			},
			{ name: 'Runway', url: 'https://runway.ai', icon: `${basePath}/icons/runway.png` },
			{
				name: 'Stability AI',
				url: 'https://stability.ai',
				icon: `${basePath}/icons/stability.ai.png`,
			},
			{ name: 'Together AI', url: 'https://together.ai', icon: `${basePath}/icons/together.png` },
			{
				name: 'VertexAI',
				url: 'https://cloud.google.com/vertex-ai',
				icon: `${basePath}/icons/vertexai.png`,
			},
			{
				name: 'WCAG Audit Steps',
				url: 'https://wcag-audit-steps.vercel.app',
				icon: `${basePath}/icons/icon.png`,
			},
		]
	}, [])

	const openTool = (url) => {
		if (window.require) {
			const { shell } = window.require('electron')
			shell.openExternal(url)
		}
	}

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>AI Tools Launcher</h1>

				<div className={styles.grid}>
					{aiTools.map((tool) => (
						<div key={tool.name} className={styles.card} onClick={() => openTool(tool.url)}>
							<Image
								src={tool.icon}
								alt={tool.name}
								className={styles.icon}
								width={50}
								height={50}
							/>
							<h2>{tool.name}</h2>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}
