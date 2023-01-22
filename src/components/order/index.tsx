import React from 'react'
import styles from '@/styles/Order.module.scss'

const Index = () => {
  return (
    <main>
        <h2 className="page-title">Order History</h2>
        <div className={styles.orderTableCard}>
          <table className={styles.orderTable}>
              <thead>
                  <div className={styles.thead}>
                      <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Date</th>
                          <th>Side</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th className={styles.headerHack}><button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button></th>
                      </tr>
                  </div>
              </thead>
              <tbody>
                  <div className={styles.tbody}>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.open}>OPEN</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.cancelled}>CANCELLED</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.open}>OPEN</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.closed}>CLOSED</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.open}>OPEN</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.open}>OPEN</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.closed}>CLOSED</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.productName}>MSFT</td>
                      <td>$2.21</td>
                      <td>200</td>
                      <td>12/11/22</td>
                      <td>Buy</td>
                      <td>MARKET</td>
                      <td className={styles.open}>OPEN</td>
                      <td>
                          <button>
                              <img height="20" src="assets/icons/edit-icon.svg"/>
                          </button>
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