"use client"
import styles from './page.module.css';

import React from 'react'

import List from './components/list.component';
import { NUMBER_LIST_DEFAULT } from './shared/models/numbers-list.model'

export default function Home() {
  const [numbers, setNumbers] = React.useState(NUMBER_LIST_DEFAULT);
  const [actualNumber, setActualNumber] = React.useState(0);

  const generateNumbers = () => {
    const max = 999;
    const min = 1;
    const number = Math.floor(Math.random() * (max - min))
    setActualNumber(number)
  }

  const verifyNumber = (number: number, value: string | number) => {
    if(actualNumber === 0) {
      return alert('please generate a number before')
    }
    numbers.forEach((element) => {
      if(element.number === number) {
        if(element.value === '') {
          element.value = actualNumber;
        }
      }
    })
    setNumbers(numbers)
    setActualNumber(0)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>20 numbers challenge</h1>
      <div className={styles.content}>
        <aside className={styles.aside}>
          <div>
            <List items={numbers} verifyNumber={verifyNumber}/>
          </div>
        </aside>
        <section className={styles.section}>
          <h2>{actualNumber === 0 ? 'next number' : actualNumber}</h2>
          <button onClick={ () => generateNumbers()}>generate number</button>
        </section>
        <section className={styles.section}>
          &quot;you can do anything in world&quot;
        </section>
      </div>
    </main>
  )
}