import React from 'react'

const Food = () => (
  <div id="food" className="section">
    <h2>Food</h2>
    <div className="text">
      Our menu offers a wide range of dishes and is designed for sharing. Choose
      from bar bites, share plates, or larger meals to suit your appetite. The
      menu is energetic and always changing, including plenty of options for
      vegetarians, vegans, and gluten free diets. Dishes have a splash of
      Mediterranean sunshine which will pair beautifully with a craft beer or a
      fabulous wine.
      <div className="callout">
        <a
          target="_blank"
          rel="noopener"
          href="/menus/Kingswood_SampleMenu.pdf"
          style={{
            textDecoration: 'underline',
          }}
        >
          sample menu >
        </a>
      </div>
    </div>
  </div>
)

export default Food
