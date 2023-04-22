"use client"
import styles from './page.module.css';

import React from 'react'

import List from './components/list.component';
import { NUMBER_LIST_DEFAULT } from './shared/models/numbers-list.model'

export default function Home() {
  const [numbers, setNumbers] = React.useState(NUMBER_LIST_DEFAULT);
  const [actualNumber, setActualNumber] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const generateNumbers = () => {
    if(actualNumber !== 0) return alert("please, select a number")
    const max = 999;
    const min = 1;
    const number = Math.floor(Math.random() * (max - min))
    setActualNumber(number)
  }

  const verifyNumber = (number: number, value: string | number) => {
    if(actualNumber === 0) return alert('please generate a number before')

    numbers.forEach((element) => {
      if(element.value === actualNumber) return alert("you lose!!!")

      if(element.number === number) {
        if(element.value === '') {
          element.value = actualNumber;
        }
      }
    })
    setNumbers(numbers)
    setActualNumber(0)
    setScore(score+1);
  }

  return (
    <>
    <header className={styles.header}>
      <h1 className={styles.title}>20 numbers challenge</h1>

    </header>
    <main className={styles.main}>
      <div className={styles.content}>
        <aside className={styles.aside}>
          <div>
            <List items={numbers} verifyNumber={verifyNumber}/>
          </div>
        </aside>
        <section className={styles.section}>
          <h2>{actualNumber === 0 ? 'next number' : actualNumber}</h2>
          <button onClick={ () => generateNumbers()}>Generate</button>
        </section>
        <div className={styles.score}>
          <h3>you got { score } right </h3>
        </div>
      </div>
    </main>
    </>
  )
}