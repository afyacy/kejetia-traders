import React from 'react'
import styles from '@/styles/Order.module.scss'

const Index = () => {
  return (
    <main>
        <h2 className="page-title">Portfolio</h2>
        <div className={styles.orderTableCard}>
          <table className={styles.orderTable}>
              <thead>
                  <div className={styles.thead}>
                      <tr>
                          <th>Product</th>
                          <th>Current Price</th>
                          <th>Bought At</th>
                          <th>Cum. Value</th>
                          <th>Profit/Loss</th>
                          <th>Position</th>
                          <th>Trade</th>
                      </tr>
                  </div>
              </thead>
              <tbody>
                  <div className={styles.tbody}>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.open}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.cancelled}>-$2.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.open}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.open}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.open}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.cancelled}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>$3.54</td>
                      <td>$200.10</td>
                      <td className={styles.open}>$40.00</td>
                      <td>SHORT</td>
                      <td className={styles.open}>
                        <button className={styles.tradeButton}>Trade</button>
                      </td>
                    </tr>
                  </div>
              </tbody>
              <tfoot>
                  <button className={styles.arrow}>
                    <img height="26" src="assets/icons/arrow-left.svg"/></button>
                  <div className="page-number">
                      <p className="page-number-text">1</p>
                  </div>
                  <button className={styles.arrow}>
                    <img height="26" src="assets/icons/arrow-right.svg"/></button>
              </tfoot>
          </table>
      </div>
    </main>
  )
}

export default Index