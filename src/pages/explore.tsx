import { Inter } from '@next/font/google'
import Head from 'next/head'
import App from '@/components/App'
import { MainNavigationItemName } from '@/components/navigations/MainNavigation'
import ExploreWorkspace from '@/components/workspace/ExploreWorkspace'

const inter = Inter({ subsets: ['latin'] })

export default function Explore() {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <App selectedIndex={MainNavigationItemName.EXPLORE}>
        <ExploreWorkspace/>
      </App>
    </>
  )
}
