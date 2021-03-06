import useTranslation from 'next-translate/useTranslation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { useState } from 'react';

export default function generateSection({ codeBox, urcode, generateUrcode }) {
  const [copied, setCopy] = useState(false);
  let { t } = useTranslation()

  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <button type="button" className="nes-btn"
        style={{ marginBottom: 20, width: '25%', marginRight: 'auto', marginLeft: 'auto' }} onClick={() => generateUrcode()}>
        {t("docs:Generate")}
      </button>
      {
        codeBox ?
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="nes-balloon nes-pointer" style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', flexDirection: 'row' }}>
              {urcode}
            </p>
            <CopyToClipboard text={urcode.join(' ')}>
            <button type="button" className={copied ? "nes-btn is-success" : "nes-btn" } onClick={() => setCopy(true)}
              style={{ marginBottom: 20, width: '25%', marginRight: 'auto', marginLeft: 'auto' }}>{t("docs:Copy")}</button>
            </CopyToClipboard>            
          </div>
          :
          null
      }

    </section>
  )
}