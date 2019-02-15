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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const singlePostTemplate = path.resolve('src/templates/single-post.js');

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

/*
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Page templates
  const templates = {
    post: path.resolve('src/templates/single-post.js'),
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
  `)

  if (res.errors) return Promise.reject(res.errors)

  // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges

  // Create single post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
      },
    })
  })
}*/