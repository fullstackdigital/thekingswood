/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const users = [
    {
      slug: 'donna',
      name: 'Donna Hingston',
      title: 'Owner / Director',
      email: 'donna@thekingswood.com.au',
      mobileLink: '+61400781310',
      mobileDisplay: '0400 781 310',
    },
    {
      slug: 'sally',
      name: 'Sally Thomas',
      title: 'Owner / Director',
      email: 'sally@thekingswood.com.au',
      mobileLink: '+61406751200',
      mobileDisplay: '0406 751 200',
    },
    {
      slug: 'chef',
      name: 'Tim Smith',
      title: 'Head Chef',
      email: 'chef@thekingswood.com.au',
      mobileLink: '+628113864034',
      mobileDisplay: '+62 811 386 4034',
    },
    {
      slug: 'tim',
      name: 'Tim Hingston',
      title: 'CTO',
      email: 'tim@thekingswood.com.au',
      mobileLink: '+61407123030',
      mobileDisplay: '0407 123 030',
    },
  ]
  return new Promise((resolve, reject) => {
    const signature = path.resolve(`src/templates/signature.js`)
    // Create blog post pages.
    users.forEach(user => {
      createPage({
        path: `signature/${user.slug}`,
        component: signature,
        context: {
          user,
        },
      })
    })
    resolve()
  })
}
