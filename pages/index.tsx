import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Table from '../components/table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by C23-DF01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="container mx-auto">
          <Table></Table>
        </div>
        
        
      </main>
    </>
  )
}
