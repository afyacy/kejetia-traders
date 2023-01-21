import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import styles from '@/styles/Dashboard.module.scss'

const Index = () => {
  const [side, setSide] = useState("buy")
  const [type, setType] = useState("limit")

  const onSideChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSide(e.target.value)
  }

  const onTypeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setType(e.target.value)
  }

  return (
    <>
      <div className={styles.topSectionCard}>
        <p className={styles.mainTitle}>All Portfolios Summary</p>
        <div className={styles.list}>
        <div className={styles.cardFirst}>
          <div className={styles.content}>
              <p className={styles.title}>Portfolio <br/>Value</p>
              <p className={styles.value}>$212.12</p>
              <div className={styles.movementPercentage}>
                  <Image 
                    src='assets/icons/green-arrow-up.svg'
                    alt='arror-up'
                    height={30}
                    width={30}
                  />
                  <p className={styles.cardPercentage}>3.3%</p>
              </div>
            </div>
        </div>
        <div className={styles.cardSecond}>
          <div className={styles.content}>
              <p className={styles.title}>Best Performing <br/>Assets</p>
              <div className={styles.row}>
                <div class-={styles.lef}>
                    <div className={styles.image}>
                      <Image
                        src="assets/icons/nflx.svg"
                        alt='nflx'
                        height={26}
                        width={26}
                      />
                    </div>
                    <p className={styles.assetTitle}>NFLX</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>$12.12</p>
                    <p className={styles.assetMovement}>+2.03%</p>
                </div>
              </div>
              <div className={styles.row}>
                <div class-={styles.lef}>
                    <div className={styles.image}>
                      <Image
                        src="assets/icons/nflx.svg"
                        alt='nflx'
                        height={26}
                        width={26}
                      />
                    </div>
                    <p className={styles.assetTitle}>NFLX</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>$12.12</p>
                    <p className={styles.assetMovement}>+2.03%</p>
                </div>
              </div>
              <div className={styles.row}>
                <div class-={styles.lef}>
                    <div className={styles.image}>
                      <Image
                        src="assets/icons/nflx.svg"
                        alt='nflx'
                        height={26}
                        width={26}
                      />
                    </div>
                    <p className={styles.assetTitle}>NFLX</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>$12.12</p>
                    <p className={styles.assetMovement + " " + styles.negative}>+2.03%</p>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Quick Trade</h2>
          <div className={styles.content}>
            <div className={styles.placeOrder}>
              <form className={styles.placeOrderForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="portfolio">Portfolio</label>
                  <select id="portfolio" name="portfolioId" className={styles.portfolioSelect}>
                    <option>Choose</option>
                    <option>
                      Default
                    </option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="stock">Stock</label>
                  <div className={styles.dropdown}>
                    <select id="stock" className={styles.stockSelect}>
                      <option>
                        IBM
                      </option>
                      <option>AAPL</option>
                      <option>Google</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="price">Price</label>
                  <input type="number" name="price" id="price" placeholder="0.0" />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    placeholder="0.0"
                    required
                  />
                </div>

                <div className={styles.twoBtns}>
                  <p>Side</p>
                  <label 
                    className=
                      {
                        side == 'buy' 
                        ? styles.checkedLabel 
                        : styles.unCheckedLabel
                      }
                  >
                    <input type="radio" name="radio" value="buy" checked={side === "buy"} onChange={onSideChange} />
                    Buy
                  </label>

                  <label className=
                    {
                      side == 'sell' 
                      ? styles.checkedLabel 
                      : styles.unCheckedLabel
                    }
                    >
                    <input type="radio" name="radio" value="sell" checked={type === "sell"} onChange={onSideChange} />
                    Sell
                  </label>
                </div>

                <div className={styles.twoBtns}>
                  <label 
                    className=
                      {
                        type == 'market' 
                        ? styles.checkedLabel 
                        : styles.unCheckedLabel
                      }
                  >
                    <input type="radio" name="radio" value="market" checked={type === "market"} onChange={onTypeChange} />
                    Market
                  </label>

                  <label className=
                    {
                      type == 'limit' 
                      ? styles.checkedLabel 
                      : styles.unCheckedLabel
                    }
                    >
                    <input type="radio" name="radio" value="limit" checked={type === "limit"} onChange={onTypeChange} />
                    Limit
                  </label>
                </div>

                <button type="submit" className={styles.submitBtn}>Place Order</button>
              </form>
            </div>
            <div className={styles.productData}>
              <figure className={styles.image}>
                <Image 
                  src="/assets/product-images/tesla.png"
                  alt='tesla'
                  height={40}
                  width={40}
                />
              </figure>
              <ul>
                <li>Bid Price: <span>12.12</span></li>
                <li>Ask Price: <span>12.23</span></li>
                <li>Max Price Shift: <span>1.00</span></li>
                <li>Last Traded Price: <span>0.21</span></li>
                <li>Sell Limit: <span>5000</span></li>
                <li>Buy Limit: <span>10000</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
