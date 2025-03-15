'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from './styles/Home.module.css'
import './styles/globals.css'

export default function Home() {
	const aiTools = [
		{ name: 'ChatGPT', url: 'https://chat.openai.com', icon: './public/icons/chatgpt.jpg' },
		{ name: 'Claude', url: 'https://claude.ai', icon: './public/icons/claude.png' },
		{
			name: 'Midjourney',
			url: 'https://www.midjourney.com',
			icon: './public/icons/midjourney.png',
		},
		{ name: 'Perplexity', url: 'https://www.perplexity.ai', icon: './public/icons/perplexity.png' },
		{ name: 'DALL-E', url: 'https://labs.openai.com', icon: './public/icons/dalle.png' },
		{ name: 'Gemini', url: 'https://gemini.google.com', icon: './public/icons/gemini.png' },
	]

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
							<img src={tool.icon} alt={tool.name} className={styles.icon} width={50} height={50} />
							<h2>{tool.name}</h2>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}
