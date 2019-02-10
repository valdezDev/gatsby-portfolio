const path = require('path')
const { slugify } = require('./src/util/utilityFunctions')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Page templates
  const templates = {
    project: path.resolve('src/templates/single-project.js'),
    //postList: path.resolve('src/templates/post-list.js'),
    //tag: path.resolve('src/templates/tag-posts.js'),
    //tagsPage: path.resolve('src/templates/tags-page.js'),
    //authorPosts: path.resolve('src/templates/author-posts.js'),
  }

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.errors) return Promise.reject(res.errors)

  // Extracting all projects from res
  const projects = res.data.allMarkdownRemark.edges

  // Create single project pages
  projects.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.project,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
      },
    })
  })
}