import Image from 'next/image'
import { Button } from 'antd'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <><Head>
      <title>Create Nect App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head><main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      </main></>
  )
}
