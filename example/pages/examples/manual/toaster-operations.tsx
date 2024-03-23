import { ExampleWrapper } from "components/ExampleWrapper"
import { options } from "config/use-cardano-options"
import styles from "styles/example.module.css"
import { CardanoWalletSelector, useCardano } from "use-cardano"

const ManualToasterOperationsExample = () => {
  const { hideToaster, showToaster } = useCardano()

  return (
    <>
      <div>
        <CardanoWalletSelector />
      </div>

      <br />

      <div>
        Switch wallet provider and then click the button below to manually hide the toaster.
      </div>

      <br />

      <div>
        <button onClick={hideToaster} className={styles.button}>
          Manually hide toaster
        </button>
      </div>
      <br />

      <div>
        Click the button below to manually open the toaster at any time, displaying the last set
        message.
      </div>

      <br />

      <div>
        <button onClick={() => showToaster()} className={styles.button}>
          Manually show toaster
        </button>
      </div>
    </>
  )
}

const ManualToasterOperationsExamplePage = () => (
  <ExampleWrapper options={{ ...options, allowedNetworks: ["Testnet", "Mainnet"] }}>
    <ManualToasterOperationsExample />
  </ExampleWrapper>
)

export default ManualToasterOperationsExamplePage
