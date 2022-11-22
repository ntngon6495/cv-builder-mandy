import * as React from 'react'
import { LayoutProps } from '../../models/common'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopBar from '../TopBar/topBar'

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>
}
