'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import styles from './styles/Home.module.css'
import './styles/globals.css'

export default function Home() {
	const aiTools = useMemo(() => {
		const isDev = process.env.NODE_ENV === 'development'
		const basePath = isDev ? '' : 'app://./out'

		return [
			{ name: 'ChatGPT', url: 'https://chat.openai.com', icon: `${basePath}/icons/chatgpt.jpg` },
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
			<Head>
				<title>AI Tools Launcher</title>
				<meta name='description' content='Launch your favorite AI tools' />
			</Head>

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
