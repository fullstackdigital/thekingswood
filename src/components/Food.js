import React from 'react'

const Food = () => (
  <div id="food" className="section">
    <h2>Food</h2>
    <div className="text">
      At lunch, expect a top sambo, smattering of share plates, or a plat du
      jour. Or if you are heading to the park, grab a picnic box full of goodies
      on the way. Dinner will offer a wider range of dishes and a creative
      combination of happy snacks and sweet endings. The menu is energetic and
      always changing, including plenty of options for vegetarians, vegans, and
      gluten free diets.
      <div className="callout">
        <a
          target="_blank"
          rel="noopener"
          href="/menus/Kingswood_SampleDinnerMenu.pdf"
          style={{
            textDecoration: 'underline',
          }}
        >
          sample dinner menu >
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="/menus/Kingswood_SampleLunchMenu.pdf"
          style={{ marginLeft: '1rem', textDecoration: 'underline' }}
        >
          sample lunch menu >
        </a>
      </div>
    </div>
  </div>
)

export default Food
