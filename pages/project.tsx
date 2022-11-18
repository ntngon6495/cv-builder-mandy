import * as React from 'react'
import TopBar from '../components/TopBar/topBar'
import styles from '../styles/Home.module.css'

export interface IProjectProps {}

export default function ProjectPage(props: IProjectProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TopBar />
      </main>
    </div>
  )
}
