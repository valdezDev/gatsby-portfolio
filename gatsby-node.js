const path = require('path');
const { slugify } = require('./src/util/utilityFunctions');

exports.onCreateNode = ({ node, actions }) => {
  
  const { createNodeField } = actions;
  
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  };
};

exports.createPages = ({ actions, graphql }) => { // plural pages?
  const { createPage } = actions;
  const singlePostTemplate = path.resolve('./src/templates/single-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: singlePostTemplate,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug
        }
      })
    })
  })
};